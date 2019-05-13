class LinkedList { // Classe LinkedList criada

    constructor() { // Constructor da classe LinkedList
        this.head = null; // head inicializado com null
        this.length = 0; // length inicializado com 0
    }

    isEmpty() { // isEmpty inicializado sem parâmetros
        return this.head === null; // retorna true se a head for estritamente igual a null e false caso contrário
    }

    append(element) { // append inicializado com o parâmetro element
        let node = new Node(element), // variável node recebe uma nova instância da classe Node passando o parâmetro element para o constructor
            current = this.head; // current recebe a head da lista
        if (this.isEmpty()) { // se isEmpty retornar true (a lista estiver vazia)...
            this.head = node; // a head recebe o node atual
        } else { // se isEmpty retornar false (a lista não está vazia)...
            while (current.next) // enquanto houver um pŕoximo elemento
                current = current.next; // current recebe o próximo elemento
            current.next = node; // o próximo elemento recebe o node atual
        }
        this.length++; // o tamanho da lista aumenta em 1
    }

    show(separator = ", ") { // show inicializado com o parâmetro separator, que recebe ", " por padrão
        let current = this.head, // a variável current recebe a head atual
            output = ''; // a variável output recebe ''
        if (current != null) { // se current for diferente de null, ou seja, a lista tem no mínimo um elemento...
            output += current.content; // output recebe '' concatenado com o conteúdo de current, o que faz com que o valor passe a ser string
            while (current.next) { // enquanto houver um pŕoximo elemento
                current = current.next; // current recebe o próximo elemento
                output += separator + current.content;  // output recebe o separador e o current content, alinhando todos os valores da lista separados pelo separador
            }
        }
        return output; // retorna output
    }

    insert(position, element) { // insert iinicializado com os parâmetros position e element
        if (position > -1 && position <= this.size()) { // se position for maior que -1 e menor ou igual a o tamanho da lista...
            let node = new Node(element), // variável node recebe uma nova instância da classe Node passando o parâmetro element para o constructor
                current = this.head, // a variável current recebe a head atual
                previous = null, // a variável previous recebe null
                index=0; // a variável index recebe 0
            if (position==0) { // Se position for igual a 0...
                node.next = this.head; // o próximo node recebe a head atual
                this.head = node; // a head atual recebe o node, assim, a head passa a ser o novo node
            } else { // se position for diferente de 0...
                while(index<position){ // enquanto index for menor que position
                    index++; // index é aumentado em 1
                    previous=current; // previous recebe current
                    current=current.next; // current recebe o próximo valor da lista, assim a lista é percorrida
                }
                node.next=current; // após percorrer a lista e encontrar a posição, o próximo node recebe current
                previous.next=node; // e previous.next recebe node
            }
            this.length++; // o tamanho da lista é aumentado em um
            return true; // é retornado true
        }
        return false; // caso a position passada esteja fora da lista, retorna-se false
    }

    removeAt(position) { // removeAt inicializado com o parâmetro position
        if (position > -1 && position < this.size()) { // se position for maior que -1 e menor que o tamanho da lista...
            let current = this.head, // a variável current recebe a head atual
                previous = null, // a variável previous recebe null
                index = 0; // a variável index recebe 0
            if(position===0){ // se position for estritamente igual a 0...
                this.head = current.next; // a head atual recebe o próximo node
            }else{ // se position for diferente de 0...
                while (index < position) { // enquanto index for menor que position...
                    index++; // index é aumentado em um
                    previous = current; // previous recebe current
                    current = current.next; // current recebe o próximo, assim a lista é percorrida
                }
                previous.next = current.next; // previous.next recebe current.next, assim current é apagado
            }
            current.next = null // current.next recebe null
            this.length--; // o tamanho da lista é reduzido em um
            return current.content; // current.content é retornado
        }
        return null; // caso a position passada esteja fora da lista, retorna-se null
    }

    remove(element) { // remove inicializado com o parâmetro element
       let index = this.indexOf(element); // variável index recebe o index do elemento passado
       return this.removeAt(index); // é retornada a função removeAt que retorna o elemento apagado
    }

    indexOf(element) { // indexOf inicializado com o parâmetro elemento
        let current = this.head, // a variável current recebe a head atual
            index = 0; // a variável index recebe 0
        while(current!==null){ // enquanto current for estritamente diferente de null...
            if(current.content===element) { // se current.content for estritamente igual a element...
                return index; // o index é retornado
            }
            index++ // index é aumentado em um
            current = current.next; // current recebe current.next, assim a lista é percorrida
        }
        return -1; // caso o elemento não seja encontrado, retorna-se -1
    }


    size() { // size inicializado sem parâmetros
        return this.length; // retorna o tamanho da lista
    }

    getElement(position) { // getElement inicializado com o parâmetro position
        if(position<0 && position>=this.length) // se position for menor que 0 e maior ou igual ao tamanho da lista...
            return null; // retorna-se null
        let current = this.head, // a variável current recebe a head atual
            index = 0; // a variável index recebe 0
        while (current !== null) { // enquanto current for estritamente diferente de null...
            if (index === position) { // se o index for estritamente igual a posição...
                return current.content; // é retornado current.content
            }
            index++ // index é aumentado em um
            current = current.next; // current recebe current.next, assim a lista é percorrida
        }
    }

    search(value) { // search inicializado com o parâmetro value
        return this.indexOf(value)>=0; // retorna true se o elemento existe na lista, e false caso contrário
    }

}