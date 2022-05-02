const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.data = null;
  }
  root() {
    return this.data;
  }

  add(value) {
    this.data = addValue(this.data, value);
    function addValue(node ,value){
      if(!node){
        return new Node(value);
      }

      if(node.value > value){
        node.left = addValue(node.left, value);
      } else {
        node.right = addValue(node.rigth, value);
      }
      return node;
    }
  }

  has(value) {
    return hasValue(this.data, value);

    function hasValue(node, value){
      switch(true){
        case (!node): return false;
        case (node.value === value): return true;
        case (node.value > value): hasValue(node.left, value); break;
        case (node.value < value): hasValue(node.right, value); break;
      }   
    }
  }

  find(value) {
    return findValue(this.data, value);

    function findValue(node, value){
      switch(true){
        case (!node): return null;
        case (node.value === value): return value;
        case (node.value > value): hasValue(node.left, value); return node;
        case (node.value < value): hasValue(node.right, value); return node;
      }   
    }
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};