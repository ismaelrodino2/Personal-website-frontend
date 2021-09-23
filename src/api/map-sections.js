export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
    if (section.__component === 'section.section-experience') {
      return mapSectionExperience(section);
    }
    if (section.__component === 'section.footer') {
      return mapSectionFooter(section);
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: {
      background_color,
      background = false,
      section_id: sectionID = '',
    } = false,
  } = section;

  return {
    background_color,
    component,
    title,
    description,
    background,
    sectionID,
  };
};

export const mapSectionExperience = (section) => {
  const {
    __component: component = '',
    title = '',
    date,
    position,
    technologies,
    company,
    metadata: {
      background_color,
      background = false,
      section_id: sectionID = '',
    } = false,
  } = section;

  return {
    background_color,
    component,
    title,
    date,
    position,
    technologies,
    company,
    background,
    sectionID,
  };
};

export const mapTextGrid = (section) => {
  const {
    __component: component = '',
    title = '',
    description,
    metadata: {
      background_color,
      background = false,
      section_id: sectionID = '',
    } = false,
    text_grid = [],
  } = section;

  return {
    background_color,
    component,
    title,
    description,
    background,
    sectionID,
    text_grid,
  };
};

export const mapImageGrid = (section) => {
  const {
    __component: component = '',
    date,
    title = '',
    metadata: {
      background_color,
      background = false,
      section_id: sectionID = '',
    } = false,
    image_grid = [],
  } = section;

  return {
    background_color,
    component,
    date,
    title,
    background,
    sectionID,
    image_grid: image_grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};

export const mapSectionFooter = (section = {}) => {
  const {
    __component: component = '',
    footer_text = '',
    metadata: {
      background_color,
      background = false,
      section_id: sectionID = '',
    } = false,
  } = section;

  return {
    background_color,
    component,
    footer_text,
    background,
    sectionID,
  };
};
