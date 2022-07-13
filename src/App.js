import "./App.css";
import BuildPatchModal from "./buildpatchmodal";

const projects = require("./assets/projects.json");
const links = require("./assets/links.json");
const skills = require("./assets/skills.json");
// const largeImageText = "Daniel";
// const smallImageText = "";

function App() {
  return (
    <div className="dark:bg-gray-700">
      <BuildPatchModal></BuildPatchModal>
      {/* Intro */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-9 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto relative">
            {/* <div className="relative rounded-lg h-64 overflow-hidden shadow-md shadow-indigo-500">
              <img
                alt="content"
                className="h-full w-full object-cover"
                src="banner.png"
              />
              <h1 className="absolute font-bold text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [text-shadow:5px_5px_5px_#64748b] w-full text-center">
                {largeImageText}
                {smallImageText && <p className="text-2xl">{smallImageText}</p>}
              </h1>
            </div> */}
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 mb-2">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src="me.png"
                    className="w-full h-full rounded-full drop-shadow-lg"
                    alt="Me"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  {/* Name */}
                  <h2 className="myNameTitle">Daniel</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2"></div>
                  {/* Short Desc */}
                  <p className="myNameText py-5">High Schooler, Programmer</p>
                  {/* Skill Tags */}
                  <div className="grid grid-cols-2 gap-4 flex-wrap w-full">
                    {skills.map((language, index) => {
                      return (
                        <div className="languageTagBorder" key={index}>
                          <span className="inline-flex items-center align-middle">
                            <div className="rounded-md overflow-hidden">
                              <img
                                className="w-5 h-5 object-cover"
                                src={language.icon}
                                alt={language.alt_text}
                              />
                            </div>
                            <span className="ml-1">{language.title}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                {/* Header */}
                <span className="aboutMeTitle">Hey, my name is Daniel!</span>
                {/* About Me */}
                <p className="aboutMeText">
                  I've always had a passion for technology since I was young,
                  however I started getting into programming during 2020. So
                  far, I have primarily worked on{" "}
                  <a
                    href="http://discord.com/"
                    className="link-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>{" "}
                  bots, however I want to try to expand to other things in the
                  future. When I have free time I'm usually playing video games,
                  working on various projects, and talking to friends.
                </p>
                {/* Links */}
                <div className="flex flex-wrap grid-flow-col gap-4 md:grid-cols-2 md:place-content-start place-content-center">
                  {links.map((link, index) => {
                    return (
                      <a
                        className="inline-flex socials-btn"
                        href={link.link}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                      >
                        <div className="p-1 inline-flex">
                          {link.icon && (
                            <img
                              className="w-6 h-6 pr-1 white-svg"
                              src={link.icon}
                              alt={link.alt_text}
                            />
                          )}
                          <span>{link.title}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <h2 className="projectSectionHeader">Projects</h2>
      <section className="px-5 pb-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4 mx-auto">
            {projects.map((project, index) => {
              return (
                <div className="p-4 md:w-1/3 mx-auto" key={index}>
                  <div className="border-opacity-60 flex flex-col rounded-lg overflow-hidden h-full border-2 border-gray-200">
                    {/* Project Image */}
                    <img
                      className="lg:h-52 md:h-37 w-full object-cover bg-white"
                      src={project.image}
                      alt={project.image_alt}
                    />
                    {/* Project Info */}
                    <div className="p-6 flex-initial grow">
                      <h2 className="projectTypeText">
                        <span>{project.type}</span>
                        {/* Verified Badge */}
                        {project.verified && (
                          <a
                            className="btn-verified-bot ml-1 inline-flex align-middle"
                            href="https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting#h_46b3869c-6d50-43fc-b07c-9ed7569a1160"
                            target={"_blank"}
                            rel="noreferrer"
                            title="Verified Discord Bot"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </a>
                        )}
                      </h2>
                      <h1 className="projectTitleText">{project.title}</h1>
                      <p className="projectDescText">{project.description}</p>
                    </div>
                    {/* Project Links */}
                    {project.botLinks && (
                      <div className="container w-full align-bottom p-2">
                        <div className="grid grid-cols-2 gap-2 pt-2 mx-auto">
                          {/* md:grid-cols-2 */}
                          {project.botLinks.map((link, index) => {
                            return (
                              <a
                                className="btn-normal"
                                href={link.link}
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                              >
                                <span className="inline-flex p-2 md:p-0">
                                  {link.title}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
