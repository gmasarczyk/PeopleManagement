webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-shared.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_models_index__ = __webpack_require__("../../../../../src/app/models/models-index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__models_models_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__models_models_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_models_person_index__ = __webpack_require__("../../../../../src/app/person/models/person-index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__person_models_person_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services_index__ = __webpack_require__("../../../../../src/app/services/services-index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__services_services_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__services_services_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__services_services_index__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__services_services_index__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__("../../../../../src/app/configuration.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__configuration__["a"]; });






/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:64px; margin-left:8px; margin-right: 8px; \">\r\n  <div class=\"tab-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  <div class=\"loading\" [hidden]=\"!LoadingService.loading\">Loading</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared__ = __webpack_require__("../../../../../src/app/app-shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(LoadingService) {
        this.LoadingService = LoadingService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_shared__["e" /* LoadingService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services_index__ = __webpack_require__("../../../../../src/app/services/services-index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_index__ = __webpack_require__("../../../../../src/app/pipes/pipes-index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configuration__ = __webpack_require__("../../../../../src/app/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__person_person_list_person_list_component__ = __webpack_require__("../../../../../src/app/person/person-list/person-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__errors_pagenotfound_component__ = __webpack_require__("../../../../../src/app/errors/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__person_person_details_person_details_component__ = __webpack_require__("../../../../../src/app/person/person-details/person-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__person_person_create_person_create_component__ = __webpack_require__("../../../../../src/app/person/person-create/person-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__person_person_edit_person_edit_component__ = __webpack_require__("../../../../../src/app/person/person-edit/person-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_3__services_services_index__["e" /* Resources */],
    __WEBPACK_IMPORTED_MODULE_6__configuration__["a" /* Configuration */],
    __WEBPACK_IMPORTED_MODULE_3__services_services_index__["c" /* LoadingService */],
    __WEBPACK_IMPORTED_MODULE_3__services_services_index__["d" /* PersonService */],
    __WEBPACK_IMPORTED_MODULE_3__services_services_index__["b" /* FilterService */],
    __WEBPACK_IMPORTED_MODULE_3__services_services_index__["a" /* ConfigurationService */]
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_index__["a" /* PostalCodePipe */]
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_9__person_person_list_person_list_component__["a" /* PersonListComponent */],
    __WEBPACK_IMPORTED_MODULE_11__errors_pagenotfound_component__["a" /* PageNotFoundComponent */],
    __WEBPACK_IMPORTED_MODULE_13__person_person_details_person_details_component__["a" /* PersonDetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_14__person_person_create_person_create_component__["a" /* PersonCreateComponent */],
    __WEBPACK_IMPORTED_MODULE_15__person_person_edit_person_edit_component__["a" /* PersonEditComponent */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: COMPONENTS.concat(PIPES),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* routing */],
            ],
            providers: SERVICES.slice(),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors_pagenotfound_component__ = __webpack_require__("../../../../../src/app/errors/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_person_list_person_list_component__ = __webpack_require__("../../../../../src/app/person/person-list/person-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_person_details_person_details_component__ = __webpack_require__("../../../../../src/app/person/person-details/person-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__person_person_create_person_create_component__ = __webpack_require__("../../../../../src/app/person/person-create/person-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__person_person_edit_person_edit_component__ = __webpack_require__("../../../../../src/app/person/person-edit/person-edit.component.ts");






// import { HomeComponent } from './home.component';
// Uwaga!!! Kolejność ścieżek ma znaczenie, jeśli umieścimy coś po '**' to nigdy tam nie dojdziemy
var routes = [
    { path: '', redirectTo: '/persons', pathMatch: 'full' },
    { path: 'persons/create', component: __WEBPACK_IMPORTED_MODULE_4__person_person_create_person_create_component__["a" /* PersonCreateComponent */] },
    { path: 'persons/edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__person_person_edit_person_edit_component__["a" /* PersonEditComponent */] },
    { path: 'persons/:id', component: __WEBPACK_IMPORTED_MODULE_3__person_person_details_person_details_component__["a" /* PersonDetailsComponent */] },
    { path: 'persons', component: __WEBPACK_IMPORTED_MODULE_2__person_person_list_person_list_component__["a" /* PersonListComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__errors_pagenotfound_component__["a" /* PageNotFoundComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Configuration = /** @class */ (function () {
    function Configuration() {
        this.ApiUri = document.baseURI + '/api/';
        this.Person = this.ApiUri + "data";
        this.Configuration = this.ApiUri + "data/configuration";
        if (document.baseURI === 'http://localhost:4200/') {
            this.ApiUri = 'http://localhost:50193/api/';
        }
        this.Person = this.ApiUri + "data";
        this.Configuration = this.ApiUri + "data/configuration";
    }
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Configuration);
    return Configuration;
}());



/***/ }),

/***/ "../../../../../src/app/errors/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "<div class=\"alert alert- danger\" role=\"alert\">Sorry, this page does not exist </div>"
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/city.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export City */
var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());



/***/ }),

