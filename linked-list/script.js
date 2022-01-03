class Node {
  constructor(val) {
    this.node = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(val) {
    const newNode = new Node(val);
    // console.log(this.head);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        //   console.log(curr);
        curr = curr.next;
      }
      // console.log(curr);
      curr.next = newNode;
      //   this.head=curr
    }
    this.size++;
  }

  reverseList() {
    let prev = null;
    let curr = this.head;
    let next = null;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    let str = "";
    let curr = this.head;
    while (curr) {
      str += curr.node + `${curr.next ? "->" : ""}`;
      curr = curr.next;
    }
    console.log(str);
  }
}

const li = new LinkedList();
li.add(1);
li.add(2);
li.add(3);
li.add(4);
li.add(5);
li.print();
console.log(li.reverseList());
li.print();

