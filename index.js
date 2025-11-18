const prompt = require("prompt-sync")() 


console.log ("registro de matricula escolar")

let aluno = prompt("nome do aluno")
let nota  = prompt("nota do aluno")
let idade = prompt("idade do aluno")
function calc(nota){
   if (nota >= 6){
    console.log ("pass")
   }
   else{
    console.log("no pass")
   }
}
function idadeNecessaria(idade){
    if (idade < 15){
        console.log ("cadastro nao realizado")
    }
    else{
        console.log ("cadastro realizado")
    }
}
