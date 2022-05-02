const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor(){
    this.data = [];
  }
   getUnderlyingList() {
     return (this.data);
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

module.exports = {
  Queue
};
