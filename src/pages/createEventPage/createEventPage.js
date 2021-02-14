import handleSubmit from '../../js/createEvent';
import refs from '../../js/refs';

import schedule from '../../data/schedule.json';
import participantsArr from '../../data/participants.json';

import createEventTemplate from './createEventPage.hbs';

import './createEventPage.scss';

const participants = participantsArr.slice(1);

const createEvent = createEventTemplate({ schedule, participants });

const createEventPage = () => {
  refs.root.innerHTML = createEvent;

  const createEventForm = document.querySelector('.createEventForm');

  createEventForm.addEventListener('submit', handleSubmit);
};

export default createEventPage;
