console.log('Bonjour App');

import angular from 'angular'

import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripsList.html'

document.querySelector('body').innerHTML = 
      [tplTp01].join('<hr>') 
    + [tplTp02].join('<hr>') 
    + [tplTp03].join('<hr>') 
    + [tplTp04].join('<hr>')
    + [tplTp05].join('<hr>')

let tripApp = angular.module('tripApp', []);
import CarrouselCtrl from './tp03/carrousel.controller'
tripApp.controller(CarrouselCtrl.name, CarrouselCtrl, ['$interval'])
import FormCtrl from './tp04/forms.controller'
tripApp.controller(FormCtrl.name, FormCtrl)
import TripsListCtrl from './tp05/tripsList.controller'
tripApp.controller(TripsListCtrl.name, TripsListCtrl)