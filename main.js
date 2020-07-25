function getMaxs(args) {
  let result = [];
  for(let i = 0; i < args.length; i++) {
    result = result.concat(getMax(args[i]));
  } 
  return result;
}

function getMax(source) {
  let max = source[0];
  for (let i = 0; i < source.length; i++) {
    if (max < source[i]) {
      max = source[i];
    }
  } 
  return max;
}

let Arr1 = [1, 5, 1100, 34, 986, 7]; 
let Arr2 = [8, 9, 34, 54, 72, 12, 2, 0]; 
let Arr3 = [64, 92, 111, 17, 3, 925];
let Arr4 = [46, 978, 976, 3654, 1256];

let args = [Arr1, Arr2, Arr3, Arr4];
let res = getMaxs(args);

console.log(res.join(','));
