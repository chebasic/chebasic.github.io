(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"content-wrapper\" fxLayout=\"row\" >\r\n  <app-profile></app-profile>\r\n  <app-resume></app-resume>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\" fxLayout=\"column\">\n\n  <div class=\"logo\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <img src=\"../../assets/software_pink.png\" alt=\"image\">\n  </div>\n  <div fxLayout=\"column\"\n       fxLayoutGap=\"20px\"\n       fxLayoutAlign=\"start center\">\n    <span class=\"really-big center \">\n      {{ user.surname | uppercase}}\n      <br>\n      <span class=\"caret\">\n        {{ user.lastName | uppercase}}\n      </span>\n\n    </span>\n    <span class=\"band center\"> {{ user.job }}</span>\n\n    <h1 class=\"profile-title\"> Contacto </h1>\n    <span class=\"contact-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayoutGap=\"10px\" fxFlexAlign=\"start\">\n      <div  *ngFor=\"let info of user.contact\">\n        <span fxLayout=\"row\">\n          <span class=\"band small\">\n            <i class=\"icon material-icons\">{{info.icon}}</i>\n          </span>\n          <span class=\"info-value\"> {{ info.value | titlecase}} </span>\n        </span>\n\n    </div>\n    </span>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume-education/resume-education.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume-education/resume-education.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-item\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <div class=\"resume-header\" fxFlexAlign=\"end\" fxLayout=\"row\">\n    <span class=\"resume-icon\">\n      <i class=\"material-icons\">school</i>\n    </span>\n    <span class=\"band\">\n      {{ 'Formación Académica' | uppercase }}\n    </span>\n  </div>\n\n  <div class=\"resume-content\">\n    <ul class=\"events\">\n      <li>\n        <time class=\"done\"></time>\n        <span>\n          <strong>Educación Secundaria Obligatoria</strong> IES Las Encinas, Madrid.\n        </span>\n      </li>\n      <li>\n        <time class=\"done\"></time>\n        <span>\n          <strong>Bachillerato Tecnológico</strong> IES Las Encinas, Madrid.\n        </span>\n      </li>\n      <li>\n        <time></time>\n        <span>\n          <strong>Grado en Ingeniería Informática</strong> Universidad Politécnica de Madrid.\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume-experience/resume-experience.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume-experience/resume-experience.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-item\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <div class=\"resume-header\" fxFlexAlign=\"end\" fxLayout=\"row\">\n    <span class=\"resume-icon\">\n      <i class=\"material-icons\">panorama</i>\n    </span>\n    <span class=\"band\">\n      {{ 'Experiencia laboral' | uppercase }}\n    </span>\n  </div>\n\n  <div class=\"resume-content step\">\n    <ul class=\"events\">\n      <li>\n        <time></time>\n        <span>\n          <strong>Desarollador Front-End, <i>Radmas</i></strong>\n          <p>\n            Desde 2016 hasta hoy mi papel en Radmas ha sido el de mejorar la experiencia de usuario,\n            analizar y optimizar el rendimiento de diferentes proyectos <b>Angular</b>, y el encargado\n            de implementar funcionalidades GIS (geographic information system) utilizando <b>OpenLayers</b> y <b>Leafletft</b>\n          </p>\n        </span>\n      </li>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume-profile/resume-profile.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume-profile/resume-profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-item\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <div class=\"resume-header\" fxFlexAlign=\"end\" fxLayout=\"row\">\n    <span class=\"resume-icon\">\n      <i class=\"material-icons\">face</i>\n    </span>\n      <span class=\"band\">\n      {{ 'Perfil' | uppercase }}\n    </span>\n  </div>\n\n  <div class=\"resume-content\">\n    <p>\n      Desarollador actualmente centrado en <b>front-end</b>, con 2+ años de experiencia desarollando interfaces de usuario,\n      testing, profiling, centrado en el rendimiento y en la experiencia del usuario.\n    </p>\n    <p>\n      Entusiasta unix-user, y de las\n      nuevas tecnologías, frameworks y lenguajes de programación, lo que me ha llevado de forma autodidáctica\n      al desarollo back-end con go-lang, django, ruby on rails.\n\n      Actualmente buscando ampliar mis conocimientos sobre aprendizaje automático y deep-learning.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume-skills/resume-skills.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume-skills/resume-skills.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-item\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\n  <div class=\"resume-header\" fxFlexAlign=\"end\" fxLayout=\"row\">\n    <span class=\"resume-icon\">\n      <i class=\"material-icons\">whatshot</i>\n    </span>\n    <span class=\"band\">\n      {{ 'Habilidades' | uppercase }}\n    </span>\n  </div>\n\n  <div class=\"resume-content step\" fxLayout=\"row wrap\">\n    <circle-progress *ngFor=\"let skill of skills\"\n                     [percent]=\"skill.value\"\n                     [outerStrokeGradient]=\"skill.gradient\"\n                     [outerStrokeColor]=\"skill.color\"\n                     [outerStrokeGradientStopColor]=\"skill.color2\"\n                     [title]=\"skill.title\"> </circle-progress>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resume/resume.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resume/resume.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"resume-wrapper\" fxLayout=\"column\">\n  <app-resume-profile></app-resume-profile>\n  <app-resume-education></app-resume-education>\n  <app-resume-experience></app-resume-experience>\n  <app-resume-skills></app-resume-skills>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrapper {\n  height: 100%;\n  max-width: 1133px;\n  background-color: var(--white); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGN2XFxjdi1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDExMzNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _resume_profile_resume_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume-profile/resume-profile.component */ "./src/app/resume-profile/resume-profile.component.ts");
/* harmony import */ var _resume_skills_resume_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume-skills/resume-skills.component */ "./src/app/resume-skills/resume-skills.component.ts");
/* harmony import */ var _resume_education_resume_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume-education/resume-education.component */ "./src/app/resume-education/resume-education.component.ts");
/* harmony import */ var _resume_experience_resume_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resume-experience/resume-experience.component */ "./src/app/resume-experience/resume-experience.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");













