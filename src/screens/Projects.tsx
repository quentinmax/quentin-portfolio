import React, { useState } from "react";
import useData from "../client/hooks/useData";
import { useNavigate } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import animation from "../constants/animation";
import Header from "../components/Header";

const text: Variants = {
  initial: {
    translateX: 0,
    color: "#1e1e1e",
    transition: {
      duration: 0.6,
      ease: animation.EASING,
    },
  },
  hover: (direction: number) => ({
    translateX: direction * 30,
    color: "#c8bdb5",
    transition: {
      duration: 0.6,
      ease: animation.EASING,
    },
  }),
};

const Projects = () => {
  const { projects } = useData();
  const navigate = useNavigate();

  const [hovering, setHovering] = useState(-1);

  const onHoverStart = (index: number) => {
    setHovering(index);
  };
  const onHoverEnd = () => {
    setHovering(-1);
  };

  return (
    <main className="projects-container">
      {/* <h2>
        Elevating Experiences: <br /> Explore My Work
      </h2> */}
      <Header title="Elevating Experiences: Explore My Work" />
      <div className="filter">
        <button className="filter-btn selected outline">All</button>
        <button className="filter-btn outline">Developement</button>
        <button className="filter-btn outline">Design</button>
        <hr color="#c8bdb5" />
      </div>
      <table className="project-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Type</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(
            ({ name, services, year, slug, projectType }, index) => {
              return (
                <tr onClick={() => navigate("/project/" + slug.current)}>
                  <motion.td
                    onHoverStart={() => onHoverStart(index)}
                    onHoverEnd={onHoverEnd}
                    variants={text}
                    animate={hovering === index ? "hover" : "initial"}
                    initial="initial"
                    custom={-1}
                    className="table-name"
                  >
                    {name}
                  </motion.td>
                  <motion.td
                    onHoverStart={() => onHoverStart(index)}
                    onHoverEnd={onHoverEnd}
                    variants={text}
                    animate={hovering === index ? "hover" : "initial"}
                    initial="initial"
                    custom={1}
                    className="table-text"
                  >
                    {services.join(" & ")}
                  </motion.td>
                  <motion.td
                    onHoverStart={() => onHoverStart(index)}
                    onHoverEnd={onHoverEnd}
                    variants={text}
                    animate={hovering === index ? "hover" : "initial"}
                    initial="initial"
                    custom={1}
                    className="table-text capitalize"
                  >
                    {projectType}
                  </motion.td>
                  <motion.td
                    onHoverStart={() => onHoverStart(index)}
                    onHoverEnd={onHoverEnd}
                    variants={text}
                    animate={hovering === index ? "hover" : "initial"}
                    initial="initial"
                    custom={1}
                    className="table-text"
                  >
                    {year}
                  </motion.td>
                </tr>
              );
            }
          )}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td className="coming-soon">More Coming Soon..</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
};

export default Projects;
