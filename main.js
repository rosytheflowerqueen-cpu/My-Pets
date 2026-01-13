let myname="Dog";
alert("Welcome to my Website");
console.log("Hi this message is printed on the console screen");
function shownname(){
    alert("Hi my favorte animal is " + myname);
}
function Sunny(){
    document.getElementById("img1").src="https://iili.io/fv1Fmhv.jpg";
}
function Surfers(){
    document.getElementById("para").textContent="A dog's nose is 40times stronger than a human.";
}

const form=document.getElementById("studentForm");
const table=document.getElementById("resulttable");
form.addEventListener("submit",function(event){
    event.preventDefault(); //Stops refreshing the page
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const subject=document.getElementById("subject").value;
    const row=table.insertRow();
    row.insertCell(0).innerHTML=name;
    row.insertCell(1).innerHTML=age;
    row.insertCell(2).innerHTML=subject;
    form.reset();
})