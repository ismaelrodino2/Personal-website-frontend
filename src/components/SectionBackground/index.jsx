import P from 'prop-types';
import { ThemeContext } from '../../templates/App';

export function SectionBackground({ children, background = false }) {
  return (
    <div
      className={`${
        background ? 'bg-yellow-200 dark:bg-gray-600' : 'bg-black'
      } `}
      background={background}
    >
      <div className="main-container">{children}</div>
    </div>
  );
}

SectionBackground.propTypes = {
  background: P.bool,
  children: P.node.isRequired,
};
