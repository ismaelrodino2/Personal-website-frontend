import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Footer } from '../../components/Footer';
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
  const { footerHtml, sections } = data;
  console.log(data);
  {
    sections.map((section, index) => {
      const { component } = section;
      console.log(component);
    });
  }

  return (
    <ThemeProvider>
      <Base footer={footerHtml} />
    </ThemeProvider>
  );
}

export default Home;
