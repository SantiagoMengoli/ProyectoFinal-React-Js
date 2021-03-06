import React from 'react';
import './Item.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {
  Link
} from "react-router-dom";



export const Item = ({ item }) => {
  const classes = useStyles();
    return (
      <div className="cardStyle">
      <Link to={`/item/${item.id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.foto}
          />
          <CardContent>
            <Typography gutterBottom>
            { item.nombre }
            </Typography>
            <Typography color="textSecondary">
            { item.marca }
            <br></br>
            { item.precio }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
      </div>
  );}

  export default function MediaCard() {
    
  }  

 
const useStyles = makeStyles({
  root: {
    width: 215,
  },
  media: {
    height: 220,
  },
});