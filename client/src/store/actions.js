import api from '../api';

export const replaceEvents = (events) => ({
  type: 'app/replaceEvents',
  payload: events,
});

export const replaceProjects = (projects) => ({
  type: 'app/replaceProjects',
  payload: projects,
});

export const replaceMembers = (members) => ({
  type: 'app/replaceMembers',
  payload: members,
});

export const setNewMember = (firstName) => ({
  type: 'app/setNewMember',
  payload: {
    firstName,
  },
});

export const clearNewMember = () => ({
  type: 'app/clearNewMember',
});

export const insertMember = (member) => ({
  type: 'app/insertMember',
  payload: member,
});

export const updateMember = (content, id, timestamp = Date.now()) => ({
  type: 'app/updateMember',
  payload: {
    id,
    content,
    timestamp,
  },
});

export const removeMember = (id) => ({
  type: 'app/removeMember',
  payload: { id },
});

export const replaceTechlogos = (techlogos) => ({
  type: 'app/replaceTechlogos',
  payload: techlogos,
});

  export const replaceNavButtons = (navButtons) => ({
  type: 'app/replaceNavButtons',
  payload: navButtons,
});

  export const replaceSponsors = (sponsors) => ({
  type: 'app/replaceSponsors',
  payload: sponsors,
});

export const markRequestPending = (key) => ({
  type: 'app/markRequestPending',
  meta: { key },
});

export const markRequestSuccess = (key) => {
  console.log('key', key)
  return ({
    type: 'app/markRequestSuccess',
    meta: { key },
  });
}

/*
export const markRequestSuccess = (key) => ({
  type: 'app/markRequestSuccess',
  meta: { key },
});
*/

export const markRequestFailed = (reason, key) => ({
  type: 'app/markRequestFailed',
  payload: reason,
  meta: { key },
});

export const createRequestThunk = ({ request, key, start = [], success = [], failure = [] }) => {

  return (...args) => (dispatch) => {
    const requestKey = (typeof key === 'function') ? key(...args) : key;

    start.forEach((actionCreator) => dispatch(actionCreator()));
    dispatch(markRequestPending(requestKey));
    return request(...args)
      .then((data) => {
        success.forEach((actionCreator) => dispatch(actionCreator(data)));
        dispatch(markRequestSuccess(requestKey));
      })
      .catch((reason) => {
        failure.forEach((actionCreator) => dispatch(actionCreator(reason)));
        dispatch(markRequestFailed(reason, requestKey));
      });
  };
};

export const requestReadEvents = createRequestThunk({
  request: api.events.readList,
  key: 'readEvents',
  success: [ replaceEvents ]
});

export const requestReadProjects = createRequestThunk({
  request: api.projects.readList,
  key: 'readProjects',
  success: [ replaceProjects ]
});

export const requestReadMembers = createRequestThunk({
  request: api.members.readList,
  key: 'readNewMemberForm',
  success: [ replaceNewMemberForm ]
});

export const requestReadNewMemberForm = createRequestThunk({
  request: api.newMemberForm.readList,
  key: 
});

// export const requestReadMember = createRequestThunk({
//   request: api.members.get,
//   key: (id) => `getMember/${id}`,
//   success: [ (member) => getMember(member.id) ],
// });

export const requestCreateMembers = createRequestThunk({
  request: api.members.create,
  key: 'createMember',
  success: [ insertMember ],
});

export const requestUpdateMember = createRequestThunk({
  request: api.members.update,
  key: (id) => `updateMember/${id}`,
  success: [ updateMember ],
});

export const requestDeleteMember = createRequestThunk({
  request: api.members.delete,
  key: (id) => `deleteMember/${id}`,
  success: [ (member) => removeMember(member.id) ],
});

export const requestReadTechlogos = createRequestThunk({
  request: api.techlogos.readList,
  key: 'readTechlogos',
  success: [ replaceTechlogos ]
});

export const requestReadNavButtons = createRequestThunk({
  request: api.navButtons.readList,
  key: 'readNavButtons',
  success: [ replaceNavButtons ]
});

export const requestReadSponsors = createRequestThunk({
  request: api.sponsors.readList,
  key: 'readSponsors',
  success: [ replaceSponsors ]
});
