

const inserts= document.getElementById('insert');
const result= document.getElementById("result");
const options = document.getElementById("option");
const tempc = document.getElementById("tempc");
debugger
const calculateTemp=()=>{
 //option===("celsiuis")?(input*9/5)+32: 10;

 console.log(inserts.value);
console.log(options.selectedIndex);

result.innerHTML=10;
}

tempc.addEventListener('click', calculateTemp);