var addTwoNumbers = function(l1, l2) {
    let res = {head:null}, carryOver = 0, sum = 0
    let node1=l1.head, node2=l2.head, prev = null
    let insertNode = (data) => {
        let newNode = new ListNode(data)
        if (res.head === null){
            res.head = newNode
        }else {
            let node = res.head
            while(node.next){
                node = node.next
            }
            node.next = newNode
        }

    }
    while(node1 || node2 || carryOver){
        sum = (node1?node1.data:0) + (node2?node2.data:0) + carryOver
        carryOver = sum > 9 ? 1 : 0
        insertNode(sum % 10)
        if (node1!==null)node1 = node1.next
        if (node2!==null)node2 = node2.next
    }
    if (carryOver)insertNode(1)
    return res.head
};
/*[2,4,3]
[5,6,4]
expect [7,0,8]*/
let list2 = new LinkedList()
let list3 = new LinkedList()
list2.add(3).add(4).add(2)
list3.add(4).add(6).add(5)
console.log(addTwoNumbers(list2, list3))