class StackWithArray {
    stackArr = [];
    top = 0;

    stack_size() {
        return this.stackArr.length;
    }

    isEmpty() {
        return this.stack_size === 0;
    }

    pushItem(element) {
        this.stackArr[this.top] = element;
        this.top++;
    }

    popItem() {
        if (!this.isEmpty()) {
            this.top--;
            return this.stackArr.pop();
        }
    }

    peek() {
        return this.stackArr[this.top - 1];
    }

    printAll() {
        var str='';
        for (var i = 0; i < this.top; i++)
            str += this.stackArr[i] + " ";
        console.log(str);
    }
}

var stack  = new StackWithArray();
stack.pushItem(1);
stack.pushItem(2);
stack.pushItem(3);
stack.pushItem(4);
stack.printAll();
console.log(stack.popItem());
console.log(stack.peek());
stack.printAll();