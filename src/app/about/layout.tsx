'use client';

import { Box, PageLayout } from '@primer/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLayout>
        <PageLayout.Content>
          <Box backgroundColor={'white'} padding={4} borderRadius={8}>
            {children}
          </Box>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
}
