function giveDate() {
    document.getElementById('demo').innerHTML = Date();
}
function sayHello() {
    document.getElementById('demo').innerHTML = 'Hello World';
}
function sum(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var total = num1 + num2;
    document.getElementById('sum').innerHTML = total.toString();
}
function hide(){
    var x = document.getElementById('watching');
    if(x.style.visibility === "visible"){
       x.style.visibility = "hidden";
        document.getElementById('hide').innerHTML = "Show Me";
    }
    else{
        x.style.visibility = "visible";
        document.getElementById('hide').innerHTML = "Hide Me";
    }
}
function giveGrade(){
    var percent = document.getElementById('percent').value;
    if(percent >=90){
       document.getElementById('grade').innerHTML = "A";
    }
    else if(percent >=80){
         document.getElementById('grade').innerHTML = "B";   
    }
    else if(percent >=70){
         document.getElementById('grade').innerHTML = "C";   
    }
    else if(percent >=60){
         document.getElementById('grade').innerHTML = "D";   
    }
    else{
        document.getElementById('grade').innerHTML = "E";
    }
}