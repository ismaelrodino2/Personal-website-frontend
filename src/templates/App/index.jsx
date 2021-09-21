import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { ThemeProvider } from '../../providers/ThemeContext';
import { Base } from '../Base';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetch('http://localhost:1337/pages/?slug=portfolio');
      const json = await data.json();
      const pageData = mapData(json);
      setData(pageData[0]);
    };

    load();
  }, []);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }
  if (data && !data.slug) {
    return <h1>Carregando</h1>;
  }
  return (
    <ThemeProvider>
      <Base />
    </ThemeProvider>
  );
}

export default Home;
