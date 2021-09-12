import { Typography, Container } from '@material-ui/core';
import React from 'react';

const Home = (props) => {
  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material-UI components
          with little customization.
        </Typography>
      </Container>
    </React.Fragment>
  );
};
export default Home;
