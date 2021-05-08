import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            In House Kitchens
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
