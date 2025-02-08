//Calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);//Ugradjena funkcija za digitron
    }
    catch(error){
        display.value = "Error";// Uslucaju da funkcija prikaze error uhvati je i ispisi sledecu poruku
    }
}