/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0;
    };
    let sum = this.root.val;
    let remaining = this.root.children;
    while (remaining.length){
      let curr = remaining.pop()
      sum = sum + curr.val;
      for(let child of curr.children){
        remaining.push(child);
      };
    };
    return sum;
  };

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0;
    };
    let numEvens = 0;
    let remaining = [this.root];
    while(remaining.length){
      let curr = remaining.pop();
      if(curr.val % 2 == 0){
        numEvens++;
      }
      for(let child of curr.children){
        remaining.push(child);
      };
    }
    return numEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0;
    };
    let countGtr = 0;
    let remaining = [this.root];
    while(remaining.length){
      let curr = remaining.pop();
      if(curr.val > lowerBound){
        countGtr++;
      }
      for(let child of curr.children){
        remaining.push(child);
      };
    }
    return countGtr;
  }
}

module.exports = { Tree, TreeNode };
