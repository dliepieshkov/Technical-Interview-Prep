class myListNode {
    constructor(data) {
        this.val = data
        this.next = null
    }
}
var removeNthFromEnd = function(head, n) {
    let node = {next:head}
    let getPos = (node, n) => {
        let size = 1
        while(node.next){
            node = node.next
            size++
        }
        return size - n >= 0? size - n: 0
    }
    let remove = (node, n) => {
        while(node && n > 1){
            n--
            node = node.next
        }
        if (node.next && node.next.next){
            node.next = node.next.next
        }else {
            node.next = null
        }
    }
    n = getPos(head, n)
    console.log('n',n)
    if (n===0){
        console.log('zzzzz',head.next)
        if (head.next)return head.next
        console.log('dddddddddffffdn',n)
        return new myListNode()
    }else {
        remove(head, n)
    }
    return head
};
//let list4 = new LinkedList()
//list4.add(5).add(4).add(3).add(2).add(1)
//console.log(removeNthFromEnd(list4.head, 5))
console.log('=================removeNthFromEnd===================')
let list5 = new LinkedList()
list5.add(5)
console.log(removeNthFromEnd(list5.head, 1))

console.log('=================mergeTwoLists===================')