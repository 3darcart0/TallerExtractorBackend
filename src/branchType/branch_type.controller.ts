import { Controller, Get } from '@nestjs/common'
import { BranchType } from 'src/branchType/branch_type.entity';
import { BranchTypeService } from './brach_type.service';

@Controller('branch-types')
export class BranchTypeController{

    constructor(private readonly branchTypeService: BranchTypeService) {}

    @Get()
    async getAll(): Promise<BranchType[]>{
        return await this.branchTypeService.getAll();
    }
}