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
      console.log(this);
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  //  TODO: agregar y borrar elemento al inicio

}

const myArray = new MyArray();
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
console.log(myArray);
console.log(myArray.delete(2));
console.log(myArray);
