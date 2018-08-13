import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import nextGamesMock from './nextGamesConstant';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  heading: {
    backgroundColor: theme.palette.primary.main,
    marginTop: '-2px',
    paddingBottom: theme.spacing.unit,
    zIndex: theme.zIndex.appBar + 1,
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
  action: {
    right: theme.spacing.unit * 2,
  },
  playContent: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  actions: {
    display: 'flex',
  },
});

const playTypes = [
  {
    value: 'Directa 4',
    label: 'Directa 4',
  },
  {
    value: 'Directa 3',
    label: 'Directa 3',
  },
  {
    value: 'Par inicial',
    label: 'Par inicial',
  },
  {
    value: 'Par final',
    label: 'Par final',
  },
  {
    value: 'Inicial',
    label: 'Inicial',
  },
  {
    value: 'Final',
    label: 'Final',
  },
];

class NextGames extends Component {

  state = {
    view: 'nextGames',
    playType: 'Directa 4',
    number: '',
    amount: ''
  }

  showPlayView = () => {
    this.setState({view: 'play'})
  }

  showSummaryView = () => {
    this.setState({view: 'summary'})
  }

  showPaymentView = () => {
    this.setState({view: 'payment'})
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { view } = this.state;

    return(
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="caption" align="center" className={classes.headingText}>
          Juega uno de los próximos sorteos
          </Typography>
        </div>
        { view == "nextGames" && (
          <Grid container direction="column" spacing={8} className={classes.content}
          >
            { nextGamesMock.map((item) => {
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
                        <ListItemSecondaryAction className={classes.action}>
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
                    </List>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        )}
          { view == 'play' && (
            <React.Fragment>
              <Grid item>
                <Card>
                  <CardContent>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src="/images/logo-tris.gif" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Tris"
                        secondary="17 ago - 20:00"
                      />
                    </ListItem>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item >
                <Card>
                  <CardContent>
                    <div className={classes.playContent}>
                      <Typography variant="subheading">
                        Elige tu jugada
                      </Typography>
                      <TextField
                        id="select-currency"
                        select
                        label="Apuesta"
                        className={classes.textField}
                        value={this.state.playType}
                        onChange={this.handleChange('playType')}
                        SelectProps={{
                          MenuProps: {
                            className: classes.menu,
                          },
                        }}
                        margin="normal"
                      >
                        {playTypes.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        id="number"
                        label="Número"
                        value={this.state.age}
                        onChange={this.handleChange('number')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                      <TextField
                        id="number"
                        label="Cantidad"
                        value={this.state.age}
                        onChange={this.handleChange('amount')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                      <Typography variant="subheading">
                        Puedes ganar $50,000
                      </Typography>
                      
                    </div>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                      <Typography variant="subheading">
                        Total: $5
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        size="small"
                        onClick={this.showSummaryView}
                      >
                        Jugar
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            </React.Fragment>
          )}
          { view == 'summary' && (
            <React.Fragment>
            </React.Fragment>
          )}
          { view == 'payment' && (
            <React.Fragment>
              <Grid item>
                <Card>
                </Card>
              </Grid>
            </React.Fragment>
          )}
      </div>
    )
  }
  
};

export default withStyles(styles)(NextGames);