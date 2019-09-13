import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeNote } from '../actions/noteActions'

class AllNotes extends Component {
  removeNote = index => {
    this.props.removeNote(index)
  }

  render() {
    return (
      <React.Fragment>
        <h3>All Notes</h3>

        <ul>
          {this.props.notes.map((note, index) => (
            <li key={index}>
              <b>{note.title}</b>
              <button onClick={() => this.removeNote(index)}>x</button>
              <br />
              <span>{note.content}</span>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

/*
below can change to this, no need mapDispatchToProps

export default connect(
  mapStateToProps,
  { removeNote }
)(AllNotes)

*/

const mapDispatchToProps = {
  removeNote: removeNote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes)
