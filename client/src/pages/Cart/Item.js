import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

class Item extends Component {
    render() {
       return (
           <div>
               <Card>
                    <CardMedia>
                       <Typography>
                           Test
                       </Typography>
                    </CardMedia>
               </Card>
           </div>
       )
    }
}

export default Item