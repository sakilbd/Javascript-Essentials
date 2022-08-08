const c = console.log.bind(console);

function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

class linkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }
    insertFirst(data) {
        const node = new ListNode(data, this.head);
        this.head = node;
        this.size++;
        // return this.size;
        // return this.head;
    }
    insertLast(data) {
        const node = new ListNode(data);
        // while(this.head.next!=null){
        //     this.next
        // }
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }
    insertAt(data, idx) {
        let current, previous;
        let count = 0;
        current = this.head;
        while (count < idx) {
            previous = current;
            count++;
            current = current.next;
        }
        let node = new ListNode(data, current);
        // current.next = current;
        // node.next = current
        previous.next = node;
        this.size++;
        // return JSON.stringify(this.head)
    }
    removeAt(idx) {
        if (idx > 0 && idx > this.size) {
            return;
        }
        let count = 0;
        let previous, current;
        current = this.head;
        if (idx == 0) {
            this.head = current.next;
        } else {
            while (count < idx) {
                previous = current;
                current = current.next;
                count++;
            }
        }
        previous.next = current.next;
        // return this.head;
    }
    removeElement(itemTodlt) {

        let current, previous;

        current = this.head;
        while (current.next) {
            previous = current;
            if (current.val == itemTodlt) {
                // c(current);
                // c(previous);
                current = current.next;
                previous.val = current.val;
                previous.next = current.next;
                // break;

            } else { current = current.next; }

        }
        // c(current);
        // c(previous)


        // return this.head;


    }
    printNodes() {
        // return this.size;
        return JSON.stringify(this.head);
    }
}

let ll = new linkedList();
c(ll.insertFirst(5));
c(ll.insertFirst(6));
c(ll.insertLast(4));
c(ll.insertLast(18));


c(ll.insertFirst(12));

c(ll.insertFirst(4));
c(ll.insertFirst(5));
c(ll.insertFirst(5));
c(ll.insertFirst(4));



c(ll.insertAt(2, 2));

c(ll.printNodes());


// c(ll.removeAt(2));

c(ll.removeElement(100))
c(ll.printNodes());