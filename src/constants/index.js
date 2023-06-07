import {
    mobile,
    backend,
    creator,
    web,
    cplus,
    csharp,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    up,
    skilvul,
    meta,
    starbucks,
    tesla,
    shopify,
    antivirusplusgame,
    itchio,
    travelweb,
    portfolioweb,
    threejs,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: creator,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Kampus Merdeka Studi Independen Game Development ",
      company_name: "Skilvul",
      icon: skilvul,
      iconBg: "#383E56",
      date: "August 2022 - December 2022",
      points: [
        "Translate idea concepts into low fidelity wireframes, and use these wireframes for idea validation interviews with potential users.",
        "Create a new project, know the user interface, create a main menu, and apply audio, randomize concepts, build game projects.",
        "Organize and manage team projects, including efficiently and effectively planning, implementing, and monitoring team project progress.",
      ],
    },
    {
      title: "Assistant Lecturer Object Oriented Programming",
      company_name: "University of Pancasila",
      icon: up,
      iconBg: "#383E56",
      date: "September 2022 - December 2022",
      points: [
        "Prepare and present practicum materials.",
        "Create documents and reports to document practicum activities such as: attendance lists, activity photos, and activity reports.",
        "Answer questions and provide assistance when students experience difficulties.",
      ],
    },
    {
      title: "Assistant Lecturer Web Design",
      company_name: "University of Pancasila",
      icon: up,
      iconBg: "#383E56",
      date: "September 2022 - December 2022",
      points: [
        "Prepare and present practicum materials.",
        "Create documents and reports to document practicum activities such as: attendance lists, activity photos, and activity reports.",
        "Answer questions and provide assistance when students experience difficulties.",
      ],
    },
    {
      title: "Assistant Lecturer Data Structure and Algorithm",
      company_name: "University of Pancasila",
      icon: up,
      iconBg: "#383E56",
      date: "March 2022 - July 2022",
      points: [
        "Prepare and present practicum materials.",
        "Create documents and reports to document practicum activities such as: attendance lists, activity photos, and activity reports.",
        "Answer questions and provide assistance when students experience difficulties.",
      ],
    },
    {
      title: "Assistant Lecturer Programming and Algorithm",
      company_name: "University of Pancasila",
      icon: up,
      iconBg: "#383E56",
      date: "September 2021 - January 2022",
      points: [
        "Prepare and present practicum materials.",
        "Create documents and reports to document practicum activities such as: attendance lists, activity photos, and activity reports.",
        "Answer questions and provide assistance when students experience difficulties.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Name",
      designation: "Position",
      company: "Company",
      image: "Image",
    },
  ];
  
  const projects = [
    {
      name: "Antivirus+ Game",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "unity",
          color: "blue-text-gradient",
        },        
      ],
      image: antivirusplusgame,
      link_image: itchio,
      source_code_link: "https://bungazalia.itch.io/antivirusplusgame",
    },
    {
      name: "Travel Today Web",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: travelweb,
      link_image: github,
      source_code_link: "https://github.com/rzkyapriil/travelToday",
    },
    {
      name: "Portfolio Web",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioweb,
      link_image: github,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };