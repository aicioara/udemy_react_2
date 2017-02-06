import React, { Component } from 'react';

import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookDetail extends Component {

  render() {

    if (!this.props.book) {
      return <div>Select book!</div>
    }

    return (
      <h3>
        {this.props.book.title}
      </h3>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  }
}

export default connect(mapStateToProps)(BookDetail);