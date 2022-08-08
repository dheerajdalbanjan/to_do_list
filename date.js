 
module.exports.date = getDate ;
module.exports.day = getDay ;

 function getDate(){
    var date = new Date();
    let day = "";
    var options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    }
    day = date.toLocaleDateString("en-US" , options);
    return day  ;
 }

 function getDay(){
    var date = new Date();
    let day = "";
    var options = {
        weekday: 'long'
    }
    day = date.toLocaleDateString("en-US" , options);
    return day ; 
 }