class ListNode {
    constructor(data) {
        this.data = data
        this.value = data
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    clear() {
        this.head = null;
        return this
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    getFirst() {
        return this.head;
    }
    add(data) {
        let node = new ListNode(data)
        if (!this.head){
            this.head = node
        }else {
            node.next = this.head
            this.head = node
        }
        return this
    }
    insert(data){
        let newNode = new ListNode(data)
        let node = this.head
        this.head = newNode
        this.head.next = node
        return this
    }
    insertAfter(data,dataAfter){
        let newNode = new ListNode(data)
        let node = this.head, nodePrev = null
        while (node){
            if (node.data===dataAfter){
                if (nodePrev!==null){}
                nodeAfterNext = node.next

            }
            nodePrev = node
            node = node.next
        }

        node.next = this.head
        this.head = node
        return this
    }
    reverse() {
        let curr = this.head,next=null,prev=null
        while (curr!==null) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
        return this
    }
    print(msg = 'print: '){
        let ret = []
        let node = this.head
        while(node){
            ret.push(node.data)
            node = node.next
        }
        console.log(msg,ret.join('->'))
        return this
    }
}
let list = new LinkedList()
list.add(1).print().add(2).print().add(4).print().add(5).print().add(6).print().add(7).print().reverse().print().reverse().print()
