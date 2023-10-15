import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Group } from "./group.entity";
import { Repository, SelectQueryBuilder } from "typeorm";

@Injectable()
export class GroupServive {
    constructor(
        @InjectRepository(Group)
        private readonly groupRepository: Repository<Group>,
    ) { }

    async getPlaces(
        districtId?: number,
        branchTypeId?: number
    ): Promise<{ branchTypeName: string, workshopName: string, branchOfficeAddress: string, phoneNumber: string, webPage: string }[]> {
        let queryBuilder: SelectQueryBuilder<Group> = this.groupRepository
            .createQueryBuilder('group')
            .leftJoinAndSelect('group.workshopRed', 'workshopRed')
            .leftJoinAndSelect('group.workshops', 'workshop')
            .leftJoinAndSelect('group.branchOffice', 'branchOffice')
            .leftJoinAndSelect('branchOffice.branchType', 'branchType')
            .leftJoinAndSelect('branchOffice.district', 'district')
            .select([
                'branchType.branchTypeName as branchTypeName',
                'workshop.workshopName as workshopName',
                'branchOffice.branchOfficeAddress as officeAddress',
                'branchOffice.phoneNumber as phoneNumber',
                'workshop.webPage as webPage',
            ]);

        if (districtId !== undefined && districtId !== null) {
            queryBuilder = queryBuilder.andWhere('district.id = :districtId', { districtId });
        }

        if (branchTypeId !== undefined && branchTypeId !== null) {
            queryBuilder = queryBuilder.andWhere('branchType.id = :branchTypeId', { branchTypeId });
        }

        const result = await queryBuilder.getRawMany();

        return result;
    }
}