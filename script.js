
const form = document.getElementById('formContacts');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNameContact= document.getElementById('nameContact');
    const inputNumberContact= document.getElementById('numberContact');

    
    if(nomes.includes(inputNameContact.value)) {
        alert(`O contato ${inputNameContact.value} ja foi inserido!`);
    } else {

        nomes.push(inputNameContact.value);
        numeros.push(parseInt(inputNumberContact.value));
    
    let linha = "<tr>";
    linha += `<td>${inputNameContact.value}</td>`;
    linha += `<td>${inputNumberContact.value}</td>`;
    linha += "</tr>";

    linhas += linha;
    }

    inputNameContact.value ='';
    inputNumberContact.value='';
});

