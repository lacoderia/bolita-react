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
import Divider from '@material-ui/core/Divider';
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
  },
  expansionPanelSummary: {
    padding: 0,
  }
});

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
                          <Typography variant="body1">
                                {item.bets}
                              </Typography>
                        </ListItem>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Divider />
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
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