import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import {render} from './render.js';
import TripPresenter from './presenter/trip-presenter.js';

const filtersContainerElement = document.querySelector('.trip-controls__filters');
const filtersView = new FiltersView();
const sortView = new SortView();
const tripEventsElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter(tripEventsElement);

render(filtersView, filtersContainerElement);
render(sortView, tripEventsElement);
tripPresenter.init();
