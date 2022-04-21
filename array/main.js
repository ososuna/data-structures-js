class MyArray {
  
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shift() {
    const firstItem = this.data[0];
    this.shiftIndex(0);
    return firstItem;
  }

  unshift(item) {
    const lastItem = this.data[this.length - 1];
    for (let i = this.length-1; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }
    this.push(lastItem);
    this.data[0] = item;
  }

}

const myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
console.log(myArray);
myArray.unshift(0);
console.log(myArray);
myArray.unshift(-1);
console.log(myArray);
