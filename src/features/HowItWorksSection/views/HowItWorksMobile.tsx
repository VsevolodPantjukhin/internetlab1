import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import { SectionItem } from '../components/SectionItem';

export const HowItWorksMobile = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Stack direction="column" gap={7} width="100%">
        <Typography
          fontFamily="Graphik"
          fontWeight={600}
          fontSize="40px"
          lineHeight="56px"
          color="#191C1F"
          textAlign="center"
        >
          Как это работает
        </Typography>
        <List
          sx={{
            width: '100%',
          }}
        >
          <Stack
            width="100%"
            direction="row"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
          >
            <ListItem sx={{ width: 'fit-content' }}>
              <SectionItem
                variant="mobile"
                picture="waiting"
                title="Прочитай задание внимательно"
                content="Думаю у тебя не займет это больше двух-трех минут"
              />
            </ListItem>
            <ListItem sx={{ width: 'fit-content' }}>
              <SectionItem
                variant="mobile"
                picture="delivery"
                title="Изучи весь макет заранее"
                content="Подумай как это будет работать на разных разрешщениях и при скролле"
              />
            </ListItem>
            <ListItem sx={{ width: 'fit-content' }}>
              <SectionItem
                variant="mobile"
                picture="secure"
                title="Сделай хорошо"
                content="Чтобы мы могли тебе доверить подобные задачи в будущем"
              />
            </ListItem>
            <ListItem sx={{ width: 'fit-content' }}>
              <SectionItem
                variant="mobile"
                picture="money"
                title="Получи предложение"
                content="Ну тут все просто, я не придумал правила, но думаю так, и будет)))"
              />
            </ListItem>
          </Stack>
        </List>
      </Stack>
    </Box>
  );
};
