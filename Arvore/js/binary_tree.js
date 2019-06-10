class BinaryTree{ // Classe BinaryTree criada 
    constructor(){ // Construtor da classe BinaryTree
        this.root = null; // inicializa a raiz como nula
    }
    insert(element){ // Implementado o metodo insert (inserir elementos)
        this.root = this.insertNode(this.root, element); // Insere um elemento na árvore
    }
    insertNode(rootNode, value){ // Implementado o metodo inserNode (inserir um nó) e, recebendo o valor
        if (rootNode==null) { 
            return new Node(value); // Se for nulo pede para que seja digitado novamente
        }
        if(value>rootNode.content){
            rootNode.right = this.insertNode(rootNode.right, value); // Se o valor digitado for maior que o nó, insere o elemento na direita
        }else{
            rootNode.left = this.insertNode(rootNode.left, value); // Se o valor digitado for menor que o nó, insere o elemento na esquerda
        }
        return rootNode; // Retorna o nó raiz
    }

   
    search(value) { // Busca o valor na árvore
        return this.searchNode(this.root, value); // Retorna true se o valor já existir na árvore
    }
    searchNode(rootNode, value){ // Busca o nó da árvore (valor)
        if (rootNode == null) return false; // Se o nó for nulo, é retornado false
        if (rootNode.content == value) return true; // Se o valor foi igual ao conteúdo, é retornado true
        if (value > rootNode.content) 
            return this.searchNode(rootNode.right, value); // Vai retornar a procura à direita
        else
            return this.searchNode(rootNode.left, value); // Se não achar à procura do nó pela direita, retorna o da esquerda
    }



    inOrderTraverse(callback){ // A ORDEM DE EXECUÇÃO DEPENDE DA TRAVESSIA (callback)
        this.inOrder(this.root, callback); // Executa a função callback em ordem
    }
    inOrder(rootNode, callback) {
        if (rootNode == null) return; 
        this.inOrder(rootNode.left, callback); // Busca os elementos da esquerda em ordem
        callback(rootNode.content); // Retorna a raiz da árvore
        this.inOrder(rootNode.right, callback); // Busca os elementos da direita em ordem
    }

    
    preOrderTraverse(callback){ // A ORDEM DE EXECUÇÃO DEPENDE DA TRAVESSIA (callback)
        this.preOrder(this.root, callback); // Executa a função callback em pré-ordem
    }
    preOrder(rootNode, callback) {
        if (rootNode == null) return; 
        callback(rootNode.content); // Retorna a raiz da árvore
        this.preOrder(rootNode.left, callback); // Busca os elementos da esquerda em pré-ordem
        this.preOrder(rootNode.right, callback); // Busca os elementos da direita em pré-ordem
    }
    
    
    postOrderTraverse(callback) {  // A ORDEM DE EXECUÇÃO DEPENDE DA TRAVESSIA (callback)
            this.posOrder(this.root, callback); // Executa a função callback em pós-ordem
    }
    posOrder(rootNode, callback) {
        if (rootNode == null) return;
        this.posOrder(rootNode.left, callback); // Busca os elementos da esquerda em pós-ordem
        this.posOrder(rootNode.right, callback); // Busca os elementos da direita em pós-ordem
        callback(rootNode.content); // Retorna a raiz da árvore
    }
    
   
    remove(value){
        this.root = this.removeNode(this.root, value); // Remove um valor existente e o retorna
    }
    removeNode(rootNode, value){
        if(rootNode==null) 
            return null; // Se o valorraiz for nulo, retorna nulo
        if(value==rootNode.content){ // Se o valor for igual do que o conteudo do nó raiz só remove (UMA FOLHA)
            if(rootNode.left===null && rootNode.right===null){
                rootNode = null; // Se o nó da esquerda e direita forem nulo, retorna nulo
            } else if (rootNode.right == null) { 
                rootNode = rootNode.left; // Se não, o nó da direita retorna nulo e mostra o nó da esquerda
            } else if (rootNode.left == null) { 
                rootNode = rootNode.right; // Se não, o nó da esquerda retorna nulo e mostra o nó da direita
            } else{ 
                let i = rootNode.right; 
                while(i.left!=null){
                    i = i.left;   
                }
                i.left = rootNode.left;
                rootNode = rootNode.right;
            }
        }else if(value>rootNode.content){
            rootNode.right = this.removeNode(rootNode.right, value);
        }else{
            rootNode.left = this.removeNode(rootNode.left, value);
        }
        return rootNode;
    }

    
    heigth(){
        return this.heigthNode(this.root); // Exibe a altura da arvore (começa retornando a raiz)    
    }
    heigthNode(node){
        if(node==null)
            return -1; // Se o nó for nulo, recebe -1
        let leftHeigth = this.heigthNode(node.left), // da a altura da esquerda
            rightHeigth = this.heigthNode(node.right); // da a altura da direita
        if(leftHeigth > rightHeigth){
            return 1 + leftHeigth; // se a esquerda é maior que a direita retorna 1+esquerda
        }else{
            return 1 + rightHeigth; // senao a  1+direita
        } 
    }

    size(){
        return this.sumNodes(this.root); // vai retornar a quantidade de nós
    }
    sumNodes(node){
        if(node==null) 
            return 0; // se o nó for nulo retorna 0
        return 1 + this.sumNodes(node.left)+this.sumNodes(node.right); // retorna todos os nós da esquerda + direita (implementação recursiva)
    }

    
    min() {
        let node = this.root; // vai receber a raiz da árvore (let node)
        if (node == null) return null; // se o nó for nulo, retorna nulo
        while (node.left != null)
            node = node.left; // enquanto node.left for diferente de null, node continua recebendo à esquerda
        return node.content; // retorna o menor número
    }

    //exibe o maior valor da arvore
    max() {
        let node = this.root; // vai receber a raiz da árvore (let node)
        if (node == null) return null; // se o nó for nulo, retorna nulo
        while (node.right != null) 
            node = node.right; // enquanto node.right for diferente de null, node continua recebendo à esquerda
        return node.content; // retorna o maior número
    }
}