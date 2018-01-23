import BaseModel from './BaseModel';
import { parse } from '../Utils';

class ProjectVariables extends BaseModel {
    
  // https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/project_level_variables.md#list-project-variables
  
  all(projectId) {
    const pId = parse(projectId);

    return this.get(`projects/${pId}/variables`);
  }
  
  // https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/project_level_variables.md#show-variable-details

//   show(projectId, variableKey) {
//     const [pId, key] = [projectId, variableKey].map(parse);

//     return this.get(`projects/${pId}/variables/${key}`);
//   }

  // https://github.com/gitlabhq/gitlabhq/blob/master/doc/api/project_level_variables.md#create-variable

  add(projectId, key, value, options = {}) {
    const pId = parse(projectId);

    return this.post(`projects/${pId}/variables`, Object.assign({ key, value }, options));
  }

  edit(projectId, variableKey, url, options = {}) {
    const [pId, key] = [projectId, variableKey].map(parse);

    return this.put(`projects/${pId}/variables/${key}`, Object.assign({ url }, options));
  }

  remove(projectId, variableKey) {
    const [pId, key] = [projectId, variableKey].map(parse);

    return this.delete(`projects/${pId}/variables/${key}`);
  }
}

export default ProjectVariables;
