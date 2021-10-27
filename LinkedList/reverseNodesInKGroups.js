function reverseNodesInKGroups(l, k) {
    let reverse = (l, k) => {
        let p = null, c = l, n = null
        while (c != null && k>0) {
            n = c.next
            c.next = p
            p = c
            c = n
            k--
        }
        return p
    }

    let c = l
    return reverse(c,2)
}
(()=>{
    let list = new LinkedList()
    list.add(1999).add(5432).add(9876).print()
let l = reverseNodesInKGroups(list.head, 3)
let ll = new LinkedList(l)
ll.print('reverseNodesInKGroups:')
})();