class StaticStack { // criando a classe de pilha estatica

    constructor(){ // criando o construtor da classe pilha estatica
        this.data = []; // criando o array data para a pilha
    }
    
    push (element) { // implementando o metodo push (enpurrar elementos)
        this.data.push(element);// array data recebendo o elemento atraves do metodo push
    }

    pop() { // metodo pop ( remover elementos do array)
        return this.data.pop(); // retornando o ultimo elemento do array
    }

    peek() { // implementação do metodo peek (desempilhando elementos do array)
        return this.data.length -1 ; // retornarnado o comprimento array -1 elemento
    }

    isEmpty() { // implementação do metodo isEmpty (array vazio)
        return (this.size()===0);// retornando se o tamanho do array for igual a 0 elementos
    }

    size() {// implementando o metodo size (tamanho do array)
        return this.data.length; // retornando o tamanho do array
    }

    clear() { // implementando o metodo clear (limpar o array)
        this.data = []; // esvaziando o array
    }
    
    print(separator=' - ') {
        /*  Another implementation
        if(this.isEmpty()) return "";
        let text = this.data[this.peek()];
        for (let index = (this.peek()-1); index >= 0; index--) {
            text+=separator+this.data[index];
        }
        return text; 
        */
        let text = ""; // criação da variavel local recebendo vazio
        for (let index = (this.data.length - 1); index >= 0; index--) { // iterando o array
            text += this.data[index] + separator; // a variavel local recebe os elementos da iteração + o separador
        }
        return text.substr(0, text.length - separator.length); // retornando (mostrar) o array com a separação definida no metodo
        // o tamanho do texto é mostrado sem o separador ao final da iteração
    }
}