
import './index.css';
import angular from 'angular';
import path from 'path';
import angularmaterial from  'angular-material';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

function MainController()
{

}

angular.module('MyApp',['ngMaterial']).controller("MainController",MainController);

angular.module('MyApp').component('introPage',{
templateUrl:'templates/IntroPage/introPage.html',
controller: intro,
controllerAs:'ip'
});

import intro from './IntroPage/intropage.js'
