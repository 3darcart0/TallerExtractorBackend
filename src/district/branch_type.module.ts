// vehicle.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { District } from './district.entity';
import { DistrictController } from './district.controller';
import { DistrictService } from './district.service';

@Module({
  imports: [TypeOrmModule.forFeature([District])], // Importa la entidad para su uso en el módulo
  controllers: [DistrictController], // Incluye el controlador en el módulo
  providers: [DistrictService], // Incluye el servicio en el módulo
  exports: [DistrictService], // Exporta el servicio si necesitas utilizarlo en otros módulos
})
export class DistrictModule {}
