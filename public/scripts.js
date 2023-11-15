data =  {
  contact: {
    name: "Daniel Torres",
    title: "Software Developer",
    username: "danieltorrescode",
    github: "https://github.com/danieltorrescode",
    linkedin: "https://www.linkedin.com/in/daniel-torres-01a13b190/",
  },
  about: {
    photo: "https://avatars.githubusercontent.com/u/31786496",
    description: `
      I'm full-stack software developer.
      always learning something new in the tech field.
      highly interested in maths, data sicence and machine learning,
      enthusiast for free software philosophy and GNU-Linux operating systems.
    `,
    skills: [
      "Full-stack Dev",
      "Task Automatization",
      "Data Science",
      "Linux environment administration",
      "Sql database design and administration",
    ],
    languages: [
      "Python : Django, Flask",
      "Javascript : VueJS",
      "PostgreSQL",
    ],
  },
  portfolio: [
    {
      codename: "dotfiles",
      description: "My dotfiles Arch Linux [BSPWM] (more intended to usability that ricing)",
      image: "assets/img/sh1.png",
      github: "https://github.com/danieltorrescode/dotfiles/",
      link: "",
      details:
        "",
    },
    {
      codename: "Emacs",
      description: " My GNU Emacs config ",
      image: "assets/img/el1.png",
      github: "https://github.com/danieltorrescode/emacs/",
      link: "",
      details:
        "",
    },
    {
      codename: "Data Science",
      description: "JupyterLab notes from my learning path in data science and machine learning ",
      image: "assets/img/ipynb1.png",
      github: "https://github.com/danieltorrescode/jupyter/",
      link: "",
      details:
        "",
    },
    {
      codename: "Full-Stack WebDev",
      description: "My github repositories, a collection of projects intended as code playground for learning",
      image: "assets/img/webdev.png",
      github: "https://github.com/danieltorrescode/",
      link: "",
      details:
        "",
    },
  ],
};

document.getElementById('header-name').innerHTML = data.contact.username;
document.getElementById('name').innerHTML = data.contact.name;
document.getElementById('title').innerHTML = data.contact.title;
document.getElementById("github-link").setAttribute("href", data.contact.github);
document.getElementById("linkedin-link").setAttribute("href", data.contact.linkedin);
document.getElementById("photo").setAttribute("src", data.about.photo);
document.getElementById('description').innerHTML = data.about.description;

function insertCards(numOfCards) {
  let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ''
    data.portfolio.forEach(item => {
      cardContainer.innerHTML += `
      <div class="project-card card-shadow">
        <img src="${item.image}" class="project-img" alt="...">
        <div class="project-info-box">
          <div class="project-codename">${item.codename}</div>
          <p class="project-description">${item.description}</p>
        </div>
        <span tabindex="0" class="buttom">
          <a href="${item.github}" id="github-link">
            <i class="mdi mdi-github"></i>
            GitHub
          </a>
        </span>
      </div>
      `;
    });
}

insertCards();