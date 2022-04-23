import { EventEmitter } from "events";

import Deferred from "./Deferred.js";
import JSONRPCError from "./JSONRPCError.js";

class JSONRPCClient extends EventEmitter {
  constructor(options) {
    super();
    this.deferreds = Object.create(null);
    this.lastId = 0;
  }

  id() {
    return this.lastId++;
  }

  _buildMessage(method, params) {
    if (typeof method !== "string") {
      throw new TypeError(method + " is not a string");
    }

    const message = {
      method,
      "json-rpc": "2.0",
      id: this.id(),
    };

    if (params) Object.assign(message, { params });
    return message;
  }

  async call(method, parameters) {
    const message = this._buildMessage(method, parameters);
    await this._send(message);

    const { promise } = (this.deferreds[message.id] = new Deferred());

    return promise;
  }

  async _send(message) {
    this.emit("output", message);

    const { socket } = this;
    return socket && socket.readyState === 1
      ? this.websocket(message)
      : this.http(message);
  }

  _onresponse({ id, error, result }) {
    const deferred = this.deferreds[id];
    if (!deferred) return;
    if (error) deferred.reject(new JSONRPCError(error));
    else deferred.resolve(result);
    delete this.deferreds[id];
  }

  _onrequest({ method, params }) {
    return this.onrequest(method, params);
  }

  _onnotification({ method, params }) {
    this.emit(method, params);
  }

  _onmessage(message) {
    this.emit("input", message);

    if (Array.isArray(message)) {
      for (const object of message) {
        this._onobject(object);
      }
    } else {
      this._onobject(message);
    }
  }

  _onobject(message) {
    if (message.method === undefined) this._onresponse(message);
    else if (message.id === undefined) this._onnotification(message);
    else this._onrequest(message);
  }
}

export default JSONRPCClient;
