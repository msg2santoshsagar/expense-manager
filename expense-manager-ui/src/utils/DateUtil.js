export function todayDateForDatePicker() {

    var date = new Date();

    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();

    if(monthIndex < 9){
        monthIndex = '0'+monthIndex;
    }

    if(day < 9){
        day = '0'+day;
    }

    return year + "-" + monthIndex + "-" + day;

}