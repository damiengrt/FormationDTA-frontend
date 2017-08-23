import './forms.css'

export default class FormCtrl {
    constructor() {
        this.master = {};
        this.reset();
    }

    update(user) {
        this.master = angular.copy(user);
    }

    reset() {
        this.user = angular.copy(this.master);
    }
}