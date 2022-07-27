function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds = (...arr) => {
    arr.filter((num) => num % 2 === 0);
}

const findMin = (...numArr) => Math.min(...numArr);

const mergeObjects = (object1, object2) => ({...object1,...object2});

const doubleAndReturnArgs = (arr, ...numArr) => [...arr, ...numArr.map(num => num*2)];

const removeRandom = items => {
    let idx = Math.floor(Math.random()* items.length);
    return [...items.slice(0,idx), ...items.slice(idx+1)];
}

const extend = (array1, array2) => ([...array1, array2]);

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const combine = (object1, object2) => {
    ({...object1, ...object2})
};

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
