// LIFO

class Stack {
  constructor() {
    this.stack = [];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }
  print() {
    if (this.isEmpty()) {
      return "Stack is empty";
    } else {
      let list = "";

      for (let i = 0; i < this.size(); i++) {
        list += this.stack[i] + "->";
      }
      console.log(list.slice(0, -2));
      return list.slice(0, -2);
    }
  }
}

let stack = new Stack();

stack.push(5);
stack.push(51);
stack.push(45);
stack.push(7);
stack.push(12);

stack.print();
console.log(stack.peek())
