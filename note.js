class MyStack {
  constructor() {
    this.arr = [];
    this.top = -1;
  }

  push(number) {
    this.arr.push(number);
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("비었어요");
      return;
    }
    let result = this.arr[this.top];
    this.arr.pop(result);
    this.top--;
    return result;
  }

  peek() {
    return this.arr[this.top];
  }
  size() {
    return this.arr.length;
  }
  isEmpty() {
    return this.arr.length === 0 ? true : false;
  }
}
