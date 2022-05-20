window.addEventListener('load', function() {
  document.getElementById("hello").innerHTML = "Hello Bitvh";
    
})

//Add your code above this comment
//do not modify anything beneath this 
//comment
function getCurrentTime() {
    const currentDateTime = new Date();
    const currentMinute = (currentDateTime.getHours() < 10 ? '0' : '') + currentDateTime.getHours();
    const currentHour = (currentDateTime.getMinutes() < 10 ? '0' : '') + currentDateTime.getMinutes();
    const currentSecond = (currentDateTime.getSeconds() < 10? '0' : '') + currentDateTime.getSeconds();
    const currentTimeAsString = currentMinute + ":" + currentHour + ":" + currentSecond;
    return currentTimeAsString;
}
