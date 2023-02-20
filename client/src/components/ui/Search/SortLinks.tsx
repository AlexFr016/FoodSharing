/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event: React.SyntheticEvent): void => event.preventDefault();

export default function SortLinks(): JSX.Element {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 6,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#"> по времени заявки</Link>
      <Link href="#" color="inherit">
        по популярности
      </Link>
      <Link href="#">по скидке</Link>
    </Box>
  );
}

