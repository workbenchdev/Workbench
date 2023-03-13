const {GObject, Gtk} = imports.gi;

const DatePickerDemo = GObject.registerClass({
  GTypeName: 'DatePickerDemo'
}, class DatePickerDemo extends Gtk.ApplicationWindow {

  _init() {
    super._init({title: 'Date Picker Demo'});

    this.datepicker = new Gtk.DatePicker();
    this.add(this.datepicker);

    this.datepicker.connect('date-changed', this._onDateChanged.bind(this));
  }

  _onDateChanged() {
    const date = this.datepicker.date;
    const [year, month, day] = date.toArray();
    const formattedDate = `${year}-${month}-${day}`;
    log(`Selected date: ${formattedDate}`);
  }
});

function main() {
  const app = new DatePickerDemo();
  app.connect('activate', () => app.present());
  app.run([]);
}

main();
