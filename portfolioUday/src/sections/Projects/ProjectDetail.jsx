// ProjectDetail.jsx
import { Link, useParams } from 'react-router-dom';
import styles from './ProjectDetailStyles.module.css';

// Educator images
import educator1 from '../../assets/educator1.png';
import educator2 from '../../assets/educator2.png';

// Leads images
import kitaaab from '../../assets/kitaaab.png';
import leads2 from '../../assets/leads2.png';

// Travel images
// import travel1 from '../../assets/travel1.png';
// import travel2 from '../../assets/travel2.png';

// DH images
// import dh1 from '../../assets/dh1.png';
// import dh2 from '../../assets/dh2.png';

// Voice images
import khatabook from '../../assets/khatabook.png';
import insideKhata from '../../assets/insideKhata.png';

const projectData = {
  educator: {
    title: "E-learning Platform",
    description: "Built a scalable E-Learning platform that allows students to enroll in courses, track progress, and engage with interactive learning materials. The platform supports both instructors and students, enabling content upload, quizzes, and real-time progress analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    images: [educator1, educator2],
    github: "https://github.com/Udayydv/kitaab",
  },

  kitaab: {
    title: "Kitaab E-commerce Platform",
    description: "Kitaab is an E-commerce platform, providing the best quality of Stationary all over the market.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    images: [kitaaab, educator2],
    github: "https://github.com/Udayydv/kitaab",
  },
  
  // travel: {
  //   title: "Travel ToGetHer",
  //   description: "Travel ToGetHer is a women-centric car rental platform focused on providing safe, affordable, and convenient travel solutions. The application allows users—especially women—to book verified rental vehicles with women drivers or vetted safety protocols. With its elegant UI/UX and seamless booking flow, the platform offers location-based car selection, real-time availability updates, and booking confirmations. It is designed to break barriers in solo or group travel for women by promoting safety, trust, and independence. This project showcases my front-end finesse and understanding of secure, responsive design with a strong emphasis on user empowerment.",
  //   tech: ["NodeJS", "Tailwind CSS", "MongoDB", "REST API"],
  //   images: [travel1, travel2],
  //   github: "https://github.com/Udayydv/TravelToGetHer",
  // },
  // dh: {
  //   title: "DH Clothing",
  //   description: "DH Clothing is an end-to-end e-commerce platform tailored for a modern fashion brand. From displaying trendy clothing items to managing user carts, order tracking, and admin inventory control, the website delivers a polished shopping experience. Users can browse collections, apply filters, add items to the cart, and complete secure checkouts. Admins can manage product listings, view user orders, and handle stock updates. The application integrates database management, secure login systems, and responsive UI to function seamlessly across devices. This project is a showcase of how I handle multi-role systems (user/admin), cart logic, and real-time inventory features in a retail environment.",
  //   tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
  //   images: [dh1, dh2],
  //   github: "https://github.com/Udayydv/DH-Traders",
  // },
  voice: {
    title: "Khatabook",
    description: "Developed a full-stack Khatabook-inspired application that helps small business owners and individuals track credits, debits, and customer transactions digitally. The app replicates traditional ledger-keeping with added features like customer management, payment reminders, and real-time updates.",
    tech: ["ReactJS", "Node.js", "Express", "MongoDB",],
    images: [khatabook, insideKhata],
    github: "https://github.com/Udayydv/Smart-Voice-Assistant",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <h2 className={styles.notFound}>Project not found</h2>;

  return (
    <div className={styles.cardContainer}>
      <header className={styles.cardHeader}>
        <Link to="/" className={styles.backButton}>&larr; Back to Projects</Link>
        <h1 className={styles.title}>{project.title}</h1>
        <a href={project.github} target="_blank" rel="noopener" className={styles.githubButton}>
          View on GitHub
        </a>
      </header>

      <section className={styles.cardBody}>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech.map((tech, i) => (
            <span key={i} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <div className={styles.images}>
          {project.images.map((img, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
