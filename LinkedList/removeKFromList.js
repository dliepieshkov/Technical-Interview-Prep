let removeKFromList = (l, k) => {
    while(l && l.value===k){
        l = l.next
    }
    if(!l){
        return null
    }
    let head = l
    while(l && l.next){
        if (l.next.value===k){
            l.next = l.next.next
        }else {
            l = l.next
        }
    }
    return head
}
(()=>{
    let list = new LinkedList()
    list.add(1).add(1).add(1).add(1).add(1).add(1).add(1).add(1).add(1).add(1).add(0).print()
let l = removeKFromList(list.head, 1)
let ll = new LinkedList(l)
ll.print('End:')
})()