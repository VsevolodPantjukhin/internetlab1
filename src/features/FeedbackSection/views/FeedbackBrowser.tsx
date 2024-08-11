import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

type CarouselOptionType = {
  id: string;
  fullName: string;
  city: string;
  comment: string;
};

type FeedbackBrowserProps = {
  options: Array<CarouselOptionType>;
};

export const FeedbackBrowser = ({ options }: FeedbackBrowserProps) => {
  const stackedOptions = [];
  for (let i = 0; i < options.length; i += 3) {
    const chunk = options.slice(i, i + 3);
    stackedOptions.push(chunk);
  }

  return (
    <Box
      width="100%"
      height="564px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: '#F6F8FA',
      }}
    >
      <Stack width="100%" alignItems="center" height="90%" gap={5}>
        <Typography
          fontFamily="Graphik"
          fontWeight={600}
          fontSize="40px"
          lineHeight="56px"
        >
          Отзывы
        </Typography>
        <Carousel
          navButtonsAlwaysVisible
          navButtonsWrapperProps={{
            style: {
              height: '90%',
            },
          }}
          animation="slide"
          indicators
          autoPlay={false}
          sx={{
            width: '90%',
            height: '90%',
          }}
        >
          {stackedOptions.map((option, index) => {
            return (
              <Stack
                key={index}
                direction="row"
                gap={5}
                justifyContent="center"
              >
                {option.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      sx={{
                        width: '340px',
                      }}
                    >
                      <CardContent>
                        <Stack gap={2}>
                          <Stack direction="row" gap={2}>
                            <Avatar />
                            <Stack>
                              <Typography
                                fontFamily="Graphik"
                                fontWeight={600}
                                fontSize="16px"
                                lineHeight="24px"
                              >
                                {item.fullName}
                              </Typography>
                              <Typography
                                fontFamily="Graphik"
                                fontWeight={400}
                                fontSize="12px"
                                lineHeight="16px"
                              >
                                {item.city}
                              </Typography>
                            </Stack>
                          </Stack>
                          <Typography
                            fontFamily="Graphik"
                            fontWeight={400}
                            fontSize="14px"
                            lineHeight="24px"
                          >
                            {item.comment}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  );
                })}
              </Stack>
            );
          })}
        </Carousel>
      </Stack>
    </Box>
  );
};
