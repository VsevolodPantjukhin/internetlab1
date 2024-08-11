import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import { SectionItem } from '../components/SectionItem';

export const HowItWorksBrowser = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="281px"
      width="100%"
    >
      <Stack direction="column" gap={8}>
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
        <List>
          <Stack direction="row" display="flex">
            <ListItem>
              <SectionItem
                variant="desktop"
                picture="waiting"
                title="Прочитай задание внимательно"
                content="Думаю у тебя не займет это больше двух-трех минут"
              />
            </ListItem>
            <ListItem>
              <SectionItem
                variant="desktop"
                picture="delivery"
                title="Изучи весь макет заранее"
                content="Подумай как это будет работать на разных разрешщениях и при скролле"
              />
            </ListItem>
            <ListItem>
              <SectionItem
                variant="desktop"
                picture="secure"
                title="Сделай хорошо"
                content="Чтобы мы могли тебе доверить подобные задачи в будущем"
              />
            </ListItem>
            <ListItem>
              <SectionItem
                variant="desktop"
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
