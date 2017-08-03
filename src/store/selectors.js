// import * as ku from '../lib/ke-utils';

export const getEvents = (state) =>
  state.events.eventsIds.map((id) => state.events.eventsById[id]);

// redux selectors
export const getRequest = (state, key) =>
  state.requests[key] || {};

export const getRequests = (state) =>
  state.requests;

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending');
};


