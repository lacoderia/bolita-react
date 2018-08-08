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
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FolderIcon from '@material-ui/icons/Folder';
import nextGamesMock from './nextGamesConstant';

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 1,
  },
  cardContent: {
    padding: '8px !important'
  },
  playContent: {
    padding: '8px 16px'
  },
  title: {
    margin: `8px 8px ${theme.spacing.unit * 2}px`,
  },
  actions: {
    display: 'flex',
  },
  playButton: {
    marginLeft: 'auto',
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
      <Grid 
        container 
        direction="column"
        spacing={8}
        className={classes.content}
      >
        { view == "nextGames" && (
          <Grid item>
            <Typography variant="title" className={classes.title}>
              Próximos juegos
            </Typography>
            <Card>
              <CardContent>
                <List>
                  { nextGamesMock.map((item) => {
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
              </CardContent>
            </Card>
          </Grid>
        )}
        { view == 'play' && (
          <React.Fragment>
            <Grid item>
              <Card>
                <CardContent className={classes.cardContent}>
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
                <CardContent className={classes.cardContent}>
                  <div className={classes.playContent}>
                    <Typography variant="subheading" className={classes.title}>
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
                    <Typography variant="subheading" className={classes.title}>
                      Puedes ganar $50,000
                    </Typography>
                    
                  </div>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Typography variant="subheading" className={classes.title}>
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
      </Grid>
    )
  }
  
};

export default withStyles(styles)(NextGames);