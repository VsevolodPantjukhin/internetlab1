import { Box, Divider, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box>
      <Divider />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="88px"
      >
        <Typography
          fontFamily="Graphik"
          fontWeight={400}
          fontSize="18px"
          lineHeight="32px"
        >
          © 2021 Лаборатория интернет
        </Typography>
      </Box>
    </Box>
  );
};
