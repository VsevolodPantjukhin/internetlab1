import { Stack, Typography } from '@mui/material';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <Link to="section-1" spy={true} smooth={true}>
        <Typography color="white" sx={{ cursor: 'pointer' }}>
          Как это работает?
        </Typography>
      </Link>
      <Link to="section-2" spy={true} smooth={true}>
        <Typography color="white" sx={{ cursor: 'pointer' }}>
          3-й блок
        </Typography>
      </Link>
      <Link to="section-3" spy={true} smooth={true}>
        <Typography color="white" sx={{ cursor: 'pointer' }}>
          Вопросы и ответы
        </Typography>
      </Link>
      <Link to="section-4" spy={true} smooth={true}>
        <Typography color="white" sx={{ cursor: 'pointer' }}>
          Форма
        </Typography>
      </Link>
    </Stack>
  );
};
