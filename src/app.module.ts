import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicles/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Vehicle } from './vehicles/vehicle.entity';
import { Customer } from './entities/customer.entity';
import { User } from './entities/user.entity';
import { Brand } from './entities/brand.entity';
import { Model } from './entities/model.entity';
import { WorkshopRed } from './entities/workshop_red.entity';
import { Workshop } from './entities/workshop.entity';
import { BranchOffice } from './entities/branch_office.entity';
import { BranchType } from './branchType/branch_type.entity';
import { Group } from './group/group.entity';
import { Policy } from './policy/policy.entity';
import { BranchTypeModule } from './branchType/branch_type.module';
import { District } from './district/district.entity';
import { DistrictModule } from './district/branch_type.module';
import { GroupModule } from './group/group.module';
import { PolicyModule } from './policy/policy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: +process.env.MYSQL_PORT,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Vehicle, Customer, User, Brand, Model, WorkshopRed, Workshop, Workshop, BranchOffice, BranchType, Group, Policy, District],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    VehicleModule,
    BranchTypeModule,
    DistrictModule,
    GroupModule,
    PolicyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
