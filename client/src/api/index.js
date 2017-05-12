import { normalize, Schema, arrayOf } from 'normalizr';
import * as ku from '../../../lib/ke-utils';
const events = new Schema('events', { idAttribute: '_id' });
const projects = new Schema('projects', { idAttribute: '_id' });

export const rejectErrors = (res) => {
  const { status } = res;
  if (status >= 200 && status < 300) {
    return res;
  }
  return Promise.reject({ message: res.statusText });
};

export const fetchJson = (url, options = {}) => (

  fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(rejectErrors)
  .then((res) => res.json())
);

export default {
  events: {
    readList() {
      ku.logFunction('api.events.readList');
      return fetchJson('/events')
        .then((data) => {
          ku.log('data.events', data, 'red');
          const normalized = normalize(data, arrayOf(events));
          ku.log('normalized.events', normalized, 'red');
          const o = {
            events: normalized.entities.events || {},
            ids: normalized.result,
          };
          ku.log('events.o', o, 'red');
          return o;
        });
    },
  },

 projects: {
    readList() {
      ku.logFunction('api.projects.readList()');
      return fetchJson('/projects')
        .then((data) => {
          ku.log('data.projects', data, 'red');
          const normalized = normalize(data, arrayOf(projects));
          ku.log('normalized.projects', normalized, 'red');
          const o = {
            projects: normalized.entities.projects || {},
            ids: normalized.result,
          };
          ku.log('projects.o', o, 'red');
          return o;
        });
    },
  },
};
