import { Stack, Box, Typography } from '@mui/material';
type HeaderTitleProps = {
  textColor?: string;
};

export const HeaderTitle = ({ textColor = 'white' }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Stack direction="row">
        <Box
          width="24px"
          height="24px"
          sx={{ backgroundColor: '#2A6CEA', borderRadius: '50%' }}
          mr={-1.2}
          zIndex={2}
        />
        <Box
          width="24px"
          height="24px"
          sx={{ backgroundColor: '#ECEFF2', borderRadius: '50%' }}
          zIndex={1}
        />
        <Box />
      </Stack>
      <Typography
        fontFamily="Graphik"
        fontWeight={600}
        lineHeight="24px"
        color={textColor}
      >
        testLab
      </Typography>
    </Stack>
  );
};
