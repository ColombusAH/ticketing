import { Document, Model } from 'mongoose';

export interface Ticket {
  id: string;
  title: string;
  price: number;
  userId: string;
}

export interface TicketAttrs {
  title: string;
  price: number;
  userIs: string;
}

export interface TicketDoc extends Document {
  id: string;
  title: string;
  price: number;
  userId: string;
}

export interface TicketModel extends Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}
