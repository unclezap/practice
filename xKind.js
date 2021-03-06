// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/

let deck1 = [1]
//false
let deck2 = [1,1,2,2,2,2]
//true
let deck3 = [1,1,1]
//true
let deck4 = [1,2,3,4,4,3,2,1]
//true
let deck5 = [1,1,1,2,2,2,3,3]
//false
let deck6 = [1,1]
//true
let deck7 = [0,0,0,0,0,1,1,1,1,1]
//true
let deck8 = [0,0,0,0,0,1,1,2,3,4]
//false

var mapHasGroupsSizeX2 = function(deck) {
    if (deck.length === 1) {
        return false
    }

    let map = new Map()

    deck.forEach((number) => {
        let times = map.get(number)
        map.set(number, times ? times+1: 1) 
    })

    let max
    let divides

    if (Math.min(...map.values()) < 4) {
        if (Math.min(...map.values()) === 1) {
            return false
        }
        max = 3
    } else {
        max = Math.min(...map.values())/2
    }

    for (let i=2; i <= max; i++) {
        divides = true
        map.forEach((value) => {
            if (value % i !== 0 ) {
                divides = false
            }
        })
        if (divides) {
            return true
        }
    }

    divides = true
    map.forEach(value => {
        if (value % Math.min(...map.values()) !== 0) {
            divides = false
        }
    })

    return divides
}

var hashHasGroupsSizeX2 = function(deck) {
    if (deck.length === 1) {
        return false
    }

    let hash = {}
    deck.forEach((number) => {
        if (hash[number]) {
            hash[number]++
        } else {
            hash[number] = 1
        }
    })

    let max
    let divides

    if (Math.min(...Object.values(hash)) < 4) {
        if (Math.min(...Object.values(hash)) === 1) {
            return false
        }
        max = 3
    } else {
        max = Math.min(...Object.values(hash))/2
    }


    for (let i=2; i <= max; i++) {
        divides = true
        for (let j=0; j < Object.values(hash).length; j++) {
            if (Object.values(hash)[j] % i !== 0) {
                divides = false
                break
            }
        }
        if (divides) {
            return true
        }
    }

    for (let j=0; j < Object.values(hash).length; j++) {
        if (Object.values(hash)[j] % Math.min(...Object.values(hash)) !== 0) {
            return false
        }
    }

    return true
}

var hashHasGroupsSizeX2WithVariable = function(deck) {
    if (deck.length === 1) {
        return false
    }

    let hash = {}
    deck.forEach((number) => {
        if (hash[number]) {
            hash[number]++
        } else {
            hash[number] = 1
        }
    })

    let max
    let divides
    let values = Object.values(hash)

    if (Math.min(...values) < 4) {
        if (Math.min(...values) === 1) {
            return false
        }
        max = 3
    } else {
        max = Math.min(...values)/2
    }


    for (let i=2; i <= max; i++) {
        divides = true
        for (let j=0; j < values.length; j++) {
            if (values[j] % i !== 0) {
                divides = false
                break
            }
        }
        if (divides) {
            return true
        }
    }

    for (let j=0; j < Object.values(hash).length; j++) {
        if (values[j] % Math.min(...values) !== 0) {
            return false
        }
    }

    return true
}



var hasGroupsSizeX = function(deck) {
    if (deck.length === 1) {
        return false
    }
    
    let hash = {}
    let array = []
    let index = 1
    
    for (let i=0; i < deck.length; i++) {
        if (hash[deck[i]]) {
            array[hash[deck[i]] - 1]++
        } else {
            hash[deck[i]] = index
            array.push(1)
            index++
        }
    }

    let max
    let divides

    if (Math.min(...array) < 4) {
        if (Math.min(...array) === 1) {
            return false
        } else {
            max = 3
        }
    } else {
        max = Math.min(...array)/2
    }

    for (let i=2; i <= max; i++) {
        divides = true
        for (let j=0; j < array.length; j++) {
            if (array[j] % i !== 0) {
                divides = false
                break
            }
        }
        if (divides) {
            return true
        }
    }

    divides = true
    for (let j=0; j < array.length; j++) {
        if (array[j] % Math.min(...array) !== 0) {
            return false
        }
    }

    return true
};

var hasGroupsSizeXEdited = function(deck) {
    if (deck.length === 1) {
        return false
    }
    
    let hash = {}
    let array = []
    let index = 1
    
    for (let i=0; i < deck.length; i++) {
        if (hash[deck[i]]) {
            array[hash[deck[i]] - 1]++
        } else {
            hash[deck[i]] = index
            array.push(1)
            index++
        }
    }

    let max
    let divides
    let min = Math.min(...array)

    if (min < 4) {
        if (min === 1) {
            return false
        } else {
            max = 3
        }
    } else {
        max = min/2
    }

    for (let i=2; i <= max; i++) {
        divides = true
        for (let j=0; j < array.length; j++) {
            if (array[j] % i !== 0) {
                divides = false
                break
            }
        }
        if (divides) {
            return true
        }
    }

    for (let j=0; j < array.length; j++) {
        if (array[j] % min !== 0) {
            return false
        }
    }

    return true
};

