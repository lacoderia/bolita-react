import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DateRangeIcon from '@material-ui/icons/DateRange';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';

const styles = {
  root: {
    width: '100%',
  },
};

class MobileNavigation extends Component {

  state = {
    value: -1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    const { location } = this.props;

    switch(location.pathname) {
      case '/dashboard/proximos':
        this.setState({value: 0});
        break;
      case '/dashboard/boletos':
        this.setState({value: 1});
        break;
      case '/dashboard/resultados':
        this.setState({value: 2});
        break;
      default:
        this.setState({value: -1});
        break;
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
          component={Link}
          to="/dashboard/proximos"
          label="Jugar" 
          icon={<MonetizationOnIcon />} 
        />
        <BottomNavigationAction 
          component={Link}
          to="/dashboard/boletos"
          label="Boletos" 
          icon={<ReceiptIcon />} 
        />
        <BottomNavigationAction 
          component={Link}
          to="/dashboard/resultados"
          label="Resultados" 
          icon={<DateRangeIcon />} 
        />
        <BottomNavigationAction
          component={Link}
          to="/dashboard/notificaciones" 
          label="Notificaciones" 
          icon={
            <Badge className={classes.margin} badgeContent={4} color="secondary">
              <NotificationsNoneIcon />
            </Badge>
          } 
        />
  
      </BottomNavigation>
    );
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
)(MobileNavigation)));