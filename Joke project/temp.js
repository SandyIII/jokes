

const inserts= document.getElementById('insert');
const result= document.getElementById("result");
const options = document.getElementById("option");
debugger
 function calculateTemp(){
 const ret =options[options.selectedIndex].value=="Celsius"? (input*9/5)+32: 120;
 
 console.log(inserts.value);
console.log(options.selectedIndex);

result.innerHTML=ret;
}

//tempc.addEventListener('submit', calculateTemp);