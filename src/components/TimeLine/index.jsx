import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SectionBackground } from '../SectionBackground';
import { useTheme } from '../../providers/ThemeContext';
import P from 'prop-types';

export function TimeLine({ background_color, title, experience, svg }) {
  const darkTheme = useTheme();

  return (
    <div className={`  ${darkTheme ? 'dark' : ' '} `}>
      <SectionBackground background={background_color}>
        <div className=" dark:bg-color_header_dark">
          <div className="py-4 main-container">
            <div className="flex justify-center">
              <h1 className="pb-4 text-lg tracking-widest text-black uppercase dark:text-white">
                {title}
              </h1>
            </div>
            <VerticalTimeline>
              {experience.map((el, index) => (
                <VerticalTimelineElement
                  key={`${index}`}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: ` ${darkTheme ? 'gray' : 'white'}`,
                    color: 'black',
                  }}
                  contentArrowStyle={{
                    borderRight: `7px solid  ${darkTheme ? 'gray' : 'white'}`,
                  }}
                  date={el.date}
                  iconStyle={{
                    background: darkTheme ? 'gray' : '#ae944f',
                  }}
                  icon={
                    <div
                      className="vertical-timeline-element-icon bounce-in"
                      dangerouslySetInnerHTML={{ __html: el.svg }}
                    />
                  }
                >
                  <h3 className="inline-flex p-1 px-3 text-white rounded-2xl bg-color_dark_yellow dark:bg-color_header_dark vertical-timeline-element-title">
                    {el.role}
                  </h3>
                  <h4 className="pt-3 text-lg font-bold vertical-timeline-element-subtitle">
                    {el.company}
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: el.technologies }} />
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
TimeLine.propTypes = {
  background_color: P.string,
  text_grid: P.node.array,
  title: P.string,
  experience: P.array,
  svg: P.string,
};
