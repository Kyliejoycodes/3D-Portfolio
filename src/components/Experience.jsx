import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import{styles} from '../styles';
import {experiences} from '../constants';
import {SectionWrapper} from '../hoc';
import {textVariant} from '../utils/motion';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
  contentStyle={{background:'#FFBD59', color: '#fff'}}
  contentArrowStyle={{borderRight : '7px solid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
  <div className="flex justify-center items-center w-full h-full">
    <img
    src={experience.icon}
    alt={experience.company_name}
    className="w-[60%] h-[60%] object-contain"
    />
  </div>
  }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold ">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}

    </ul>

</VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Employment and Co-ops</p>
    <h2 className={styles.sectionHeadText}>Experiences</h2>
    </motion.div>
    <div className="mt-20 flex flex-col parentofimage">
      <a href="https://drive.google.com/drive/u/0/folders/1X5VlmDTinKm13FVZBr7tJTza-3iHDkfI" target="_blank" >
      <img id="cninfo" src="src/assets/clickhere.png"></img>
      </a>
      <VerticalTimeline>
        <div>
        {experiences.map((experience,index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}</div>
      </VerticalTimeline>
    </div>
    {/* <div className = "other">
      <h2 className="text-white text-[24px] font-bold">Non Tech.-Related Experiences</h2>
      <h3>Shotokan Karate Sensei</h3>
      <p> <b>Community Martial Arts</b>Achieved Black Belt and teaching certification est. 2019. Competed and placed at provincial level. Instructed youth and adult classes, empowering women as a self defense instructor. </p><p><b>2010-2023</b></p>
      <br/>
      <h3>Golf Services | Instructor</h3>
      <p> <b>Pheasant Run    Mill Run    Cardinal</b>Private youth and adult golf instructor, keyholder of Golf Services Departments</p><b><p>2021-2023     2021-2022    2020-2021</p></b>
      <h3>Content Creator</h3>
      <p> <b>Twitch</b>Created a platform from video game related content creation, and generated a steady stream of revenue through sponsorships, ads and certified twitch affiliate status.</p><p><b>2019-2021</b></p>

    </div> */}
    </>
  )
}

export default SectionWrapper(Experience, "work")