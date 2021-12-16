// 栈 水桶
/**
 * push,pop,top,clear,size
 */

class Stack{
  constructor(){
    this.data={}
    this.count=0
  }

  push(item){
    // 方式1：数组方法 push 添加
    // this.data.push(item)
    // 方式2：利用数组长度
    // this.data[this.data.length] = item
    // 方式3：计数方式
    this.data[this.count] = item
    // 入栈后，count 自增
    this.count++
  }

  pop(){
    if(this.isEmpty()){
      console.log('栈为空')
      return
    }
    // 移除栈顶数据
    // 方式1：数组方法 pop 移除
    // return this.data.pop()
    // 方式2：计数方式
    const temp = this.data[this.count-1]
    delete this.data[--this.count]
    return temp
  }

  top(){
    if(this.isEmpty()){
      console.log('栈为空！')
      return
    }
    return this.data[this.count-1]
  }
  size () {
    return this.count
  }
  isEmpty(){
    return this.count===0
  }
  clear () {
    this.data = []
    this.count = 0
  }
}

const s = new Stack()
s.push('s')
s.push('d')
console.log(s)