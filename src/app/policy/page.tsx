'use client';

import { Heading, Text } from '@primer/react';
import Link from 'next/link';

const SitePolicy = () => {
  return (
    <section>
      <Text as={'p'}>本ウェブサイト ( blog.chaya2z.com ) では、以下のプライバシーポリシーを定めております。</Text>
      <Heading>1. Cookie について</Heading>
      <Text as={'p'}>本ウェブサイトではアクセス解析のため Cookie を使用しています。</Text>

      <Heading>2. Google アナリティクスについて</Heading>
      <Text as={'p'}>
        本ウェブサイトではアクセス解析のため Google アナリティクスを使用しています。規約についての詳しい内容は Google
        の下記のページをご確認ください。
      </Text>
      <Link href={'https://policies.google.com/technologies/partner-sites?hl=ja'}>
        <Text as={'p'}>ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用</Text>
      </Link>
    </section>
  );
};

export default SitePolicy;
