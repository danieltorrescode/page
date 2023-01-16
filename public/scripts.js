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
      description: "Full-Stack WebDev",
      image: "assets/img/vue1.png",
      github: "https://github.com/danieltorrescode/",
      link: "",
      details:
        "",
    },
  ],
  icons:[
    "mdi-console",
    "mdi-linux",
    // "mdi-arch",
    "mdi-code-json",
    "mdi-language-html5",
    "mdi-language-css3",
    "mdi-tailwind",
    "mdi-language-javascript",
    "mdi-nodejs",
    "mdi-vuejs",
    "mdi-language-python",
    "mdi-git",
    "mdi-github",
    "mdi-gitlab",
    "mdi-docker",
    "mdi-database",
    "mdi-database-cog",
    "mdi-flask",
    "mdi-calculator-variant-outline",
  ],
};


function insertCards(numOfCards) {
  let cardContainer = document.getElementById("card-container");
    data.portfolio.forEach(item => {
      cardContainer.innerHTML += `
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg  my-2 mx-5 bg-gray-300">
        <img src="${item.image}" class="w-10" alt="...">
        <div class="px-6 py-4">
          <div class="font-medium text-xl mb-2">${item.codename}</div>
          <p class="text-gray-700 text-base">
          ${item.description}
          </p>
        </div>
        <div class="flex items-end px-6 py-4">
          <a href="${item.github}" class="bg-gray-100 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-full">
            <i class="mdi mdi-github"></i> GitHub
          </a>
        </div>
      </div>
      `;
    });
}
function insertIcons() {
  let IconContainer = document.getElementById("icon-container");
  data.icons.forEach(icon => {
  IconContainer.innerHTML += `
      <div class="w-12 h-12 text-center m-2">
        <i class="mdi ${icon} text-gray-800"></i>
      </div>
    `;
  });
}


document.getElementById('header-name').innerHTML = data.contact.username;
document.getElementById('header-title').innerHTML = data.contact.title;
document.getElementById('name').innerHTML = data.contact.name;
document.getElementById('title').innerHTML = data.contact.title;
document.getElementById("github-link").setAttribute("href", data.contact.github);
document.getElementById("linkedin-link").setAttribute("href", data.contact.linkedin);
document.getElementById("photo").setAttribute("src", data.about.photo);

document.getElementById('description').innerHTML = data.about.description;
insertIcons();
insertCards();