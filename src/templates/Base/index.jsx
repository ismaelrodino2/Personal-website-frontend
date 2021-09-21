import AboutSection from '../../components/AboutSection';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProjectsSection } from '../../components/ProjectsSection';
import { SkillsSection } from '../../components/SkillsSection';
import { TimeLine } from '../../components/TimeLine';
import mock from './mock';

export const Base = () => {
  return (
    <>
      <Header
        background={mock.background}
        title={mock.title}
        description={mock.description}
      />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <TimeLine />
      <Footer footer={mock.footer} />
    </>
  );
};
