'use client';

import { Heading, Text } from '@primer/react';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section>
      <Heading>このサイトについて</Heading>
      <Text as={'p'}>個人的ないろいろ</Text>
      <Link href={'/about'} passHref legacyBehavior>
        <Text fontSize={1} as={'a'} sx={{ textDecoration: 'none' }}>
          詳しく
        </Text>
      </Link>
    </section>
  );
};

export default About;
