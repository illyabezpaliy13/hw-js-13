const applyCallbackToEachElement = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  const arr = [1, 2, 3, 4, 5];
  
  const squareCallback = (num) => num * num;
  
  const result = applyCallbackToEachElement(arr, squareCallback);
  
  console.log(result); // [1, 4, 9, 16, 25]