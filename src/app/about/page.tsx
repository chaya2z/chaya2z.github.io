'use client';

import { Heading, Text } from '@primer/react';

const About = () => {
  return (
    <section>
      <Heading>About</Heading>
      <Text as={'p'}>こんにちは。chaya2z です。</Text>
      <Text as={'p'}>このブログでは IT 技術や日記を投稿しています。個人的な備忘録が中心です。</Text>
    </section>
  );
};

export default About;
