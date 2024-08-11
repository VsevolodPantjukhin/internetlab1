import { Box, Stack, Typography } from '@mui/material';
import third from '@/shared/layout/pictures/3rd.png';
import truck from '@/shared/layout/pictures/truck.png';

export const ThirdMobile = () => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap-reverse"
      >
        <Stack width="90%" gap={1} alignItems="center" justifyContent="center">
          <Typography
            fontFamily="Graphik"
            fontWeight={600}
            fontSize="20px"
            lineHeight="24px"
            textAlign="center"
          >
            Круто, ты дошел до третьего блока
          </Typography>
          <Typography
            fontFamily="Graphik"
            fontWeight={400}
            fontSize="16px"
            lineHeight="28px"
            textAlign="center"
          >
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
          </Typography>
          <Typography
            fontFamily="Graphik"
            fontWeight={400}
            fontSize="16px"
            lineHeight="28px"
            textAlign="center"
          >
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </Typography>
        </Stack>
        <Box position="relative">
          <img src={third} alt="" width="265px" />
          <img
            width="265px"
            style={{ position: 'absolute', zIndex: -1, top: 0, right: 0 }}
            src={truck}
            alt=""
          />
        </Box>
      </Stack>
    </Box>
  );
};
