export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-about') {
      return mapSectionAbout(section);
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

export const mapSectionAbout = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image,
    icons_about,
    metadata: {
      background_color,
      background = false,
      section_id: sectionID = '',
    } = false,
  } = section;

  return {
    background_color,
    component,
    icons_about,
    title,
    image,
    description,
    background,
    sectionID,
  };
};

export const mapSectionExperience = (section) => {
  const {
    __component: component = '',
    title = '',
    experience,
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
    experience,
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
    title = '',
    metadata: {
      background_color,
      background = false,
      section_id: sectionID = '',
    } = false,
    image_grid = [],
  } = section;

  return {
    title,
    background_color,
    component,
    background,
    sectionID,
    image_grid: image_grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
        date = '',
        title = '',
        link = '',
      } = img;
      return {
        date,
        title,
        srcImg,
        altText,
        link,
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
    icons = [],
  } = section;

  return {
    background_color,
    component,
    footer_text,
    background,
    sectionID,
    icons,
  };
};
