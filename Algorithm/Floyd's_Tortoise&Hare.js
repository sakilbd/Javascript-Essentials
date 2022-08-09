// https://www.youtube.com/watch?v=gBTe7lFR3vc
// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    while (head) {
        if (head.visited) return true;
        head.visited = true;
        head = head.next;
    }
    return false;
};