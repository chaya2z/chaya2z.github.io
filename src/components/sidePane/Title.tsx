import { Heading } from '@primer/react';

const SidePaneTitle = ({ title }: { title: string }) => {
  return <Heading sx={{ fontSize: 4, mb: 2 }}>{title}</Heading>;
};

export default SidePaneTitle;
