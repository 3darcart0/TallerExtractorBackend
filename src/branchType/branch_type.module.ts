// vehicle.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchType } from './branch_type.entity';
import { BranchTypeController } from './branch_type.controller';
import { BranchTypeService } from './brach_type.service';

@Module({
  imports: [TypeOrmModule.forFeature([BranchType])], // Importa la entidad para su uso en el módulo
  controllers: [BranchTypeController], // Incluye el controlador en el módulo
  providers: [BranchTypeService], // Incluye el servicio en el módulo
  exports: [BranchTypeService], // Exporta el servicio si necesitas utilizarlo en otros módulos
})
export class BranchTypeModule {}
