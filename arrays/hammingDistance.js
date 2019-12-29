//hamming distance between two strings of equal length is the number of positions 
//at which these strings vary

function hammingDistance(stringA, stringB){
    let result = 0

    if (stringA.length == stringB.length){

        for (let i = 0; i < stringA.length; i++){
            if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()){
                result++
            }
        }

        return result 
    } else {
        throw new Error('Strings do not have equal length')
    }
}