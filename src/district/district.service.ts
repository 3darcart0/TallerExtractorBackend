import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { District } from './district.entity';

@Injectable()
export class DistrictService{
    constructor(
        @InjectRepository(District)
        private readonly districtRepository: Repository<District>,
      ) {}

    async getAll(): Promise<District[]> {
        return await this.districtRepository
            .createQueryBuilder('district')
            .where('district.isAvailable = :isAvailable', { isAvailable: 1 })
            .select(['district.districtId','district.district'])
            .getMany();
    }
}