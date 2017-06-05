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

export const newMember = (newMember) => ({
  type: 'app/newMember',
  payload: { newMember },
});

export const insertMember = (member) => ({
  type: 'app/insertMember',
  payload: member,
});

export const updateMember = (_id, firstName, lastName, role, picture ) => ({
  type: 'app/updateMember',
  payload: {
    _id,
    firstName,
    lastName,
    role,
    picture,
  }
})

export const createNewMember = ( _id = "000", firstName = "", lastName = "", role = "", picture = "" ) => ({
  type: 'app/createNewMember',
  payload: {
    _id,
    firstName,
    lastName,
    role,
    picture,
  }
})

export const updateNewMember = (_id, firstName, lastName, role, picture ) => ({
  type: 'app/updateNewMember',
  payload: {
    _id,
    firstName,
    lastName,
    role,
    picture,
  }
})

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


/*
    Variations of an actionCreator
 */
// This variation allows you to log
export const markRequestSuccess = (key) => {
  // you can use console.log() here
  return ({
    type: 'app/markRequestSuccess',
    meta: { key },
  });
}
// This variation is shorter but you can't log
/*export const markRequestSuccess = (key) => ({
  type: 'app/markRequestSuccess',
  meta: { key },
});*/

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
  key: 'readMembers',
  success: [ replaceMembers ]
});

export const requestCreateMember = createRequestThunk({
  request: api.members.create,
  key: 'createMember',
  success: [ insertMember, (member) => newMember(member) ],
});

export const requestUpdateMember = createRequestThunk({
  request: api.members.update,
  key: (_id) => `updateMember/${_id}`,
  success: [ updateMember ]
})

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
