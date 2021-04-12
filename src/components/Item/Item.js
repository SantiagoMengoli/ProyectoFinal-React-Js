import React from 'react';
import './Item.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
;


export const Item = ({ item }) => {
  const classes = useStyles();
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.foto}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <h3>{ item.nombre }</h3>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <h5>{ item.marca }</h5>
            <p>{ item.precio }</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );}

  export default function MediaCard() {
    
  }  

 
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


 
