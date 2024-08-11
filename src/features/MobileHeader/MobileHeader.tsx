import { Box, Stack } from '@mui/material';
import { HeaderTitle } from '@/shared/UI/HeaderTitle/HeaderTitle';
import { MobileNavbar } from '@/features/MobileNavbar/MobileNavbar';

export const MobileHeader = () => {
  return (
    <Box
      width="100%"
      height="80px"
      position="absolute"
      top={0}
      sx={{ backgroundColor: 'transparent' }}
      alignContent="center"
    >
      <Stack
        width="90%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        ml="auto"
        mr="auto"
      >
        <HeaderTitle />
        <MobileNavbar />
      </Stack>
    </Box>
  );
};
