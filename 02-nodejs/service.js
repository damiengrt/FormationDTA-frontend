var moduleDevFest = require('./data/devfest-2015.js');

exports.listerTousLesPresentateurs = function () {
    return moduleDevFest.speakers;
};
exports.listerToutesLesSessions = function () {
    return moduleDevFest.sessions;
};
exports.trouverUneSession = function (id) {
    return moduleDevFest.sessions.filter(function (el) {
        return el.id === id;
    })[0];
};
exports.listerTopPresentateurs = function () {
    return moduleDevFest.speakers.filter(function (el) {
        return el.topspeaker === true;
    });
}