import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import SwipeableContainer from "./SwipeableContainer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const projects = require("./assets/projects.json");
const links = require("./assets/links.json");
const skills = require("./assets/skills.json");

function App() {
  const landingMeIcon = useRef(null);
  const [landingMeActionVisible, setLandingMeIcon] = useState(true);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    // Create observer to detect helloTitle?.current leaving the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLandingMeIcon(true);
          } else {
            setLandingMeIcon(false);
          }
        });
      },
      { threshold: [0] }
    );
    observer.observe(landingMeIcon.current);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [landingMeIcon]);
  return (
    <div class="snap-y snap-mandatory h-screen overflow-scroll">
      {/* floating top bar */}
      <div
        className={classNames(
          "sticky top-2 flex flex-row mx-2 lg:mx-10 place-content-center duration-300 transition-opacity items-center gap-2 rounded-lg p-2 z-50 bg-slate-900/40",
          landingMeActionVisible ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img src="me.png" alt="Icon for Daniel" />
          </div>
        </div>
        <h2 className="text-4xl font-bold">Daniel</h2>
        <h2 className="text-3xl">| My Projects</h2>
      </div>
      {/* Intro */}
      <section className="snap-start relative container mx-auto min-h-screen grid place-content-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="order-2">
            <article className="prose mx-10">
              <h1 className="introHeader text-center lg:text-left" ref={landingMeIcon}>
                Hi, I'm Daniel!
              </h1>
              <p>
                I'm a (soon to be) college student, primarily interested in
                Computer Science and Web Development.
              </p>
              <p>
                I've always been interested in computers and technology, but
                didn't really start getting interested in programming until the
                COVID-19 pandemic started when I had a lot more free time. So far, I've learned a lot with
                Discord bots, but I hope to learn more about web development and
                programming outside the platform.
              </p>
            </article>
            {/* Skills */}
            <div className="flex flex-wrap place-content-center gap-2 mx-10 my-2">
              {skills.map((skill) => {
                return (
                  <div data-tip={skill.title} className="tooltip tooltip-top">
                    <img
                      className="w-8 h-8 inline-block my-0 rounded-lg"
                      src={skill.icon}
                      alt={skill.alt_text}
                    />
                  </div>
                );
              })}
            </div>
            {/* Links */}
            <div className="flex flex-wrap grid-flow-col gap-4 mx-10 my-4 place-content-center">
              {links.map((link, index) => {
                return (
                  <a
                    className="socials-btn transition-all tooltip"
                    data-tip={link.title}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    {link.icon && (
                      <img
                        className="w-6 h-6 white-svg"
                        src={link.icon}
                        alt={link.alt_text}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex flex-row place-content-center gap-2 mx-10">
              <button className="p-2 bg-neutral rounded w-full" onClick={() => {
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
              }}>
                <span className="font-bold">Hint:</span> Scroll down to see some of the
                projects I've worked on! <ArrowDownIcon className="w-6 h-6 inline-block float-right animate-pulse motion-reduce:animate-none" />
              </button>
            </div>

          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="avatar">
              <div className="w-32 lg:w-64 rounded-full">
                <img src="me.png" alt="Icon for Daniel" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <div className="min-h-screen relative" id="projects">
        {/* Background */}
        <SwipeableContainer
          className={`absolute w-screen h-screen z-0 bg-white`}
          currentPage={`project-bg-${currentProject}`}
          slides={(switchPage) => projects.map((project, index) => {
            return {
              id: `project-bg-${index}`,
              page: (
                <img
                  src={project.lgImage ?? "me.png"}
                  alt={`Background for ${project.name}`}
                  // put the image in the background and allow objects to be placed on top of it
                  className="absolute w-full h-full object-cover z-0 bg-white"
                />
              )
            }
          })}
        />

        {/* Project */}
        <div className="sticky w-screen h-screen z-10 bg-secondary/50 backdrop-filter backdrop-blur-lg snap-center">
          <div className="container mx-auto h-full grid place-content-center">
            {/* Project Card */}
            <div className="flex flex-col place-content-between shadow-xl bg-gradient-to-br from-base-200/80 to-secondary/80 rounded-lg gap-2 m-2 p-4 min-h-[400px] max-w-[98vw]">
              <div className="prose">
                <h1 className="flex items-center">
                  <div className="w-12 h-12 inline-block my-0 rounded-lg mr-2">
                    <SwipeableContainer
                      className="w-12 h-12"
                      currentPage={`project-icon-${currentProject}`}
                      slides={(switchPage) => projects.map((project, index) => {
                        return {
                          id: `project-icon-${index}`,
                          page: (
                            <img
                              src={project.image ?? "me.png"}
                              className="w-12 h-12 inline-block my-0 rounded-lg mr-2"
                              alt={`Icon for ${project.name}`}
                              onError={(e) => {
                                e.onError = null;
                                e.currentTarget.src = "me.png";
                              }}
                            />
                          )
                        }
                      })}
                    />
                  </div>

                  <div>
                    {projects[currentProject].name}
                  </div>
                </h1>
                <SwipeableContainer
                  currentPage={`project-${currentProject}`}
                  slides={(switchPage) => projects.map((project, index) => {
                    return {
                      id: `project-${index}`,
                      page: (
                        <div className="flex flex-col place-content-between h-full">
                          <p>
                            {project.description}
                            {project.team && (
                              <>
                                <br />
                                <span className="font-bold">Team:</span>{" "}
                                <a
                                  href={project.teamLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {project.team}
                                </a>
                              </>
                            )}
                          </p>
                        </div>
                      )
                    }
                  })}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 lg:grid-flow-col place-content-center">
                {
                  projects[currentProject].links.map((botLink, index) => {
                    return (
                      <a
                        className={classNames(
                          "btn",
                          index === 0 ? "btn-primary" : "btn-secondary"
                        )}
                        href={botLink.link + `?ref=${window.location.hostname}`}
                        // open link in new tab
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                      >
                        {botLink.title}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* floating bar */}
      <div
        className={classNames(
          "sticky bottom-2 flex flex-row place-content-center duration-300 transition-opacity items-center gap-2 rounded-lg p-2 z-50 bg-slate-900/40 w-fit mx-auto",
          landingMeActionVisible ? "opacity-0" : "opacity-100"
        )}
      >
        <button
          data-tip="Previous Project"
          className="btn btn-secondary tooltip"
          onClick={() => setCurrentProject(currentProject - 1)}
          disabled={currentProject === 0}
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button
          data-tip="Next Project"
          className="btn btn-secondary tooltip"
          onClick={() => setCurrentProject(currentProject + 1)}
          disabled={currentProject === projects.length - 1}
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default App;
