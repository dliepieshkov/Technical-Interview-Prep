function isListPalindrome(l) {
    let fp = l, sp = l, k=0
    let reverse = (l) => {
        let p = null, c = l, n = null
        while (c != null) {
            n = c.next
            c.next = p
            p = c
            c = n
        }
        return p
    }
    while (fp !== null && fp.next != null){
        fp = fp.next.next
        sp = sp.next
    }
    sp = reverse(sp)
    while (sp!==null){
        if (sp.value !== l.value)return false
        sp = sp.next
        l = l.next
    }
    return true
}
(()=>{
    let list = new LinkedList()
    list.add(1).add(1).add(0).add(0).add(1).add(1).print()
let l = isListPalindrome(list.head, 1)
console.log(l)
let ll = new LinkedList(l)
ll.print('isListPalindrome:')
})()