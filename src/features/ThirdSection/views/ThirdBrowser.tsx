import { Box, Stack, Typography } from '@mui/material';
import third from '@/shared/layout/pictures/3rd.png';
import truck from '@/shared/layout/pictures/truck.png';

export const ThirdBrowser = () => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Stack width="592px" gap={5}>
          <Typography
            fontFamily="Graphik"
            fontWeight={600}
            fontSize="32px"
            lineHeight="40px"
          >
            Круто, ты дошел до третьего блока
          </Typography>
          <Typography
            fontFamily="Graphik"
            fontWeight={400}
            fontSize="16px"
            lineHeight="28px"
          >
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
          </Typography>
          <Typography
            fontFamily="Graphik"
            fontWeight={400}
            fontSize="16px"
            lineHeight="28px"
          >
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </Typography>
        </Stack>
        <Box position="relative">
          <img src={third} alt="" />
          <img
            style={{ position: 'absolute', zIndex: -1, top: 0, right: 0 }}
            src={truck}
            alt=""
          />
        </Box>
      </Stack>
    </Box>
  );
};
