import { createContext, useState } from "react";
import projectsData from "../data/projects.json";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);
  const [news, setNews] = useState([]);
  const [publications, setPublications] = useState([]);

  return (
    <ApiContext.Provider
      value={{
        projects,
        setProjects,
        news,
        setNews,
        publications,
        setPublications,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
