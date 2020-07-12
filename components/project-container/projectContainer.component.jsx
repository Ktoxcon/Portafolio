import { motion } from "framer-motion";
import Link from "next/link";
import "./project-container.styles.scss";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const ProjectContainer = ({ project }) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="fullscreen">
      <div className="project">
        <motion.div
          className="img"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <motion.img
            key={project.id}
            src={project.image}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
        <div className="project-details">
          <motion.div variants={stagger} className="inner">
            <Link href="/projects">
              <motion.div variants={fadeInUp}>
                <a className="go-back">Volver</a>
              </motion.div>
            </Link>
            <motion.h1 variants={fadeInUp}>{project.name}</motion.h1>
            <motion.p variants={fadeInUp}>{project.description}</motion.p>
            <motion.p variants={fadeInUp}>Tecnologías Empleadas</motion.p>
            <motion.div variants={fadeInUp}>
              {project.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div>
                <h5>Repositorio</h5>
                {project.repository}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectContainer;
