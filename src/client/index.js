import { handleSubmit } from "./js/formHandler";
import { updateUI } from "./js/formHandler";
import { checkPolarity } from "./js/formHandler";
import { isValidUrl } from "./js/urlChecker";
import { setImg } from "./js/setImg";
import { setDate } from "./js/setDate";

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import './img/cloud.svg';

export {
    isValidUrl,
    handleSubmit,
    updateUI,
    checkPolarity,
    setImg,
    setDate
}