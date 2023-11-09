"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  //if newNode.val < root.val
  //if there is no left
  //left would be newNode
  //else, recursively call fn

  //else newNode.val > root.val
  //if there is no right
  //right would be newNode
  //else, recursively call fn

  insertRecursively(val) {
    if (val < this.val){
      if(!this.left){
        const newNode = new Node(val);
        this.left = newNode;
        return newNode;
      }
      return this.left.insertRecursively(val);
    }
    else{
      if(!this.right){
        const newNode = new Node(val);
        this.right = newNode;
        return newNode;
      }
      return this.right.insertRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  //create new node using Node class
  //compare val with root
  //if val < root, go left
  //else go right
  //
  //return tree instance (this)

  insert(val) {

    // console.log('val', val);
    // const newNode = new Node(val);

    // if(!this.root){
    //   this.root = newNode
    //   return this;
    // }

    // let currNode = this.root;
    // console.log('currNode', currNode);
    // while(!newNode.left && !newNode.right){
    //   if(newNode.val < currNode.val){
    //     if(!currNode.left){
    //       currNode.left = newNode;
    //       return this;
    //     }
    //     if(newNode.val > currNode.left.val && newNode.val < currNode.left.right.val){
    //       newNode.right = currNode.left.right;
    //     }
    //     if(newNode.val > currNode.left.val && newNode.val > currNode.left.left.val){
    //       newNode.left = currNode.left.left;
    //     }
    //     currNode = currNode.left;

    //   }
    //   else{
    //     if (!currNode.right) {
    //       currNode.left = newNode;
    //       return this;
    //     }
    //     if (newNode.val > currNode.left.val && newNode.val < currNode.left.right.val) {
    //       newNode.right = currNode.left.right;
    //     }
    //     if (newNode.val > currNode.left.val && newNode.val > currNode.left.left.val) {
    //       newNode.left = currNode.left.left;
    //     }
    //     currNode = currNode.left;
    //   }
    // }

    // return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if(!this.root){
      this.root = new Node(val);
      return this.root;
    }

    this.root.insertRecursively(val);
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
