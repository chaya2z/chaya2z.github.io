import { Box } from '@primer/react';
import { ReactNode } from 'react';

const SidePaneContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box borderColor={'border.default'} borderBottomWidth={1} borderBottomStyle={'solid'} pb={3} width={296}>
      {children}
    </Box>
  );
};

export default SidePaneContainer;
