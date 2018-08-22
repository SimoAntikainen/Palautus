const notification = 'Hello World'


const notificationReducer = (state = 'Hello World', action) => {
  console.log('Store contents', state)
  switch (action.type) {
  case 'SET_MESSAGE':
    return action.message
  default:
    return state
  }
}


export default notificationReducer