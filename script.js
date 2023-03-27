const form = document.getElementById ('formContacts')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNameContact= document.getElementById('nameContact');
    const inputnumberContact= document.getElementById('numberContact');
}); 


























































/*const form = document.getElementById('formContacts');
const contacts = [];
const numbers = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});             


function adicionaLinha (){
    const inputNameContact= document.getElementById('nameContact');
    const inputNumberContact= document.getElementById('numberContact');

    if(contacts.includes(inputNameContact.value)) {
        alert(`O contato ${inputNameContact.value} ja foi inserido!`)
    } else {

        contacts.push(inputNameContact.value);
        numbers.push(parseFloat(inputNumberContact.value));
    
    let linha = "<tr>";
    linha += `<td>${inputNameContact.value}</td>`;
    linha += `<td>${inputNumberContact.value}</td>`;
    linha += `<td>${inputNumberContact.value >= 11 ? 'Numero correto' : 'Numero incorreto'}</td>`;
    linha += "</tr>";

    linhas += linha;
    }

    inputNomeAtividade.value ='';
    inputNotaAtividade.value='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
*/
