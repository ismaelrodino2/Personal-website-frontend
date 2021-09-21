export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-grid') {
      const { __component: { text_grid = [], image_grid = [] } = '' } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    _id = '',
    description = '',
    metadata: { background = false, section_id: sectionID = '' } = false,
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionID,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    _id = '',
    description = '',
    metadata: { background = false, section_id: sectionID = '' } = false,
    text_grid = [],
    titletext: title_text_grid = '',
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionID,
    text_grid,
    title_text_grid,
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    _id = '',
    description = '',
    metadata: { background = false, section_id: sectionID = '' } = false,
    image_grid: grid = [],
    titleimage: title_image_grid = '',
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionID,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
    title_image_grid,
  };
};
