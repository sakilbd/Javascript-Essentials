// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
const c = console.log.bind(console);

let head = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 1,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
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
        return this.head;
    }
}
var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }

    let headArr = [];
    while (head.next) {
        headArr.push(head.val);
        head = head.next;
    }
    headArr.push(head.val);

    const seen = new Set();
    const duplicates = headArr.filter((n) => {
        return seen.size == seen.add(n).size; //if returns true that measn that item (n) has duplicates
    });
    let distinctDuplicates = [...new Set(duplicates)];
    let distinct_head_array = [...new Set(headArr)];
    let result = distinct_head_array.filter((r) => {
        for (let i of distinctDuplicates) {
            if (r == i) {
                return false
            };
        }
        return true;

    });
    let ll = new LinkedList();
    for (let i of result) {
        ll.insertLast(i);
    }

    return ll.head;


};

c(deleteDuplicates(head));