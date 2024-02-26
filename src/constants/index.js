import {
    mobile,
    cardicon1,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    //mongodb,
    git,
    //figma,
    unitylogo,
    python,
    cplusplus,
    csharp,
    //lua,
    //blender,


    codeninjas,
    samsunglogo,
    elevatelogo,
    bestbuy,
    queens,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Computer Science Tutor",
      icon: cardicon1,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name:"C++",
      icon:cplusplus,
    },
    {
      name:"C#",
      icon: csharp,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
   // {
     // name: "MongoDB",
      //icon: mongodb,
    //},
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   // {
     // name: "figma",
      //icon: figma,
    //},
    {
      name: "unity",
      icon: unitylogo,
    },
    //{
     // name:"Lua",
   //   icon:lua,
    //},
   // {
     // name:"Blender",
      //icon:blender,
    //},
  ];
  
  const experiences = [
    {
      title: "Computer Eng. Co-op",
      company_name: "Code Ninjas RH",
      icon: codeninjas,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Educating youth, and preparing the next generation to continue the growth of technology developments responsibly.",
        " Profficently teach Javascript, Lua, C#, and Unity. ",
        "Specialize teaching Artificial Intelligence and Machine Learning, Web Development, and Portfolio Development for mature students, using Python, HTML CSS JS, and accompanying libraries. ",

      ],
    },
    {
      title: "Samsung in Assosiation with Code Ninjas",
      company_name: "Samsung",
      icon: samsunglogo,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - April 2024",
      points: [
        "Samsung Sponsored PArtnership with Code Ninjas for collaborative efforts on Virtual Reality Education",
        "Travels across Ontario to Educate about Virtual Reality Software and Advancements",
        "Public speraking for large groups on the topic of Virtual Reality and Technology Queries",
      ],
    },
    {
      title: "Front End Devloper | Optimization Engineer",
      company_name: "Elevate Integrated Solution",
      icon: elevatelogo,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Developing, maintaining, and optimizing web applications using Vue JS and other related technologies.",
        "Collaborating with cross-functional teams including clientelle, UI/UX designers, and other developers to create high-quality applications.",
        "Combining passion for building both personable business connections and software applications.",
      ],
    },
    {
      title: "Computing Solutions Specialist",
      company_name: "Best Buy",
      icon: bestbuy,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Aug 2023",
      points: [
        "Gained knowledgeability in all aspects of technology consumerism products; Computers, cellular devices, cybersecurity, and network solutions.",
        "Combined personable Skills and customer service with technology product knowledge to seek Hardware and Software requiremments that best fit individualistic needs.",
        "Executed diagnostics and repairs in assistance to 'Geek Squad' technicians.",
      ],
    },
    {
      title: "Computer Science Teacher",
      company_name: "Code Ninjas EG",
      icon: codeninjas,
      iconBg: "#383E56",
      date: "Sept 2022 - May 2023",
      points: [
        "First experience educating in the field of computer science.",
        "Sparked personal passion and intrigue in to field of computer science and engineering.",
        "Taught Java, Python, Javascript, Lua, C#.",
        "Pickering College: Promoted to teach Computer Science at Pickering College Private Instituition."
      ],
    },
    {
      title: "Programming Intern",
      company_name: "Queen's University",
      icon: queens,
      iconBg: "#E6DEDD",
      date: "June 2021 - Aug 2023",
      points: [
        "Ability to collaborate with Proffessors from Queen's Computer Science Department and fellow like-minded peers.",
        "Created programs with other interns to further programming knowledge supervised by proffesors",
        "Furthered use of Java and Python and application of Git in programs",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Fostering Envy, Not Empowerment: The Dilemma of Female Incentives in STEM ",
      name: "Kylie Morgan",
      designation: "Dec. 2023",
      company: "",
      //image: "https://randomuser.me/api/portraits/women/4.jpg",
      image: "src/assets/lightbulb.png",
      link:"src/components/canvas/Article1.html",
    },
    {
      testimonial:
        "AIs Unintentional Expose of North American Law and Politics",
      name: "Kylie Morgan",
      designation: "Feb. 2024",
      company: "",
      //image: "https://randomuser.me/api/portraits/men/5.jpg",
      image: "src/assets/lightbulb.png",
      link:"src/components/canvas/Article2.html",
    },
    {
      testimonial:
        "Delete Social Media. The Hold on Humanities Limitations",
      name: "Kylie Morgan",
      designation: "Jan. 2024",
      company: "",
      //image: "https://randomuser.me/api/portraits/women/6.jpg",
      image: "src/assets/lightbulb.png",
      link:"src/components/canvas/Article3.html",
    },
  ];
  
  const projects = [

    {
      name: "3D Portfolio",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mindful Drive",
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Goose Hopper",
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
      image: tripguide,
      source_code_link: "https://github.com/Kyliejoycodes/GooseHopper",
    },
    {
      name: "WeatherOrNot",
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },    
    {
      name: "Coming soon: Pre Ace",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Coming soon: Scroll",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,};