import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import * as mongoose from 'mongoose';
@Injectable()
export class ValidIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log({ value });

    if (!mongoose.isValidObjectId(value)) {
      throw new BadRequestException('Bad id provided');
    }
    return value;
  }
}
