function createStack() {
    let items = [];
    return {
        push(i) {
            return items.push(i);
        },
        pop() {
            return items.pop();
        },
        printStack() {
            console.log(items);
        }
    }
}

const stack = createStack();

stack.push(10);
stack.push(20);
stack.push(30)
stack.printStack();

stack.pop();
stack.printStack();