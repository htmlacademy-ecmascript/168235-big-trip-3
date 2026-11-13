import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import {render} from './framework/render.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';

const filtersContainerElement = document.querySelector('.trip-controls__filters');
const filtersView = new FiltersView();
const sortView = new SortView();
const tripEventsElement = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter(tripEventsElement, pointsModel);

render(filtersView, filtersContainerElement);
render(sortView, tripEventsElement);
tripPresenter.init();
