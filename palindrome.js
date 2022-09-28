/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

class ListNode {
  constructor(val = 0, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
  toString() {
    return `${this.val}`;
  }
}

class ListNodeList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(val) {
    const newNode = new ListNode(val);
    if (this.tail) {
      this.tail.next = newNode;
    };
    newNode.prev = this.tail;
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    };
    this.length++;
    return this;
  }
  fromArray(values) {
    let i = 0;
    while (values[i]) {
      this.append(values[i]);
      i++;
    };
    return this;
  }
  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
  toString() {
    return this.toArray()
      .map(node => node.toString())
      .toString();
  }
}

let list = new ListNodeList;
list = list.fromArray([1, 2]);

let isPalindrome = function (list) {
  let i = 0;
  let cursor1 = list.head;
  let cursor2 = list.tail;
  while (i < list.length) {
    if (cursor1.val === cursor2.val) {
      cursor1 = cursor1.next;
      cursor2 = cursor2.prev;
      i++;
    } else {
      return false;
    };
  };
  return true;
}
console.log(isPalindrome(list));

var isPalindromeNew = function (head) {
  let length = 0;
  let prev = null;
  let cursor = head;
  while (cursor) {
    cursor.prev = prev;
    prev = cursor;
    cursor = cursor.next;
    length++;
  };
  let cursor1 = head;
  let cursor2 = prev;
  length = length / 2;
  let i = 0;
  while (i < length) {
    if (cursor1.val === cursor2.val) {
      cursor1 = cursor1.next;
      cursor2 = cursor2.prev;
      i++;
    } else {
      return false;
    };
  };
  return true;
};