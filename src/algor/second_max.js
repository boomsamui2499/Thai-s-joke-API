
secondMax = (arr) => {
    let max = [], result = [];
    if (arr == "") {
        return "Error!";
    }
    for (const value of arr) {
        const new_arr = Number(value)
        if (new_arr > max) {
            [result, max] = [max, new_arr] 
        } else if (new_arr < max && new_arr > result) {
            result = new_arr; 
        }
    }

    return result;

}
console.log(secondMax([]));