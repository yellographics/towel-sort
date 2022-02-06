
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix === undefined) {
    return [];
  } else {
    matrix.forEach((elem, index) => {
      if (!(index % 2)) {
        elem.forEach(item => array.push(item))
      } else {
        const reversed = elem.reverse();
        reversed.forEach(elem => array.push(elem));
      }
    })
    return array;
  }  

  
  
}


