import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 5,
    title: "Todo List",
    desc: "A React & Typescript based app for managing and organizing",
    img: "/project-5.png",
    tags: ["React", "Node", "css", "Typescript"],
  },
  {
    id: 1,
    title: "Dynamic Resume Builder",
    desc: "Typescript based Html, Style.css, Dynamic resume builder managing and organizing",
    img: "/project-1.png",
    tags: ["Typescript", "html", "css", "Node"],
  },
  {
    id: 2,
    title: "Editable Resume Builder",
    desc: "Typescript, html, style.css, Editable resume builder managing and organizing",
    img: "/project-2.png",
    tags: ["Typescript", "html", "css", "Node"],
  },
  {
    id: 3,
    title: "Project Coding Based",
    desc: "A React & Typescript based app for organizing",
    img: "/project3.png",
    tags: ["react", "Typescript", "organizing", "Node"],
  },
  {
    id: 4,
    title: "Shareable Resume Builder",
    desc: "Typescript, html, css, shareable resume builder",
    img: "/project-4.png",
    tags: ["Typescript", "html", "css", "Node"],
  },
  {
    id: 6,
    title: "Static Interactive Resume",
    desc: "Typescript, html, style.css managing and organizing",
    img: "/project-6.png",
    tags: ["Typescript", "html", "css", "Node"],
  },
  {
    id: 7,
    title: "GitHub Project",
    desc: "All project GitHub repo",
    img: "/7.png",
    tags: ["react", "Typescript", "html", "css", "Node"],
  },
  {
    id: 8,
    title: "Website Icons8",
    desc: "All project organizing",
    img: "/WEBSITE ICON8.png",
    tags: ["react", "html", "css", "Node"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-items-center'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
         />
        ))}
      </div>
    </div>
  );
};

export default Projects;
