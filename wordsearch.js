const transpose = function(matrix) {
  let result2 = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let result = [];
    for (let j = 0; j < matrix.length; j++) {
      result.push(matrix[j][i]);
      if (j === matrix.length - 1) {
        result2.push(result);
      }
    }
  }
  return result2;
};

const reverseArray = function(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].reverse();
  }
  return array;
};

const diagonalArray = function(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array[0].length - 1; j++) {
      let n = i;
      let m = j;
      let x = i;
      let y = array[0].length - 1 - j;
      let res = [];
      let res2 = [];
      if (i === 0 || j === 0) {
        while (n < array.length && m < array[i].length) {
          res.push(array[n][m]);
          n++;
          m++;
        }
        if (res.length > 0) {
          result.push(res);
        }
        while (x < array.length && y >= 0) {
          res2.push(array[x][y]);
          x++;
          y--;
        }
        if (res2.length > 0) {
          result.push(res2);
        }
      }
    }
  }
  return result;
};


const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  const horizontalJoinBackwards = reverseArray(letters).map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const verticalJoinBackwards = reverseArray(transpose(letters)).map(ls => ls.join(''));
  const diagonalJoin = diagonalArray(letters).map(ls => ls.join(''));
  const diagonalJoinBackwards = reverseArray(diagonalArray(letters)).map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of horizontalJoinBackwards) {
    if (l.includes(word)) return true;
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of verticalJoinBackwards) {
    if (l.includes(word)) return true;
  }
  for (let l of diagonalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of diagonalJoinBackwards) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;