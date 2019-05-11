var list = new LinkedList(); // a variável list recebe uma nova instância de LinkedList

$().ready( () => { // adiciona functions aos botões no HTML via id
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
});

function showData(){ // lista os elementos da lista dentro de divs com a classe ui label
    let text = `<div class="ui label">
                    ${list.show('</div><div class="ui label">')}
                </div>` // texto é "setado"
    let out = $('#output');
    out.empty() // div com id output é esvaziada
    out.append(text) // text é adicionado dentro da div com id output
}

function insertElement(){ // insere elementos na lista
    let val = parseInt(prompt('digite um valor a ser inserido:')); // recebe o elemento
    if (list.search(val)){ // verifica se o elemento já existe na lista e impede que este seja adicionado
         alert("valor já inserido")
        }else{ // adiciona o valor na lista e mostra a lista atualizada
            list.append(val); 
        showData();
    }
}

function insertElementAt(){ // insere um elemento em determinada posição
    let val = parseInt(prompt('digite um valor a ser inserido:')); // recebe o elemento
    if (list.search(val)){ // verifica se ele já existe na lista e impede que este seja adicionado
        alert("valor já inserido")
   }else{
        let pos = parseInt(prompt('digite uma posição a inserir:')); // recebe o index
        list.insert(pos, val); // insere o elemento na lista no index recebido
        showData(); // mostra a lista atualizada
   }
}

function removeElement(){ // remove um elemento da lista
    let val = parseInt(prompt('digite um valor a ser removido:')); // recebe o elemento a ser removido
    let rm = list.remove(val); // remove o elemento da lista
    if (rm) alert(`Foi removido o valor ${rm}`)
    showData(); // mostra lista atualizada
}

function removeElementAt(){ // remove elemento em determinada posição
    let pos = parseInt(prompt('digite uma posição a remover:')); // recebe a posição 
    let rm = list.removeAt(pos) // remove elemento na posição recebida
    if (rm) alert(`Foi removido o valor ${rm}`) // se foi possível remover, um alert é acionado
    showData(); // mostra lista atualizada
}