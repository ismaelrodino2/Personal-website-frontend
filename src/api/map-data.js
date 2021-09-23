import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  //map even if there's no data (=[])
  return pagesData.map((data) => {
    const { slug = '', title = '', sections = [] } = data;
    return {
      title,
      sections: mapSections(sections),
      slug,
    };
  });
};
