class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertAtBeginning(data){
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }
}





const list = new LinkedList();

list.insertAtBeginning(18);

console.log(list);