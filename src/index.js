module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let prev;
  let ind = [];
  do{
    prev = arr.length;
    ind = [];
  bracketsConfig.forEach(pair => {
      arr.forEach((bracket,index,a) => {
      if (pair[0] == bracket && pair[1] == a[index + 1]) {
        ind.push(index);
        ind.push(index + 1);
      }
    })
  });
  arr = arr.filter((e,i) => !ind.includes(i));
}while (arr.length < prev)
  return arr.length == 0 ;
}
