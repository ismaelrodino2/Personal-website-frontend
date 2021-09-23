import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import AboutSection from '../../components/AboutSection';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProjectsSection } from '../../components/ProjectsSection';
import { SkillsSection } from '../../components/SkillsSection';
import { TimeLine } from '../../components/TimeLine';
import { ThemeProvider } from '../../providers/ThemeContext';
import { Base } from '../Base';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/pages/?slug=portfolio');
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }

  if (data && !data.slug) {
    return <h1>Carregando</h1>;
  }
  const { sections, slug } = data;
  console.log(data);

  return (
    <ThemeProvider>
      {sections.map((section, index) => {
        const { sectionID, background_color, footer_text } = section;
        const key = `${slug}-${index}`;
        console.log(section);

        if (sectionID === 'section-one') {
          return <Header key={key} background={background_color} />;
        }

        if (sectionID === 'section-two') {
          return <AboutSection key={key} background={background_color} />;
        }

        if (sectionID === 'section-three') {
          return <ProjectsSection key={key} background={background_color} />;
        }
        if (sectionID === 'section-four') {
          return <SkillsSection key={key} background={background_color} />;
        }
        if (sectionID === 'section-five') {
          return <TimeLine key={key} background={background_color} />;
        }
        if (sectionID === 'section-six') {
          return (
            <Footer
              key={key}
              background={background_color}
              footer={footer_text}
            />
          );
        }
      })}
    </ThemeProvider>
  );
}

export default Home;
