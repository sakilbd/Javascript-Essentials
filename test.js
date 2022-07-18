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

    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }
        if (index == 0) {
            this.head = new ListNode(data, this.head);
            return;
        }
        const node = new ListNode(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        c(current)
        node.next = current;
        previous.next = node;
        this.size++;


    }

    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
// ll.insertFirst(10);
// ll.insertFirst(20);
// ll.insertFirst(23);
ll.insertLast(64);
ll.insertLast(65);
ll.insertLast(66);
ll.insertLast(69);
ll.insertLast(100);
ll.insertAt(21, 1);
// ll.insertFirst(30);
// ll.insertFirst(60);
// c(ll.insertFirst(10));
// c(ll.insertFirst(20));
// c(ll.insertFirst(30));
// c(ll.insertFirst(400));
// c(ll);
ll.printListData();