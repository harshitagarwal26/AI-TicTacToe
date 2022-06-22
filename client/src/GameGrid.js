import React, { useState } from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import winCheck from './winCheck';
import { makeStyles } from '@material-ui/core/styles'
import bestMove from './minimax';
import DialogBox from './DialogBox';

const useStyles = makeStyles({
  root: {
    '&$disabled': {
      color: 'black',
      boxShadow: 'none',
    },
  },
  disabled: {
    color:'black'
  },
  label: {
    fontSize: '40px',
    fontFamily: 'carter one',
  }
});

const GameGrid = () => {
  const initialGrid = [...Array(3)].map(e => Array(3).fill(null));

  const [grid, setGrid] = useState(initialGrid);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const classes = useStyles();

  const turns = {
    X : 'O',
    O : 'X'
  };

  const handleCellClick = (rowIdx, colIdx) => {
    const newGrid = grid;
    newGrid[rowIdx][colIdx] = turn;
    const bestIndices = bestMove(newGrid);
    if (bestIndices)
      newGrid[bestIndices.i][bestIndices.j] = turns[turn];
    console.log(newGrid);
    console.log(turn);
    const possibleWinner = winCheck(newGrid);
    if (possibleWinner !== null){
      setWinner(possibleWinner);
    }
    setGrid([...newGrid]);
    setTurn(turn);
  }

  const handleReset = () => {
    setGrid(initialGrid);
    setTurn('X');
    setWinner(null);
  }

  const Cell = ({ cell, rowIdx, colIdx }) => {
    return (
      <div style={{width:'75px', height:'75px',backgroundColor: '#fff'}}>
        <Button style={{height:'100%', width:'100%'}} classes={{root:classes.root, disabled:classes.disabled, label:classes.label}} disabled={(cell!==null) || (winner!==null)} onClick={() => handleCellClick(rowIdx, colIdx)}>{cell}</Button>
      </div>
    )
  }

  return (
    <>
    <Grid style={{display:'flex', flexDirection:'column',alignItems:'center',}}>
      <Typography style={{fontSize:'30px', fontFamily:'quicksand'}}>Human's token : X</Typography>
      <Typography style={{fontSize:'30px', fontFamily:'quicksand'}}>AI's token : O</Typography>
      <Typography style={{fontSize:'20px', fontFamily:'quicksand'}}>Human goes first!</Typography>
    </Grid>
    <div key="grid" style={{display:'inline-block', padding:'16px'}}>
      <div key="grid-style" style={{
        backgroundColor : '#000',
        display: 'grid',
        // Our rows are equal to the length of our grid
        gridTemplateRows: `repeat(${grid.length}, 1fr)`,
        // Our columns are equal to the length of a row
        gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
        gridGap: 1,
      }}>
        {grid.map((row, rowIdx) => (
          row.map((cell, colIdx) => (
            <Cell key={`${rowIdx}-${colIdx}`} cell={cell} rowIdx={rowIdx} colIdx={colIdx} />
          ))
        ))}
      </div>
    </div>
    {winner ? <DialogBox winner={winner} /> : null}
    <div key="reset-button" style={{display:'flex',padding:'8px', justifyContent:'center'}}>
      <Button variant="contained" onClick={handleReset} color="primary">Reset</Button>
    </div>
    </>
  )
}

export default GameGrid
