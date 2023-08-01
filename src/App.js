import { useEffect, useState } from "react";
import "./App.css";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const projects = require("./assets/projects.json");
const links = require("./assets/links.json");

function App() {
  const [currentProject, setCurrentProject] = useState(0);
    useEffect(() => {
      function onHashChange() {
        const hash = window.location.hash;
        if (hash.startsWith("#projects")) {
          if (hash.split("#projects-")[1]) {
            const project = hash.split("#projects-")[1];
            if (projects.findIndex((p) => p.id === project) !== -1)
              setCurrentProject(projects.findIndex((p) => p.id === project));
          }
          document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }
      onHashChange();
      window.addEventListener("hashchange", () => onHashChange());
      return () => {
        window.removeEventListener("hashchange", () => { });
      }
    }, []);
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      {/* Intro */}
      <section className="container mx-auto grid place-content-center p-4 h-screen snap-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="order-2">
            <article className="prose max-w-lg">
              <h1 className="introHeader text-center md:text-left">
                Hey, I'm Daniel!
              </h1>
              <p>
                I'm a (soon to be) college student, primarily interested in
                Computer Science and Web Development.
              </p>
              <p>
                I've always been interested in computers and technology, but
                didn't really start getting interested in programming until the
                COVID-19 pandemic started and I had more time at home. So far, I've learned a lot with
                the Discord platform (Bots and OAuth2), but I hope to learn more outside the platform.
              </p>
            </article>
            {/* Links */}
            <div className="flex flex-wrap grid-flow-col gap-4 my-4 place-content-center">
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

            <div className="flex flex-row place-content-center gap-2">
              <button className="p-2 bg-neutral rounded w-full" onClick={() => {
                document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "end" });
              }}>
                Scroll down to see some of the projects I've worked on! <ArrowDownIcon className="w-6 h-6 inline-block float-right animate-pulse motion-reduce:animate-none" />
              </button>
            </div>

          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="avatar">
              <div className="w-32 md:w-64 rounded-full">
                <img src="me.png" alt="Icon for Daniel" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="snap-center"
        style={{
          backgroundImage: `url(${projects[currentProject].lgImage ?? "me.png"})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          transition: "background-image 0.3s ease-in-out",
        }}>
        <div className="grid place-content-center h-screen bg-neutral/50 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col justify-center items-center md:order-2 order-0">
              <div className="flex flex-row items-center gap-2 fixed z-10 top-10 right-10">
                <button
                  data-tip="Previous Project"
                  className="btn btn-secondary tooltip"
                  onClick={() => {
                    setCurrentProject(currentProject - 1);
                    window.location.hash = `#projects-${projects[currentProject - 1].id}`;
                  }}
                  disabled={currentProject === 0}
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <button
                  data-tip="Next Project"
                  className="btn btn-secondary tooltip"
                  onClick={() => {
                    setCurrentProject(currentProject + 1);
                    window.location.hash = `#projects-${projects[currentProject + 1].id}`;
                  }}
                  disabled={currentProject === projects.length - 1}
                >
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="avatar">
                <div className="w-32 md:w-64 rounded-full shadow-lg drop-shadow-lg">
                  <img
                    className="pointer-events-none select-none"
                    src={projects[currentProject].image || "me.png"}
                    alt={`Icon for ${projects[currentProject].name}`}
                    onError={(e) => {
                      e.onError = null;
                      e.currentTarget.src = "me.png";

                    }}
                  />
                </div>
              </div>
            </div>

            <article className="prose max-w-lg space-y-2 p-4">
              <h1 className="introHeader place-content-center md:place-content-start flex items-center gap-2">
                <span> {projects[currentProject].name} </span>
                {projects[currentProject].languages?.map((language, index) => {
                  return (
                    <div
                      data-tip={language.name}
                      className="tooltip tooltip-top"
                      key={`language-${index}-project-${currentProject}`}
                    >
                      <img
                        className="w-8 h-8 my-0 rounded-lg"
                        src={language.icon}
                        alt={language.alt_text}
                      />
                    </div>
                  );
                })}
              </h1>
              <p className="text-center md:text-left">
                {projects[currentProject].description}
              </p>
              {projects[currentProject].team && (
                <div className="text-center md:text-left">
                  <UsersIcon className="w-5 h-5 inline-block mr-1" />
                  <span className="font-bold">Team:</span>{" "}
                  <a
                    href={projects[currentProject].teamLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {projects[currentProject].team}
                  </a>
                </div>
              )}
              <div className="flex flex-wrap grid-flow-col gap-4 my-4 place-content-center">
                {projects[currentProject].links.map((botLink, index) => {
                  return (
                    <a
                      className="socials-btn first:btn-primary"
                      href={botLink.link}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      {botLink.title}
                    </a>
                  );
                })}
              </div>
            </article>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
