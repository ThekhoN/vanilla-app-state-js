export function updateCount(value) {
  // can access this.state
  this.state.count = value
  this.state.action = 'UPDATE_COUNT'
  this.dispatchUpdates()
}

export function incrementCount() {
  this.state.count++
  this.state.action = 'INCREMENT_COUNT'
  this.dispatchUpdates()
}

export function decrementCount() {
  this.state.count--
  this.state.action = 'DECREMENT_COUNT'
  this.dispatchUpdates()
}

export function resetCount() {
  this.state.count = 0
  this.state.action = 'RESET_COUNT'
  this.dispatchUpdates()
}
