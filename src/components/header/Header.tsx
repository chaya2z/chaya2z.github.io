import { Header as PrimerHeader, Text } from '@primer/react';

const BLOG_TITLE = '海底タランテラ';
const SUB_TITLE = '技術と雑記';

const Header = () => {
  return (
    <PrimerHeader>
      <PrimerHeader.Item>
        <PrimerHeader.Link href="/">
          <Text fontSize={3}>{BLOG_TITLE}</Text>
        </PrimerHeader.Link>
      </PrimerHeader.Item>
      <PrimerHeader.Item full>
        <Text fontSize={2}>{SUB_TITLE}</Text>
      </PrimerHeader.Item>
      <PrimerHeader.Item>
        <PrimerHeader.Link href="/posts">
          <Text fontSize={2}>Posts</Text>
        </PrimerHeader.Link>
      </PrimerHeader.Item>
      <PrimerHeader.Item>
        <PrimerHeader.Link href="/about">
          <Text fontSize={2}>About</Text>
        </PrimerHeader.Link>
      </PrimerHeader.Item>
    </PrimerHeader>
  );
};

export default Header;
