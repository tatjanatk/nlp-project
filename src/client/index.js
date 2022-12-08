import { handleSubmit } from "./js/formHandler";
import { updateUI } from "./js/formHandler";
import { polarityChecker } from "./js/formHandler";
import { isValidUrl } from "./js/urlChecker";

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

export {
    isValidUrl,
    handleSubmit,
    updateUI,
    polarityChecker
}