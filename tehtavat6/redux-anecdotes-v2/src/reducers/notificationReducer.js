const notificationReducer = (state = '', action) => {
  console.log('Store contents', state)
  switch (action.type) {
  case 'SET_MESSAGE':
    return action.notification
  case 'REMOVE_MESSAGE':
    return ''
  default:
    return state
  }
}

export const setNotification = (notification) => {
  return {
    type: 'SET_MESSAGE',
    notification
  }
}


export default notificationReducer