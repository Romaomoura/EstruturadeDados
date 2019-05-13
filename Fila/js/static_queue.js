class StaticQueue{
    constructor(){ // Construtor da classe StaticQueu
        this.data = []; // Objeto ao ser instanciado recebe um array vazio
    }
    enqueue(element) { // Método enqueue inicializado com o parâmetro element
        this.data.push(element); // Adiciona um elemento no final do array
    }
    dequeue(){ // Método denqueue inicializado sem parâmetros
        return this.data.shift(); // retira o valor do indice zero e realoca o valor do indice 1 para o 0, após retorna um array com os novos valores
    }
    front() { // Método front inicializado sem parâmetros
        return this.data[0]; // Retorna o valor de indice 0
    }
    back(){ // Método back inicializado sem parâmetros 
        return this.data[this.data.length-1]; // Retorna o ultimo valor do array, no caso, o de maior indice
    }
    isEmpty() { // Método isEmpty inicializado sem parâmetros
        return (this.data.length===0); // Retorna True ou False, verificando se o array é vazio ou não
    }
    size() { // Método size inicializado sem parâmetros
        return this.data.length; // Retorna o tamanho do array
    }
    clear() { // Método clear inicializado sem parâmetros
        this.data = [];// Esvazia todo o array e retorna-o
    }
    print(separator=" - ") { // Método print inicializado com parâmetro separator, que recebe " - " por padrão
        return this.data.join(separator); // Retorna o array com o separator. Ex: [1 - 2 - 3...]
    }
}