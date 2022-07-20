const numbersArray = [1, 2, 3, 4, 5]

class ArrayMethords {
    
    constructor( data ) {
        this.items = data
        this.len = data.length
        this.condition = false
        this.index = 0
    }

    linearSearch(element) {
        for (let i=0; i<this.len; i++) {
            if (this.items[i] === element) {
                console.log("Element found at index:", i)
            }
        }
    }

    bubbleSort() {
        while (this.condition === false && this.index < this.len) {
            
        }
    }

}

h = new ArrayMethords(numbersArray); 
h.linearSearch(3)