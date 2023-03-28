
const form = document.getElementById('formContacts');

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNameContact= document.getElementById('nameContact');
    const inputNumberContact= document.getElementById('numberContact');


    let linha = "<tr>";
    linha += `<td>${inputNameContact.value}</td>`;
    linha += `<td>${inputNumberContact.value}</td>`;
    linha += "</tr>";

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value ='';
    inputNotaAtividade.value='';
});             

