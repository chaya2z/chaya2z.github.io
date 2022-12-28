import { Box, Breadcrumbs } from '@primer/react';

const BreadCrumbs = ({ pathname }: { pathname: string[] }) => {
  let path = '/';
  const end = pathname.slice(-1).toString();

  return (
    <Box backgroundColor={'#dcdcdc'} paddingX={4} paddingY={2}>
      <Breadcrumbs>
        <Breadcrumbs.Item href={path}>Home</Breadcrumbs.Item>
        {pathname.map((element) => {
          path += element + '/';
          return (
            <Breadcrumbs.Item href={path} key={element} selected={element === end}>
              {element}
            </Breadcrumbs.Item>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbs;
