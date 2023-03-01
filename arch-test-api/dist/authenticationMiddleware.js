"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const operators_1 = require("rxjs/operators");
let AuthenticationMiddleware = class AuthenticationMiddleware {
    constructor(httpService) {
        this.httpService = httpService;
    }
    use(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.status(401).send({ message: 'Unauthorized' });
            return;
        }
        const authToken = authHeader.split(' ')[1];
        this.httpService
            .get('https://my.auth.service/check-token', {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        })
            .pipe((0, operators_1.map)((response) => response.data))
            .subscribe((result) => {
            if (result.valid) {
                req.user = result.user;
                next();
            }
            else {
                res.status(401).send({ message: 'Unauthorized' });
            }
        }, (error) => {
            res.status(500).send({ message: 'Internal server error' });
        });
    }
};
AuthenticationMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AuthenticationMiddleware);
exports.AuthenticationMiddleware = AuthenticationMiddleware;
//# sourceMappingURL=authenticationMiddleware.js.map