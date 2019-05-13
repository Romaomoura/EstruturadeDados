//github.com/samuelclerod/FilaJS
var queue = new DynamicQueue(); // A variável queue recebe uma nova instância de DynamicQueue
$().ready(function() {// Acontece uma ação para cada botão pressionado, dependendo do seu id

    $('#enqueue').on('click', enqueueElement);
    $('#item').keydown(function(e) { // Verifica se o enter do teclado foi pressionado
        if (e.which == 13) enqueueElement();
    });
    $('#dequeue').on('click', dequeueElement);
    $('#clear').on('click', clearQueue);
});

function enqueueElement() { // Adiciona um valor no final da fila
    var item = $('#item').val(); // Variável item recebe o valor que foi adicionado na tag <input>
    if (item) { // Verifica se item não é vazio
        queue.enqueue(item); // Adiciona o valor de item no final da fila
        $('#item').val('');// Muda o valor da tag <input> para vazia
        showQueue(); // Mostra a fila atualizada com o novo valor
    }
}

function dequeueElement() { // Retira o valor de indice 0 da fila(o primeiro valor a entrar na fila)
    if (queue.isEmpty() == false) { // Verifica se a fila está vazia
        alert('Foi removido o elemento ' + queue.dequeue()); // Remove o valor de indice 0 da fila e alerta ao 'usuário'
        showQueue();// Mostra a fila atualizada
    } else {
        alert('Fila Vazia');// Alerta que a fila está vazia ao 'usuário'
    }
}

function clearQueue() { // Limpa a fila, tornando-a vazia
    queue.clear();// Limpa a fila 
    showQueue();// Mostra a fila atualizada
    $('#item').val('');// Muda o valor da tag <input> para vazia
}

function showQueue() { // Mostra a fila atualizada
    $('#output').empty();// Esvazia o valor da tag <span> com id de output
    $('#output').append('<div class="ui label">' +
        queue.print('</div><div class="ui label">') + '</div></div>');// Adiciona um novo valor a tag <span> aumentando em 1 indice a fila
}