import React from 'react'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    const message = this.props.store.getState().notification
    const hide = {display : this.props.store.getState().notification == '' ? 'none' : ''}

    return (
      <div style={hide}>
        <div style={style}>
          {message}
        </div>
      </div>
    )
  }
}

export default Notification
