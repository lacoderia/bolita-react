import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import results from './resultsConstant';

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 1,
  },
  cardContent: {
    padding: '8px !important'
  },
  title: {
    margin: `8px 8px ${theme.spacing.unit * 2}px`,
  },
});

class Results extends Component {
  state = {
    results: results
  };

  toggleFavorite = gameId => {
    const resultsTemp = [...this.state.results];
    const selectedResult = resultsTemp.find(item => item.id === gameId);
    if (selectedResult) {
      selectedResult.favorite =  !selectedResult.favorite;
    }
    this.setState({
      results: resultsTemp
    });
  }

  render() {
    const { classes } = this.props;

    return(
      <Grid container spacing={16} className={classes.content}>
        <Grid item xs={12} md={6}>
          <Typography variant="title" className={classes.title}>
            Resultados
          </Typography>
          <Card>
            <CardContent>
              <List>
                { results.map(item => {
                  return(
                    <ListItem key={item.id}>
                      <ListItemAvatar>
                        <Avatar src={item.img} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.type}
                        secondary={`${item.date} - ${item.time}`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Marcar como favorito" onClick={() => this.toggleFavorite(item.id)}>
                          {item.favorite && <Star style={{color: '#ffcf33'}}/>}
                          {!item.favorite && <StarBorder style={{color: '#ffcf33'}}/>}
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
                })
              }
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
  
};

export default withStyles(styles)(Results);