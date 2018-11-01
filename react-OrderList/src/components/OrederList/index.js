import React, { Component } from 'react'
import OrderItem from './../OrderItem'

// const data =
class OrdderList extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    fetch('./mock/orders.json').then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          })
        })
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => {
          return (
            <OrderItem onSubmit={this.handleSubmit} key={item.id} data={item} />
          )
        })}
      </div>
    )
  }

  handleSubmit = (id, comment, stars) => {
    const newData = this.state.data.map(item => {
      return item.id === id
        ? {
            ...item,
            comment,
            stars,
            ifCommented: true
          }
        : item
    })

    this.setState({
      data: newData
    })
  }
}

export default OrdderList
