import { getFromLocalstorage, setToLocalStorage } from '../../js/localStorage';
import refs from '../../js/refs';

import schedule from '../../data/schedule.json';
import participants from '../../data/participants.json';

import headerTemplate from './header.hbs';
import mainTemplate from './main.hbs';

import './homePage.scss';

let currentParticipiant = 'All';

const eventsList = () => getFromLocalstorage('events') || [];

const head = headerTemplate(participants);

const tableData = (schedule, eventsList, filter) => {
  const filterParticipants =
    filter !== 'All'
      ? eventsList.filter(item => item.participants.includes(filter))
      : eventsList;

  return schedule
    .map(({ time }) => {
      const meeting = filterParticipants.filter(item => +item.time === time);

      let res = '';

      for (let i = 0; i < 5; i++) {
        const day = meeting && meeting.filter(item => +item.day === i);

        if (day.length > 0) {
          res += `<td class="table-calendar__data table-calendar__event">
          <span class="event">${day[0].nameOfEvent}
          </span>
          <button id=${day[0].id} data-bs-toggle="modal"
          data-bs-target="#modal" class="table-calendar__deleteBtn">x
          </button>
          `;
        } else {
          res += `<td class="table-calendar__data">`;
        }
        res += `</td>`;
      }

      return `
        <tr class="table-calendar__raw">
          <td class="table-calendar__data">${time + ':00'}</td>
          ${res}
        </tr>`;
    })
    .join('');
};

const handleChangeParticipiant = newParticipiant => {
  currentParticipiant = newParticipiant;
};

const handleDeleteEvent = e => {
  setToLocalStorage(
    'events',
    eventsList().filter(({ id }) => e.target.id !== id),
  );

  refs.main.innerHTML = main();

  const deleteBtn = document.querySelectorAll('.table-calendar__deleteBtn');

  deleteBtn.forEach(i => i.addEventListener('click', handleOpenModal));
};

const handleOpenModal = e => {
  refs.confirmDeleteBtn.id = e.target.id;

  const modalText = `Are you shure you want to delete "${
    eventsList().find(({ id }) => id === e.target.id).nameOfEvent
  }" event?`;

  refs.modal.innerHTML = modalText;

  refs.confirmDeleteBtn.addEventListener('click', handleDeleteEvent);
};

const table = () => tableData(schedule, eventsList(), currentParticipiant);

const main = () => mainTemplate({ table });

const initHomePage = () => {
  refs.head.innerHTML = head;
  refs.main.innerHTML = main();

  const createEventBtn = document.querySelector('.createEvent');

  createEventBtn.addEventListener('click', e => {
    e.preventDefault();
    window['router'].navigate('/create-event');
  });

  const participantsFilter = document.querySelector('.participants');

  participantsFilter.addEventListener('change', e => {
    handleChangeParticipiant(e.target.value);
    refs.main.innerHTML = main();
  });

  const deleteBtn = document.querySelectorAll('.table-calendar__deleteBtn');

  deleteBtn.forEach(i => i.addEventListener('click', handleOpenModal));
};

export default initHomePage;
