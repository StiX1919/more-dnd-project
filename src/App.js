import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import CardBin from './CardBin'
import Card from './Card'

class Container extends Component {

  
  render() {
    const binArr = ['1', '2', '3', '4']
    return (
      <div className="App">
        {binArr.map(bin => <CardBin name={bin}/>)}
        <Card name='Spencer'/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
