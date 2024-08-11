import { Box, Button, Stack, Typography } from '@mui/material';
import cover from '@/shared/layout/pictures/back.png';
export const MainSectionMobile = () => {
  return (
    <Box height="100vh">
      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',

          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
          position: 'absolute',

          zIndex: -99,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#2A6CEA',
            opacity: '70%',
            position: 'relative',
          }}
          width="100%"
          height="100%"
        ></Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Stack width="50%" alignItems="center" justifyContent="center" gap={2}>
          <Stack alignItems="center" justifyContent="center" gap={2}>
            <Typography
              fontFamily="Graphik"
              fontWeight={600}
              fontSize="32px"
              lineHeight="40px"
              color="white"
              textAlign="center"
            >
              Говорят, никогда не поздно сменить профессию
            </Typography>
            <Typography
              fontFamily="Graphik"
              fontWeight={400}
              fontSize="16px"
              lineHeight="28px"
              color="white"
              textAlign="center"
            >
              Сделай круто тестовое задание и у тебя получится
            </Typography>
          </Stack>
          <Button
            variant="contained"
            sx={{
              width: '251px',
              height: '64px',
              backgroundColor: '#ECEFF2',
              padding: '20px, 40px, 20px, 40px',
              borderRadius: '4px',
              gap: '10px',
            }}
          >
            <Typography
              fontFamily="Graphik"
              fontWeight={600}
              fontSize="20px"
              lineHeight="24px"
              color="#191C1F"
            >
              Проще простого!
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
