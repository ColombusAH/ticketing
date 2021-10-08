import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TicketsRepository } from 'src/tickets/tickets.repo';

@ValidatorConstraint({ name: 'OwnerOfTicket', async: true })
@Injectable()
export class IsTicketOwnerRule implements ValidatorConstraintInterface {
  constructor(private ticketsRepository: TicketsRepository) {}

  async validate(value: string, args: ValidationArguments) {
    try {
      const key = args.property;

      const user = await this.ticketsRepository.getByKey(key, value);
      return !user;
    } catch (e) {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments) {
    return ` ${args.property} already exist`;
  }
}

export function IsOwnerOfTicket(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'OwnerOfTicket',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsTicketOwnerRule,
    });
  };
}
