console.log('Bonjour App');

import angular from 'angular'
import ngResource from 'angular-resource'

import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripsList.html'
import tplTp06 from './tp06/tripsListDetails.html'
import tplTp07 from './tp07/tripsComments.html'

document.querySelector('body').innerHTML =[tplTp07, tplTp06, tplTp05, tplTp04, tplTp03, tplTp02, tplTp01].join('<hr>')

let tripApp = angular.module('tripApp', ['ngResource']);
import CarrouselCtrl from './tp03/carrousel.controller'
tripApp.controller(CarrouselCtrl.name, CarrouselCtrl, ['$interval'])
import FormCtrl from './tp04/forms.controller'
tripApp.controller(FormCtrl.name, FormCtrl)
import TripsListCtrl from './tp05/tripsList.controller'
tripApp.controller(TripsListCtrl.name, TripsListCtrl)
import TripsDetailListCtrl from './tp06/tripsListDetails.controller'
tripApp.controller(TripsDetailListCtrl.name, TripsDetailListCtrl)

import TripsCommentsCtrl from './tp07/tripsComments.controller'
import ApiUrlsService from './tp07/apiUrls.service'
import TripsService from './tp07/trips.service'
import CommentsService from './tp07/comments.service'
import StepsService from './tp07/steps.service'
tripApp.controller(TripsCommentsCtrl.name, TripsCommentsCtrl)
  .constant('apiUrlsService', ApiUrlsService)
  .service('tripsService', TripsService)
  .factory('commentsService', CommentsService)
  .service('stepsService', StepsService)