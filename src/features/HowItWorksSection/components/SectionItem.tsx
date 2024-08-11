import { Box, Stack, Typography } from '@mui/material';
import { ReactComponent as Waiting } from '@/shared/layout/svg/waiting.svg';
import { ReactComponent as Delivery } from '@/shared/layout/svg/delivery.svg';
import { ReactComponent as Secure } from '@/shared/layout/svg/secure.svg';
import { ReactComponent as Money } from '@/shared/layout/svg/money.svg';

type SectionItemProps = {
  picture?: 'waiting' | 'delivery' | 'secure' | 'money';
  title?: string;
  content?: string;
  variant?: 'desktop' | 'mobile';
};

export const SectionItem = ({
  variant,
  picture,
  title,
  content,
}: SectionItemProps) => {
  return (
    <Box width="280px">
      {variant === 'desktop' && (
        <Stack>
          <Box>
            {picture === 'waiting' && <Waiting />}
            {picture === 'delivery' && <Delivery />}
            {picture === 'secure' && <Secure />}
            {picture === 'money' && <Money />}
          </Box>
          <Typography
            fontFamily="Graphik"
            fontWeight={600}
            fontSize="16px"
            lineHeight="24px"
            color="#191C1F"
          >
            {title}
          </Typography>
          <Typography
            fontFamily="Graphik"
            fontWeight={400}
            fontSize="14px"
            lineHeight="24px"
            color="#5E646A"
          >
            {content}
          </Typography>
        </Stack>
      )}
      {variant === 'mobile' && (
        <Stack direction="row" gap={2}>
          <Box>
            {picture === 'waiting' && <Waiting />}
            {picture === 'delivery' && <Delivery />}
            {picture === 'secure' && <Secure />}
            {picture === 'money' && <Money />}
          </Box>
          <Stack direction="column">
            <Typography
              fontFamily="Graphik"
              fontWeight={600}
              fontSize="16px"
              lineHeight="24px"
              color="#191C1F"
            >
              {title}
            </Typography>
            <Typography
              fontFamily="Graphik"
              fontWeight={400}
              fontSize="14px"
              lineHeight="24px"
              color="#5E646A"
            >
              {content}
            </Typography>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};
