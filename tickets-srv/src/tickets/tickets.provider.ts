import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { ValidIdPipe } from 'src/utils';
import { IsOwnerGuard } from 'src/utils/guards/is-owner.guard';
import { TicketSchema } from './schemas';
import { TicketsRepository } from './tickets.repo';
import { TicketsService } from './tickets.service';

export const TicketsProviders: Provider[] = [
  {
    provide: 'Ticket_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Ticket', TicketSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  TicketsRepository,
  TicketsService,
  IsOwnerGuard,
  ValidIdPipe,
];
