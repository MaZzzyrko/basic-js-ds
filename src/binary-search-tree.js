const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.rooted = null;
  }

  root() {
    return this.rooted;
  }

  add(data) {
    const nodeNew = new Node(data);
    if(!this.rooted) {
        this.rooted = nodeNew;
        return this;
    }
    let actual = this.rooted;
    while(actual) {
    if(data == actual.data) 
    return undefined;
    if(data < actual.data) {
    if(!actual.left) {
      actual.left = nodeNew;
        return this;
    }
    actual = actual.left;
    } else if(data > actual.data) {
    if(!actual.right) {
      actual.right = nodeNew;
        return this;
    } 
    actual = actual.right;
    }
  }
}
  
  has(data) {
    let actual = this.rooted;
    while(actual){
    if(data == actual.data) {
      return true;
    } else if(data < actual.data) {
      actual = actual.left;
    } else {
      actual = actual.right; 
  }
}
  return false;
}

  find(data) {
    if(this.rooted) {
    let actual = this.rooted;
    let check = false;
    while(actual && !check) {
      if(data < actual.data) {
        actual = actual.left;
      } else if(data > actual.data) {
        actual = actual.right;
      } else {
        check = actual; 
      } 
    }
    return (!check) ? null : check;
  } else{
    return null;
  }
  }

  minValue(side) {
    return (!side.left) ? side : this.minValue(side.left);
}

  remove(data) {
      this.rooted = this.removed(this.rooted, data);
}

  removed(actual, value) {
    if(value < actual.data) {
      actual.left = this.removed(actual.left, value);
    } else if(value > actual.data) {
      actual.right = this.removed(actual.right, value);
    } else {
    if(actual.left  == null && actual.right == null) {
      actual = null;
      return actual;
    }
    if(actual.left == null) {
      actual = actual.right;
      return actual;
    }
    if(actual.right == null) {
      actual = actual.left;
      return actual;
    }
    let minValue = this.minValue(actual.right);
      actual.data = minValue.data;
      actual.right = this.removed(actual.right, minValue.data);

  }
  return actual;
}

  min() {
    let current = this.rooted;
    let min = this.rooted.data;

    while(current !== null) {
      min = current.data;
      current = current.left;
    }
    return min;
}

  max() {
    let current = this.rooted;
    let max = this.rooted.data;
    while(current !== null){
      max = current.data;
      current = current.right;
    }
    return max;
  }
}