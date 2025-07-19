function monthNameFromDate(date){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const split = date.split("-");
    return month[Number(split[1])-1]
}

console.log(monthNameFromDate("2025-07-07"))