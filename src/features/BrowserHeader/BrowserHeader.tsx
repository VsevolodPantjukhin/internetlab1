import { Box, Stack } from '@mui/material';
import { HeaderTitle } from '@/shared/UI/HeaderTitle/HeaderTitle';
import { Navbar } from '@/features/Navbar/Navbar';
export const BrowserHeader = () => {
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
        width="50%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        ml="auto"
        mr="auto"
      >
        <HeaderTitle />
        <Navbar />
      </Stack>
    </Box>
  );
};
