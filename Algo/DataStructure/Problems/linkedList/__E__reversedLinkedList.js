// https://leetcode.com/problems/reverse-linked-list/
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
let array = [1, 2, 3, 4, 5];
// let array = [7, 7, 7, 7];

for (let i of array) {
    l1.insertLast(i);
}
// c(l1.printNodes());

// approved code by me
var reverseList = function(head) {
    if (head == null) {
        return null;
    }

    let newll = new ListNode(-1, head);
    let h = newll.next;
    let resList = new LinkedList();
    while (h.next) {
        resList.insertFirst(h.val);
        h = h.next;
    }
    resList.insertFirst(h.val);
    return resList.head;

    // return JSON.stringify(newll.next);
};


c(reverseList(l1.head));

// got in community 
// var reverseList = function(head) {
//     let  prev = null
//     let curr = head;
//     let next = null

//     while(curr !== null){
//         next = curr.next
//         curr.next =prev
//         prev = curr;
//         curr =next
//     }
//     return prev 

// };