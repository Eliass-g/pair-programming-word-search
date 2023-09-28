const array = [[1, 2, 3],[1, 2, 3],[1, 2, 3]];

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

console.log(diagonalArray(array));