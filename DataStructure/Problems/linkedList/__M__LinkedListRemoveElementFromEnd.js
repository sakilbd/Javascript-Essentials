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

// done by me 
var removeNthFromEnd = function(head, n) {

    let headToArray = [];
    while (head.next != null) {
        headToArray.push(head.val);
        head = head.next;
    }
    headToArray.push(head.val);
    headToArray.splice(-n, 1);

    let ll = new LinkedList();
    for (let i of headToArray) {
        ll.insertLast(i);
    }
    return ll.head;
};


//from community
// var removeNthFromEnd = function(head, n) {
//     let headNode = head;
//     let nodes = [];
//     while (headNode.next !== null) {
//       nodes.push(headNode);
//       headNode = headNode.next;
//     }
//     nodes.push(headNode);
//     if (nodes.length === 1 && n === 1) {
//       return null;
//     }
//     const removedNodeIndex = nodes.length - n;
//     if (removedNodeIndex === 0) {
//       return nodes[1];
//     } else if (removedNodeIndex === nodes.length - 1) {
//       nodes[nodes.length - 2].next = null;
//     } else {
//       nodes[removedNodeIndex - 1].next = nodes[removedNodeIndex + 1];
//     }
//     return nodes[0];
//   };

c(removeNthFromEnd(head, 2))