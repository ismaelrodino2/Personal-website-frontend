/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SectionBackground } from '../SectionBackground';
import { useTheme } from '../../providers/ThemeContext';

export function TimeLine({ background_color, title, experience, svg }) {
  const darkTheme = useTheme();

  return (
    <div className={`  ${darkTheme ? 'dark' : ' '}`}>
      <SectionBackground background={background_color}>
        <div className="dark:bg-color_header_dark">
          <div className="py-5 main-container">
            <div className="flex justify-center">
              <h1 className="pb-10 ">{title}</h1>
            </div>
            <VerticalTimeline>
              {experience.map((el, index) => (
                <VerticalTimelineElement
                  key={`${index}`}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: 'white',
                    color: 'black',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid white',
                  }}
                  date={el.date}
                  iconStyle={{ background: 'rgb(174, 148, 79)' }}
                  icon={
                    <div
                      className="vertical-timeline-element-icon bounce-in"
                      dangerouslySetInnerHTML={{ __html: el.svg }}
                    />
                  }
                >
                  <h3 className="inline-flex p-1 px-3 text-white rounded-2xl bg-color_dark_yellow vertical-timeline-element-title">
                    {el.role}
                  </h3>
                  <h4 className=" vertical-timeline-element-subtitle">
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
