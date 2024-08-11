import { BrowserView, MobileView } from 'react-device-detect';
import { HowItWorksBrowser } from './views/HowItWorksBrowser';
import { HowItWorksMobile } from './views/HowItWorksMobile';

export const HowItWorksSection = () => {
  return (
    <>
      <BrowserView>
        <HowItWorksBrowser />
      </BrowserView>
      <MobileView>
        <HowItWorksMobile />
      </MobileView>
    </>
  );
};
