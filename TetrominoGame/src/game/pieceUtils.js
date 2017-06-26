import * as Board from './board';

const PIECES = [
  [
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0], [2, 2, 2], [0, 0, 2]],
    [[0, 0, 0], [3, 3, 3], [3, 0, 0]],
    [[4, 4], [4, 4]],
    [[0, 0, 0], [0, 5, 5], [5, 5, 0]],
    [[0, 0, 0], [6, 6, 6], [0, 6, 0]],
    [[0, 0, 0], [7, 7, 0], [0, 7, 7]],
  ],
  [
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    [[0, 2, 0], [0, 2, 0], [2, 2, 0]],
    [[3, 3, 0], [0, 3, 0], [0, 3, 0]],
    [[4, 4], [4, 4]],
    [[5, 0, 0], [5, 5, 0], [0, 5, 0]],
    [[0, 6, 0], [6, 6, 0], [0, 6, 0]],
    [[0, 0, 7], [0, 7, 7], [0, 7, 0]],
  ],
  [
    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, 0], [2, 0, 0], [2, 2, 2]],
    [[0, 0, 0], [0, 0, 3], [3, 3, 3]],
    [[4, 4], [4, 4]],
    [[0, 0, 0], [0, 5, 5], [5, 5, 0]],
    [[0, 0, 0], [0, 6, 0], [6, 6, 6]],
    [[0, 0, 0], [7, 7, 0], [0, 7, 7]],
  ],
  [
    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    [[0, 2, 2], [0, 2, 0], [0, 2, 0]],
    [[0, 3, 0], [0, 3, 0], [0, 3, 3]],
    [[4, 4], [4, 4]],
    [[5, 0, 0], [5, 5, 0], [0, 5, 0]],
    [[0, 6, 0], [0, 6, 6], [0, 6, 0]],
    [[0, 0, 7], [0, 7, 7], [0, 7, 0]],
  ],
];

export const SPINS_NUM = PIECES.length;
export const PIECES_NUM = PIECES[0].length;

function isEmpty(cell) {
  return cell <= 0;
}

export function setPiece(board, xPos, yPos, piece, spin, unset = false) {
  const pieceArray = PIECES[spin][piece];
  let result = board;
  for (let y = 0; y < pieceArray.length; y += 1) {
    for (let x = 0; x < pieceArray[y].length; x += 1) {
      const cellToPut = unset ? 0 : pieceArray[y][x];
      if (!isEmpty(pieceArray[y][x])) {
        result = Board.updateCell(result, xPos + x, yPos + y, cellToPut);
      }
    }
  }
  return result;
}

export function unSetPiece(board, xPos, yPos, piece, spin) {
  return setPiece(board, xPos, yPos, piece, spin, true);
}

/*
 * Wheather you can put a piece onto the board position (xPos, yPos)
 * with the spin.
 */
export function canPut(board, xPos, yPos, piece, spin) {
  const pieceArray = PIECES[spin][piece];
  for (let y = 0; y < pieceArray.length; y += 1) {
    for (let x = 0; x < pieceArray[y].length; x += 1) {
      const cell = pieceArray[y][x];
      if (
        !isEmpty(cell) &&
        !isEmpty(Board.getCell(board, xPos + x, yPos + y))
      ) {
        return false;
      }
    }
  }
  return true;
}
