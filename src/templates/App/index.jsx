import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import AboutSection from '../../components/AboutSection';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProjectsSection } from '../../components/ProjectsSection';
import { SkillsSection } from '../../components/SkillsSection';
import { TimeLine } from '../../components/TimeLine';
import { ThemeProvider } from '../../providers/ThemeContext';
import { Loading } from '../Loading';
let dados = require('../../api/dados.json');

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        // const data = await fetch(
        //   'https://strapi-personal-portfolio.herokuapp.com/pages/?slug=portfolio',
        // );
        const json = dados;
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Página não encontrada';
    }

    if (data && !data.slug) {
      document.title = 'Carregando...';
    }

    if (data && data.title) {
      document.title = 'Ismael Rodino';
    }
  }, [data]);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }

  if (data && !data.slug) {
    return <Loading />;
  }
  const { sections, slug, section } = data;
  console.log(sections);

  return (
    <ThemeProvider>
      {sections.map((section, index) => {
        const { sectionID, background_color } = section;
        const key = `${slug}-${index}`;

        if (sectionID === 'section-one') {
          return <Header key={key} {...section} />;
        }

        if (sectionID === 'section-two') {
          return <AboutSection key={key} {...section} />;
        }

        if (sectionID === 'section-three') {
          return <ProjectsSection key={key} {...section} />;
        }
        if (sectionID === 'section-four') {
          return (
            <SkillsSection
              key={key}
              background={background_color}
              {...section}
            />
          );
        }
        if (sectionID === 'section-five') {
          return <TimeLine key={key} {...section} />;
        }
        if (sectionID === 'section-six') {
          return <Footer key={key} {...section} />;
        }
      })}
    </ThemeProvider>
  );
}

export default Home;
