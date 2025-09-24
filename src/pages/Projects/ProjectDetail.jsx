import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      const foundProject = data.find((p) => p.id === parseInt(id));
      setProject(foundProject);
    };
    fetchProjects();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="project-detail container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {project.screenshots && (
        <div className="slider">
          <button className="prev" onClick={handlePrev}>
            ‹
          </button>

          <div className="slider-image">
            <img
              src={project.screenshots[currentIndex]}
              alt={`screenshot ${currentIndex}`}
            />
          </div>

          <button className="next" onClick={handleNext}>
            ›
          </button>
        </div>
      )}

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-link"
        >
          Visit project
        </a>
      )}
    
      <Link to="/#projects" className="back-link">
        ← Back to Projects
      </Link>
      
    </div>
  );
}

export default ProjectDetail;
