import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOnOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import DateRangeIcon from '@material-ui/icons/DateRangeOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Badge from '@material-ui/core/Badge';
import grey from '@material-ui/core/colors/grey';

const styles = {
  root: {
    backgroundColor: 'black',
    width: '100%',
  },
  action: {
    color: '#f0f0f0',
  }
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
          label="Juegos" 
          icon={<MonetizationOnIcon />} 
          className={classes.action}
        />
        <BottomNavigationAction 
          component={Link}
          to="/dashboard/boletos"
          label="Boletos" 
          icon={<ReceiptIcon />} 
          className={classes.action}
        />
        <BottomNavigationAction 
          component={Link}
          to="/dashboard/resultados"
          label="Resultados" 
          icon={<DateRangeIcon />} 
          className={classes.action}
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
          className={classes.action}
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