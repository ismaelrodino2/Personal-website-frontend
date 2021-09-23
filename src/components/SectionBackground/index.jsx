import P from 'prop-types';
import { ThemeContext } from '../../templates/App';

export function SectionBackground({ children, background }) {
  var background_color = '';
  if (background == 'yellow') {
    background_color = 'bg-yellow-200';
  } else if (background == 'white') {
    background_color = 'bg-white';
  } else if (background == 'black') {
    background_color = 'bg-black';
  }
  return (
    <div className={`${background_color}`}>
      <div className="">{children}</div>
    </div>
  );
}

SectionBackground.propTypes = {
  background: P.bool,
  children: P.node.isRequired,
};
