class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    printAll() {
        let cNode = this.head;
        let listString = '';
        while (cNode.next !== null) {
            // console.log(cNode.data);
            listString = listString + "  " + cNode.data;
            cNode = cNode.next;
        }
        listString = listString + "  " + cNode.data;
        console.log("List Data : ", listString);
        console.log("------------");
    }

    size_of_list() {
        return this.size;
    }

    add(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;

            }
            currentNode.next = newNode;
        }
        this.size++;
    }

    insertAt(index, data) {
        let newNode = new Node(data);
        if (index > this.size_of_list()) {
            console.log("index out of bound");
        } else if (index === this.size_of_list()) {
            this.add(data);
        } else {
            let currentNode = this.head;
            let tempIndex = 0;
            let prev;
            if (index == 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                while (tempIndex < index) {
                    prev = currentNode;
                    currentNode = currentNode.next;

                    tempIndex++;
                }
                prev.next = newNode;
                newNode.next = currentNode;
                this.size++;
            }
        }
    }

    removeFrom(index) {
        if (index >= this.size_of_list() || index < 0) {
            return "out of index"
        } else {
            let currentNode = this.head;
            let tempIndex = 0;
            let prev;
            if (index === 0) {
                this.head = this.head.next;
            } else {
                while (tempIndex < index) {
                    prev = currentNode;
                    currentNode = currentNode.next;
                    tempIndex++;
                }
                prev.next = currentNode.next;
            }
            this.size--;
            return currentNode.data;

        }
    }

    removeElement(element) {
        let currentNode = this.head;

        let tempIndex = 0;
        while (currentNode && currentNode.data !== element) {
            currentNode = currentNode.next;
            tempIndex++;
        }
        if(currentNode){
            this.removeFrom(tempIndex);
        }else{
            console.log("Element not found");
        }
    }


}

let l = new LL();
l.add(3);
l.add(4);
l.add(5);
l.printAll();
l.insertAt(3, 11);
l.printAll();
l.removeFrom(1);
l.printAll();
l.removeElement(11);
l.printAll();