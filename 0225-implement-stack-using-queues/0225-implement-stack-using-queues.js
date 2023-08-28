
var MyStack = function() {
    this.stack = [];
};

MyStack.prototype.push = function(x) {
    this.stack.push(x);
};

MyStack.prototype.pop = function() {
    if (this.stack.length === 0) {
        return null;
    }
    return this.stack.pop();
};

MyStack.prototype.top = function() {
    if (this.stack.length === 0) {
        return null;
    }
    return this.stack[this.stack.length - 1];
};

MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};
/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */