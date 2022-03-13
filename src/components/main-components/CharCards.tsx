import React from 'react'
import { CharacterData } from '../../utility'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

type MyProps = {
    layout: CharacterData[],
    handleClick: any,
}


 export const CharCards = ({layout, handleClick}: MyProps) => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        {layout.map((info) =>  {
                return <Box key={`${info.Name}`}>
                    <Card sx={{minWidth:"110px", maxWidth: "110px", border: "2px solid #a4a4a4"}} onClick={handleClick}>
                        <CardActionArea disableRipple>
                            <CardMedia sx={{backgroundColor: "rgba(74,95,121,255)"}}
                            component="img"
                            alt= {`${info.Name}`}
                            height="110px"
                            image= {`${info.url}`}
                            />
                            <CardContent sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: 0, backgroundColor: "#220000", color: "#b1adad", height: "43px" }}>
                                <Typography component="h2"> <Box sx={{textTransform: "uppercase", fontWeight:"bold", fontSize:"16px", textAlign: "center"}}> {`${info.Name}`}</Box> </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            })
        }
    </Box>
  )
}
