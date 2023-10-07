import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { BranchType } from './branch_type.entity';

@Injectable()
export class BranchTypeService{
    constructor(
        @InjectRepository(BranchType)
        private readonly branchTypeRepository: Repository<BranchType>,
      ) {}

    async getAll(): Promise<BranchType[]> {
        return await this.branchTypeRepository
            .createQueryBuilder('branch_type')
            .where('branch_type.isAvailable = :isAvailable', { isAvailable: 1 })
            .select(['branch_type.branchTypeId','branch_type.branchTypeName'])
            .getMany();
    }
}