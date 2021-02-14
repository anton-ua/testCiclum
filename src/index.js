import './styles.scss';

import './router/router';

import Router from './router/router';
import initHomePage from './pages/homePage/homePage';
import createEventPage from './pages/createEventPage/createEventPage';

window['router'] = new Router({
  root: '/testCiclum',

  routes: [
    {
      path: /create-event/,
      callback: () => {
        createEventPage();
      },
    },
    {
      path: '',
      callback: () => {
        initHomePage();
      },
    },
  ],
});
