import { Controller, Get, Query } from '@nestjs/common'
import { Vehicle } from './vehicle.entity'
import { VehicleService } from './vehicles.service'

@Controller('vehicles')
export class VehicleController{

    constructor(private readonly vehicleService: VehicleService) {}

    @Get('/get-short-list')
    async getShortList(
        @Query('customerId') customerId: number
    ): Promise<Vehicle[]>{
        return await this.vehicleService.getShortList(customerId);
    }
}