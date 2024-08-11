import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserHeader } from '@features/BrowserHeader/BrowserHeader';
import { MobileHeader } from '@/features/MobileHeader/MobileHeader';
import { Box } from '@mui/material';

export const Header = () => {
  return (
    <Box height="80px" zIndex={10} position="absolute" width="100%" top={0}>
      <BrowserView style={{ height: '100%' }}>
        <BrowserHeader />
      </BrowserView>
      <MobileView>
        <MobileHeader />
      </MobileView>
    </Box>
  );
};
