import React, { Component } from 'react';
import { DragSource } from 'react-dnd'
import ItemTypes from './ItemTypes'
import PropTypes from 'prop-types'

const cardSource = {
    beginDrag(props) {
        return {
            name: props.name
        }
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult()
        console.log(dropResult, item)

        if (dropResult) {
            window.alert('You Dropped ' + item.name + ' into ' + dropResult.name)
        }
    }
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}



class Card extends Component {
  render() {
      const { isDragging, connectDragSource, name } = this.props
      const opacitiy = isDragging ? 0.4 : 1;

      const style = { height: '4rem', 'min_width': '4rem', color: 'white', padding: '1rem', 'background-color': '#26D', float: 'left', opacitiy: opacitiy};
    return connectDragSource(
      <div style={style} >
        {name}
      </div>
    );
  }
}
Card.propTyle = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
