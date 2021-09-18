import { createContext, useState } from 'react';
import { Header } from '../../components/Header';
import { SwitchButton } from '../../components/SwitchButton';
import { ThemeProvider } from '../../providers/ThemeContext';

function Home() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default Home;
