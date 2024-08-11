import {
  Box,
  Stack,
  Typography,
  TextField,
  Checkbox,
  Button,
} from '@mui/material';
import { MaskedInput } from '@/shared/UI/MaskedInput/MaskedInput';

type SendFormArgs = {
  firstName: string;
  phone: string;
  agreement: boolean;
};

type FormProps = {
  firstName: string;
  phone: string;
  agreement: boolean;
  handleNameChange: (val: string) => void;
  handlePhoneChange: (val: string) => void;
  handleAgreementChange: (val: boolean) => void;
  handleSendForm: (args: SendFormArgs) => void;
};

export const FormsBrowser = ({
  firstName,
  phone,
  agreement,
  handleNameChange,
  handlePhoneChange,
  handleAgreementChange,
  handleSendForm,
}: FormProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      pb="50px"
    >
      <Stack direction="column" alignItems="center" width="100%" gap={5}>
        <Typography
          fontFamily="Graphik"
          fontWeight={600}
          fontSize="40px"
          lineHeight="56px"
        >
          Отправь форму
        </Typography>
        <Box
          width="90%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Stack direction="row" flexWrap="wrap" gap={2} width="100%">
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={2}
              width="100%"
              justifyContent="center"
            >
              <Box width="300px">
                <TextField
                  fullWidth
                  label="Имя"
                  value={firstName}
                  onChange={(e) => handleNameChange(e.target.value)}
                />
              </Box>
              <Box width="300px">
                <TextField
                  inputProps={{ min: 0 }}
                  fullWidth
                  label="Телефон"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  InputProps={{
                    inputComponent: MaskedInput,
                  }}
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={2}
              width="100%"
              justifyContent="center"
            >
              <Box width="300px">
                <Stack direction="row" alignItems="center">
                  <Checkbox
                    checked={agreement}
                    onChange={(e) => handleAgreementChange(e.target.checked)}
                  />
                  <Typography>Согласен, отказываюсь</Typography>
                </Stack>
              </Box>
              <Box width="300px">
                <Button
                  variant="contained"
                  disabled={!firstName && !phone && !agreement}
                  fullWidth
                  onClick={() =>
                    handleSendForm({ firstName, phone, agreement })
                  }
                  sx={{
                    borderRadius: '4px',
                    height: '100%',
                  }}
                >
                  <Typography
                    fontFamily="Graphik"
                    fontWeight={400}
                    fontSize="20px"
                    lineHeight="24px"
                    textTransform="none"
                  >
                    Отправить
                  </Typography>
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
