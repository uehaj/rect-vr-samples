import React from 'react';
import { Text, View, Box } from 'react-vr';
import { connect } from 'react-redux';
import * as Board from '../game/board';

function getColor(color) {
  switch (color) {
    case 'wall':
      return 'brown';
    case 'block':
      return 'red';
    case 1:
      return 'red';
    case 2:
      return 'blue';
    case 3:
      return 'orange';
    case 4:
      return 'yellow';
    case 5:
      return 'cyan';
    case 6:
      return 'magenta';
    case 7:
      return 'green';
    default:
      return 'black';
  }
}

const Block = props => {
  const { x, y, color } = props;
  const style = {
    color: getColor(color),
    transform: [{ translate: [x, y, -30] }],
  };
  return (
    <Box
      dimWidth={0.99}
      dimDepth={0.99}
      dimHeight={0.99}
      style={style}
      lit={true}
    />
  );
};

const PlayField = props => {
  const board = props.currentPiece
    ? props.currentPiece.setTo(props.board)
    : props.board;
  return (
    <View>
      {board &&
        board.slice(1).map((row, y) =>
          <View key={`${y}`}>
            {row.map((cell, x) => {
              if (cell === Board.W) {
                return (
                  <Block
                    key={`${x}${y}${cell}`}
                    x={x}
                    y={10 - y}
                    color={'wall'}
                  />
                );
              } else if (cell !== 0) {
                return (
                  <Block
                    key={`${x}${y}${cell}`}
                    x={x}
                    y={10 - y}
                    color={cell}
                  />
                );
              }
            })}
          </View>
        )}
    </View>
  );
};

export default connect(state => state, dispatch => ({ dispatch }))(PlayField);
