export default class EventQueue {
  constructor() {
    this.queue = []
  }
  addEvent(funObj) {
    let { key } = funObj
    let isAdded = this.queue.some((val) => {
      return val.key == key;
    })
    if (!isAdded) {
      this.queue.push(funObj)
    }
  }
  emptyQueue() {
    this.queue = []
  }
  toDoEvent(){
    if( this.queue.length > 0){
        this.queue.forEach(val => {
            val.fun()
        })
        this.emptyQueue()
    }
  }
}