import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { JwtAuthenticationGuard } from 'src/auth/guards';
import { RequestWithUser } from '../interfaces';

@Controller()
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  create(
    @Body() createTicketDto: CreateTicketDto,
    @Req() request: RequestWithUser,
  ) {
    const { id: userId } = request.user;
    return this.ticketsService.create({ userId, ...createTicketDto });
  }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.ticketsService.findOne(title);
  }

  @Patch(':id')
  @UseGuards(JwtAuthenticationGuard)
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketsService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(+id);
  }
}
