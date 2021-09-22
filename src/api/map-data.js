import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  //map even if there's no data (=[])
  return pagesData.map((data) => {
    const {
      slug = '',
      footer_text: footerHtml = '',
      title = '',
      sections = [],
    } = data;
    return {
      footerHtml,
      title,
      sections: mapSections(sections),
      slug,
    };
  });
};
