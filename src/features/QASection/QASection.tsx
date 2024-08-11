import { BrowserView, MobileView } from 'react-device-detect';
import { QABrowser } from './views/QABrowser';
import { QAMobile } from './views/QAMobile';

export const QASection = () => {
  return (
    <>
      <BrowserView>
        <QABrowser />
      </BrowserView>
      <MobileView>
        <QAMobile />
      </MobileView>
    </>
  );
};
