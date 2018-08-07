import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';


const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `0px 0 ${theme.spacing.unit * 2}px`,
  },
});

class Results extends Component {

  results = [
    {
      id: 1,
      type: 'Tris',
      img: '',
      date: '10/10/2018',
      time: '10 hrs',
      result: '7873',
      favorite: false
    },
    {
      id: 2,
      type: 'Loteria Nacional',
      img: '',
      date: '10/10/2018',
      time: '18 hrs',
      result: '9043',
      favorite: false
    },
    {
      id: 3,
      type: 'Loteria Nacional',
      img: '',
      date: '17/10/2018',
      time: '18 hrs',
      result: '1975',
      favorite: false
    },
    {
      id: 4,
      type: 'Tris',
      img: '',
      date: '17/10/2018',
      time: '10 hrs',
      result: '2490',
      favorite: false
    },
    {
      id: 5,
      type: 'Loteria Nacional',
      img: '',
      date: '24/10/2018',
      time: '18 hrs',
      result: '7913',
      favorite: false
    }
    
  ];

  toggleFavorite = id => {
    console.log(id);
  }

  render() {
    const { classes } = this.props;

    return(
      <Grid container spacing={16} className={classes.content}>
        <Grid item xs={12} md={6}>
          <Typography variant="title" className={classes.title}>
            Resultados
          </Typography>
          <div className={classes.demo}>
            <List>
              { this.results.map(item => {
                  return(
                    <ListItem key={item.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.type}
                        secondary={`${item.date} a las ${item.time}`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Marcar como favorito" onClick={this.toggleFavorite(item.id)}>
                          {item.favorite && <Star />}
                          {!item.favorite && <StarBorder />}
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
                }, this)}
            </List>
          </div>
        </Grid>
      </Grid>
    )
  }
  
};

export default withStyles(styles)(Results);