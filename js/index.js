import {
  updateCount,
  incrementCount,
  decrementCount,
  resetCount
} from './counter-app-utils'
import StateMachine, {ConnectedDOMNode} from './state-machine'
import {actionDisplayerRenderer, countDisplayerRenderer} from './render-utils'

// initial state
const initialState = {
  count: 0,
  action: ''
}
const myCounterApp = new StateMachine(initialState)
// create APIs to update state
myCounterApp.createAPI({
  updateCount: updateCount,
  incrementCount: incrementCount,
  decrementCount: decrementCount,
  resetCount: resetCount
})
// create "connectable" components
const valueDisplayer = new ConnectedDOMNode('#target1', countDisplayerRenderer)
const actionDisplayer = new ConnectedDOMNode('#target2', actionDisplayerRenderer)
// connect them by "watching" them
myCounterApp.watch(valueDisplayer)
myCounterApp.watch(actionDisplayer)

// DOM references
const decrementBtn = document.querySelector('button.decrement')
const incrementBtn = document.querySelector('button.increment')
const resetBtn = document.querySelector('button.reset')

// DOM eventListeners
incrementBtn.addEventListener('click', () => {
  myCounterApp.api.incrementCount()
})
decrementBtn.addEventListener('click', () => {
  myCounterApp.api.decrementCount()
})
resetBtn.addEventListener('click', () => {
  myCounterApp.api.resetCount()
})
