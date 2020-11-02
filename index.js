const _Node = require("./_node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
           top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    console.log("***node***", node);
    this.top = node.next;
    console.log("***top***", this.top);
    console.log("***node data***", node.data);
    return node.data;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    if (this.top === null) {
      console.log("The stack is empty.");
    } else {
      console.log("The stack is not empty.");
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

const starTrek = new Stack();

function main(stack) {
  stack.isEmpty();
  stack.push("Kirk");
  stack.push("Spock");
  stack.push("McCoy");
  stack.push("Scotty");
  stack.isEmpty();
  stack.pop();
  stack.pop();
}

function display(stack) {
  console.log(JSON.stringify(stack, null, 2));
}

function is_palindrome(s) {
  let stackA = [];
  let stackB = [];
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < mid; i++) {
    stackA.push(s[i]);
  }

  for (let i = s.length - 1; i > mid; i--) {
    stackB.push(s[i]);
  }
  for (let i = 0; i < stackA.length; i++) {
    if (stackA[i] !== stackB[i]) {
      return false;
    } else {
      return true;
    }
  }
}

// True, true, true, false
console.log(is_palindrome("dad"));

console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

// main(starTrek);
// display(starTrek);
