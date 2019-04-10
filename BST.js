// BST Class
'use strict';
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }

    /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
    else if (key < this.key) {
      /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
      else {
        this.left.insert(key, value);
      }
    }
    // Similarly, if the new key is greater than the node's key 
    //  then you do the same thing, but on the right-hand side */
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    // If the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    }
    /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    /* If the item you are looking for is greater than the root 
           then follow the right child.
           If there is an existing right child, 
           then recursively check its left and/or right child
           until you find the item */
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      /* If the node only has a left child, 
               then you replace the node with its left child */
      else if (this.left) {
        this._replaceWith(this.left);
      }
      /* And similarly if the node only has a right child 
               then you replace it with its right child */
      else if (this.right) {
        this._replaceWith(this.right);
      }
      /* If the node has no children then
               simply remove it and any references to it 
               by calling "this._replaceWith(null)" */
      else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  inOrder() {
    if (this.left) {
      this.left.inOrder();
    }
    console.log(this.key);
    if (this.right) {
      this.right.inOrder();
    }
  }

  preOrder() {
    // Pre-order
    console.log(this.key);
    if (this.left) {
      this.left.preOrder();
    }
    if (this.right) {
      this.right.preOrder();
    }
  }

  postOrder() {
    if (this.left) {
      this.left.postOrder();
    }
    if (this.right) {
      this.right.postOrder();
    }
    console.log(this.key);
  }

  bfs(values) {
    values = values || [];
    const queue = [this];

    while (queue.length) {
      let node = queue.shift();
      values.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return values;
  }

}

function main() {
  const tree = new BinarySearchTree();
  tree.insert(25);
  tree.insert(15);
  tree.insert(50);
  tree.insert(10);
  tree.insert(24);
  tree.insert(35);
  tree.insert(70);
  tree.insert(4);
  tree.insert(12);
  tree.insert(18);
  tree.insert(31);
  tree.insert(44);
  tree.insert(66);
  tree.insert(90);
  tree.insert(22);
  //   console.log('in order is: ');
  //   tree.inOrder();
  //   console.log('pre order is: ');
  //   tree.preOrder();
  //   console.log('post order is: ');
  //   tree.postOrder();

  const enterprise = new BinarySearchTree();
  enterprise.insert(4, 'Prof X Pickard');
  enterprise.insert(2, 'Riker');
  enterprise.insert(1, 'Warf');
  enterprise.insert(3, 'La Forge');
  enterprise.insert(0, 'Security Officer');
  enterprise.insert(5, 'Data');
  enterprise.insert(7, 'Crusher');
  enterprise.insert(6, 'Selar');
  console.log(enterprise.bfs());
}

main();

module.exports = BinarySearchTree;