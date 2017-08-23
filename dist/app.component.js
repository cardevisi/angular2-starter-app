"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.message = 'Hello';
        this.users = [
            { id: 10, name: 'Charles', username: 'servilcha' },
            { id: 25, name: 'Ester', username: 'servilester' },
            { id: 30, name: 'Francis', username: 'servilfrancis' }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    \n    <header class=\"text-center\">\n      <nav></nav>\n    </header>\n\n    <div class=\"jumbotron\">\n      <h1>Welcome to Our App!</h1>\n      <p>{{message}}</p>\n    </div>\n\n    <div *ngIf=\"users\">\n      <div *ngFor=\"let user of users\">\n        {{user.name}} {{user.password}}\n      </div>\n    </div>\n    \n    <footer class=\"text-center\">\n      Copyright &copy; 2016\n    </footer>\n\n  ",
            styles: ["\n    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map