const subtitleFormat = (percent) => {
    return percent + '%';
};
const defaultCircle = {
    radius: 70,
    maxPercent: 100,
    space: -10,
    outerStrokeWidth: 16,
    outerStrokeColor: '#78C000',
    innerStrokeColor: '#e7e8ea',
    innerStrokeWidth: 10,
    showUnits: false,
    subtitleFontSize: '20',
    subtitleFormat,
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _resume_resume_component__WEBPACK_IMPORTED_MODULE_6__["ResumeComponent"],
            _resume_profile_resume_profile_component__WEBPACK_IMPORTED_MODULE_7__["ResumeProfileComponent"],
            _resume_skills_resume_skills_component__WEBPACK_IMPORTED_MODULE_8__["ResumeSkillsComponent"],
            _resume_education_resume_education_component__WEBPACK_IMPORTED_MODULE_9__["ResumeEducationComponent"],
            _resume_experience_resume_experience_component__WEBPACK_IMPORTED_MODULE_10__["ResumeExperienceComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__["NgCircleProgressModule"].forRoot(defaultCircle)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 30%;\n  height: 100%; }\n\n.profile-wrapper {\n  width: 100%;\n  height: 100%;\n  background-color: var(--main-color);\n  color: var(--black); }\n\n.profile-wrapper .logo img {\n    height: 50%; }\n\n.profile-wrapper .band.small {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    max-width: 61px; }\n\n.profile-wrapper .band .icon {\n    margin-left: 1.5rem; }\n\n.profile-wrapper .info-value {\n    font-weight: bold;\n    text-align: justify;\n    margin-left: 10px;\n    width: 100%; }\n\n.profile-wrapper .contact-wrapper {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcY3ZcXGN2LWFwcC9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxtQkFBbUIsRUFBQTs7QUFKckI7SUFNSSxXQUFXLEVBQUE7O0FBTmY7SUFXTSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQTs7QUFkckI7SUFpQk0sbUJBQW1CLEVBQUE7O0FBakJ6QjtJQXFCSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXLEVBQUE7O0FBeEJmO0lBNEJJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ucHJvZmlsZS13cmFwcGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIC5sb2dvIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5iYW5kIHtcclxuICAgICYuc21hbGwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWF4LXdpZHRoOiA2MXB4O1xyXG4gICAgfVxyXG4gICAgLmljb257XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbmZvLXZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() {
        this.user = {
            surname: 'Carlos J.',
            lastName: 'Garcia Santos',
            job: 'Front End Developer',
            contact: [
                { value: 'cj.garciasan@gmail.com', icon: 'mail_outline' },
                { value: '+34 619262412', icon: 'phone' },
                { value: 'Quijorna, Madrid', icon: 'explore' },
                { value: 'chebasic.github.io.', icon: 'language' },
            ]
        };
    }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/resume-education/resume-education.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/resume-education/resume-education.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resume-content {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLWVkdWNhdGlvbi9EOlxcY3ZcXGN2LWFwcC9zcmNcXGFwcFxccmVzdW1lLWVkdWNhdGlvblxccmVzdW1lLWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1lZHVjYXRpb24vcmVzdW1lLWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bWUtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/resume-education/resume-education.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/resume-education/resume-education.component.ts ***!
  \****************************************************************/
/*! exports provided: ResumeEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeEducationComponent", function() { return ResumeEducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResumeEducationComponent = class ResumeEducationComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResumeEducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-education',
        template: __webpack_require__(/*! raw-loader!./resume-education.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume-education/resume-education.component.html"),
        styles: [__webpack_require__(/*! ./resume-education.component.scss */ "./src/app/resume-education/resume-education.component.scss")]
    })
], ResumeEducationComponent);



