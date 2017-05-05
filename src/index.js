
import './index.css';
import angular from 'angular';
import path from 'path';
import angularmaterial from  'angular-material';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import intro from './IntroPage/intropage.js'
function MainController()
{

}

angular.module('MyApp',['ngMaterial']).controller("MainController",MainController);

angular.module('MyApp').component('introPage',{
templateUrl:'templates/IntroPage/introPage.html',
controller: intro,
controllerAs:'ip'
});


