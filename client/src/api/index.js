import { normalize, Schema, arrayOf } from 'normalizr';
// import fetchJsonp from '../../../node_modules/fetch-jsonp/build/fetch-jsonp.js';
import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp';
const events = new Schema('events', { idAttribute: 'time' });
const projects = new Schema('projects', { idAttribute: '_id' });
const members = new Schema('members', { idAttribute: '_id' });
const techlogos = new Schema('techlogos', { idAttribute: '_id' });
const navButtons = new Schema('navButtons', { idAttribute: '_id' } );
const sponsors = new Schema('sponsors', { idAttribute: '_id' } );
// import * as ku from '../lib/ke-utils';

// Meetup Api
const urlEvents = 'https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=trivalleycoders&photo-host=secure&page=5&fields=&order=time&desc=false&status=upcoming&sig_id=186737513&sig=5fb3751fa7a6004ce0e74889648a52cb58cdca08';
// api key: 2e5c517f58732265142936457e507d1d
// const urlEvents = 'https://api.meetup.com/trivalleycoders/events?&sign=true&photo-host=public&page=20&sig_id=2e5c517f58732265142936457e507d1d'

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

export const fetchEvents = (url) => (

  fetchJsonp(url)
    .then((response) => {
      return response.json();
    })
);

export default {
  events: {
    readList() {
      return fetchEvents(urlEvents)
        .then((data) => {
          const normalized = normalize(data.results, arrayOf(events));
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
    update(id, member) {
      // ku.log('api.members.update: id', id, 'pink');
      // ku.log('api.members.update: member', member, 'pink')
      return fetchJson(
        `/members/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ member }) }
      );
    },
    delete(id) {
      // ku.log('api.members.delete: id', id, 'pink');
      return fetchJson(
        `/members/${id}`,
        {
          method: 'DELETE'
        }
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
