class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    console.log(this.size);
  }

  insertAtFirst(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtLast(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.insertAtFirst(data);
    } else {
      let newNode = new Node(data);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    }
  }

  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removeNode = current.next;
      current.next = removeNode.next;
    }
    this.size--;
    return removeNode.data;
  }

  deleteNode(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  printList() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head;
      let list = "";
      while (current) {
        list = list + current.data + " -> ";
        current = current.next;
      }
      console.log(list + "null");
    }
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

myLList.printList();

myLList.printList();
myLList.getSize();
console.log("Deleting element at index 7:", myLList.deleteAt(7));
