import {render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

class PointPresenter {
  #pointListContainer = null;
  #pointsModel = null;

  #pointView = null;
  #pointEditView = null;

  #point = null;

  constructor({pointListContainer, pointsModel}) {
    this.#pointListContainer = pointListContainer;
    this.#pointsModel = pointsModel;
  }

  init(point) {
    this.#point = point;

    const destinations = this.#pointsModel.destinations;
    const destination = this.#pointsModel.getDestinationById(point.destination);
    const availableOffers = this.#pointsModel.getOffersByType(point.type);
    const selectedOffers = availableOffers.filter((offer) => point.offers.includes(offer.id));

    this.#pointView = new PointView({
      point,
      destination,
      selectedOffers,
      onEditClick: this.#handleEditClick
    });

    this.#pointEditView = new PointEditView({
      point,
      destination,
      destinations,
      availableOffers,
      onFormSubmit: this.#handleFormClose,
      onRollupClick: this.#handleFormClose
    });

    render(this.#pointView, this.#pointListContainer);
  }

  #replacePointToForm() {
    replace(this.#pointEditView, this.#pointView);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#pointView, this.#pointEditView);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormClose = () => {
    this.#replaceFormToPoint();
  };
}

export default PointPresenter;
