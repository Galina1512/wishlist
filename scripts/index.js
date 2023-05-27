import { renderNavigation } from "./renderNavigation.js";
import { createHero } from "./createHero.js";

export const router = Router();

const app = document.querySelector('.app');

const handleEditPageRoute = (id) => {

}

const handleEditProfileRouter = (login) => {

}

const handleUserRouter = (login) => {

}

const handleHomePage = () => {
    app.textContent = '';

    renderNavigation();

    const section = createHero();
    app.append(section);

}
const init = () => {
    let isMainPage = true;

    router.on('/', handleHomePage);
    router.on('/editwish/newwish', handleEditPageRoute);
    router.on('/editwish/:id', handleEditPageRoute);
    router.on('/editprofile/:login', handleEditProfileRouter);
    router.on('/user/:loogin', handleUserRouter);

    router.init();

    if (isMainPage) {
        isMainPage = false;
        router.setRoute('/')
    }
};

init();