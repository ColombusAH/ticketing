import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Ticket } from 'src/tickets/interfaces';
import { TicketsService } from 'src/tickets/tickets.service';

@Injectable()
export class IsOwnerGuard implements CanActivate {
  constructor(private readonly ticketService: TicketsService) {}
  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const ticketId: string = req.params.id;
    const userId = req.user.id;
    try {
      const ticket: Ticket = await this.ticketService.findOneById(ticketId);
      if (!ticket) {
        throw new NotFoundException(`ticket with id: ${ticketId} not found`);
      }
      return userId === ticket?.userId;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException();
    }
  }
}
