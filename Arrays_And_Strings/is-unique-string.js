//usingPredefinedMethod  with Time complexity O(n^2)
function usingPredefinedMethod(stringValue){
    for(var i=0;i<stringValue.length;i++){
        if(stringValue.indexOf(stringValue[i]) !== stringValue.lastIndexOf(stringValue[i])){
            return `Given string ${stringValue} is not unique`;
        }
    }
    return `Given string ${stringValue} is unique`;
}

//BruteForce technique with Time complexity O(n^2)

function usingBFMethod(stringValue){
     
    for(let i = 0; i < stringValue.length; i++)
        for(let j = i + 1; j < stringValue.length; j++)
            if (stringValue[i] == stringValue[j])
                return `Given string ${stringValue} is not unique`;
 
    return `Given string ${stringValue} is unique`;
}
 
//Sorting nlog(n)
function usingSorting(stringConstant){
    let stringArr = Array.from(stringConstant);
    stringArr.sort();

    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i] === stringArr[i+1])
        return `Given string ${stringConstant} is not unique`;
    }

    return `Given string ${stringConstant} is unique`;
}

//with hash O(n)
function usingHash(stringConstant){
    let hashObj = {};
    for(let i = 0; i < stringConstant.length; i++){
        if(!hashObj[stringConstant[i]]){
            hashObj[stringConstant[i]] =  stringConstant[i];
        }else{
            return `Given string ${stringConstant} is not unique`;
        }
    }
    return `Given string ${stringConstant} is unique`;
}

console.log(usingBFMethod("Geeks"));
console.log(usingPredefinedMethod("Hellllo"));
console.log(usingSorting("HellooWorld"));
console.log(usingHash("hel"));