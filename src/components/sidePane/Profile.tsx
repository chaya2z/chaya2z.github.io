import { Avatar, Text } from '@primer/react';

import Container from '@/components/sidePane/Container';
import Title from '@/components/sidePane/Title';

const Profile = () => {
  return (
    <Container>
      <Title title={'Profile'} />
      <Avatar alt={'icon'} size={80} src={'https://avatars.githubusercontent.com/u/58199341?v=4'} />
      <Text as={'p'} fontWeight={'bold'}>
        chaya2z
      </Text>
      <Text as={'span'}>ソフトウェアエンジニア</Text>
    </Container>
  );
};

export default Profile;
