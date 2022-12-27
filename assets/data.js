export default {
  // my json here...
  contact: {
    name: "Daniel Torres",
    title: "System Engineer",
    job: "Software Developer",
    linkedin: "https://www.linkedin.com/in/daniel-torres-01a13b190/",
  },
  about: {
    photo: "foto.png",
    description: `
      I'm full-stack software developer.
      always learning something new in the tech field.
      highly interested in maths, data sicence and machine learning,
      enthusiast for free software philosophy and GNU-Linux operating systems.
    `,
    skills: [
      "Full-stack Dev",
      "Task Automatization",
      "Data Analysis",
      "Linux environment administration",
      "Sql database design and administration",
    ],
    languages: [
      "Python : Django",
      "Javascript : VueJS",
      "PostgreSQL",
    ],
    git: "https://github.com/danieltorrescode",
  },
  portfolio: {
    project1: {
      codename: "dotfiles",
      description: "My dotfiles Arch Linux [DWM] (more intended to usability that ricing)",
      images: [
        "assets/img/sh1.png",
      ],
      github: "https://github.com/danieltorrescode/dotfiles/",
      link: "https://app-django-notes.herokuapp.com/",
      details:
        "Django 2.1 app use the class and function based views,custom admin site, authentication middleware and ORM in the framework",
    },
    project2: {
      codename: "emacs",
      description: "My GNU Emacs config",
      images: [
        "assets/img/el1.png",
      ],
      github: "https://github.com/danieltorrescode/emacs/",
      link: "https://app-django-notes.herokuapp.com/",
      details:
        "",
    },
  },
};
