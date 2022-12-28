import { Box, Text } from '@primer/react';

export default function Footer() {
  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'} marginY={4}>
      <small>&copy; 海底タランテラ chaya2z</small>
      <Text as={'span'}>Powered by GitHub Pages</Text>
    </Box>
  );
}
