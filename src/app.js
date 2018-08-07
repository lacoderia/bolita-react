import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import DashboardView from './views/dashboard/dashboardView';


const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
}

class App extends Component {

  state = {
    validatedSession: false
  }

  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <React.Fragment>
          <CssBaseline />
          <Switch>
            <Route path="/dashboard" component={DashboardView}/>
            <Redirect to="/dashboard" />
          </Switch>
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default withStyles(styles)(withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App)));
