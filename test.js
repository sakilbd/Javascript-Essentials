// https://leetcode.com/problems/palindrome-linked-list/

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

var isPalindrome = function(head) {

    let arr = [];
    while (head.next != null) {
        arr.push(head.val);
        head = head.next;
    }
    arr.push(head.val);
    if (arr.length == 1) {
        return true;
    }
    let i = 0,
        j = arr.length - 1;
    let boolCheck = false;
    while (i < arr.length / 2) {

        while (j >= arr.length / 2) {

            if (arr[i] != arr[j]) {
                boolCheck = false;
            } else {
                boolCheck = true;
            }
            j--;
            break;
        }
        if (boolCheck == false) {
            break;
        }
        i++;
    }

    return boolCheck;
};

c(isPalindrome(head));