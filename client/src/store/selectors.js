export const getEvents = (state) =>
  state.events.ids.map((id) => state.events.byId[id]);

export const getProjects = (state) =>
  state.projects.ids.map((id) => state.projects.byId[id]);

export const getRequest = (state, key) =>
  state.requests[key] || {};

export const getRequests = (state) =>
  state.requests;

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending');
};