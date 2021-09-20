import P from 'prop-types';
import { ThemeContext } from '../../templates/App';

export function SectionBackground({ children, background = false }) {
  return (
    <div
      className={`${background ? 'bg-yellow-200 ' : 'bg-black'} ${
        background == null && 'bg-white'
      }`}
      background={background}
    >
      <div className="">{children}</div>
    </div>
  );
}

SectionBackground.propTypes = {
  background: P.bool,
  children: P.node.isRequired,
};
