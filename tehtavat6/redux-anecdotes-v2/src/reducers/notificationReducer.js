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

export const removeNotification = () => {
  console.log('HERE')
  return {
    type: 'REMOVE_MESSAGE'
  }
  
}

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    
    dispatch({
      type: 'SET_MESSAGE',
      notification
    })
    setTimeout(() => {
      dispatch(removeNotification())
    }, time)
  }
  /**return {
    type: 'SET_MESSAGE',
    notification
  }**/
}


export default notificationReducer