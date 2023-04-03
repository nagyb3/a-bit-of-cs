class Linkedlist {
    constructor() {
        this.allNodes = [];
    }
    append(value) {
        this.allNodes.push(new Node(value))
        if (this.size() > 1) {
            this.allNodes[this.size() -  2].nextNode = this.size() - 1;
        }
    }
    prepend(value) {
        this.allNodes.unshift(new Node(value, 1));
        for (let i = 1; i < this.allNodes.length - 1; i++) {
            if (i !== (this.allNodes.length - 1)) {
                this.allNodes[i].nextNode = i + 1;
            } else if (i === this.allNodes.length - 1) {
                this.allNodes[i].nextNode = null;
            }
        }
    }
    size() {
        return this.allNodes.length
    }
    head() {
        return this.allNodes[0]
    }
    tail() {
        return this.allNodes[this.allNodes.length - 1]
    }
    at(index) {
        return this.allNodes[index]
    }
    pop() {
        this.allNodes.pop();
    }
    contains(value) {
        for (let i = 0; i < this.allNodes.length; i++) {
            if (this.allNodes[i].value === value) {
                return true
            }
        }
        return false
    }
    find(value) {
        for (let i = 0; i < this.allNodes.length; i++) {
            if (this.allNodes[i].value === value) {
                return i
            }
        }
        return null
    }
    toStringString(){
        let output = "";
        for (let i = 0; i < this.allNodes.length; i++) {
            if (i < this.allNodes.length - 1) {
                output += `( ${this.allNodes[i].value} ) -> `
            } else {
                output += this.allNodes[i].value
            }
        }
        return output
    }
}

class Node {
    constructor(value, nextNode) {
        this.value = value || null;
        this.nextNode = nextNode || null;
    }
}
//
// let list = new Linkedlist();
//
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.prepend(1)
//
// console.log(list)