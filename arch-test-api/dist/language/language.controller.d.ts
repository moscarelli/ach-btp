import { LanguageService } from './language.service';
import { UserRequest } from 'src/UserRequest';
export declare class LanguageController {
    private languageService;
    constructor(languageService: LanguageService);
    GetRequests(request: UserRequest, language: string): Promise<any>;
}
