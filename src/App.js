import React, { Component } from 'react'
import Draggable from 'react-draggable'

class App extends Component {
  render() {
    return (
      <div className="App">
        {Array.from(Array(20), (_, index) =>
          <Draggable axis="x">
            <div
              key={index}
              style={{
                background: 'lightsalmon',
                width: 400,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {`I am item #${index + 1}`}
            </div>
          </Draggable>
      )}
      </div>
    )
  }
}

export default App
