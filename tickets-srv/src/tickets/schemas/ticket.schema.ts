import * as mongoose from 'mongoose';
import { TicketDoc } from '../interfaces';

export const TicketSchema = new mongoose.Schema(
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
