import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import nextGamesMock from './nextGamesConstant';
import classNames from 'classnames';

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
  padding16: {
    padding: `${theme.spacing.unit * 2}px`,
  },
  total: {
    display: 'flex',
    alignItems: 'center',
  },
  totalText: {
    color: theme.palette.primary.main,
    flex: 1,
  },
  totalButton: {
    marginLeft: 'auto',
  }
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
    view: 'summary',
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
        { view == "nextGames" && (
          <React.Fragment>
            <div className={classes.heading}>
              <Typography variant="caption" align="center" className={classes.headingText}>
                Juega uno de los próximos sorteos
              </Typography>
            </div>
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
          </React.Fragment>
        )}
          { view == 'play' && (
            <React.Fragment>
              <div className={classes.heading}>
                <Typography variant="caption" align="center" className={classes.headingText}>
                  Elige una jugada y coloca tu apuesta
                </Typography>
              </div>
              <Grid container direction="column" spacing={8} className={classes.content}>
                <Grid item>
                  <div className={classes.card}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src="/images/logo-tris.gif" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Tris"
                        secondary="17 ago - 20:00"
                      />
                    </ListItem>
                    <Divider />
                    <div className={classes.padding16}>
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
                      <FormControl 
                        className={classes.margin}
                        margin="normal"
                      >
                        <InputLabel htmlFor="adornment-amount">Cantidad</InputLabel>
                        <Input
                          id="adornment-amount"
                          value={this.state.amount}
                          onChange={this.handleChange('amount')}
                          type="number"
                          startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                      </FormControl>
                    </div>
                    <div className={classes.padding16}>
                      <Typography variant="subheading">
                        Podrías ganar $50,000
                      </Typography>
                    </div>
                    <div className={classNames(classes.padding16, classes.total)}>
                      <div className={classes.totalText}></div>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="medium"
                        onClick={this.showSummaryView}
                      >
                        Jugar
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
          { view == 'summary' && (
            <React.Fragment>
              <div className={classes.heading}>
                <Typography variant="caption" align="center" className={classes.headingText}>
                  Revisa tus jugadas y confirma tu pago 
                </Typography>
              </div>
              <Grid container direction="column" spacing={8} className={classes.content}>
                <Grid item>
                  <div className={classes.card}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src="/images/logo-tris.gif" />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Tris"
                        secondary="17 ago - 20:00"
                      />
                    </ListItem>
                    <Divider />
                    <div className={classes.padding16}>
                      
                    </div>  
                  </div>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
          { view == 'payment' && (
            <React.Fragment>
            </React.Fragment>
          )}
      </div>
    )
  }
  
};

export default withStyles(styles)(NextGames);