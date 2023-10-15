import { Controller, Get, Query } from "@nestjs/common";
import { GroupServive } from "./group.service";

@Controller('groups')
export class GroupController{
    constructor(private readonly groupService: GroupServive) {}

    @Get('getFilteredList')
  async getFilteredList(
    @Query('districtId') districtId: number,
    @Query('branchTypeId') branchTypeId: number
  ) {
    const filteredList = await this.groupService.getPlaces(
      districtId !== undefined ? +districtId : undefined,
      branchTypeId !== undefined ? +branchTypeId : undefined
    );

    return filteredList;
  }
}