// vehicle.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './group.entity';
import { GroupController } from './group.controller';
import { GroupServive } from './group.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group])], // Importa la entidad para su uso en el módulo
  controllers: [GroupController], // Incluye el controlador en el módulo
  providers: [GroupServive], // Incluye el servicio en el módulo
  exports: [GroupServive], // Exporta el servicio si necesitas utilizarlo en otros módulos
})
export class GroupModule {}
