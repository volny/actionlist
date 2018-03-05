import React, { Component } from 'react'
import Draggable from 'react-draggable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Draggable axis="x">
          <div
            style={{
              background: 'lightblue',
              width: 400,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            I can now be moved around!
          </div>
        </Draggable>
      </div>
    )
  }
}

export default App