/***/ "../../../../../src/app/models/configuration-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationModel; });
var ConfigurationModel = /** @class */ (function () {
    function ConfigurationModel() {
        this.cities = [];
    }
    return ConfigurationModel;
}());



/***/ }),

/***/ "../../../../../src/app/models/models-index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result__ = __webpack_require__("../../../../../src/app/models/result.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paging_metadata__ = __webpack_require__("../../../../../src/app/models/paging-metadata.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__paging_metadata__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__city__ = __webpack_require__("../../../../../src/app/models/city.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration_model__ = __webpack_require__("../../../../../src/app/models/configuration-model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__configuration_model__["a"]; });






/***/ }),

/***/ "../../../../../src/app/models/paging-metadata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagingMetadata; });
var PagingMetadata = /** @class */ (function () {
    function PagingMetadata() {
    }
    return PagingMetadata;
}());



/***/ }),

/***/ "../../../../../src/app/models/result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Result */
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());



/***/ }),

/***/ "../../../../../src/app/person/models/paged-person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PagedPerson */
var PagedPerson = /** @class */ (function () {
    function PagedPerson() {
    }
    return PagedPerson;
}());



/***/ }),

/***/ "../../../../../src/app/person/models/person-filters.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PersonFilters */
var PersonFilters = /** @class */ (function () {
    function PersonFilters() {
    }
    return PersonFilters;
}());



/***/ }),

/***/ "../../../../../src/app/person/models/person-index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__("../../../../../src/app/person/models/person.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__person__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paged_person__ = __webpack_require__("../../../../../src/app/person/models/paged-person.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_filters__ = __webpack_require__("../../../../../src/app/person/models/person-filters.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/person/models/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
        this.prePaidAmount = 0;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());



/***/ }),

