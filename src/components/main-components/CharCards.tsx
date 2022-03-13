import React from 'react'
import { CharacterData } from '../../utility'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


type MyProps = {
    layout: CharacterData[],
    handleClick: any,
}


 export const CharCards = ({layout, handleClick}: MyProps) => {
  return (
    <div>
        {layout.map((info) =>  {
                return <Box key={`${info.Name}`}>
                    <Card sx={{maxWidth: "150px"}} onClick={handleClick}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt= {`${info.Name}`}
                            height="200px"
                            image= {`${info.url}`}
                            />
                            <CardContent>
                                <h2>{`${info.Name}`}</h2>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            })
        }
    </div>
  )
}
