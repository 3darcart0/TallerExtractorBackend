// vehicle.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Policy } from './policy.entity';
import { PolicyController } from './policy.controller';
import { PolicyService } from './policy.service';

@Module({
  imports: [TypeOrmModule.forFeature([Policy])], // Importa la entidad para su uso en el módulo
  controllers: [PolicyController], // Incluye el controlador en el módulo
  providers: [PolicyService], // Incluye el servicio en el módulo
  exports: [PolicyService], // Exporta el servicio si necesitas utilizarlo en otros módulos
})
export class PolicyModule {}
