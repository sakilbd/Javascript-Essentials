const c = console.log.bind(console);

let head = {
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

var removeNthFromEnd = function(head, n) {

    let headToArray = [];
    while (head.next != null) {
        headToArray.push(head.val);
        head = head.next;
    }
    headToArray.push(head.val);
    headToArray.splice(-n, 1)
    return headToArray;
};


c(removeNthFromEnd(head, 2))