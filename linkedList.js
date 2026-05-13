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

  deleteAtBeginning(){
    if(!this.head){
      console.log("LIST IS EMPTY");
      return;
    }

    this.head = this.head.next;
  }

  deleteAtPosition(pos){
    if(!this.head){
      console.log("LIST IS EMPTY");
      return;
    }

    if(pos === 1){
      this.deleteAtBeginning();
      return;
    }

    let current = this.head;

    for(let j=1;j<pos - 1;j++){
      current = current.next;
    }

    if(!current || !current.next){
      console.log("POSITION OUT OF BONDS");
      return;
    }

    current.next = current.next.next;
  }

  deleteAtEnd(){
    if(!this.head){
      console.log("LIST IS EMPTY");
      return;
    }

    if(!this.head.next){
      this.head = null;
      return;
    }

    let current = this.head;
    while(current.next && current.next.next){
      current = current.next;
    }

    current.next = null;
  }

  search(val){
    let current = this.head;
    let index = 1;

    while(current){
      if(current.data === val){
        console.log(`Value ${val} found at position ${index} `);
        return true;
      }
      current = current.next;
      index++;
    }

    console.log(`Value${val}  not found in the list`);
    return false;
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

// list.deleteAtBeginning();
// list.deleteAtEnd();
// list.deleteAtPosition(3);

// list.printList();
list.search(50);




// console.log(list);