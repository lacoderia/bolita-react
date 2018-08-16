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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import tickets from './ticketsConstant';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
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
  tab: {
    backgroundColor: 'white',
    textTransform: 'none',
  },
  content: {
    paddingBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
  },
  card: {
    backgroundColor: 'white',
  },
  cardActions: {
    display: 'flex',
    alignItems: 'center',
  },
  cardActionsButton: {
    color: theme.palette.primary.main,
  }
});

class Tickets extends Component {
  state = {
    tab: 0,
    tickets: tickets
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="caption" align="center" className={classes.headingText}>
            Consulta tus boletos
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
            <Tab label="Activos" className={classes.tab}/>
            <Tab label="Todos" className={classes.tab}/>
            <Tab label="Ganadores" className={classes.tab}/>
          </Tabs>
        </AppBar>
        <Grid container spacing={8} className={classes.content}>
          { tickets.map(item => {
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
                        secondary={item.time}
                      />
                      <ListItemSecondaryAction>
                        <div className={classes.cardActions}>
                          <Typography variant="body1">
                            {item.bets}
                          </Typography>
                          <IconButton aria-label="Ver más" className={classes.cardActionsButton}>
                            <AddCircleOutlineIcon />
                          </IconButton>
                        </div>
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

export default withStyles(styles)(Tickets);