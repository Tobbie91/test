/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const number =[];

    const row =array.length;
    const col = array[0].length;
    for(let i =0; i<col; i++){
        number[i]= Array(row)
    }
    for(let j =0; j<row; j++){
        for (let i=0; i<col; i++){
            number[i][j] = array[j][i]
        }
    }
    return number;
}


module.exports = transpose;
