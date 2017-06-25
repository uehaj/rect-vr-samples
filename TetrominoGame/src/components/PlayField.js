import React from 'react';
import { Text, View, Box, SpotLight } from 'react-vr';
import { connect } from 'react-redux';
import * as Board from '../game/board';

function getColor(color) {
  switch (color) {
  case 'wall': return 'brown';
  case 'block': return 'red';
  case 1: return 'red';
  case 2: return 'blue';
  case 3: return 'orange';
  case 4: return 'yellow';
  case 5: return 'cyan';
  case 6: return 'magenta';
  case 7: return 'green';
  default: return 'black';
  }
}

const Block = (props) => {
  const {x, y, color} = props;
  const style = {
    color: getColor(color),
    transform: [{ translate: [x, y, -30] }],
  };
  return (<Box style={style} lit={true} />);
};

const PlayField = (props) => {
  const board = (props.currentPiece) ? props.currentPiece.setTo(props.board) : (props.board);
  return (
    <View>
      <SpotLight />
      {/*
      <style jsx>{`
        .board {
          height: 14px;
        }
        .empty {
            box-sizing: border-box;
            display: inline-block;
            background-color: #eeeeff;
            height: 14px;
            width: 14px;
            border-left: 1px solid #9999ff;
            border-top: 1px solid #9999ff;
        }
        .wall {
            box-sizing: border-box;
            display: inline-block;
            height: 14px;
            width: 14px;
            background-color: brown;
            border: 3px outset brown;
        }
        .block {
            box-sizing: border-box;
            display: inline-block;
            height: 14px;
            width: 14px;
            border: 2px outset;
        }
        .block1 {
            background-color: red;
        }
        .block2 {
            background-color: blue;
        }
        .block3 {
            background-color: orange;
        }
        .block4 {
            background-color: yellow;
        }
        .block5 {
            background-color: cyan;
        }
        .block6 {
            background-color: magenta;
        }
        .block7 {
            background-color: green;
        }
      `}
      </style>*/}
      {
        board && board.slice(1).map((row, y) => (
          <View key={`${y}`} >
            {
              row.map((cell, x) => {
                if (cell === Board.W) {
                  return <Block x={x} y={-y} color={"wall"} />;
                }
                else if (cell !== 0) {
                  return <Block x={x} y={-y} color={cell} />;
                }
              })
            }
          </View>
          ))
      }
    </View>
  );
};

export default connect(state => state, dispatch => ({ dispatch }))(PlayField);
