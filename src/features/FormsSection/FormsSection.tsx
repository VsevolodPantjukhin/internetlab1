import { BrowserView, MobileView } from 'react-device-detect';
import { FormsBrowser } from './views/FormsBrowser';
import { FormsMobile } from './views/Formsmobile';
import { useState } from 'react';
import { useFormController } from './controllers/useFormController';

export const FormsSection = () => {
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleSendForm = useFormController();
  return (
    <>
      <BrowserView>
        <FormsBrowser
          firstName={firstName}
          phone={phone}
          agreement={agreement}
          handleNameChange={(val: string) => setFirstName(val)}
          handlePhoneChange={(val: string) => setPhone(val)}
          handleAgreementChange={(val: boolean) => setAgreement(val)}
          handleSendForm={handleSendForm}
        />
      </BrowserView>
      <MobileView>
        <FormsMobile
          firstName={firstName}
          phone={phone}
          agreement={agreement}
          handleNameChange={(val: string) => setFirstName(val)}
          handlePhoneChange={(val: string) => setPhone(val)}
          handleAgreementChange={(val: boolean) => setAgreement(val)}
          handleSendForm={handleSendForm}
        />
      </MobileView>
    </>
  );
};
