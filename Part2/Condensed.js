
class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function condense(head) {
    let _current = head; // head of the list
    let _seen = new Set();  // Set to store the values we've _seen
    let _prev = null;   // Previous node

    while (_current !== null) {
        // If we've already _seen the _current node's value, remove it
        if (_seen.has(_current.data)) {
            _prev.next = _current.next;  // Skip _current node
        } else {
            _seen.add(_current.data);  // Add to set
            _prev = _current;          // Move _prev to _current
        }
        _current = _current.next;  // Move to the next node
    }

    return head;  // Return the modified list
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = new SinglyLinkedListNode(arr[0]);
    let _current = head;
    for (let i = 1; i < arr.length; i++) {
        _current.next = new SinglyLinkedListNode(arr[i]);
        _current = _current.next;
    }
    return head;
}


function print_Linked_List(head) {
    let _current = head;
    while (_current !== null) {
        console.log(_current.data);
        _current = _current.next;
    }
}

// tast case  Input
const list = [3, 4, 3, 2, 6, 1, 2, 6];
const head = createLinkedList(list);

// Call the condense function
const condensedList = condense(head);

// we can print the condensed list
print_Linked_List(condensedList);
