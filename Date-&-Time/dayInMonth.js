function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

daysInMonth(7,2009); 
daysInMonth(2,2009); 
daysInMonth(2,2008);