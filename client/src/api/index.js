import { normalize, Schema, arrayOf } from 'normalizr';
const events = new Schema('events');

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
      console.log('api.events.readList()');
      return fetchJson('/events')
        .then((data) => {
          console.log('data', data);
          const normalized = normalize(data, arrayOf(events));
          console.log('entities.notes', normalized.entities.notes);
          const o = {
            events: normalized.entities.notes || {},
            ids: normalized.result,
          };
          console.log('o', o);
          return o;
        });
    },

    create() {
      // ku.logFunction('create');
      return fetchJson(
        '/api/notes',
        {
          method: 'POST',
        }
      );
    },

    update(id, content) {
      // ku.logFunction('api.update');
      // ku.log('id', id);
      // ku.log('content', content);
      return fetchJson(
        `/api/notes/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ content }),
        }
      );
    },

    delete(id) {
      // ku.logFunction('delete');
      return fetchJson(
        `/api/notes/${id}`,
        {
          method: 'DELETE',
        }
      );
    },
  },
};
