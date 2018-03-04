import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

class App extends Component {
  render() {
    return (
      <div className="App">
        <Draggable>
          <div style={{
            background: 'lightblue',
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
          }}>I can now be moved around!</div>
      </Draggable>
    </div>
    );
  }
}

export default App;
