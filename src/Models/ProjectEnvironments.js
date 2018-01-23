import BaseModel from './BaseModel';
import { parse } from '../Utils';

class Environments extends BaseModel {
  all(projectId, options = {}) {
    const pId = parse(projectId);

    return this.get(`projects/${pId}/environments`, options);
  }
  edit(projectId, environmentId, options = {}) {
    const [pId, eId] = [projectId, environmentId].map(parse);

    return this.put(`projects/${pId}/environments/${eId}`, options);
  }

  remove(projectId, environmentId) {
    const [pId, eId] = [projectId, environmentId].map(parse);

    return this.delete(`projects/${pId}/environments/${eId}`);
  }

  stop(projectId, environmentId, options = {}) {
    const [pId, eId] = [projectId, environmentId].map(parse);

    return this.post(`projects/${pId}/environments/${eId}/stop`, options);
  }
}

export default Environments;
