'use client';

import { PageLayout } from '@primer/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLayout>
        <PageLayout.Content>{children}</PageLayout.Content>
      </PageLayout>
    </>
  );
}
