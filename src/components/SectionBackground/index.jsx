import P from 'prop-types';
import { ThemeContext } from '../../templates/App';

export function SectionBackground({ children, background }) {
  var background_color = '';
  if (background == 'yellow') {
    background_color = 'bg-color_yellow';
  } else if (background == 'white') {
    background_color = 'bg-white';
  } else if (background == 'black') {
    background_color = 'bg-color_dark';
  }
  return (
    <div className={`${background_color}`}>
      <div className="">{children}</div>
    </div>
  );
}

SectionBackground.propTypes = {
  background: P.string,
  children: P.node.isRequired,
};
