import config from './config.js'
const backEndURL = config.backEndURL

export const fetchMatches = async () => {
  const res = await fetch(backEndURL + '/matches').catch((error) => console.log(error));
  return res.json();
};

export const fetchTicketReservations = async () => {
  const res = await fetch(backEndURL + '/tickets').catch((error) => console.log(error));
  return res.json();
};

export const postTicketReservation = async (newTicketReservation) => {
  const res = await fetch(backEndURL + '/tickets', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTicketReservation)
  }).catch((error) => console.log(error));
  return res.json();
};

export const deleteTicketReservation = async (id) => {
  const res = await fetch(backEndURL + '/tickets', {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
  }).catch((error) => console.log(error));
  return res.status;
};

export const editTicketReservation = async (editedTicketReservation) => {
  const res = await fetch(backEndURL + '/tickets', {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(editedTicketReservation)
  }).catch((error) => console.log(error));
  return res.status;
};

export const fetchUsers = async () => {
  const res = await fetch(backEndURL + '/users').catch((error) => console.log(error));
  return res.json();
};

export const postUser = async (newUser) => {
  const res = await fetch(backEndURL + '/users', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).catch((error) => console.log(error));
  return res.json();
};