/***/ "../../../../../src/app/person/person-create/person-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared__ = __webpack_require__("../../../../../src/app/app-shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
var PersonCreateComponent = /** @class */ (function () {
    function PersonCreateComponent(router, loadingService, personService, configurationService, fb) {
        this.router = router;
        this.loadingService = loadingService;
        this.personService = personService;
        this.configurationService = configurationService;
        this.fb = fb;
        this.validationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
    }
    PersonCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personForm = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(3)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
                confirmEmail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            }, { validator: emailMatcher }),
            mobilePhone: '',
            notification: 'email',
            sendCatalog: true,
            city: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]],
            street: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]],
            homeNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]]
        });
        this.personForm.get('notification').valueChanges
            .subscribe(function (value) { return _this.setNotification(value); });
        var emailControl = this.personForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            return _this.setMessage(emailControl);
        });
        this.SelectedItem = new __WEBPACK_IMPORTED_MODULE_4__app_shared__["g" /* Person */]();
        this.Config = new __WEBPACK_IMPORTED_MODULE_4__app_shared__["b" /* ConfigurationModel */]();
        this.getConfiguration();
    };
    PersonCreateComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.loadingService.start();
        // Copy the form values over the product object values
        var p = Object.assign({}, this.SelectedItem, this.personForm.value);
        p.email = this.personForm.value.emailGroup.email;
        this.personService.AddPerson(p)
            .subscribe(function (result) {
            _this.id = result.id;
        }, function (errors) {
            _this.loadingService.stop();
        }, function () {
            _this.loadingService.stop();
            _this.router.navigate(['persons/', _this.id]);
        });
    };
    PersonCreateComponent.prototype.getConfiguration = function () {
        var _this = this;
        this.loadingService.start();
        this.configurationService.GetConfiguration()
            .subscribe(function (result) {
            _this.Config = result;
        }, function (errors) {
            _this.loadingService.stop();
        }, function () {
            _this.loadingService.stop();
        });
    };
    PersonCreateComponent.prototype.GoBack = function () {
        this.router.navigate(['persons']);
    };
    PersonCreateComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessages[key];
            }).join(' ');
        }
    };
    PersonCreateComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.personForm.get('mobilePhone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    PersonCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-person-create',
            template: __webpack_require__("../../../../../src/app/person/shared/person-template.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["e" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["h" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["c" /* ConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], PersonCreateComponent);
    return PersonCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/person/person-details/person-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h2 class=\"panel-title\">\r\n                        <button (click)=\"GoBack()\" class=\"btn btn-default btn-xs\">\r\n                            <i class=\"fa fa-arrow-circle-left\"></i>Back</button> &nbsp; Person details\r\n                    </h2>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-1 row-verticaly-centered\">\r\n                            <i class=\"fa fa-male fa-5x\"></i>\r\n                        </div>\r\n                        <div>\r\n                            {{SelectedItem?.firstName}} {{SelectedItem?.lastName}}\r\n                            <br *ngIf=\"SelectedItem?.firstName || SelectedItem?.lastName\"> {{SelectedItem?.street}}&nbsp;{{SelectedItem?.homeNumber}},&nbsp;{{SelectedItem?.postalCode\r\n                            | postalCode}}&nbsp;{{SelectedItem?.city}}\r\n                            <br> E-mail: {{SelectedItem?.email}}\r\n                            <br> Mobile phone: {{SelectedItem?.mobilePhone}}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"pull-right\">\r\n                        <button (click)=\"OnEditPerson()\" class=\"btn btn-sm btn-primary\">\r\n                            <i class=\"fa fa-pencil fa-fw\"> </i>Edit</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/person/person-details/person-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-fa {\n  padding-top: 15px;\n  padding-left: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/person/person-details/person-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared__ = __webpack_require__("../../../../../src/app/app-shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonDetailsComponent = /** @class */ (function () {
    function PersonDetailsComponent(route, router, personService, loadingService) {
        this.route = route;
        this.router = router;
        this.personService = personService;
        this.loadingService = loadingService;
    }
    PersonDetailsComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id'];
        this.getPerson(this.id);
    };
    PersonDetailsComponent.prototype.getPerson = function (id) {
        var _this = this;
        this.loadingService.start();
        this.personService.GetById(id)
            .subscribe(function (result) {
            _this.SelectedItem = result;
        }, function (error) {
            _this.loadingService.stop();
        }, function () {
            _this.loadingService.stop();
        });
    };
    PersonDetailsComponent.prototype.GoBack = function () {
        this.router.navigate(['persons']);
    };
    PersonDetailsComponent.prototype.OnEditPerson = function () {
        this.router.navigate(['/persons/edit', this.id]);
    };
    PersonDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-person-details',
            template: __webpack_require__("../../../../../src/app/person/person-details/person-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/person/person-details/person-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared__["h" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared__["e" /* LoadingService */]])
    ], PersonDetailsComponent);
    return PersonDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/person/person-edit/person-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared__ = __webpack_require__("../../../../../src/app/app-shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
var PersonEditComponent = /** @class */ (function () {
    function PersonEditComponent(personService, route, router, loadingService, configurationService, fb) {
        this.personService = personService;
        this.route = route;
        this.router = router;
        this.loadingService = loadingService;
        this.configurationService = configurationService;
        this.fb = fb;
        this.validationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
    }
    PersonEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personForm = this.fb.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(3)]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
                confirmEmail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            }, { validator: emailMatcher }),
            mobilePhone: '',
            notification: 'email',
            sendCatalog: true,
            city: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]],
            postalCode: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]],
            street: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]],
            homeNumber: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]]
        });
        this.personForm.get('notification').valueChanges
            .subscribe(function (value) { return _this.setNotification(value); });
        var emailControl = this.personForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            return _this.setMessage(emailControl);
        });
        this.Config = new __WEBPACK_IMPORTED_MODULE_4__app_shared__["b" /* ConfigurationModel */]();
        this.id = +this.route.snapshot.params['id'];
        this.getPerson(this.id);
        this.getConfiguration();
    };
    PersonEditComponent.prototype.getPerson = function (id) {
        var _this = this;
        this.loadingService.start();
        this.personService.GetById(id)
            .subscribe(function (result) {
            _this.SelectedItem = result;
            // Update the data on the form
            _this.personForm.patchValue({
                firstName: _this.SelectedItem.firstName,
                lastName: _this.SelectedItem.lastName,
                mobilePhone: _this.SelectedItem.mobilePhone,
                emailGroup: {
                    email: _this.SelectedItem.email,
                    confirmEmail: _this.SelectedItem.email
                },
                city: _this.SelectedItem.city,
                postalCode: _this.SelectedItem.postalCode,
                street: _this.SelectedItem.street,
                homeNumber: _this.SelectedItem.homeNumber
            });
        }, function (error) {
            _this.loadingService.stop();
        }, function () {
            _this.loadingService.stop();
        });
    };
    PersonEditComponent.prototype.OnSubmit = function () {
        var _this = this;
        // Copy the form values over the product object values
        var p = Object.assign({}, this.SelectedItem, this.personForm.value);
        p.email = this.personForm.value.emailGroup.email;
        this.loadingService.start();
        this.personService.UpdatePerson(p, this.SelectedItem.id)
            .subscribe(function (result) {
        }, function (errors) {
            _this.loadingService.stop();
            if (errors.errors) {
                if (errors.errors.length > 0) {
                    for (var item in errors.errors) {
                        _this.errors.push(item);
                    }
                }
            }
        }, function () {
            _this.loadingService.stop();
            _this.router.navigate(['persons/', _this.id]);
        });
    };
    PersonEditComponent.prototype.getConfiguration = function () {
        var _this = this;
        this.loadingService.start();
        this.configurationService.GetConfiguration()
            .subscribe(function (result) {
            _this.Config = result;
        }, function (errors) {
            _this.loadingService.stop();
        }, function () {
            _this.loadingService.stop();
        });
    };
    PersonEditComponent.prototype.GoBack = function () {
        this.router.navigate(['persons']);
    };
    PersonEditComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessages[key];
            }).join(' ');
        }
    };
    PersonEditComponent.prototype.setNotification = function (notifyVia) {
        var phoneControl = this.personForm.get('mobilePhone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required);
        }
        else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    };
    PersonEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-person-edit',
            template: __webpack_require__("../../../../../src/app/person/shared/person-template.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_shared__["h" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["e" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__app_shared__["c" /* ConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], PersonEditComponent);
    return PersonEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/person/person-list/person-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-lg-3\">\r\n      <div class=\"bottom-buffer\">\r\n        <!--<div class =\"panel-body\">-->\r\n\r\n        <!--</div>-->\r\n      </div>\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">\r\n            <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>FILTERS</h3>\r\n        </div>\r\n\r\n        <div class=\"panel-body filter-panel-body\">\r\n          <form (ngSubmit)=\"OnSubmitSearch()\">\r\n            <div class=\"form-row\">\r\n              <label for=\"name\" class=\"filter-label\">Last name:</label>\r\n              <div>\r\n                <input id=\"searchInput\" type=\"text\" class=\"form-control\" [(ngModel)]=\"params.lastName\" name=\"lastName\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <label for=\"area\" class=\"filter-label\">City</label>\r\n              <div>\r\n                <select class=\"form-control\" [(ngModel)]=\"params.city\" name=\"city\">\r\n                  <option [ngValue]=\"null\"></option>\r\n                  <option *ngFor=\"let city of Config.cities\" [value]=\"city.name\"> {{city.name}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <div>\r\n            </div>\r\n            <br>\r\n            <div class=\"form-row\">\r\n              <button type=\"submit\" class=\"btn btn-primary pull-right \">\r\n                <i class=\"fa fa-search fa-lg\"></i>Search</button>\r\n              <div (click)=\"OnCleanFilters()\" class=\"btn btn-default pull-right  btn-link\" title=\"Clear filters panel\">\r\n                <i class=\"fa fa-times fa-lg\"></i>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"btn btn-primary col-sm-12\" (click)=\"OnNewPerson()\">\r\n        <i class=\"fa fa-plus fa-lg\"></i> New person\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-9 col-lg-9\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body gray-background\">\r\n          <div class=\"row top_bottom-buffer\" *ngIf=\"pagingInfo.pageSize\">\r\n            <div class=\"pull-left\">\r\n              <pagination-controls (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"Previous\"\r\n                nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\r\n              </pagination-controls>\r\n            </div>\r\n            <div class=\"pull-right top-right-buffer\">\r\n              <select placeholder=\"Page size\" [(ngModel)]=\"pagingInfo.pageSize\" name=\"pageSize\" (change)=\"pageSizeChanged($event.value)\">\r\n                <option [value]=\"20\">20</option>\r\n                <option [value]=\"50\">50</option>\r\n                <option [value]=\"100\">100</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered table-hover \">\r\n              <thead>\r\n                <tr>\r\n                  <th>Name</th>\r\n                  <th>City</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let person of PersonsTab | paginate: { totalItems: pagingInfo.totalCount, itemsPerPage: pagingInfo.pageSize, currentPage: pagingInfo.currentPage }; let i = index\"\r\n                  (click)=\"OnSelect(person)\">\r\n                  <td>{{person.firstName}} {{person.lastName}}</td>\r\n                  <td>{{person.city}} </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/person/person-list/person-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/person/person-list/person-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared__ = __webpack_require__("../../../../../src/app/app-shared.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonListComponent = /** @class */ (function () {
    function PersonListComponent(PersonService, router, loadingService, configuration, filterService, configurationService) {
        this.PersonService = PersonService;
        this.router = router;
        this.loadingService = loadingService;
        this.configuration = configuration;
        this.filterService = filterService;
        this.configurationService = configurationService;
    }
    PersonListComponent.prototype.ngOnInit = function () {
        this.pagingInfo = new __WEBPACK_IMPORTED_MODULE_2__app_shared__["f" /* PagingMetadata */]();
        this.Config = new __WEBPACK_IMPORTED_MODULE_2__app_shared__["b" /* ConfigurationModel */]();
        this.OnCleanFilters();
        var filters = this.filterService.GetFilters('personsFilter');
        if (filters != null)
            this.params = filters;
        this.getConfiguration();
        this.OnSubmitSearch();
    };
    PersonListComponent.prototype.OnSubmitSearch = function () {
        var _this = this;
        this.loadingService.start();
        this.PersonService.GetWithParam(this.params)
            .subscribe(function (persons) {
            _this.PersonsTab = persons.results;
            _this.pagingInfo = persons.metadata;
            console.log(_this.PersonsTab);
        }, function (error) {
            _this.loadingService.stop();
        }, function () { return _this.loadingService.stop(); });
    };
    PersonListComponent.prototype.getConfiguration = function () {
        var _this = this;
        this.loadingService.start();
        this.configurationService.GetConfiguration()
            .subscribe(function (result) {
            _this.Config = result;
        }, function (error) {
            _this.loadingService.stop();
        }, function () { return _this.loadingService.stop(); });
    };
    PersonListComponent.prototype.OnCleanFilters = function () {
        if (!this.params) {
            this.params = {
                lastName: '',
                city: ''
            };
        }
        this.params.lastName = '';
        this.params.city = '';
    };
    PersonListComponent.prototype.OnSelect = function (m) {
        this.filterService.StoreFilters('personsFilters', this.params);
        this.router.navigate(['/persons', m.id]);
    };
    PersonListComponent.prototype.OnNewPerson = function () {
        this.router.navigate(['persons/create']);
    };
    PersonListComponent.prototype.updateQueryStringParameter = function (uri, key, value) {
        var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
        var separator = uri.indexOf('?') !== -1 ? '&' : '?';
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + '=' + value + '$2');
        }
        else {
            return uri + separator + key + '=' + value;
        }
    };
    PersonListComponent.prototype.pageSizeChanged = function (ev) {
        var _this = this;
        if (!this.pagingInfo.nextPageLink) {
            this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.basePageLink, 'pageSize', this.pagingInfo.pageSize);
        }
        else {
            this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.nextPageLink, 'pageSize', this.pagingInfo.pageSize);
        }
        // Po zmianie strony przejdz do pierwszej
        this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.nextPageLink, 'pageNumber', 1);
        this.loadingService.start();
        this.PersonService.GetPersons(this.pagingInfo.nextPageLink)
            .subscribe(function (persons) {
            _this.PersonsTab = persons.results;
            _this.pagingInfo = persons.metadata;
        }, function (error) {
            _this.loadingService.stop();
        }, function () { return _this.loadingService.stop(); });
    };
    PersonListComponent.prototype.pageChanged = function (ev) {
        var _this = this;
        this.loadingService.start();
        if (ev > this.pagingInfo.currentPage) {
            if (!this.pagingInfo.nextPageLink) {
                this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.basePageLink, 'pageSize', this.pagingInfo.pageSize);
                this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.nextPageLink, 'pageNumber', ev);
            }
            if (ev > (this.pagingInfo.currentPage + 1)) {
                // kliknięto link do konkretnej strony -> zatem trzeba poskładać linka ręcznie
                this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.nextPageLink, 'pageNumber', ev);
            }
            this.PersonService.GetPersons(this.pagingInfo.nextPageLink)
                .subscribe(function (persons) {
                _this.PersonsTab = persons.results;
                _this.pagingInfo = persons.metadata;
            }, function (error) {
                _this.loadingService.stop();
            }, function () { return _this.loadingService.stop(); });
        }
        else if (ev < this.pagingInfo.currentPage) {
            if (this.pagingInfo.previousPageLink) {
                this.pagingInfo.previousPageLink = this.updateQueryStringParameter(this.pagingInfo.basePageLink, 'pageSize', this.pagingInfo.pageSize);
                this.pagingInfo.previousPageLink = this.updateQueryStringParameter(this.pagingInfo.previousPageLink, 'pageNumber', ev);
            }
            if (ev < (this.pagingInfo.currentPage - 1)) {
                // kliknięto link do konkretnej strony -> zatem trzeba poskładać linka ręcznie
                this.pagingInfo.previousPageLink = this.updateQueryStringParameter(this.pagingInfo.previousPageLink, 'pageNumber', ev);
            }
            this.PersonService.GetPersons(this.pagingInfo.previousPageLink)
                .subscribe(function (persons) {
                _this.PersonsTab = persons.results;
                _this.pagingInfo = persons.metadata;
            }, function (error) {
                _this.loadingService.stop();
            }, function () { return _this.loadingService.stop(); });
        }
    };
    PersonListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-persons-list',
            template: __webpack_require__("../../../../../src/app/person/person-list/person-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/person/person-list/person-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_shared__["h" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared__["e" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared__["a" /* Configuration */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared__["d" /* FilterService */],
            __WEBPACK_IMPORTED_MODULE_2__app_shared__["c" /* ConfigurationService */]])
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/person/shared/person-template.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"SelectedItem\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n            <form (ngSubmit)=\"OnSubmit()\" novalidate [formGroup]=\"personForm\" class=\"form-horizontal\">\r\n                <fieldset>\r\n                    <div *ngIf=\"errors\">\r\n                        <div *ngFor=\"let error of errors\">\r\n                            <span class=\"validation-errors\">{{error}}\r\n                                <br> </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (personForm.get('firstName').touched || \r\n                                                  personForm.get('firstName').dirty) &&\r\n                                                  !personForm.get('firstName').valid }\">\r\n                        <label class=\"col-md-2 control-label\" for=\"firstNameId\">First Name</label>\r\n\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" id=\"firstNameId\" type=\"text\" placeholder=\"First Name (required)\" formControlName=\"firstName\"\r\n                            />\r\n                            <span class=\"help-block\" *ngIf=\"(personForm.get('firstName').touched || \r\n                                                             personForm.get('firstName').dirty) && \r\n                                                             personForm.get('firstName').errors\">\r\n                                <span *ngIf=\"personForm.get('firstName').errors.required\">\r\n                                    Please enter your first name.\r\n                                </span>\r\n                                <span *ngIf=\"personForm.get('firstName').errors.minlength\">\r\n                                    The first name must be longer than 3 characters.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (personForm.get('lastName').touched || personForm.get('lastName').dirty) && !personForm.get('lastName').valid }\">\r\n                        <label class=\"col-md-2 control-label\" for=\"lastNameId\">Last Name</label>\r\n\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" id=\"lastNameId\" type=\"text\" placeholder=\"Last Name (required)\" formControlName=\"lastName\" />\r\n                            <span class=\"help-block\" *ngIf=\"(personForm.get('lastName').touched || personForm.get('lastName').dirty) && personForm.get('lastName').errors\">\r\n                                <span *ngIf=\"personForm.get('lastName').errors.required\">\r\n                                    Please enter your last name.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div formGroupName=\"emailGroup\" [ngClass]=\"{'has-error': personForm.get('emailGroup').errors }\">\r\n                        <div class=\"form-group\" [ngClass]=\"{'has-error': emailMessage}\">\r\n                            <label class=\"col-md-2 control-label\" for=\"emailId\">Email</label>\r\n\r\n                            <div class=\"col-md-8\">\r\n                                <input class=\"form-control\" id=\"emailId\" type=\"email\" placeholder=\"Email (required)\" formControlName=\"email\" />\r\n                                <span class=\"help-block\" *ngIf=\"emailMessage\">\r\n                                    {{ emailMessage }}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\" [ngClass]=\"{'has-error': (personForm.get('emailGroup.confirmEmail').touched || \r\n                                                  personForm.get('emailGroup.confirmEmail').dirty) && \r\n                                                  !personForm.get('emailGroup.confirmEmail').valid }\">\r\n                            <label class=\"col-md-2 control-label\" for=\"confirmEmailId\">Confirm Email</label>\r\n\r\n                            <div class=\"col-md-8\">\r\n                                <input class=\"form-control\" id=\"confirmEmailId\" type=\"email\" placeholder=\"Confirm Email (required)\" formControlName=\"confirmEmail\"\r\n                                />\r\n                                <span class=\"help-block\" *ngIf=\"(personForm.get('emailGroup.confirmEmail').touched || \r\n                                                            personForm.get('emailGroup.confirmEmail').dirty) && \r\n                                                            (personForm.get('emailGroup.confirmEmail').errors ||\r\n                                                             personForm.get('emailGroup').errors)\">\r\n                                    <span *ngIf=\"personForm.get('emailGroup.confirmEmail').errors?.required\">\r\n                                        Please confirm your email address.\r\n                                    </span>\r\n                                    <span *ngIf=\"personForm.get('emailGroup').errors?.match\">\r\n                                        The confirmation does not match the email address.\r\n                                    </span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': !personForm.get('mobilePhone').valid }\">\r\n                        <label class=\"col-md-2 control-label\" for=\"mobilePhoneId\">Phone</label>\r\n\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" id=\"mobilePhoneId\" type=\"tel\" placeholder=\"Phone\" formControlName=\"mobilePhone\" />\r\n                            <span class=\"help-block\" *ngIf=\"personForm.get('mobilePhone').errors\">\r\n                                <span *ngIf=\"personForm.get('mobilePhone').errors.required\">\r\n                                    Please enter your phone number.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"col-md-2 control-label\">Main contact channel</label>\r\n                        <div class=\"col-md-8\">\r\n                            <label class=\"radio-inline\">\r\n                                <input type=\"radio\" value=\"email\" formControlName=\"notification\">Email\r\n                            </label>\r\n                            <label class=\"radio-inline\">\r\n                                <input type=\"radio\" value=\"text\" formControlName=\"notification\">Text\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (personForm.get('city').touched || personForm.get('city').dirty) && !personForm.get('city').valid }\">\r\n                        <label class=\"col-md-2 control-label\" for=\"cityId\">City</label>\r\n\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" id=\"cityId\" type=\"text\" placeholder=\"City (required)\" formControlName=\"city\" />\r\n                            <span class=\"help-block\" *ngIf=\"(personForm.get('city').touched || personForm.get('city').dirty) && personForm.get('city').errors\">\r\n                                <span *ngIf=\"personForm.get('city').errors.required\">\r\n                                    Please enter city name.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (personForm.get('postalCode').touched || personForm.get('postalCode').dirty) && !personForm.get('postalCode').valid }\">\r\n                        <label class=\"col-md-2 control-label\" for=\"postalCodeId\">Postal code</label>\r\n\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" id=\"postalCodeId\" type=\"text\" placeholder=\"postalCode (required)\" formControlName=\"postalCode\"\r\n                            />\r\n                            <span class=\"help-block\" *ngIf=\"(personForm.get('postalCode').touched || personForm.get('postalCode').dirty) && personForm.get('postalCode').errors\">\r\n                                <span *ngIf=\"personForm.get('postalCode').errors.required\">\r\n                                    Please enter postal code name.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (personForm.get('street').touched || personForm.get('street').dirty) && !personForm.get('street').valid }\">\r\n                        <label class=\"col-md-2 control-label\" for=\"streetId\">Street</label>\r\n\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" id=\"streetId\" type=\"text\" placeholder=\"street (required)\" formControlName=\"street\" />\r\n                            <span class=\"help-block\" *ngIf=\"(personForm.get('street').touched || personForm.get('street').dirty) && personForm.get('street').errors\">\r\n                                <span *ngIf=\"personForm.get('street').errors.required\">\r\n                                    Please enter street name.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\" [ngClass]=\"{'has-error': (personForm.get('homeNumber').touched || personForm.get('homeNumber').dirty) && !personForm.get('homeNumber').valid }\">\r\n                        <label class=\"col-md-2 control-label\" for=\"homeNumberId\">Home number</label>\r\n\r\n                        <div class=\"col-md-8\">\r\n                            <input class=\"form-control\" id=\"homeNumberId\" type=\"text\" placeholder=\"homeNumber (required)\" formControlName=\"homeNumber\"\r\n                            />\r\n                            <span class=\"help-block\" *ngIf=\"(personForm.get('homeNumber').touched || personForm.get('homeNumber').dirty) && personForm.get('homeNumber').errors\">\r\n                                <span *ngIf=\"personForm.get('homeNumber').errors.required\">\r\n                                    Please enter home number name.\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n\r\n                    <div class=\"pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"GoBack()\">\r\n                            <i class=\"fa fa-arrow-left\"></i>Cancel\r\n                        </button>\r\n\r\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!personForm.valid\">\r\n                            <i class=\"fa fa-floppy-o fa-lg\"></i>Save\r\n                        </button>\r\n                    </div>\r\n                </fieldset>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pipes/pipes-index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__postal_code_pipe__ = __webpack_require__("../../../../../src/app/pipes/postal-code.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__postal_code_pipe__["a"]; });



