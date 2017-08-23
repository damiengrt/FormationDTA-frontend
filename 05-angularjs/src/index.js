console.log('Bonjour App');

import angular from 'angular'

import tplTp01 from './tp01/expressions.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'

document.querySelector('body').innerHTML = [tplTp01].join('<hr>') + [tplTp02].join('<hr>') + [tplTp03].join('<hr>')

import CarrouselCtrl from './tp03/carrousel.controller'
angular.module('tripApp', []).controller(CarrouselCtrl.name, CarrouselCtrl, ['$interval'])