import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, CssBaseline, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withThemeCreator } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  logo: {
    justifyContent: 'left',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    color: '#fafafa',
    padding: 'auto',
    backgroundColor: theme.palette.secondary.main,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const logo = require('../assets/images/logo.png').default;
  const classes = useStyles();
  const { title, sections } = props;
  return (
    <AppBar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Button size="small">
          <img src={logo} alt="logo" className={classes.logo} />
        </Button>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
