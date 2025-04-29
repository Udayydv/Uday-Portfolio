import styles from './ProjectsStyles.module.css';
import ecom from '../../assets/ecom.jpg';
import educator from '../../assets/educator_logo.png';
// import dh from '../../assets/dh.jpeg';
// import voice from '../../assets/voice.png';
import khatabook from '../../assets/khatabook.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={educator}
          to="/projects/educator"
          h3="Educator"
          p={
            <>
              A learning management <br />
              platform (LMS)
            </>
          }
        />
        <ProjectCard
          src={ecom}
          to="/projects/leads"
          h3="Kitaab"
          p="Stationary E-commerce platform"
        />
        {/* <ProjectCard
          src={travel}
          to="/projects/travel"
          h3="Travel ToGetHer"
          p="Car Rental Website"
        /> */}
        {/* <ProjectCard
          src={dh}
          to="/projects/dh"
          h3="DH Clothing"
          p="E - commerce Platform"
        /> */}
        <ProjectCard
          src={khatabook}
          to="/projects/voice"
          h3="Khatabook"
          p="Expense Tracker"
        />
      </div>
    </section>
  );
}

export default Projects;
