import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import classNames from 'classnames';

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
  action: {
    right: theme.spacing.unit * 2,
  },
  padding16: {
    padding: theme.spacing.unit * 2,
  },
  paddingTop16: {
    paddingTop: theme.spacing.unit * 2,
  },
  playFooter: {
    textAlign: 'right',
  },
  tableHead: {
    height: 48,
  },
  total: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  totalText: {
    color: theme.palette.primary.main,
    flex: 1,
  },
  totalButton: {
    marginLeft: 'auto',
  },
  twoColumns: {
    display: 'flex',
    marginLeft: `-${theme.spacing.unit * 2}px`,
    marginRight: `-${theme.spacing.unit * 2}px`,
  },
  twoColumnsItem: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
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

const plays = [
  {
    id: 1,
    type: 'Directa 3',
    number: '854',
    amount: '$2'
  },
  {
    id: 2,
    type: 'Par final',
    number: '29',
    amount: '$5'
  }
]

function CustomValidThrough(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

function CustomCardNumber(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ']}
      placeholderChar={'\u2000'}
    />
  );
}

class NextGames extends Component {

  state = {
    view: 'nextGames',
    playType: 'Directa 4',
    number: '',
    amount: '',
    tab: 0,
    dialog: false,
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

  handleDialogOpen = () => {
    this.setState({dialog: true});
  }

  handleDialogClose = () => {
    this.setState({dialog: false});
    this.setState({view: 'nextGames'});
  }

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
                            primary={`${item.type}`}
                            secondary={`${item.time}`}
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
                        primary="Tris - Medio día"
                        secondary="16 de agosto"
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
                        value={this.state.number}
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
                        <InputLabel htmlFor="adornment-amount">Importe</InputLabel>
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
                    <div className={classNames(classes.padding16, classes.playFooter)}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="medium"
                        onClick={this.showSummaryView}
                      >
                        Continuar
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
                    <div className={classes.paddingTop16}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow className={classes.tableHead}>
                            <TableCell>Apuesta</TableCell>
                            <TableCell numeric>Número</TableCell>
                            <TableCell numeric>Importe</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {plays.map(row => {
                            return (
                              <TableRow className={classes.row} key={row.id}>
                                <TableCell>{row.type}</TableCell>
                                <TableCell numeric>{row.number}</TableCell>
                                <TableCell numeric>{row.amount}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                    <div className={classNames(classes.padding16, classes.total)}>
                      <Typography variant="subheading" gutterBottom className={classes.totalText}>
                        Total a pagar: $7
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="medium"
                        onClick={this.showPaymentView}
                      >
                        Continuar
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
          { view == 'payment' && (
            <React.Fragment>
              <div className={classes.heading}>
                <Typography variant="caption" align="center" className={classes.headingText}>
                  Elige tu método de pago
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
                  <Tab label="Tarjeta de crédito" className={classes.tab}/>
                  <Tab label="Paypal" className={classes.tab}/>
                </Tabs>
              </AppBar>
              <Grid container direction="column" spacing={8} className={classes.content}>
                <Grid item>
                  <div className={classes.card}>
                  <Divider />
                    <div className={classes.padding16}>
                      <FormControl margin="normal">
                        <InputLabel htmlFor="cardNumber" shrink={true}>Número de tarjeta</InputLabel>
                        <Input
                          id="cardNumber"
                          value={this.state.cardNumber}
                          onChange={this.handleChange('cardNumber')}
                          inputComponent={CustomCardNumber}
                        />
                      </FormControl>
                      <div className={classes.twoColumns}>
                        <FormControl
                          margin="normal"
                          className={classes.twoColumnsItem}
                        >
                          <InputLabel htmlFor="formatted-valid-through" shrink={true}>Fecha de vencimiento</InputLabel>
                          <Input
                            id="formatted-valid-through"
                            value={this.state.validThrough}
                            onChange={this.handleChange('validThrough')}
                            inputComponent={CustomValidThrough}
                          />
                        </FormControl>
                        <FormControl 
                          margin="normal"
                          className={classes.twoColumnsItem}
                        >
                          <InputLabel htmlFor="adornment-cvv" shrink={true}>CVV</InputLabel>
                          <Input
                            id="adornment-cvv"
                            value={this.state.cvv}
                            onChange={this.handleChange('cvv')}
                            type="number"
                          />
                        </FormControl>
                      </div>
                    </div>
                    <div className={classNames(classes.padding16, classes.total)}>
                      <Typography variant="subheading" gutterBottom className={classes.totalText}>
                        Total a pagar: $7
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        size="medium"
                        onClick={this.handleDialogOpen}
                      >
                        Realizar pago
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="xs"
                onEntering={this.handleEntering}
                aria-labelledby="confirmation-dialog-title"
                open={this.state.dialog}
              >
                <DialogTitle id="confirmation-dialog-title">Pago exitoso</DialogTitle>
                <DialogContent>
                <Typography>
                    Hemos generado tu boleto. 
                  </Typography>
                  <Typography>
                    !Mucha suerte!
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleDialogClose} color="primary">
                    Aceptar
                  </Button>
                </DialogActions>
              </Dialog>
            </React.Fragment>
          )}
      </div>
    )
  }
  
};

export default withStyles(styles)(NextGames);