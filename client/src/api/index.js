import { normalize, Schema, arrayOf } from 'normalizr';
const events = new Schema('events', { idAttribute: '_id' });
const projects = new Schema('projects', { idAttribute: '_id' });
const members = new Schema('members', { idAttribute: '_id' });
const techlogos = new Schema('techlogos', { idAttribute: '_id' });
const navButtons = new Schema('navButtons', { idAttribute: '_id' } );
const sponsors = new Schema('sponsors', { idAttribute: '_id' } );
// import * as ku from '../lib/ke-utils';


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
  .then((res) => res.json())//I bet this .json does not need to be here
);

export default {
  events: {
    readList() {
      return fetchJson('/events')
        .then((data) => {
          const normalized = normalize(data, arrayOf(events));
          const o = {
            events: normalized.entities.events || {},
            ids: normalized.result,
          };
          return o;
        });
    },
  },

 projects: {
    readList() {
      // ku.logFunction('api.projects.readList()');
      return fetchJson('/projects')
        .then((data) => {
          // ku.log('data.projects', data, 'red');
          const normalized = normalize(data, arrayOf(projects));
          // ku.log('normalized.projects', normalized, 'red');
          const o = {
            projects: normalized.entities.projects || {},
            ids: normalized.result,
          };
          // ku.log('projects.o', o, 'red');
          return o;
        });
    },
  },

  members: {
    readList() {
      return fetchJson(
        '/members',
        { method: 'GET' }
      )
        .then((data) => {
          const normalized = normalize(data, arrayOf(members));
          const o = {
            members: normalized.entities.members || {},
            ids: normalized.result,
          };
          return o;
        });
    },

    create() {
      return fetchJson(
        '/members',
        { method: 'POST' }
      );
    },

    update(id, newMember) {
      console.log('members.update.id', id);
      return fetchJson(
        `/members/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ newMember }) }
      );
    },

    delete(id) {
      return fetchJson(`/members/${id}`, { method: 'DELETE' }
      );
    },
  },

  techlogos: {
    readList() {
      return fetchJson('/techlogos')
        .then((data) => {
          const normalized = normalize(data, arrayOf(techlogos));
          const o = {
            techlogos: normalized.entities.techlogos || {},
              ids: normalized.result,
          };
          return o;
        });
    },
  },

  navButtons: {
    readList() {
      return fetchJson('/navbuttons')
        .then((data) => {
          const normalized = normalize(data, arrayOf(navButtons));
          const o = {
            navButtons: normalized.entities.navButtons || {},
            ids: normalized.result,
          };
          return o;
        });
    },
  },

  sponsors: {
    readList() {
      return fetchJson('/sponsors')
        .then((data) => {
          const normalized = normalize(data, arrayOf(sponsors));
          const o = {
            sponsors: normalized.entities.sponsors || {},
            ids: normalized.result,
          };
          return o;
        });
    },
  },
};
