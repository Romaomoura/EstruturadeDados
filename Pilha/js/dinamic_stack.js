class DinamicStack { // criando a classe Pilha dinamica

    constructor() { // criando o construtor da classe
        this.top = null; // criancao da variavel top recebendo nulo inicialmente
        this.length = 0; // criancao da variavel length (tamanho) recebendo 0 inicialmente
    }

    push(element) { // implementando o metodo push (enpurrar elementos)
        let node  = new Node(element); //criando na variavel local node do tipo Node recebendo o elemento
        if (!this.isEmpty()) {//condição para verificação 
            node.next = this.top; // node recebe proximo elemento do top
        }
        this.top = node; // top recebe node
        this.length++;// length recebe length mais o proximo elemento
    }

    pop() {// implementação do metodo pop ( remover elementos do array)
        if(this.isEmpty()) //condição para verificação 
            return null;
        let diedNode = this.top;// criaçaõ de variavel local (diedNode) recebendo topo (top)
        this.top = this.top.next;//topo (top) recebe proximo topo (top.next)
        diedNode.next = null; // variavel local recebe proximo, nulo sendo atribuido
        this.length--; // length decrementado
        return diedNode.content;// retonando o conteudo diedNode
    }

    peek() {// implementação do metodo peek (desempilhando elementos do array)
        return this.length-1; // tamanho do array -1 é retornado
    }

    isEmpty() { // implementação do metodo isEmpty (array vazio)
        return this.top===null; // valor retornado caso o topo (top) seja nulo
    }

    size() {// implementando o metodo size (tamanho do array)
        return this.length;//retornando o tamanho do array
    }

    clear() { // implementando o metodo clear (limpar o array)
        this.top=null ; //topo (top) recebe nulo
        this.length = 0;//comprimento do array recebe 0
    }

    print(separator = ' - ') {// implementação do metodo print(definindo separador do conteudo)
        let text = "", // criação da variavel local recebendo vazio
            current = this.top;// criação da variavel atual (current) recebendo topo (top)
        while (current!==null) {// condição (enquanto atual (current) for diferente de nulo iterar)
            text += current.content + separator;//variavel local text recebe o conteudo atual mais o separador
            current = current.next // atual (current) recebe o proximo atual (current.next)
        }
        return text.substr(0, text.length - separator.length);// valores retornados após cada iteração menos o separado ao final
    }
}