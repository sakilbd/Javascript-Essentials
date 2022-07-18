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



    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

const l1 = new LinkedList();
const l2 = new LinkedList();
// ll.insertFirst(10);
// ll.insertFirst(20);
// ll.insertFirst(23);
l1.insertLast(2);
l1.insertLast(4);
l1.insertLast(3);

l2.insertLast(5);
l2.insertLast(6);
l2.insertLast(4);


// c(l1.head);
// c(l2.head);
// l1=[9,9,9,9,9,9,9] //try this as entry
// l2=[9,9,9,9]

var addTwoNumbers = function(l1, l2) {

    let sum = 0;
    let current = new ListNode(0);
    let result = current;

    while (l1 || l2) {

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        current.next = new ListNode(sum % 10);
        current = current.next;

        sum = sum > 9 ? 1 : 0; //

    }

    if (sum) { //didnot get this how this is working

        current.next = new ListNode(sum);

    }

    return result.next;
};
c(addTwoNumbers(l1.head, l2.head));