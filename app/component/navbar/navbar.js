'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', NavbarController],
  controllerAs: 'navbarCtrl'
};

function NavbarController($log, $location, $rootScope) {
  $log.debug('NavbarController');

  this.showHome = function() {
    $location.url('/home');
  }

  this.showProjects = function() {
    $location.url('/projects');
  }

  this.showResume = function() {
    $location.url('/resume');
  }

};
