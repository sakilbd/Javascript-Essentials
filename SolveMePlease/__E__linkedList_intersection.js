// https://leetcode.com/problems/intersection-of-two-linked-lists/

const c = console.log.bind(console);


let a = {
    "val": 1,
    "next": {
        "val": 2,
        "next": {
            "val": 3,
            "next": {
                "val": 4,
                "next": {
                    "val": 5,
                    "next": null
                }
            }
        }
    }
}
let b = {
    "val": 8,
    "next": {
        "val": 10,
        "next": {
            "val": 3,
            "next": {
                "val": 4,
                "next": {
                    "val": 5,
                    "next": null
                }
            }
        }
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
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
var getIntersectionNode = function(headA, headB) {
    let aArray = []
    let bArray = [];

    let h1 = headA;
    let h2 = headB;

    while (h1) {
        aArray.push(h1.val);
        h1 = h1.next
    }
    while (h2) {
        bArray.push(h2.val);
        h2 = h2.next
    }


    let difference = aArray.filter(x => bArray.includes(x));

    let ll = new LinkedList();

    for (let i of difference) {
        ll.insertLast(i);

    }
    // return ll.head;
    return ll.head;

    // return [
    //     [...aArray],
    //     [...bArray]
    // ];

};
// output from my problem:
// ListNode {
//     val: 3,
//     next: ListNode { val: 4, next: ListNode { val: 5, next: null } }
//   }

// may be requried :

// {val:3,next:{val:4:next:{val:5,next:null}}}






//from community
// let getIntersectionNode = function(headA, headB) {
//     if (headA === null || headB === null) {
//         return null;
//     }
//     let r1 = headA;
//     let r2 = headB;
//     while (r1 !== r2) {
//         r1 = r1.next;
//         r2 = r2.next;
//         // return r1;
//         if (r1 === r2) {
//             return r1;
//         }
//         if (r1 === null) {
//             r1 = headB;
//         }
//         if (r2 === null) {
//             r2 = headA;
//         }
//     }
//     return r1;
// };
c(getIntersectionNode(a, b));