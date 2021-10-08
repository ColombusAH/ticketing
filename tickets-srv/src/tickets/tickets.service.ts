import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketsRepository } from './tickets.repo';

@Injectable()
export class TicketsService {
  constructor(private readonly ticketRepo: TicketsRepository) {}
  create(createTicketDto: CreateTicketDto & { userId: string }) {
    return this.ticketRepo.create(createTicketDto);
  }

  findAll() {
    return this.ticketRepo.findAll();
  }

  findOne(title: string) {
    return this.ticketRepo.getByKey('title', title);
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
