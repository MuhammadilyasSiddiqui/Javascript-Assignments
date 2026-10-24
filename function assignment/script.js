//1.ALERT FUNCTION
// function showalert () {
// alert ("Welcome To My Js Assignment");
//  }
//  console.log (alert);
alert("Hello and welcome");
// 2.Variables
function showVariables() {
    let name = "Ilyas";
    var city = "Karachi";
    document.write("<b>Variables:</b> " + name + ", " + city + "<br><br>");
}
showVariables();
// 3. PROMPT FUNCTION
function askName() {
    let userName = prompt("Apna naam likhein:");
    document.write("Hello " + userName + "<br><br>");
}
askName();
// 4. ARRAY FUNCTION
function showArray() {
    let fruits = ["Apple", "Mango", "Banana", "Orange"];
    document.write("<b>Array:</b> " + fruits + "<br><br>");
}
    showArray();
    // 5.Conditions / statement
// function showcondition() {
// let a = 5;
// if (a == 5) {
//     console.log('Values is greater than 5');
// }
// showcondition();

// 6. FOR LOOP FUNCTION
function forLoopExample() {
    document.write("For Loop: ");
 
    let cities = ['Karachi', 'Islamabad', 'Lahore', 10, 20, 50]
// let i = 0;
for (i=0; i<=cities.length; i++) {
    console.log(cities[i]);
}

    document.write("<br><br>");
   
}

forLoopExample();