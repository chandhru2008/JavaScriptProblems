function displayCurrentDate() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear();
    console.log("Date", date + " " + month + " " + year);
}
displayCurrentDate()