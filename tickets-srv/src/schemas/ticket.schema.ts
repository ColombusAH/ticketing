import * as mongoose from 'mongoose';
import { TicketAttrs, TicketDoc, TicketModel } from 'src/interfaces';

const TicketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc: TicketDoc, ret: TicketDoc) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

TicketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs);
};

export const Ticket = mongoose.model<TicketDoc, TicketModel>(
  'Ticket',
  TicketSchema,
);
