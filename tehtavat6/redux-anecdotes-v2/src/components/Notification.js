import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    const { notification } = this.props
    const hide = {display : notification == '' ? 'none' : ''}

    return (
      <div style={hide}>
        <div style={style}>
          {notification}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}


const ConnectedNotification = connect(
  mapStateToProps
)(Notification)


export default ConnectedNotification
