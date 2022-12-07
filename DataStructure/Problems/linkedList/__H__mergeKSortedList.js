// https://leetcode.com/problems/merge-k-sorted-lists/

const c = console.log.bind(console);

let headNode = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 21,
                    next: null,
                },
            },
        },
    },
};
[1, 2, 3, 2, 21]

let oneElement = {
    val: 1,
    next: null
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

var mergeKLists = function(lists) {
    let headToArray = [];
    for (let head of lists) {
        while (head && head.val != null) {
            headToArray.push(head.val);
            head = head.next;
        }

    }
    headToArray.sort((a, b) => a - b);
    let ll = new LinkedList();
    for (let i of headToArray) {
        ll.insertLast(i);
    }
    return ll.head;
};

c(mergeKLists([headNode, headNode, headNode]));
c(mergeKLists([
    oneElement
]));

c(mergeKLists([
    []
]));