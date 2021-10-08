import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TicketsController } from './tickets.controller';
import { TicketsProviders } from './tickets.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [TicketsController],
  providers: [...TicketsProviders],
})
export class TicketsModule {}
