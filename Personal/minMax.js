// 5. 최대 최소찾고 인덱스 값 찾기.
// ex) 3 1 2 11 10 -> 최대 : 11, 인덱스 3 최소: 1 인덱스 1

const arr = [1, 2, 3, 4, 5];

const max = (arr) => {
  let maxIndex = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxIndex < arr[i]) {
      maxIndex = arr[i];
      console.log(`최대 :${maxIndex} 인덱스 :${arr[i]}`);
    }
  }
  return maxIndex;
};

const min = (arr) => {
  let minIndex = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minIndex > arr[i]) {
      minIndex = arr[i];
      console.log(`최소 :${minIndex} 인덱스 :${arr[i]}`);
    }
  }
  return minIndex;
};

max(arr);
min(arr);
