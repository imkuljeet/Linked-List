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

  printList(){
    let current = this.head;
    let str = "";
    while(current){
      str = str + current.data + "-->";
      current = current.next;
    }

    console.log(str + "null");
  }
}





const list = new LinkedList();

list.insertAtBeginning(18);
list.insertAtBeginning(25);

list.printList();

// console.log(list);