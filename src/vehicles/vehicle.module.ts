// vehicle.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { VehicleController } from './vehicles.controller';
import { VehicleService } from './vehicles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])], // Importa la entidad para su uso en el módulo
  controllers: [VehicleController], // Incluye el controlador en el módulo
  providers: [VehicleService], // Incluye el servicio en el módulo
  exports: [VehicleService], // Exporta el servicio si necesitas utilizarlo en otros módulos
})
export class VehicleModule {}
