import * as ku from '../lib/ke-utils';

export const getEvents = (state) =>
  state.events.eventsIds.map((id) => state.events.eventsById[id]);

export const getProjects = (state) =>
  state.projects.projectsIds.map((id) => state.projects.projectsById[id]);

export const getMembers = (state) =>
  state.members.membersIds.map((id) => state.members.membersById[id]);

export const getMember = (state, _id) => {
  return state.members.byId[_id] || null;
}

export const getNewMemberId = (state) => {
  console.log('state', state, 'green');
  return state.ui.newMemberId;
}


export const getTechlogos = (state) =>
  state.techlogos.techlogosIds.map((id) => state.techlogos.techlogosById[id]);

export const getNavButtons = (state) =>
  state.navButtons.navButtonsIds.map((id) => state.navButtons.navButtonsById[id]);

export const getSponsors = (state) =>
  state.sponsors.sponsorsIds.map((id) => state.sponsors.sponsorsById[id]);

// redux selectors
export const getRequest = (state, key) =>
  state.requests[key] || {};

export const getRequests = (state) =>
  state.requests;

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending');
};
