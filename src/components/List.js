import React from 'react'
import ListItem from './ListItem'

const List = () => <React.Fragment>
  {Array.from(Array(20), (_, index) =>
    <ListItem key={index} index={index} />
  )}
</React.Fragment>

export default List
