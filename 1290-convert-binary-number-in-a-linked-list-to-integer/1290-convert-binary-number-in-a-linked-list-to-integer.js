/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
    let stringBinary = "";
    let node = head;

    while(node) {
        stringBinary += node.val;
        node = node.next;
    }

    return parseInt(stringBinary, 2);
}