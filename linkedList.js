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

  insertAtEnd(data){
    const newNode = new Node(data);

    if(!this.head){
      this.head = newNode;
      return;
    }

    let current = this.head;

    while(current.next){
      current = current.next;
    }

    current.next = newNode;
  }

  insertAtPosition(data, position) {

    if (position === 1) {
      this.insertAtBeginning(data);
      return;
    }
  
    const newNode = new Node(data);
  
    let current = this.head;
  
    for (let j = 1; j < position - 1 && current !== null; j++) {
      current = current.next;
    }
  
    if (current == null) {
      console.log("POSITION OUT OF BOUNDS");
      return;
    }
  
    newNode.next = current.next;
    current.next = newNode;
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
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(50);
list.insertAtEnd(60);
list.insertAtEnd(70);
list.insertAtEnd(80);

list.insertAtPosition(99,4);


list.printList();

// console.log(list);