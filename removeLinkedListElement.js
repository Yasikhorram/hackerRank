/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
*/

var removeElements = function (head, val) {
  let newNode = new listNode();
  let current = newNode;
  while (head) {
    if (head.val !== val) {
      current.next = head;
      current = current.next;
    }
    head = head.next;
  }
  current.next = null;
  return newNode.next;
};
