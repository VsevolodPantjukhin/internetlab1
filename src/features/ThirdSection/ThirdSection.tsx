import { BrowserView, MobileView } from 'react-device-detect';
import { ThirdBrowser } from './views/ThirdBrowser';
import { ThirdMobile } from './views/ThirdMobile';

export const ThirdSection = () => {
  return (
    <>
      <BrowserView>
        <ThirdBrowser />
      </BrowserView>
      <MobileView>
        <ThirdMobile />
      </MobileView>
    </>
  );
};
