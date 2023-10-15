import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Policy } from "./policy.entity";
import { Repository } from "typeorm";

@Injectable()
export class PolicyService{
    constructor(
        @InjectRepository(Policy)
        private readonly policyRepository: Repository<Policy>
    ){}

    async getPolicyVehicle(vehicleId): Promise<Policy>{
        return await this.policyRepository.findOneBy({
            vehicleId: vehicleId
        });
    }
}