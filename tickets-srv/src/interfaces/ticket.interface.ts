import { Document, Model } from 'mongoose';

export interface Ticket {
  title: string;
  price: number;
  userIs: string;
}

export interface TicketAttrs {
  title: string;
  price: number;
  userIs: string;
}

export interface TicketDoc extends Document, Ticket {}

export interface TicketModel extends Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}
