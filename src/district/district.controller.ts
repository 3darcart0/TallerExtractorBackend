import { Controller, Get } from '@nestjs/common'
import { DistrictService } from './district.service';
import { District } from './district.entity';

@Controller('districts')
export class DistrictController{

    constructor(private readonly districtService: DistrictService) {}

    @Get()
    async getAll(): Promise<District[]>{
        return await this.districtService.getAll();
    }
}