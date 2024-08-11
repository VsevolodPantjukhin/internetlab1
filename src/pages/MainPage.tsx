import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from 'react-scroll';
import { useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Header } from '@/widgets/Header/Header';
import { MainSection } from '@/features/MainSection/MainSection';
import { HowItWorksSection } from '@/features/HowItWorksSection/HowItWorksSection';
import { ThirdSection } from '@/features/ThirdSection/ThirdSection';
import { FeedbackSection } from '@/features/FeedbackSection/FeedbackSection';
import { QASection } from '@/features/QASection/QASection';
import { ParagraphsSection } from '@/features/ParagraphsSection/ParagraphsSection';
import './MainPage.css';
import { Box, Stack } from '@mui/material';
import { FormsSection } from '@/features/FormsSection/FormsSection';
import { Footer } from '@/features/Footer/Footer';

export const MainPage = () => {
  return (
    <Box width="100%" sx={{ backgroundColor: 'transparent' }}>
      <Header />
      <Stack gap={10}>
        <MainSection />
        <Element name="section-1">
          <HowItWorksSection />
        </Element>
        <Element name="section-2">
          <ThirdSection />
        </Element>
        <FeedbackSection />
        <Element name="section-3">
          <QASection />
        </Element>
        <ParagraphsSection />
        <Element name="section-4">
          <FormsSection />
        </Element>
        <Footer />
      </Stack>
    </Box>
  );
};
