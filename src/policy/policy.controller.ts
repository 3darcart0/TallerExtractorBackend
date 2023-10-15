import { Controller, Get, Param } from '@nestjs/common'
import { PolicyService } from './policy.service'

@Controller('policies')
export class PolicyController{
    constructor(private readonly policyService : PolicyService) {}

    @Get('vehicle/:vehicleId')
    async getDeductibles(@Param('vehicleId') vehicleId: number){
        const policy = this.policyService.getPolicyVehicle(vehicleId);
        return policy;
    }
}