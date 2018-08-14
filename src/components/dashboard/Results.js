import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import results from './resultsConstant';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  tab: {
    backgroundColor: 'white',
    textTransform: 'none',
  },
  heading: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '-2px',
    paddingBottom: theme.spacing.unit,
    zIndex: theme.zIndex.appBar + 1
  },
  headingText: {
    color: 'white',
  },
  content: {
    paddingBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
  },
  card: {
    backgroundColor: 'white',
  },
  title: {
    margin: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
});

class Results extends Component {
  state = {
    tab: 0,
    results: results
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
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
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="caption" align="center" className={classes.headingText}>
            Consulta los resultados de los últimos sorteos
          </Typography>
        </div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.tab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Todos" className={classes.tab}/>
            <Tab label="Favoritos" className={classes.tab}/>
          </Tabs>
        </AppBar>
        <Grid container spacing={8} className={classes.content}>
          { results.map(item => {
            return(
              <Grid item xs={12} md={6} key={item.id}>
                <div className={classes.card}>
                  <List>
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
                  </List>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
  
};

export default withStyles(styles)(Results);