import AbstractView from './abstract-view.js';
import { humanizePointDateTime } from '../utils.js';
import { PointType, BLANK_POINT, BLANK_DESTINATION } from '../const.js';

function createOfferEditTemplate(offer, point, formId) {
  const isChecked = point.offers.includes(offer.id);
  const offerInputId = `event-offer-${formId}-${offer.id}`;
  return /* HTML */ `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="${offerInputId}" type="checkbox" name="event-offer" ${isChecked ? 'checked' : ''} value="${offer.id}">
            <label class="event__offer-label" for="${offerInputId}">
              <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
              <span class="event__offer-price">${offer.price}</span>
            </label>
          </div>`;
}

function createTypeTemplate(type, point, formId) {
  const isChecked = point.type === type;
  const typeInputId = `event-type-${formId}-${type}`;
  const typeTitle = type.charAt(0).toUpperCase() + type.slice(1);
  return /* HTML */ `<div class="event__type-item">
            <input id="${typeInputId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${isChecked ? 'checked' : ''}>
            <label class="event__type-label  event__type-label--${type}" for="${typeInputId}">${typeTitle}</label>
          </div>`;
}

function createPointEditTemplate({
  point,
  destination,
  availableOffers,
  destinations
}) {
  const isNewPoint = point.id === null;
  const formId = isNewPoint ? 'new' : point.id;
  const offersTemplate = availableOffers.map((offer) => createOfferEditTemplate(offer, point, formId)).join('');
  const typesTemplate = Object.values(PointType).map((type) => createTypeTemplate(type, point, formId)).join('');
  const destinationsTemplate = destinations.map((city) => `<option value="${city.name}"></option>`).join('');
  const picturesTemplate = destination.pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`).join('');
  const offersSectionTemplate = availableOffers.length > 0 ? /* HTML */ `
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${offersTemplate}
    </div>
  </section>
  ` : '';
  const destinationSectionTemplate = destination.description.length > 0 || destination.pictures.length > 0 ? /* HTML */ `
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${destination.description}</p>
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${picturesTemplate}
      </div>
    </div>
  </section>` : '';
  const resetButtonText = isNewPoint ? 'Cancel' : 'Delete';
  const rollupButtonTemplate = isNewPoint ? '' : /* HTML */ `<button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>`;
  return /* HTML */ `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-${formId}">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${formId}" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${typesTemplate}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-${formId}">
                      ${point.type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-${formId}" type="text" name="event-destination" value="${destination.name}" list="destination-list-${formId}">
                    <datalist id="destination-list-${formId}">
                      ${destinationsTemplate}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-${formId}">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-${formId}" type="text" name="event-start-time" value="${humanizePointDateTime(point.dateFrom)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-${formId}">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-${formId}" type="text" name="event-end-time" value="${humanizePointDateTime(point.dateTo)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-${formId}">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-${formId}" type="text" name="event-price" value="${point.basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">${resetButtonText}</button>
                  ${rollupButtonTemplate}
                </header>
                <section class="event__details">
                ${offersSectionTemplate}
                  ${destinationSectionTemplate}
                </section>
              </form>
            </li>`;
}

class PointEditView extends AbstractView {
  #point = null;
  #destination = null;
  #destinations = [];
  #availableOffers = [];

  constructor({point = BLANK_POINT, destination = BLANK_DESTINATION, availableOffers = [], destinations = []}) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#availableOffers = availableOffers;
    this.#destinations = destinations;
  }

  get template() {
    return createPointEditTemplate({
      point: this.#point,
      destination: this.#destination,
      availableOffers: this.#availableOffers,
      destinations: this.#destinations
    });
  }
}

export default PointEditView;
