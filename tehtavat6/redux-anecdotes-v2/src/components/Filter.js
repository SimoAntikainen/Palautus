import React from 'react'
import { setFilter } from './../reducers/filterReducer'

class Filter extends React.Component {
  handleChange = (event) => {
    console.log('filter', event.target.value)
    this.props.store.dispatch(setFilter(event.target.value))
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

export default Filter