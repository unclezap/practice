//https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/submissions/

var getLastMomentOld = function(n, left, right) {

    if (right === []) {
        return Math.max(left)
    }

    if (left === []) {
        return Math.max(right)
    }

    right = right.map((ant) => [ant, 1])

    left = left.map((ant) => [ant, -1])

    let currentAnts = [right, left].flat().sort((a,b) => a[0] - b[0])
    // currentAnts.push(right)
    // currentAnts.push(left)
    // currentAnts = currentAnts.flat()    

    // currentAnts.sort((a, b) => a[0] - b[0])
    nextAnts = currentAnts
    let steps = 0
    let thisAnt
    let otherAnt
    let antPositions

    // console.log("step:", steps)
    // console.log("currentAnts", currentAnts)
    // console.log("===============")

    while (nextAnts.length > 0) {
        steps++
        currentAnts = nextAnts
        nextAnts = []
        antPositions = {}

        for (let ant=0; ant < currentAnts.length; ant++) {
            // thisAnt = []
            thisAnt = [currentAnts[ant][0], currentAnts[ant][1]]
            if (currentAnts[ant + thisAnt[1]]) {
                otherAnt = currentAnts[ant + thisAnt[1]]
                
                if (thisAnt[0] + thisAnt[1] === otherAnt[0] && otherAnt[0] + otherAnt[1] === thisAnt[0]) {
                    thisAnt[1] *= -1
                } else {
                    thisAnt[0] += thisAnt[1]
                }
            
            } else {
                thisAnt[0] += thisAnt[1]
            }

            if (thisAnt[0] >= 0 && thisAnt[0] <= n) {
                nextAnts.push(thisAnt)
                if (antPositions[thisAnt[0]]) {
                    antPositions[thisAnt[0]]++
                } else {
                    antPositions[thisAnt[0]] = 1
                }
            }
        }

        for (let ant=0; ant < nextAnts.length; ant++) {
            thisAnt = nextAnts[ant]
            if (antPositions[thisAnt[0]] > 1) {
                thisAnt[1] *= -1
            }
        }
        // console.log("step:", steps)
        // console.log("current", currentAnts)
        // console.log("next", nextAnts)
        // console.log("++++++++++++++++++")
    }

    return steps - 1

};

var getLastMoment = function(n, left, right) {
    let leftMax = Math.max(...left)
    let rightMax = n - Math.min(...right)
    return Math.max(leftMax, rightMax)
    
};

// Input: n = 4, left = [4,3], right = [0,1]
// Output: 4
console.log(getLastMoment(4, [4,3], [0,1]))

// Input: n = 7, left = [], right = [0,1,2,3,4,5,6,7]
// Output: 7
console.log(getLastMoment(7, [], [0,1,2,3,4,5,6,7]))

// Input: n = 7, left = [0,1,2,3,4,5,6,7], right = []
// Output: 7
console.log(getLastMoment(7, [0,1,2,3,4,5,6,7], []))

// Input: n = 9, left = [5], right = [4]
// Output: 5
console.log(getLastMoment(9, [5], [4]))
// 
// Input: n = 6, left = [6], right = [0]
// Output: 6
console.log(getLastMoment(6, [6], [0]))

console.log(getLastMoment(n=2, left=[],right=[0,1,2]))
//output 2

console.log(getLastMoment(n=20, [4,7,15],[9,3,13,10]))
// input 20
// [4,7,15]
// [9,3,13,10]
//output 17

console.log(getLastMoment(7, [], [0,1,2,3,4,5,6,7]))
