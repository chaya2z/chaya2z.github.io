'use client';

import { Box, PageLayout } from '@primer/react';
import React, { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageLayout>
      <PageLayout.Content>
        <Box backgroundColor={'white'} padding={4} borderRadius={8}>
          {children}
        </Box>
      </PageLayout.Content>
    </PageLayout>
  );
};

export default HomeLayout;
