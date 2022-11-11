console.log("Olá Mundo")
console.log(2 + 2)
console.log(2 * 2)
console.log(10 / 2)
console.log(10 - 2)
/* comentario de 
varias linhas */

// comentario de uma linha//

/*variaveis*/

/* - váriavel é um espaço reservado na memória para armazenar
um valor
- toda variavel tem um nome e um tipo*/

let nome = 'Davi'
let idade = 18
let nota1 = 10
let fumante = true

//nome

console.log(nome);
console.log(idade, nota1, fumante)
console.log('Sua nota é ' + nota1)

/* Tipos */
console.log(typeof nome) // 'Davi' é string
console.log(typeof idade) // 18 é number
console.log(typeof nota1) // 10 é number
console.log(typeof fumante) // true é boolean

let veiculos = ('carro', 'moto', 'avião')
console.log(veiculos)
console.log(typeof veiculos)

let cliente = {
    nome: 'ryan',
    idade: 20
}
console.log(cliente)
console.log(typeof cliente)

let salvar = function () {

}
console.log(typeof salvar)

/* operadores relacionais */
console.log(10 > 3) // maior
console.log(5 < 3) // menor
console.log(15 >= 10) //maior ou igual
console.log(15 <= 10) //maior ou igual
console.log(10 == 10)//igual
console.log(10 != 10)//diferente 

/* operadores lógicos */
console.log('========')
console.log(10 > 3 && 10 > 5)//Operador e (AND) - com Operador e todas as expressão devem ser verdadeiras para o resultado ser verdadeiro

console.log(10 > 3 || 10 > 15) /* operador OU (OR)- com operador OU apenas uma
 expressão precisa ser verdadeira para o resultado ser verdadeiro*/

console.log(!10 > 3)/* Operador NÃO(NOT)-o operador NOT iverter o resultado da expressão, se for falso ele iverte para o 
verdadeiro se for verdadeiro ele iverte para falso, e se for verdadeiro ele inverte para falso e se for falso ele inverte para verdadeiro*/

//alert("Olá mundo")
//document.write("<h3>Olá mundo</h3>")



function Rosa() {
    //inserir um valor em um elemento da página
    document.getElementById('titulo').ineerHTML = 'aula 02 de js'
    document.getElementById('texto').innerHTML = 'vamos estudar interação com DOM'

    document.body.style.backgroundColor = 'violet'
    document.body.style.color = 'white'

    document.getElementById('titulo').style.color = 'yellow'

    //pagar o valor de um elemento da página
    let titulo = document.getElementById('titulo').inn7erHTML

    console.log(titulo)

}

function Laranja() {

    document.body.style.backgroundColor = 'orangered'
    document.body.style.color = 'lihtblue'
}






