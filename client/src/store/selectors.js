export const getEvents = (state) =>
  state.events.eventsIds.map((id) => state.events.eventsById[id]);

export const getProjects = (state) =>
  state.projects.projectsIds.map((id) => state.projects.projectsById[id]);

export const getMembers = (state) =>
  state.members.membersIds.map((id) => state.members.membersById[id]);

// redux selectors
export const getRequest = (state, key) =>
  state.requests[key] || {};

export const getRequests = (state) =>
  state.requests;

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending');
};
