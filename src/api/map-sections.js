export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-grid') {
      return mapSectionTwoColumns(section);
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  /*
    {
        "__component": "section.section-two-columns",
        "_id": "6142416365727bc9656e8c1e",
        "description": "Hi :)\n\n👋 I'm Ismael Rodino. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜",
        "title": "ABOUT ME",
        "metadata": {
            "background": true,
            "section_id": "secao-2",
        },
    },

*/

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
