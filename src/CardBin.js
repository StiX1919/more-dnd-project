import React, { Component } from 'react';
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'
import PropTypes from 'prop-types'
import Card from './Card'

const cardTarget = {
    canDrop(props) {
        return true
    },
    drop(props) {
        return { name: props.name}
    }
}
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}


class CardBin extends Component {
  render() {
      const { canDrop, isOver, connectDropTarget } = this.props
      const isActive = canDrop && isOver;

      let backgroundColor = '#222'
      if(isActive){
          backgroundColor = 'darkgreen'
      } else if (canDrop) {
          backgroundColor = 'darkkhaki'
      }

      const style = { height: '12rem', width: '12rem', padding: '1rem', float: 'left', 'background-color': backgroundColor}



      const cardArr = [this.props.name + 'a', this.props.name + 'b',this.props.name + 'c',]
    return connectDropTarget(
      <div style={style}>
        {isActive ? 'Release the card' : 'Drag card here'}
        {cardArr.map(card => <Card name={card}/>)}
      </div>
    );
  }
}
CardBin.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
}

export default DropTarget(ItemTypes.CARD, cardTarget, collect)(CardBin);
