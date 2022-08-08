const c = console.log.bind(console);
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert first Node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        //If empty, make head
        if (!this.head) {
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

    //Insert at index
    insertAt(data, index) {
        //If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        //If first index
        if (index == 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; //Node before index
            count++;
            current = current.next; //Node after
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    //Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    //Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        //Remove first
        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
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
            if (current.data == itemTodlt) {
                // c(current);
                // c(previous);
                current = current.next;
                previous.data = current.data;
                previous.next = current.next;
                // break;

            } else { current = current.next; }

        }

        // return previous;

    }
    printNodes() {
        // return this.size;
        return JSON.stringify(this.head);
    }

    //Clear List 
    clearList() {
        this.head = null;
        this.size = 0;

    }

    //Print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// ll.insertLast(500);
// // ll.insertAt(500, 0);
// // ll.removeAt(33);
// ll.insertAt(200, 0);

// ll.printListData();



// ll.insertFirst(5);
ll.insertFirst(6);
ll.insertLast(4);
ll.insertLast(18);


ll.insertFirst(12);

ll.insertFirst(4);
ll.insertFirst(5);
// ll.insertFirst(5);
// ll.insertFirst(4);



ll.insertAt(2, 2);

c(ll.printNodes());


// c(ll.removeAt(2));

c(ll.removeElement(4))
c(ll.printNodes());
// ll.clearList();