var hasGroupsSizeXLeetcode100 = function(deck) {
    if (deck.length === 1) {
        return false;
    }
    deck.sort((a, b) => {
        return a-b;
    })
    let arr = [];
    let cur = deck[0];
    let num = 1;
    for (let i = 1; i < deck.length; i ++) {
        if (deck[i] === cur) {
            num ++;
        } else {
            arr.push(num);
            num = 1;
            cur = deck[i];
        }
    }
    arr.push(num);
    arr = [...new Set(arr)];
    arr.sort((a, b) => {
        return a - b;
    }) 
    for (let i = 2; i <= arr[0]; i ++) {
        if (arr.every((el) => {
            return el%i === 0
        })) {
            return true;
        }
    }
    return false;
};

var hasGroupsSizeXNextBucket = function(deck) {
    if (deck.length === 1) {
        return false
    }

    let hash = {}
    deck.forEach((number) => {
        if (hash[number]) {
            hash[number]++
        } else {
            hash[number] = 1
        }
    })

    let max
    let divides
    let values = Object.values(hash)

    if (Math.min(...values) < 4) {
        if (Math.min(...values) === 1) {
            return false
        }
        max = 3
    } else {
        max = Math.min(...values)/2
    }


    for (let i=2; i <= max; i++) {
        divides = true
        for (let j=0; j < values.length; j++) {
            if (values[j] % i !== 0) {
                divides = false
                break
            }
        }
        if (divides) {
            return true
        }
    }

    for (let j=0; j < Object.values(hash).length; j++) {
        if (values[j] % Math.min(...values) !== 0) {
            return false
        }
    }

    return true
}

var hasGroupsSizeXThirdBucket = function(deck) {
    // if (deck.length === 1) return false;
    
    let deckObj = {};
    deck.forEach(card => {
        if (deckObj[card]) {
            deckObj[card] += 1;
        } else {
            deckObj[card] = 1;
        }
    });
    
    const objVals = Object.values(deckObj);
    const maxVal = Math.max(...objVals);
    
    for (let i = 2; i <= maxVal; i++) {
        if (objVals.every(val => val % i === 0)) return true;
    }
    return false
};

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hasGroupsSizeX(deck1)
hasGroupsSizeX(deck2)
hasGroupsSizeX(deck3)
hasGroupsSizeX(deck4)
hasGroupsSizeX(deck5)
hasGroupsSizeX(deck6)
hasGroupsSizeX(deck7)
hasGroupsSizeX(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`first algo time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hasGroupsSizeXEdited(deck1)
hasGroupsSizeXEdited(deck2)
hasGroupsSizeXEdited(deck3)
hasGroupsSizeXEdited(deck4)
hasGroupsSizeXEdited(deck5)
hasGroupsSizeXEdited(deck6)
hasGroupsSizeXEdited(deck7)
hasGroupsSizeXEdited(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`first algo edited time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
mapHasGroupsSizeX2(deck1)
mapHasGroupsSizeX2(deck2)
mapHasGroupsSizeX2(deck3)
mapHasGroupsSizeX2(deck4)
mapHasGroupsSizeX2(deck5)
mapHasGroupsSizeX2(deck6)
mapHasGroupsSizeX2(deck7)
mapHasGroupsSizeX2(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`hashmap time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hashHasGroupsSizeX2(deck1)
hashHasGroupsSizeX2(deck2)
hashHasGroupsSizeX2(deck3)
hashHasGroupsSizeX2(deck4)
hashHasGroupsSizeX2(deck5)
hashHasGroupsSizeX2(deck6)
hashHasGroupsSizeX2(deck7)
hashHasGroupsSizeX2(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`hash time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hashHasGroupsSizeX2WithVariable(deck1)
hashHasGroupsSizeX2WithVariable(deck2)
hashHasGroupsSizeX2WithVariable(deck3)
hashHasGroupsSizeX2WithVariable(deck4)
hashHasGroupsSizeX2WithVariable(deck5)
hashHasGroupsSizeX2WithVariable(deck6)
hashHasGroupsSizeX2WithVariable(deck7)
hashHasGroupsSizeX2WithVariable(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`hash with variable time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hasGroupsSizeXLeetcode100(deck1)
hasGroupsSizeXLeetcode100(deck2)
hasGroupsSizeXLeetcode100(deck3)
hasGroupsSizeXLeetcode100(deck4)
hasGroupsSizeXLeetcode100(deck5)
hasGroupsSizeXLeetcode100(deck6)
hasGroupsSizeXLeetcode100(deck7)
hasGroupsSizeXLeetcode100(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode 100 time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hasGroupsSizeXNextBucket(deck1)
hasGroupsSizeXNextBucket(deck2)
hasGroupsSizeXNextBucket(deck3)
hasGroupsSizeXNextBucket(deck4)
hasGroupsSizeXNextBucket(deck5)
hasGroupsSizeXNextBucket(deck6)
hasGroupsSizeXNextBucket(deck7)
hasGroupsSizeXNextBucket(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode next bucket time: ${timeElapsed} ms`)

console.log("=====")
start = Date.now()
for (u=0;u<100000;u++) {
hasGroupsSizeXThirdBucket(deck1)
hasGroupsSizeXThirdBucket(deck2)
hasGroupsSizeXThirdBucket(deck3)
hasGroupsSizeXThirdBucket(deck4)
hasGroupsSizeXThirdBucket(deck5)
hasGroupsSizeXThirdBucket(deck6)
hasGroupsSizeXThirdBucket(deck7)
hasGroupsSizeXThirdBucket(deck8)
}
end = Date.now()
timeElapsed = end - start
console.log(`leetcode third fastest bucket time: ${timeElapsed} ms`)

//fastest than fastest leetcode time (3rd bucket) by ~200ms