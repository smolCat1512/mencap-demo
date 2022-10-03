import { FC, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { useFormContext } from './hooks/useFormContext';
import { useVideoContext } from './hooks/useVideoContext';
import { useVoiceContext } from './hooks/useVoiceContext';
import { RaceConnect } from './components/RaceConnect/WidgetLoader';

export const App: FC = () => {

  const { init: videoInit } = useVideoContext();
	const { init: voiceInit } = useVoiceContext();
	const { init: formInit } = useFormContext();

	useEffect(() => {
		// flexChatInit();
		voiceInit();
		videoInit();
		formInit();
	}, []);

  return (
    <>
      <Header />
      <Hero />
	  <RaceConnect />
    </>
  );
}
