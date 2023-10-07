import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicles/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicles/vehicle.entity';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';
import { Brand } from './entities/brand.entity';
import { Model } from './entities/model.entity';
import { WorkshopRed } from './entities/workshop_red.entity';
import { Workshop } from './entities/workshop.entity';
import { BranchOffice } from './entities/branch_office.entity';
import { BranchType } from './entities/branch_type.entity';
import { Group } from './entities/group.entity';
import { Policy } from './entities/policy.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'bsq_workshops',
      entities: [Vehicle, Customer, User, Brand, Model, WorkshopRed, Workshop, Workshop, BranchOffice, BranchType, Group, Policy],
      synchronize: false,
      autoLoadEntities: true,
    }),
    VehicleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
