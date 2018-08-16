import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
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
    overflowY: 'auto',
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
  },
  expansionPanelSummary: {
    padding: 0,
  },
  expansionPanelContent: {
    margin: `${theme.spacing.unit}px 0`,
  },
  expansionPanelDetails: {
    padding: 0,
  }
});

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

class Tickets extends Component {
  state = {
    tab: 0,
    expanded: null
  };

  handleTabChange = (event, tab) => {
    this.setState({ tab });
  };

  handleExpansionChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { tab, expanded } = this.state;

    return(
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="caption" align="center" className={classes.headingText}>
            Consulta tus jugadas
          </Typography>
        </div>
        <AppBar position="static" color="default">
          <Tabs
            value={tab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Activas" className={classes.tab}/>
            <Tab label="Todas" className={classes.tab}/>
            <Tab label="Ganadoras" className={classes.tab}/>
          </Tabs>
        </AppBar>
        <Grid container spacing={8} className={classes.content}>
          { tickets.map(item => {
            return(
              <Grid item xs={12} md={6} key={item.id}>
                <div className={classes.card}>
                  <ExpansionPanel 
                    elevation={0}
                    expanded={expanded === item.id} 
                    onChange={this.handleExpansionChange(item.id)}
                  >
                    <ExpansionPanelSummary 
                      expandIcon={<ExpandMoreIcon />}
                      classes={{
                        content: classes.expansionPanelContent
                      }}
                      className={classes.expansionPanelSummary}
                    >
                      <ListItem key={item.id}>
                        <ListItemAvatar>
                          <Avatar src={item.img} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.type}
                          secondary={item.time}
                        />
                        <Typography variant="body1" style={{marginRight: '24px'}}>
                          {item.bets}
                        </Typography>
                      </ListItem>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Table className={classes.table}>
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
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

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