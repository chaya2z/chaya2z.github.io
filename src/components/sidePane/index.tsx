import { Box } from '@primer/react';
import React from 'react';

import Pages from '@/components/sidePane/Pages';
import Profile from '@/components/sidePane/Profile';

const SidePane = () => {
  return (
    <Box display={'grid'} gridRow={1} gridRowGap={4}>
      <Profile />
      <Pages />
    </Box>
  );
};

export default SidePane;
