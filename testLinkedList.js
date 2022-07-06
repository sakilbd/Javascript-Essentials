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
        let current
            // return !this.head
        if (!this.head) { // this.head is not null means there is at least one node/value there
            current = this.head;
        } else {
            current = node;

        }
        while (current.next) {
            current = current.next;
        }
        current.next = node;
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
ll.insertFirst(10);
// ll.insertFirst(20);
c(ll.insertLast(69));
// ll.insertFirst(30);
// ll.insertFirst(60);
// c(ll.insertFirst(10));
// c(ll.insertFirst(20));
// c(ll.insertFirst(30));
// c(ll.insertFirst(400));
// c(ll);
ll.printListData();