const UIController = (() => {
    return {
        closeNav: () => {
            $('#navi-toggle').prop('checked', false);
        }
    }

})();

const Controller = ((UIController) => {
    const setupEventListeners = () => {
        window.addEventListener('hashchange', UIController.closeNav)
    }

    return {
        init: () => {
            setupEventListeners();
        }
    }

})(UIController);

Controller.init();
