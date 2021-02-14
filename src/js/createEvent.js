import { getFromLocalstorage, setToLocalStorage } from './localStorage';
const shortid = require('shortid');

import alertTemplate from '../pages/createEventPage/alert.hbs';

const eventsList = () => getFromLocalstorage('events') || '';

const createNewEvent = formData => {
  let newEvent = {};
  for (let val of formData) {
    if (val[0] === 'participants') {
      if (newEvent.participants) {
        newEvent = {
          ...newEvent,
          participants: [...newEvent.participants, val[1]],
        };
      } else {
        newEvent = { ...newEvent, participants: [val[1]] };
      }
    } else {
      newEvent = { ...newEvent, [val[0]]: val[1] };
    }
    newEvent = { ...newEvent, id: shortid.generate() };
  }
  return newEvent;
};

const isTimeFree = (eventsList, newEvent) => {
  for (let event of eventsList) {
    if (+event.time === +newEvent.time && +event.day === +newEvent.day) {
      return false;
    }
  }
  return true;
};

const showErrorMessage = () => {
  const alert = document.getElementById('alert');

  alert.innerHTML = alertTemplate();
};

const addNewEvent = (eventsList, newEvent) => {
  if (eventsList) {
    setToLocalStorage('events', [...eventsList, newEvent]);
  } else {
    setToLocalStorage('events', [newEvent]);
  }

  document.location.href = '/testCiclum';
};

const handleSubmit = e => {
  e.preventDefault();
  const createEventForm = document.querySelector('.createEventForm');

  const formData = new FormData(createEventForm);

  const newEvent = createNewEvent(formData);

  isTimeFree(eventsList(), newEvent)
    ? addNewEvent(eventsList(), newEvent)
    : showErrorMessage();
};

export default handleSubmit;
