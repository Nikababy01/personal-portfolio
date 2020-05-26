import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const myProjects = response.data;
      const project = [];
      Object.keys(myProjects).forEach((projectId) => {
        myProjects[projectId].id = projectId;
        project.push(myProjects[projectId]);
      });
      resolve(project);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
