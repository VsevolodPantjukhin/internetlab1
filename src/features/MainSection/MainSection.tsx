import { BrowserView, MobileView } from 'react-device-detect';
import { MainSectionBrowser } from './views/MainSectionBrowser';
import { MainSectionMobile } from './views/MainSectionMobile';

export const MainSection = () => {
  return (
    <>
      <BrowserView>
        <MainSectionBrowser />
      </BrowserView>
      <MobileView>
        <MainSectionMobile />
      </MobileView>
    </>
  );
};
