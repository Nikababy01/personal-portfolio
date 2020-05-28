import projectData from '../../helpers/data/projectData';
import './profiledisplay.scss';
import utils from '../../helpers/utils';

const createProject = () => {
  projectData.getProjects()
    .then((project) => {
      let domString = '';
      domString += '<h1 class="projects-heading">Projects</h1>';
      project.forEach((projects) => {
        domString += '<div class="container">';
        domString += '<div class="card mb-5">';
        domString += `<h2 class="card-title"><strong>${projects.title}</strong></h2>`;
        domString += `<img src="${projects.screenshot}" class="card-img-top" alt="project"/>`;
        domString += `<p class="card-text">${projects.description}</p>`;
        domString += `<p class="card-text">Technologies Used:${projects.technologiesUsed}</p>`;
        domString += `<p class="card-text">${projects.url}</p>`;
        domString += `<p class="card-text"><a class="" href="${projects.url}"><h3>${projects.title} Deployed Site View Link</h3></a>`;
        domString += `<p class="card-text"><a class="" href="${projects.githubUrl}">Monique Bass github link</h3></a>`;
        domString += '</div>';
        domString += '</div>';
        // domString += '</div>';
        utils.printToDom('projectsPage', domString);
      });
    });
};


export default { createProject };
