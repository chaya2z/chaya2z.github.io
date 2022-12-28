import { NavList } from '@primer/react';
import Link from 'next/link';
import { ReactNode } from 'react';

import Container from '@/components/sidePane/Container';
import Title from '@/components/sidePane/Title';

const NavItemLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href} passHref>
      <div>{children}</div>
    </Link>
  );
};

const Pages = () => {
  return (
    <Container>
      <Title title={'Pages'} />
      <NavList>
        <NavItemLink href={'/'}>Home</NavItemLink>
        <NavItemLink href={'/posts'}>Posts</NavItemLink>
        <NavItemLink href={'/about'}>About</NavItemLink>
        <NavItemLink href={'/policy'}>Site Policy</NavItemLink>
      </NavList>
    </Container>
  );
};

export default Pages;
