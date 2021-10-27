(()=>{
    class Queue {
    #head;
    #last;
    constructor(){
        this.#head;
        this.#last;
        this.size=0
    };
    push(value){
        this.size++
        var link = {value, next: void 0};
        this.#last = this.#head ?
            this.#last.next = link
    : this.#head      = link;
    }
    pop(){
        this.size--
        var first;
        return this.#head && (
            first = this.#head.value
            , this.#head = this.#head.next
            , first
    );
    }
    peek(){
        return this.#head && this.#head.value;
    }
};
let permutation = (nums, shift=0)=>{
    let l=nums.size, result = []
    if (l===1)return [[nums.peek()]]
    for(let i=0;i<l; i++){
        let n = nums.pop()
        let perms = permutation(nums)
        for(let p=0;p<perms.length; p++){
            perms[p].push(n)
            result.push(perms[p])
        }
        nums.push(n)
    }
    return result
}
let ll = new Queue()
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
console.log(permutation(ll))
})();