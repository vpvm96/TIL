// 5. 최대 최소찾고 인덱스 값 찾기.
// ex) 3 1 2 11 10 -> 최대 : 11, 인덱스 3 최소: 1 인덱스 1

const arr = [3, 1, 2, 11, 10];

const max = (arr) => {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return console.log(`최대 :${max} 인덱스 :${maxIndex}`);
};

const min = (arr) => {
  let min = arr[0];
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIndex = i;
    }
  }
  return console.log(`최소 :${min} 인덱스 :${minIndex}`);
};

max(arr);
min(arr);
