// import * as ku from '../lib/ke-utils';

export const getMembers = (state) =>{
  // ku.log('getMembers.state', state, 'red');
  return state.members.membersIds.map((id) => state.members.membersById[id]);
}

export const getMember = (state, _id) => {
  // ku.log('selectors.getMember: state', state, 'red');
  // ku.log('selectors.getmember: _id', _id, 'red');
  const o = state.members.membersById[_id] || null;
  // ku.log('selectors.getmember: o', o, 'red');
  return o;
}

export const getProjects = (state) =>
  state.projects.projectsIds.map((id) => state.projects.projectsById[id]);

export const getNewMemberId = (state) => {
  return state.ui.updateNewMemberId || 'none';
}

export const getShowManageMembers = (state) => {
  return state.ui.showManageMembers;
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

export const getEvents = (state) =>
  state.events.eventsIds.map((id) => state.events.eventsById[id]);
