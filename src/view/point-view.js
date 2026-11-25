import AbstractView from '../framework/view/abstract-view.js';
import {humanizePointDate, humanizePointTime, calcPointDuration} from '../utils.js';
import {ROLLUP_BUTTON_CLASS, FAVORITE_BUTTON_CLASS} from '../const.js';

function createOfferTemplate(offer) {
  return /* HTML */ `<li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
              &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </li>`;
}

function createPointTemplate({point, destination, selectedOffers}) {
  const {basePrice, dateFrom, dateTo, type, isFavorite} = point;
  const favoriteButtonClass = isFavorite ? `${FAVORITE_BUTTON_CLASS} ${FAVORITE_BUTTON_CLASS}--active` : FAVORITE_BUTTON_CLASS;
  const offersTemplate = selectedOffers.map(createOfferTemplate).join('');
  return /* HTML */ `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${dateFrom}">${humanizePointDate(dateFrom)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}">${humanizePointTime(dateFrom)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTo}">${humanizePointTime(dateTo)}</time>
                  </p>
                  <p class="event__duration">${calcPointDuration(dateFrom, dateTo)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${offersTemplate}
                </ul>
                <button class="${favoriteButtonClass}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="${ROLLUP_BUTTON_CLASS}" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

class PointView extends AbstractView {
  #point = null;
  #destination = null;
  #selectedOffers = [];
  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({point, destination, selectedOffers, onEditClick, onFavoriteClick}) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#selectedOffers = selectedOffers;
    this.#handleEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;
    this.element.querySelector(`.${ROLLUP_BUTTON_CLASS}`).addEventListener('click', this.#editClickHandler);
    this.element.querySelector(`.${FAVORITE_BUTTON_CLASS}`).addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createPointTemplate({
      point: this.#point,
      destination: this.#destination,
      selectedOffers: this.#selectedOffers
    });
  }

  #editClickHandler = (event) => {
    event.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = (event) => {
    event.preventDefault();
    this.#handleFavoriteClick();
  };
}

export default PointView;
