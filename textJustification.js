// https://leetcode.com/problems/text-justification/

var fullJustify = function(words, maxWidth) {
    let output = [[]]
    let outputIndex = 0
    let count = 0
    
    for (let i=0;i<words.length;i++) {
        if (count + words[i].length <= maxWidth) {
            count += words[i].length + 1
            output[outputIndex].push(words[i])
        } else {
            // console.log(maxWidth, count, output[outputIndex].length)
            count = maxWidth - count + 1
            // console.log(count)
            
            let pointer = 0
            while (count > 0) {
                output[outputIndex][pointer] += ' '
                count--
                pointer++
                if (pointer > output[outputIndex].length - 2) {
                    pointer = 0
                }                
            }
            
            count = words[i].length + 1
            // console.log(count)
            outputIndex++
            output[outputIndex].push(words[i])
        }
        
    }
    
    while (output[output.length - 1].length < 16) {
        output[output.length - 1] += ' '
    }
    
//     for (let i=0;i<output.length;i++) {
//         output[i] = output[i].join(' ')
//     }
    
    return output
};    