//Exercício 1
//FizzBuzz
//Divisivel por 3 => 'Fizz',
//Divisivel por 5 => 'Buzz',
//Divisivel por 3 e 5 => 'FizzBuzz',
//Se não for um número => 'Não é um número'
//Se não for divisível nem por 3 e nem 5 => Entrada


//let resultado = fizzBuzz(20);
//console.log(resultado)
//
function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
}


//-------------------------------------------

//Exercício 2
//Reverse string

let newStr = '';

function reverseAString(str){
    for (let i = str.length -1; i >= 0; i--){
        newStr += str[i];
    }
    console.log(newStr);
}

let resultado = reverseAString('Hello Gama Academy')

//-------------------------------------------

//Exercício 3
//Convert Celsius to Fahrenheit
function convertToFahrenheit(value){
    return value *1.8 + 32
}

let result = convertToFahrenheit(40)
console.log(`O valor em Farenheit é: ${result}`)


//-------------------------------------------

//Exerício 4
//To Do List

const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = newListInput.value 
    if (listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name){
    return {id: Date.now().toString(), name: name }
}

function render(){
    clearElement(listContainer)
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clearElement(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}




render()


















