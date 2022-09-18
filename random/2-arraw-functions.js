const event = {
    name: 'Yash Vaibhav',
    printGuestList: function() {
        debugger
        console.log('Happy Birthday',this.name);
    },
    printMyName: () => {
        console.log(this.name);
    }
}
event.printGuestList();
event.printMyName();