/***/ }),

/***/ "../../../../../src/app/pipes/postal-code.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostalCodePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PostalCodePipe = /** @class */ (function () {
    function PostalCodePipe() {
    }
    PostalCodePipe.prototype.transform = function (value, args) {
        if (value) {
            if (value.length === 5) {
                return value.slice(0, 2) + '-' + value.slice(2);
            }
            else {
                return value;
            }
        }
    };
    PostalCodePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'postalCode'
        })
    ], PostalCodePipe);
    return PostalCodePipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration__ = __webpack_require__("../../../../../src/app/configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigurationService = /** @class */ (function () {
    // public currentMerchant: Merchant;
    function ConfigurationService(http, 
        // public securityService: OidcSecurityService,
        _configuration) {
        this.http = http;
        this._configuration = _configuration;
    }
    ConfigurationService.prototype.GetConfiguration = function () {
        this.setHeaders();
        return this.http.get(this._configuration.Configuration, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ConfigurationService.prototype.setHeaders = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        // const token = this.securityService.GetToken();
        // if (token !== '' && token !== undefined) {
        //   const tokenValue = 'Bearer ' + token;
        //   this.headers.append('Authorization', tokenValue);
        // }
    };
    ConfigurationService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            // const err = body.error || JSON.stringify(body);
            // const err = JSON.stringify(body);
            // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            errMsg = body;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    ConfigurationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__configuration__["a" /* Configuration */]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterService = /** @class */ (function () {
    function FilterService() {
        this.filtersList = [];
    }
    FilterService.prototype.StoreFilters = function (key, value) {
        return this.filtersList.push({ key: key, value: value }) >= 0;
    };
    FilterService.prototype.GetFilters = function (key) {
        return this.filtersList.filter(function (x) { return x.key === key; }).length > 0 ? this.filtersList.filter(function (x) { return x.key === key; })[0].value : null;
    };
    FilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "../../../../../src/app/services/loading.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loading = false;
        this.counter = 0;
    }
    LoadingService.prototype.start = function () {
        this.loading = true;
        this.counter++;
    };
    LoadingService.prototype.stop = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.loading = false;
        }
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration__ = __webpack_require__("../../../../../src/app/configuration.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonService = /** @class */ (function () {
    function PersonService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
    }
    PersonService.prototype.GetWithParam = function (param) {
        this.setHeaders();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        if (param) {
            if (param.lastName !== '') {
                params.set('lastName', param.lastName);
            }
            if (param.city !== '') {
                params.set('city', param.city);
            }
        }
        return this.http.get(this._configuration.Person, { search: params, headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // for paging
    PersonService.prototype.GetPersons = function (url) {
        this.setHeaders();
        var pageUrl = this._configuration.Person;
        if (url) {
            pageUrl = url;
        }
        return this.http.get(url, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ///
    PersonService.prototype.GetById = function (id) {
        this.setHeaders();
        var url = this._configuration.Person + "/" + id;
        return this.http.get(url, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PersonService.prototype.AddPerson = function (person) {
        this.setHeaders();
        return this.http.post(this._configuration.Person, JSON.stringify(person), { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PersonService.prototype.UpdatePerson = function (person, id) {
        this.setHeaders();
        var url = this._configuration.Person + "/" + id;
        return this.http.put(url, JSON.stringify(person), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PersonService.prototype.setHeaders = function () {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    };
    PersonService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            errMsg = body;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__configuration__["a" /* Configuration */]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "../../../../../src/app/services/resources.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Resources = /** @class */ (function () {
    function Resources() {
        this.Woman = "";
        this.Man = "";
    }
    Resources = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Resources);
    return Resources;
}());



/***/ }),

/***/ "../../../../../src/app/services/services-index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources__ = __webpack_require__("../../../../../src/app/services/resources.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__resources__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__person_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_service__ = __webpack_require__("../../../../../src/app/services/filter.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__filter_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__loading_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration_service__ = __webpack_require__("../../../../../src/app/services/configuration.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__configuration_service__["a"]; });







/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map