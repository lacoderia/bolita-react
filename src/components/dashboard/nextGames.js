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
import nextGamesMock from './nextGamesConstant';

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

  state = {
    view: 'nextGames'
  }

  showPlayView = () => {
    this.setState({view: 'play'})
  }

  render() {
    const { classes } = this.props;
    const { view } = this.state;

    return(
      <Grid container spacing={16} className={classes.content}>
        <Grid item xs={12} md={6}>
          { view == "nextGames" && (
            <React.Fragment>
              <Typography variant="title" className={classes.title}>
                Próximos juegos
              </Typography>
              <div className={classes.demo}>
                <List>
                  {
                    nextGamesMock.map((item) => {
                      return(
                        <ListItem key={item.id}>
                          <ListItemAvatar>
                            <Avatar>
                              <FolderIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.type}
                            secondary={`${item.date} - ${item.time}`}
                          />
                          <ListItemSecondaryAction>
                            <Button 
                              variant="outlined" 
                              color="primary" 
                              size="small"
                              onClick={this.showPlayView}
                            >
                              Jugar
                            </Button>
                          </ListItemSecondaryAction>
                        </ListItem>
                      )
                    })
                  }
                </List>
              </div>
            </React.Fragment>
          )}
          { view == 'play' && (
            <React.Fragment>
              <Typography variant="title" className={classes.title}>
                Let's play
              </Typography>
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    )
  }
  
};

export default withStyles(styles)(NextGames);