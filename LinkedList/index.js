class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtLast(data){
    let newNode = new Node(data);
    if(this.head == null){
        this.head=newNode;
    }
    let current = this.head;
    while(current.next){
        current=current.next
    }
    current.next=newNode;
  }

  deleteNode(value){
    if(!this.head) return

    if(this.head.data === value){
        this.head=this.head.next;
        return
    }

    let current = this.head;
    while(current.next && current.next.data !== value){
        current=current.next
    }
    if(current.next){
        current.next= current.next.next;
    }

  }

  printList() {
    let current = this.head;
    let list = "";
    while (current) {
      list = list + current.data + " -> ";
      current = current.next;
    }
    console.log(list + "null");
  }
}

let myLList = new LinkedList();
myLList.insertAtFirst(5);
myLList.insertAtFirst(1);
myLList.insertAtFirst(9);
myLList.insertAtFirst(5);
myLList.insertAtFirst(12);
myLList.insertAtLast(17);
myLList.insertAtLast(4);
myLList.insertAtLast(52);
myLList.insertAtLast(0);


myLList.printList();
myLList.deleteNode(17);
myLList.printList();
myLList.deleteNode(5);
myLList.printList();






