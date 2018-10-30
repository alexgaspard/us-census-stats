(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statistics_pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics/pages/statistics/statistics.component */ "./src/app/statistics/pages/statistics/statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ROUTES = [
    { path: '', redirectTo: '/statistics', pathMatch: 'full' },
    {
        path: 'statistics',
        component: _statistics_pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\"\n  aria-controls=\"collapseExample\">\n  Button with data-target\n</button>\n<div class=\"collapse\" id=\"collapseExample\">\n  <div class=\"card card-body\">\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh\n    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n  </div>\n</div>\n\n<div class=\"container-fluid\" ng-app=\"anoraktest\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./statistics */ "./src/app/statistics/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _statistics__WEBPACK_IMPORTED_MODULE_7__["StatisticsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/http.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.HTTP_OPTIONS = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' }) };
    }
    HttpService.prototype.getList = function (url, filters) {
        if (filters === void 0) { filters = {}; }
        return this.http.get(url, { params: filters }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpService.prototype.get = function (url) {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpService.prototype.update = function (url, object) {
        return this.http.put(url, object, this.HTTP_OPTIONS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpService.prototype.add = function (url, object) {
        return this.http.post(url, object, this.HTTP_OPTIONS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpService.prototype.delete = function (url) {
        return this.http.delete(url, this.HTTP_OPTIONS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpService.prototype.handleError = function (error) {
        var message = (error.message) ? error.message : 'Server error';
        console.error(message);
        if (error.status === 401) {
            window.location.href = '/';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(message);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/statistics/components/statistics-detail/statistics-detail.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/statistics/components/statistics-detail/statistics-detail.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* red = #EA4335;\nyellow = #FBBC05;\ngreen = #34A853;\nblue = #4285F4; */\n\n@-webkit-keyframes dotloader1{\n  0%{top:0px;}\n  15%{top:10px;}\n  30%{top:0px;}\n  100%{top:0px;}\n}\n\n@keyframes dotloader1{\n  0%{top:0px;}\n  15%{top:10px;}\n  30%{top:0px;}\n  100%{top:0px;}\n}\n\n#toggledots{\n  margin-left:105px;\n}\n\n.dot{\n  margin: 2px;\n  height:20px;\n  width:20px;\n  border-radius:10px;\n  display:inline-block;\n  position:relative;\n}\n\n#dot1.animated{\n  background: red;\n  -webkit-animation-name:dotloader1;\n          animation-name:dotloader1;\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-delay:0s;\n          animation-delay:0s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite;\n}\n\n#dot2.animated{\n  background:green;\n  -webkit-animation-name:dotloader1;\n          animation-name:dotloader1;\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-delay:0.1s;\n          animation-delay:0.1s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite;\n}\n\n#dot3.animated{\n  background: blue;\n  -webkit-animation-name:dotloader1;\n          animation-name:dotloader1;\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-delay:0.2s;\n          animation-delay:0.2s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite;\n}\n\n#dot4.animated{\n  background: yellow;\n  -webkit-animation-name:dotloader1;\n          animation-name:dotloader1;\n  -webkit-animation-duration:1s;\n          animation-duration:1s;\n  -webkit-animation-delay:0.3s;\n          animation-delay:0.3s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite;\n}\n"

/***/ }),

/***/ "./src/app/statistics/components/statistics-detail/statistics-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/statistics/components/statistics-detail/statistics-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover\">\n    <thead>\n        <tr>\n            <th scope=\"col\">Value</th>\n            <th scope=\"col\">Count</th>\n            <th scope=\"col\">Average</th>\n            <th scope=\"col\">Total</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let result of statistics.data\">\n            <td *ngFor=\"let value of result\">{{value}}</td>\n        </tr>\n    </tbody>\n</table>\n<div [hidden]=\"!loading\" class=\"row\">\n    <div class=\"col text-center\">\n        <div id='dot1' class='dot animated'></div>\n        <div id='dot2' class='dot animated'></div>\n        <div id='dot3' class='dot animated'></div>\n        <div id='dot4' class='dot animated'></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/statistics/components/statistics-detail/statistics-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/statistics/components/statistics-detail/statistics-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StatisticsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsDetailComponent", function() { return StatisticsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_statistics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/statistics */ "./src/app/statistics/shared/statistics.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsDetailComponent = /** @class */ (function () {
    function StatisticsDetailComponent() {
        this.statistics = new _shared_statistics__WEBPACK_IMPORTED_MODULE_1__["Statistics"]();
        this.loading = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_statistics__WEBPACK_IMPORTED_MODULE_1__["Statistics"])
    ], StatisticsDetailComponent.prototype, "statistics", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StatisticsDetailComponent.prototype, "loading", void 0);
    StatisticsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics-detail',
            template: __webpack_require__(/*! ./statistics-detail.component.html */ "./src/app/statistics/components/statistics-detail/statistics-detail.component.html"),
            styles: [__webpack_require__(/*! ./statistics-detail.component.css */ "./src/app/statistics/components/statistics-detail/statistics-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsDetailComponent);
    return StatisticsDetailComponent;
}());



/***/ }),

/***/ "./src/app/statistics/index.ts":
/*!*************************************!*\
  !*** ./src/app/statistics/index.ts ***!
  \*************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _statistics_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.module */ "./src/app/statistics/statistics.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return _statistics_module__WEBPACK_IMPORTED_MODULE_0__["StatisticsModule"]; });




/***/ }),

/***/ "./src/app/statistics/pages/statistics/statistics.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/statistics/pages/statistics/statistics.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/statistics/pages/statistics/statistics.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/statistics/pages/statistics/statistics.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-statistics-detail [statistics]=\"statistics\" [loading]=\"loading\"></app-statistics-detail>"

/***/ }),

/***/ "./src/app/statistics/pages/statistics/statistics.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/statistics/pages/statistics/statistics.component.ts ***!
  \*********************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_statistics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/statistics */ "./src/app/statistics/shared/statistics.ts");
/* harmony import */ var _shared_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/statistics.service */ "./src/app/statistics/shared/statistics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(statisticsService) {
        this.statisticsService = statisticsService;
        this.statistics = new _shared_statistics__WEBPACK_IMPORTED_MODULE_1__["Statistics"]();
        this.loading = true;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.getStatistics();
    };
    StatisticsComponent.prototype.getStatistics = function () {
        var _this = this;
        this.statisticsService.getStatistics().subscribe(function (statistics) {
            _this.statistics = statistics;
            _this.loading = false;
        });
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/pages/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/statistics/pages/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_statistics_service__WEBPACK_IMPORTED_MODULE_2__["StatisticsService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/statistics/shared/statistics.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/statistics/shared/statistics.service.ts ***!
  \*********************************************************/
/*! exports provided: StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/http.service */ "./src/app/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticsService = /** @class */ (function () {
    function StatisticsService(http) {
        this.http = http;
        this.STATISTICS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL + "/stats";
    }
    StatisticsService.prototype.getStatistics = function () {
        return this.http.get(this.STATISTICS_URL);
    };
    StatisticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], StatisticsService);
    return StatisticsService;
}());



/***/ }),

/***/ "./src/app/statistics/shared/statistics.ts":
/*!*************************************************!*\
  !*** ./src/app/statistics/shared/statistics.ts ***!
  \*************************************************/
/*! exports provided: Statistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statistics", function() { return Statistics; });
var Statistics = /** @class */ (function () {
    function Statistics() {
    }
    return Statistics;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.module.ts":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.module.ts ***!
  \*************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "./src/app/statistics/pages/statistics/statistics.component.ts");
/* harmony import */ var _components_statistics_detail_statistics_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/statistics-detail/statistics-detail.component */ "./src/app/statistics/components/statistics-detail/statistics-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ],
            declarations: [
                _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"], _components_statistics_detail_statistics_detail_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsDetailComponent"]
            ]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: '/api'
    // API_URL: 'https://localhost:8000/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alex/Documents/damp-headland-10443/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map