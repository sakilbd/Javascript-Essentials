// https://leetcode.com/problems/remove-linked-list-elements/

const c = console.log.bind(console);

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }
    insertFirst(data) {
        const node = new ListNode(data, this.head);
        this.head = node;
        this.size++;
        // c(this.head);
    }
    insertLast(data) {
        const node = new ListNode(data);
        let current;
        // c(node)
        if (!this.head) {
            // this.head is not null means there is at least one node/value there
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    printNodes() {
        // return this.size;
        return JSON.stringify(this.head);
    }
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

const l1 = new LinkedList();

// ll.insertFirst(10);
// ll.insertFirst(20);
// ll.insertFirst(23);
let array = [1, 2, 6, 6, 3, 4, 5, 6];
// let array = [7, 7, 7, 7];

for (let i of array) {
    l1.insertLast(i);
}
c(l1.printNodes());
// l1.insertLast(2);
// l1.insertLast(4);
// l1.insertLast(3);
var removeElements = function(head, val) {
    let newList = new ListNode(-1, head);
    let h = newList;

    while (h.next != null) {
        if (h.next.val == val) {
            h.next = h.next.next;
        } else { h = h.next; }

        // c('fuck')
    }


    // return JSON.stringify(newList.next)

    return newList.next;
};

// let removeElements = function(head, val) {
//     let h = new ListNode(-1);
//     h.next = head;
//     // return JSON.stringify(h.next);
//     head = h;
//     // return JSON.stringify(head)
//     while (h.next !== null) {
//         // c(JSON.stringify(h))
//         if (h.next.val === val) {
//             h.next = h.next.next;
//         } else {
//             h = h.next;
//         }
//     }
//     return JSON.stringify(head.next);
// };

c(removeElements(l1.head, 6));