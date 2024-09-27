import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Hero from "../sections/Hero";
import Description from "../sections/Description";
import ProjectGallery from "../sections/ProjectGallery";
import RecentProjects from "../sections/RecentProjects";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [scrollFinished, setScrollFinished] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);

  const location = useLocation();

  const handleSessionStorageChange = () => {
    if (sessionStorage.getItem("loader") === "finished") {
      setLoaderFinished(true);
    }
  };

  useEffect(() => {
    handleSessionStorageChange();
  }, [loading]);

  console.log(loaderFinished, sessionStorage.getItem("loader"));

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      event.preventDefault();
      sessionStorage.setItem("loader", "null");
      // Custom logic to handle the refresh
      // Display a confirmation message or perform necessary actions
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      {!loaderFinished ? (
        <motion.div key={"loader"}>
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.div key={"hero"}>
          <Navbar />
          <Hero
            setScrollFinished={setScrollFinished}
            scrollFinished={scrollFinished}
          />
          {scrollFinished && (
            <>
              <Description />
              <ProjectGallery />
              <RecentProjects />
              <Footer />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
