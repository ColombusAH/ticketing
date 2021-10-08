import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dto';
import { Ticket } from './interfaces';

@Injectable()
export class TicketsRepository {
  constructor(
    @Inject('Ticket_MODEL')
    private TicketModel: Model<Ticket>,
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    try {
      const Ticket = await this.TicketModel.create(createTicketDto);
      return Ticket.save();
    } catch (error) {
      throw error;
    }
  }

  async getByKey(
    key: keyof CreateTicketDto | string,
    value: CreateTicketDto[keyof CreateTicketDto],
  ) {
    return this.TicketModel.findOne({ [key]: value });
  }
}
