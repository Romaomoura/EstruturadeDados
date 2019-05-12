class DynamicQueue{ // Classe DynamicQueu criada
    constructor(){ // Construtor da classe DynamicQueu
        this.head = null; // Atributo head inicializado com null
        this.tail = null; // Atributo tail inicializado com null
        this.length = 0; // Atributo length inicializado com 0
    }

    enqueue(element) { // Método enqueue inicializado com parâmetro element
        let node = new Node(element); // A variável node recebe uma nova instância da classe Node passando o parâmetro element para o constructor
        if(this.isEmpty()){ // Verifica se o objeto instanciado por DynamicQueue está vazio
            this.head=node; // Adiciona o objeto node no topo do array
        }else{
            this.tail.next = node; // adiciona o objeto node ao próximo atributo de tail
        }
        this.tail = node; // Atributo tail recebe o objeto node 
        this.length++; // O tamanho do array aumenta em 1
    }

    dequeue(){ // Método dequeue incializado sem parâmetro
        let deadElement = null; // Váriavel deadElement incializada com null
        if(this.length===1){ // Verifica se o atributo lenght é igual a zero
            deadElement = this.tail.content; // Variável deadElement recebe o conteúdo do atributo tail
            this.clear(); // Esvazia todo o array
        }else if(this.length>1){ // Verifica se o tamanho do array é maior que 1
            let deadNode = this.head; // Inicializa a variável deadNode com o valor do atributo head
            this.head = this.head.next; // O atual atributo head recebe o próximo valor dele mesmo
            deadNode.next = null; // Próximo valor de deadNode recebe null
            deadElement = deadNode.content; // DeadElement recebe o conteúdo de deadNode
            this.length--; // O tamanho do array diminui em 1
        }
        return deadElement; // Retorna a variável deadElement
    }
    front() { // Método front inicializado sem parâmetros
        return this.head.content; // Retorna o conteúdo do atributo head
    }
    back() { // Método back inicializado sem parâmetros 
        return this.tail.content; // retorna o conteúdo do atributo tail
    }
    isEmpty() { // Método isEmpty inicializado sem parâmetros
        return this.tail===null; // retorna e verifica se o atributo tail é vazio
    }
    size() { // Método size inicializado sem parâmetros
        return this.length; // Retorna o tamanho do array
    }
    clear() { // Método clear inicializado sem parâmetros
        this.tail= this.head=null; // Atributo tail recebe null, assim como o atributo head
        this.length=0; // O atributo lenght recebe 0, esvaziando todo o array
    }
    print(separator=" - ") { // Método print inicializado com parâmetro separator, que recebe " - " por padrão
        let output = ""; // Variável output inicializado com ""
        for (let node = this.head; node!=null; node = node.next) { // Para cada próximo objeto node diferente de null
            output+=node.content+separator; // output recebe ele mesmo e o conteúdo do objeto node mais o separator
        }
        return output.substr(0, output.length-separator.length); // Retorna os valores do indice zero até o ultimo indice, do array.
    }
}