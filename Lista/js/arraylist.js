class ArrayList{ // Classe ArrayList criada

    constructor(){ // constructor da classe ArrayList
        this.data = []; // data inicializada como array []
    }

    show (separator=', '){ // método show inicializado com o parâmetro separator (que tem padrão como '')
        return this.data.join(separator); // retorna a lista com separador. Ex: [1, 2, 3, 4...]
    }
    
    append(element){ // metódo append inicializado com o parâmetro element
        this.data.push(element); // método adiciona o parâmetro passado (element), 
    }

    insert(position, element){ // método insert inicializado com os parâmetros position e element 
        if(position>-1 && position<=this.size())
            this.data.splice(position,0,element);
    }
    
    removeAt(position){ // removeAt inicializado com os parâmetros position
        if (position > -1 && position < this.size()) // Se position for maior que -1 e menor que o tamanho (length) da lista...
            this.data.splice(position,1); // deleta um elemento a partir do position, sendo esse elemento, o que se encontra na posição position
    }
    
    remove(element){ // remove inicializado com o parâmetro element
        let index = this.indexOf(element); // retorna o index do elemento passado como parâmetro, e guarda na variável index
        this.removeAt(index); // chama o método removeAt passando o index do que se deseja remover
    }
    
    indexOf(element){ // indexOf inicializado com o parâmetro element
        for (let index = 0; index < this.data.length; index++) // bloco de repetição for com base na variável index. Irá executar até que index seja a última posição da lista
            if(element===this.data[index])  // se elemento for igual ao valor do elemento presente em this.data[index]...
                return index; // index é retornado
        return -1; // retorna -1 caso o método não encontre o elemento na lista
    }
    
    isEmpty(){ // isEmpty inicializado sem parâmetros
        return this.size()===0; // retorna true or false se baseando no teste: se o tamanho da lista for igual a 0...
    }
    
    size(){ // size inicializado sem parâmetros
        return this.data.length; // retorna o tamanho da lista
    }
    
    getElement(position){ // getElement incializado com o parâmetro position
        if (position >= 0 && position < this.size()) // se position maior ou igual a 0, e position menor que o tamanho da lista...
            return this.data[position]; // retorna o elemento presente em this.data[position], baseado no teste acima.
        return null; // retorna null caso não encontre o elemento.
    }

    search(value){ // search inicializado com o parâmetro value
        return this.data.some((n)=> n===value) // retorna true ou false caso value seja igual a algum dos elementos da lista
    }
}