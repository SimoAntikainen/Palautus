const filterReducer = (state = '', action) => {
  console.log('Store contents', state)
  switch (action.type) {
  case 'SET_FILTER':
    return action.notification
  default:
    return state
  }
}

export const setFilter = (notification) => {
  return {
    type: 'SET_FILTER',
    notification
  }
}


export default filterReducer