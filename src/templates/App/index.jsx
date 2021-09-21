import { createContext, useState } from 'react';
import AboutSection from '../../components/AboutSection';
import { Header } from '../../components/Header';
import { ProjectsSection } from '../../components/ProjectsSection';
import { SkillsSection } from '../../components/SkillsSection';
import { SwitchButton } from '../../components/SwitchButton';
import { ThemeProvider } from '../../providers/ThemeContext';
import { TimeLine } from '../../components/TimeLine';
import { Footer } from '../../components/Footer';
import { Base } from '../Base';

function Home() {
  return (
    <ThemeProvider>
      <Base />
    </ThemeProvider>
  );
}

export default Home;
