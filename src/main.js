import FiltersView from './view/filters-view.js';
import {render} from './render.js';
import TripPresenter from './presenter/trip-presenter.js';

const filtersContainerElement = document.querySelector('.trip-controls__filters');
const filtersView = new FiltersView();
const tripEventsElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter(tripEventsElement);

render(filtersView, filtersContainerElement);
tripPresenter.init();
