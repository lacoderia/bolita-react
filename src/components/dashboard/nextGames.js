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
import Button from '@material-ui/core/Button';
import FolderIcon from '@material-ui/icons/Folder';


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

class NextGames extends Component {

  nextGames = [
    {
      id: 1,
      type: 'Tris',
      img: '',
      date: '10/10/2018',
      time: '10 hrs'
    },
    {
      id: 2,
      type: 'Loteria Nacional',
      img: '',
      date: '10/10/2018',
      time: '18 hrs'
    },
    {
      id: 3,
      type: 'Loteria Nacional',
      img: '',
      date: '17/10/2018',
      time: '18 hrs'
    },
    {
      id: 4,
      type: 'Tris',
      img: '',
      date: '17/10/2018',
      time: '10 hrs'
    },
    {
      id: 5,
      type: 'Loteria Nacional',
      img: '',
      date: '24/10/2018',
      time: '18 hrs'
    }
    
  ];

  render() {
    const { classes } = this.props;

    return(
      <Grid container spacing={16} className={classes.content}>
        <Grid item xs={12} md={6}>
          <Typography variant="title" className={classes.title}>
            Próximos juegos
          </Typography>
          <div className={classes.demo}>
            <List>
              {
                this.nextGames.map((item) => {
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
                        <Button variant="outlined" color="primary" size="small">
                          Jugar
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
                })
              }
            </List>
          </div>
        </Grid>
      </Grid>
    )
  }
  
};

export default withStyles(styles)(NextGames);