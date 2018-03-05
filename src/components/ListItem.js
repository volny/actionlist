import React from 'react'
import Draggable from 'react-draggable'

const ListItem = ({index}) => 
  <Draggable
    axis="x">
    <div style={{
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

export default ListItem
