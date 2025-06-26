import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './Projects.css';

function Projects() {
  const { tab } = useParams(); 
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('projects'); 
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]); // Add state for projects

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/data/blogs.json');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data/projects.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);
  

  // Set the active tab based on the URL parameter when the component mounts
  useEffect(() => {
    if (tab === 'blog') {
      setActiveTab('blog');
    } else {
      setActiveTab('projects');
    }
  }, [tab]); 

  const showProjects = () => {
    setActiveTab('projects');
    navigate('/Projects/projects');
  };

  const showBlog = () => {
    setActiveTab('blog');
    navigate('/Projects/blog');
  };

  return (
    <div className='container'>
      <h1>{activeTab === 'projects' ? 'Projects' : 'Blogs'}</h1>

      <ul className='ProjectBlogToggle'>
        <li 
          className={activeTab === 'projects' ? 'active' : ''} 
          onClick={showProjects}
        >
          Projects
        </li>
        <li 
          className={activeTab === 'blog' ? 'active' : ''} 
          onClick={showBlog}
        >
          Blog
        </li>
      </ul>
      <hr />

      {/* Projects Tab */}
      {activeTab === 'projects' && (
        <div className='projects'>
          {projects.length > 0 ? (
            <>
              {projects.slice(0, 5).map((project) => (
                <div key={project.id} className='project-item'>
                  <div className='project-text'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {/* <p>{new Date(project.date).toLocaleDateString()}</p> */}

                    {project.url && (
                      <a href={project.url} target='_blank' rel='noopener noreferrer'>
                        View
                      </a>
                    )}
                  </div>
                </div>
              ))}
              
            </>
          ) : (
            <p>No projects available</p>
          )}

          <div className='view-all'>
                  <a 
                    href='https://github.com/mennovlaming' 
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    View all projects on GitHub
                  </a>
                </div>
          </div>   
      )}

      {/* Blog Tab */}
      {activeTab === 'blog' && (
        <div className='blog'>
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className='blog-item'>
                <h3>{blog.title}</h3>
                <p>{blog.smalldescription}</p>
                <p>{new Date(blog.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Projects;
