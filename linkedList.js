class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    append(value) {
        const newNode = new Node(value)
        console.log(newNode);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else{
         this.tail.next = newNode;
         this.tail = newNode;   
        }
    }
    print(){
        let node = this.head;
        let str = "";
        while(node){
            str += node.value + "==>";
            node = node.next;
        }
        console.log(str);
    }
}

const linkedList = new LinkedList()

linkedList.append("A")

