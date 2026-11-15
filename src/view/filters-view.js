import AbstractView from '../framework/view/abstract-view.js';
import {capitalize} from '../utils.js';
import {FilterType} from '../const.js';

function createFilterItemTemplate(filter) {
  const {type, count} = filter;

  return /* HTML */ `<div class="trip-filters__filter">
                  <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${type === FilterType.EVERYTHING ? 'checked' : ''} ${count === 0 ? 'disabled' : ''}>
                  <label class="trip-filters__filter-label" for="filter-${type}">${capitalize(type)}</label>
                </div>`;
}

function createFiltersTemplate(filters) {
  return /* HTML */ `<form class="trip-filters" action="#" method="get">
                ${filters.map(createFilterItemTemplate).join('')}

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`;
}

class FiltersView extends AbstractView {
  #filters = [];

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}

export default FiltersView;
