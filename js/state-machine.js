export default function StateMachine(state) {
  this.state = state
  this.watchList = []
  this.api = {} // methods to update the state
}
StateMachine.prototype.watch = function(watchedItem) {
  this.watchList.push(watchedItem)

  // once we have registered
  // we need to set initial state
  this.dispatchUpdates()
}
StateMachine.prototype.dispatchUpdates = function() {
  this.watchList.forEach(watchedItem => {
    watchedItem.update(this)
  })
}
StateMachine.prototype.createAPI = function(methodsObj) {
  /*
      methodsObj
      {   
            string              function () {}
            
            "methodName1":      method2,
            "methodName2":      method2
      }
  
      */
  Object.keys(methodsObj).forEach(methodKey => {
    this.api[methodKey] = methodsObj[methodKey].bind(this)
  })
  return this.api
}

// ConnectedDOMNode instances have access to the state
export function ConnectedDOMNode(selector, renderHandler) {
  this.DOMnode = document.querySelector(selector)
  this.renderHandler = renderHandler
}
ConnectedDOMNode.prototype.update = function(model) {
  return this.renderHandler(this.DOMnode, model)
}
