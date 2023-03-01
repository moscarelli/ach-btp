import { Controller ,Get} from '@nestjs/common';
import { ok } from 'assert';

@Controller('health-check')
export class HealthCheckController {

    @Get()     
    checkt() : string {    
        return "OK" ;
     }
 }
