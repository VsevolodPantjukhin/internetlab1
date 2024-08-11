import { Box, Stack, Typography } from '@mui/material';

type OptionsType = {
  title: string;
  content: string;
};

type ParagraphsBrowserProps = {
  options: Array<OptionsType>;
};

export const ParagraphsBrowser = ({ options }: ParagraphsBrowserProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      sx={{
        backgroundColor: '#F6F8FA',
      }}
      pt="50px"
      pb="50px"
    >
      <Stack
        width="80%"
        direction="row"
        gap={5}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {options.map((option) => {
          return (
            <Stack width="592px">
              <Typography
                fontFamily="Graphik"
                fontWeight={600}
                fontSize="18px"
                lineHeight="32px"
              >
                {option.title}
              </Typography>
              <Typography
                fontFamily="Graphik"
                fontWeight={400}
                fontSize="16px"
                lineHeight="28px"
              >
                {option.content}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};