/***/ }),

/***/ "./src/app/resume-experience/resume-experience.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/resume-experience/resume-experience.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1leHBlcmllbmNlL3Jlc3VtZS1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/resume-experience/resume-experience.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/resume-experience/resume-experience.component.ts ***!
  \******************************************************************/
/*! exports provided: ResumeExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeExperienceComponent", function() { return ResumeExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResumeExperienceComponent = class ResumeExperienceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResumeExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-experience',
        template: __webpack_require__(/*! raw-loader!./resume-experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume-experience/resume-experience.component.html"),
        styles: [__webpack_require__(/*! ./resume-experience.component.scss */ "./src/app/resume-experience/resume-experience.component.scss")]
    })
], ResumeExperienceComponent);



/***/ }),

/***/ "./src/app/resume-profile/resume-profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/resume-profile/resume-profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resume-content {\n  margin-left: 30px;\n  padding-right: 49px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLXByb2ZpbGUvRDpcXGN2XFxjdi1hcHAvc3JjXFxhcHBcXHJlc3VtZS1wcm9maWxlXFxyZXN1bWUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1wcm9maWxlL3Jlc3VtZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VtZS1jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0OXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/resume-profile/resume-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/resume-profile/resume-profile.component.ts ***!
  \************************************************************/
/*! exports provided: ResumeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeProfileComponent", function() { return ResumeProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResumeProfileComponent = class ResumeProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResumeProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-profile',
        template: __webpack_require__(/*! raw-loader!./resume-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume-profile/resume-profile.component.html"),
        styles: [__webpack_require__(/*! ./resume-profile.component.scss */ "./src/app/resume-profile/resume-profile.component.scss")]
    })
], ResumeProfileComponent);



/***/ }),

/***/ "./src/app/resume-skills/resume-skills.component.scss":
/*!************************************************************!*\
  !*** ./src/app/resume-skills/resume-skills.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1za2lsbHMvcmVzdW1lLXNraWxscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/resume-skills/resume-skills.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resume-skills/resume-skills.component.ts ***!
  \**********************************************************/
/*! exports provided: ResumeSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeSkillsComponent", function() { return ResumeSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResumeSkillsComponent = class ResumeSkillsComponent {
    constructor() {
        this.skills = [
            { gradient: false, color: '#F7E018', color2: '#F7E018', value: 65, title: 'JavaScript' },
            { gradient: false, color: '#DB3035', color2: '#DB3035', value: 75, title: 'Angular' },
            { gradient: true, color: '#E96228', color2: '#3571A3', value: 80, title: 'HTML/CSS' },
            { gradient: true, color: '#3571A3', color2: '#F7E018', value: 75, title: 'Python' },
        ];
    }
    ngOnInit() {
    }
};
ResumeSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume-skills',
        template: __webpack_require__(/*! raw-loader!./resume-skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume-skills/resume-skills.component.html"),
        styles: [__webpack_require__(/*! ./resume-skills.component.scss */ "./src/app/resume-skills/resume-skills.component.scss")]
    })
], ResumeSkillsComponent);



/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resume-wrapper {\n  padding-left: 40px;\n  padding-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL0Q6XFxjdlxcY3YtYXBwL3NyY1xcYXBwXFxyZXN1bWVcXHJlc3VtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdW1lLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResumeComponent = class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resume',
        template: __webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/index.js!./src/app/resume/resume.component.html"),
        styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/resume/resume.component.scss")]
    })
], ResumeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\cv\cv-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map