import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  //map even if there's no data (=[])
  console.log('oi');
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      title = '',
      sections = [],
      experience = {},
    } = data;
    return {
      footerHtml,
      title,
      sections: mapSections(sections),
      experience,
    };
  });
};
