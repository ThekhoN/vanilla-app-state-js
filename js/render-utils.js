export function countDisplayerRenderer(node, model) {
  node.innerHTML = model.state.count
}

export function actionDisplayerRenderer(node, model) {
  let content = 'INITIAL_STATE'
  if (model.state.action !== '') {
    content = model.state.action
  }
  node.innerHTML = content
}
