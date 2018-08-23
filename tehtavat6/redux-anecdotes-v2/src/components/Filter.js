import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setFilter } from './../reducers/filterReducer'

class Filter extends React.Component {
  handleChange = (event) => {
    event.preventDefault()
    console.log('filter', event.target.value)
    this.props.setFilter(event.target.value)

    // input-kentän arvo muuttujassa event.target.value
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}


const mapDispatchToProps = {
  setFilter
}


const ConnectedFilter = connect(
  null, mapDispatchToProps
)(Filter)

export default ConnectedFilter