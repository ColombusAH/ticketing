import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOneByTitle(title: string) {
    return this.ticketRepo.getByKey('title', title);
  }

  findOneById(id: string) {
    return this.ticketRepo.getById(id);
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.findOneById(id);
    if (!ticket) {
      throw new NotFoundException();
    }
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
