import React from 'react'
import Box from '@mui/material/Box'
type MyProps = {
    maxScore: number,
    currScore: number,
}

export const ScoreBoard = ({maxScore, currScore}:MyProps) => {
  return (
    <Box sx={{backgroundColor: "#45515d", width: "100vw", padding: "20px"}}>
        <Box sx={{display: "flex", alignItems: "center"}}>
            <Box sx={{marginLeft: "350px", fontSize: "50px", fontStyle: "italic", paddingRight: "30px", fontWeight: "bold"}}>SCORE</Box>
            <Box sx={{width:"55px", borderRadius: "50%", backgroundColor: "#000b1e", color: "#88989d", padding: "10px", fontSize: "30px", textAlign: "center", border: "2px solid #819095"}}>{`${currScore}`}</Box>
            <Box sx={{borderRadius: "20px",textAlign: "center", border: "2px solid #91a0a5", width: "600px", color: "#dbdde1", backgroundColor: "#000a19", marginLeft: "50px", fontSize: "30px", paddingRight: "30px", fontWeight: "bold"}}>{`${maxScore}`}-Top Score!</Box>
        </Box >
    </Box>
  )
}
