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
        return this.head;
    }
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

var rotateRight = function(head, k) {
    if (head == null) {
        return head;
    }
    let headCopy = head;
    let headToArray = [];
    while (head.next != null) {
        headToArray.push(head.val);
        head = head.next;
    }
    let lastNode = head;
    headToArray.push(head.val);

    let i = 0;

    // return headToArray
    let newK = k; //calculates the new number of k for big numbers.....
    if (headToArray.length < k) {
        newK = k % headToArray.length;
    }

    while (i < newK) {
        let lastElement = headToArray.splice(headToArray.length - 1, 1);
        let tempArray = headToArray;
        headToArray = [];
        headToArray.push(...lastElement);
        headToArray.push(...tempArray);
        i++;
    }

    let ll = new LinkedList();
    for (let i of headToArray) {
        ll.insertLast(i);
    }
    return ll.printNodes();
};

//^^ by me

//vv from community
// var rotateRight = function(head, k) {
//     var count = 1;
//     var last = head;
//     var now = head;

//     if (!head || !head.next) return head;

//     while (last.next) {
//         last = last.next;
//         count++;
//     }

//     k %= count;

//     if (k === 0) return head;

//     while (k < count - 1) {
//         now = now.next;
//         k++;
//     }

//     last.next = head;
//     head = now.next;
//     now.next = null;

//     return head;
// };

const ll = new LinkedList();
ll.insertLast(1);
ll.insertLast(2);
ll.insertLast(3);
ll.insertLast(4);
ll.insertLast(5);

// c(ll.printNodes());

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
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
c(rotateRight(head, 2000000000));