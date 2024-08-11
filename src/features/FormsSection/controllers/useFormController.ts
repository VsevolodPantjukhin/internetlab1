import { sendForm } from '../api/sendFrom';

type FormControllerArgs = {
  firstName: string;
  phone: string;
  agreement: boolean;
};

export const useFormController = () => {
  const handleSendForm = (params: FormControllerArgs) => {
    sendForm({ params: params });
  };

  return handleSendForm;
};
