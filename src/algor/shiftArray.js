function shift(array, direction, number) {

    if (direction == 'left') {
        let getdatashift = [];
        for (i = 0; i < number; i++) {
            getdatashift.push(array.shift())
        }
        getdatashift.forEach(x => {
            array.push(x);
        })

        return array
    }

    if (direction == 'right') {
        let getdatashift = [];
        for (i = 0; i < number; i++) {
            getdatashift.push(array.pop())
        }

        getdatashift.reverse();
        array.forEach(x => {
            getdatashift.push(x);
        })
        return getdatashift
    }

}
console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log(shift([1, 2, 3, 4, 5], 'right', 3));

