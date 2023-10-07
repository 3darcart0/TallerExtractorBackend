import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { Repository } from 'typeorm'

@Injectable()
export class VehicleService{
    constructor(
        @InjectRepository(Vehicle)
        private readonly vehicleRepository: Repository<Vehicle>,
      ) {}

    async getShortList(customerId): Promise<Vehicle[]> {
        return await this.vehicleRepository.createQueryBuilder('vehicle')
            .leftJoinAndSelect('vehicle.brand', 'brand')
            .leftJoinAndSelect('vehicle.model', 'model')
            .where('vehicle.customerId = :customerId', { customerId })
            .select(['vehicle.vehicleId','vehicle.registrationNumber','vehicle.year','brand.brandName','model.modelName'])
            .getMany();
    }
}