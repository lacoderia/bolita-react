import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu } from '../navigation/navigationActions';

import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import EditIcon from '@material-ui/icons/EditOutlined';
import ExitToApp from '@material-ui/icons/ExitToApp';

const drawerWidth = 300;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    maxWidth: drawerWidth,
  },
  profile: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2 + 'px',
  },
  profileText: {
    color: 'white',
  },
  profileTextContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: 'auto',
  },
  avatar: {
    marginBottom: '16px',
    marginRight: '16px',
    height: '60px',
    width: '60px'
  },
});

class Menu extends Component {

  toggleMenu = () => {
    this.props.toggleMenu();
  }
  
  render() {
    const { classes, mobileOpen } = this.props;

    const drawer = (
      <div>
        <div className={classes.profile}>
          <Avatar src="/images/avatar.jpeg" className={classes.avatar}/>
          <div className={classes.profileTextContainer}>
            <div>
              <Typography variant="body2" className={classes.profileText}>
                Ricardo
              </Typography>
              <Typography variant="body1" noWrap className={classes.profileText}>
                rosas_schultz@hotmail.com
              </Typography>
            </div>
            <EditIcon className={classes.editIcon}/>
          </div>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Mi perfil" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Mis compras" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <React.Fragment>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={this.toggleMenu}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </React.Fragment>
    )
  }
}

const mapStateToProps = function mapStateToProps(state, props) {
  return {
    mobileOpen: state.get('navigation').get('mobileOpen'),
  };
};

function mapDispatchToProps(dispatch) {
  return Object.assign({},
    bindActionCreators({ toggleMenu }, dispatch),
  );
}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu));