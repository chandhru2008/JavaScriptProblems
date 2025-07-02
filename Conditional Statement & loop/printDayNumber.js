function printDayNumbers() {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[date.getDay()];
    console.log('Today is , ' + currentDay);
    console.log('Day in number ,' , date.getDay() + 1)
}
printDayNumbers();