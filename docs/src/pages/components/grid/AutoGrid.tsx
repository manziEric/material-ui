import * as React from 'react';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as CSS from 'csstype';

const Item = styled(Paper)(({ theme }) => ({
  // TODO withStyles removal
  ...(theme.typography.body2 as CSS.Properties),
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
