import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useEffect, useState } from 'react';

type CarouselOptionType = {
  id: string;
  fullName: string;
  city: string;
  comment: string;
};

type FeedbackMobileProps = {
  options: Array<CarouselOptionType>;
};

export const FeedbackMobile = ({ options }: FeedbackMobileProps) => {
  const stackedOptions = [];
  for (
    let i = 0;
    i < options.length;
    i += window.screen.availWidth < 768 ? 1 : 2
  ) {
    const chunk = options.slice(
      i,
      i + (window.screen.availWidth < 768 ? 1 : 2)
    );
    stackedOptions.push(chunk);
  }

  return (
    <Box
      width="100%"
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
          navButtonsAlwaysInvisible
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
                      // sx={{
                      //   width: 'fit-content',
                      // }}
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
