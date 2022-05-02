class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Stack {
    constructor (){
        this.root = [];
    }
    push(el) {
      this.root.push(el);
    }
  
    pop() {
      let a = this.peek();
      this.root.pop(this.root[this.root.length-1]);
      return a;
    }
  
    peek() {
      console.log (this.root[this.root.length-1]);
    }
  }

  
  const stack = new Stack();
 
  stack.push(5);
  stack.push(6);
  stack.push(7);
stack.peek()//, 7);
stack.pop()//, 7);
stack.peek()//, 6)

console.log(stack)
