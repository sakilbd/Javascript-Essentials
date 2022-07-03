// piece of data - val
//reference to next node - next
const c = console.log.bind(console);
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        // c(newNode);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            // c(this.tail);
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }

    pop() { //removes/pops the last element 
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;


        }
        this.tail = newTail;
        this.tail.next = null;
        // c(current.val);
        // c(newTail.val);
        this.length--;
        if (this.length === 0) { //if there is only one element
            this.head = null;
            this.tail = null;
        }
        return current

    }

}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
    // c(list);
list.push("Abraham")
    // c(list);
list.push("Whats Up !!!")
    // list.traverse(); //Logs elements of linked list.
    // list.pop();
    // list.traverse();
list.pop();
c(JSON.stringify(list));
// c(JSON.stringify(list));
// list.push("GOODBYE")
// c(list);

// c(first);
// c(JSON.stringify(first));