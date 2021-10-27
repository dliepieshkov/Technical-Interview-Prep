function minWindow( s1,  s2)
{
    class DS{
        constructor(){
            this.map = new Map()
            this.pointer = 0
            this.extraChars = 0
            this.strLength = 0
            this.collection = []
            this.minWindowSize = Infinity
            this.minWindow = {start:0,length:0}
        }
        init(str){
            this.strLength = str.length
            for (let i = 0; i < this.strLength; i++)
            {
                if (!this.map.has(str[i])) {
                    this.map.set(str[i],1);
                }else {
                    this.map.set(str[i], this.map.get(str[i]) + 1);
                }
            }
        }
        has(chr){
            return this.map.has(chr)
        }
        get(chr){
            return this.map.get(chr)
        }
        set(chr, idx){
            if (!this.has(chr)) return false
            this.map.set(chr, this.get(chr) - 1);
            if (this.get(chr)<0) this.extraChars++
            this.collection.push({idx:idx,chr:chr})

            if (chr===this.collection[this.pointer].chr && this.get(chr)<0){
                this.slideWindow()
                console.log('after', JSON.stringify(this.collection.slice(this.pointer)))
            }
            console.log(this.collection.length, this.extraChars, this.pointer, this.strLength)
            if (this.collection.length - this.extraChars - this.pointer === this.strLength){
                if (this.minWindowSize > this.size()) {
                    this.minWindowSize = this.size()
                    this.minWindow.start = this.collection[this.pointer].idx
                    this.minWindow.length = this.minWindowSize
                    if (this.minWindowSize===this.strLength){
                        return this.minWindowSize
                    }
                }
                this.slideWindow()
            }
            return true
        }
        slideWindow(){
            let chr = this.collection[this.pointer].chr
            console.log('slideWindow', chr)
            while (this.get(this.collection[this.pointer].chr) < 0){
                chr = this.collection[this.pointer].chr
                this.map.set(chr, this.get(chr) + 1)
                this.extraChars--
                this.pointer++
            }
            this.map.set(chr, this.get(chr) + 1)
            if (this.collection.length-1>this.pointer)this.pointer++
            while (this.get(this.collection[this.pointer].chr) < 0){
                chr = this.collection[this.pointer].chr
                console.log('slideWindow', chr)
                this.map.set(chr, this.get(chr) + 1)
                console.log('slideWindow', chr)
                this.extraChars--
                this.pointer++
            }

        }
        size(){
            console.log('size',this.collection[this.collection.length-1].idx, this.collection[this.pointer].idx,
                this.collection[this.collection.length-1].idx - this.collection[this.pointer].idx + 1
            )
            return this.collection[this.collection.length-1].idx - this.collection[this.pointer].idx + 1
        }
        getMinIndex(){
            return this.minWindow
        }
    }

    if (s1.length < s2.length) return '';
    const map = new DS();
    map.init(s2)
    for (let i = 0; i < s1.length; i++)
    {
        if (map.set(s1[i], i)===s2.length){
            break
        }
    }
    let minWindow = map.getMinIndex()
    return s1.substr(minWindow.start,minWindow.length)
}
let s2 = "AAAAAAAAACCCCCCCCBA";
let t2 = "ABC";
document.write("TEST 2 -->Smallest window that " +
    "contain all character : <br>");
document.write(minWindow(s2, t2));