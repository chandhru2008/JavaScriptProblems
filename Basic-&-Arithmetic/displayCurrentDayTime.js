function displayCurrentDayTime() {
    const currentTime = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = days[currentTime.getDay()];
    let currentHours = currentTime.getHours();
    let AMOrPM ;
    if (currentHours > 12) {
        currentHours = currentHours % 12;
        AMOrPM = "PM"
    } else if (currentHours == 12) {
        currentHours = 0
        AMOrPM = 'AM'
    }
    let minutes = currentTime.getMinutes();
    console.log("Today is", currentDay)
    console.log("Current time", currentHours, ":", minutes,AMOrPM)
}
displayCurrentDayTime();


