class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}


class Queue {
  constructor(){
    this.data = [];
  }
   getUnderlyingList() {
     console.log (this.data);
   } 
   enqueue(value) {
     const NEXT = this.data[0] ? this.data[0].value : null;
     const NEW_VALUE = new ListNode(value);
     this.data.unshift(NEW_VALUE);
     this.data[0].next = NEXT;
   } 
   dequeue() {  
     const POP_LAST_VALUE = this.data[this.data.length-1].value;
     const LAST = this.data[this.data.length-2];
     LAST.next = null;
     this.data.pop();
     return POP_LAST_VALUE;
   }
 }

  
  const queue = new Queue();
 
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
 queue.getUnderlyingList();
 //queue.dequeue()//, 5);
// queue.getUnderlyingList();
//queue.dequeue()//, 6);