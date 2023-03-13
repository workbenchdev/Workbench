using Gtk;

public class DatePicker : Window {
    public DatePicker() {
        // Set up window properties
        this.title = "Date Picker";
        this.window_position = WindowPosition.CENTER;
        this.border_width = 10;
        this.set_default_size(300, 200);
        this.destroy.connect(Gtk.main_quit);

        // Create date picker
        var datePicker = new Calendar();
        datePicker.set_size_request(250, 200);

        // Create apply button
        var applyButton = new Button.with_label("Apply");
        applyButton.clicked.connect(() => {
            var selectedDate = datePicker.get_date();
            var messageDialog = new MessageDialog(this, 
                DialogFlags.MODAL, 
                MessageType.INFO, 
                ButtonsType.OK, 
                $"Selected date: {selectedDate.day}-{selectedDate.month}-{selectedDate.year}"
            );
            messageDialog.run();
            messageDialog.destroy();
        });

        // Add widgets to grid
        var grid = new Grid();
        grid.column_homogeneous = true;
        grid.attach(datePicker, 0, 0, 2, 1);
        grid.attach(applyButton, 1, 1, 1, 1);

        // Add grid to window
        this.add(grid);
        this.show_all();
    }

    public static int main(string[] args) {
        Gtk.init(ref args);
        var window = new DatePicker();
        Gtk.main();
        return 0;
    }
}
