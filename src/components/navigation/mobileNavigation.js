import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

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
        <BottomNavigationAction label="Juegos" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Boletos" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Resultados" icon={<DateRangeIcon />} />
        <BottomNavigationAction label="Notificaciones" icon={
          <Badge className={classes.margin} badgeContent={4} color="primary">
            <NotificationsNoneIcon />
          </Badge>
        } />
  
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

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNavigation));