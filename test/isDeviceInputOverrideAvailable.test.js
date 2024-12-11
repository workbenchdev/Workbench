import "../src/init.js";

import tst, { assert } from "../troll/tst/tst.js";

import { isDeviceInputOverrideAvailable } from "../src/flatpak.js";

const test = tst("isDeviceInputOverrideAvailable");

test("returns a boolean", () => {
  assert.equal(typeof isDeviceInputOverrideAvailable(), "boolean");
});

test("returns true if Flatpak version is equal to 1.15.6", () => {
  assert.equal(isDeviceInputOverrideAvailable("1.15.6"), true);
});

test("returns true if Flatpak version is higher than 1.15.6", () => {
  assert.equal(isDeviceInputOverrideAvailable("1.15.7"), true);
  assert.equal(isDeviceInputOverrideAvailable("1.16.5"), true);
  assert.equal(isDeviceInputOverrideAvailable("2.15.4"), true);
});

test("returns false if Flatpak version is lower than 1.15.6", () => {
  assert.equal(isDeviceInputOverrideAvailable("1.15.5"), false);
  assert.equal(isDeviceInputOverrideAvailable("1.14.7"), false);
  assert.equal(isDeviceInputOverrideAvailable("0.16.7"), false);
});

export default test;
