import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: async (
      configService: ConfigService,
    ): Promise<typeof mongoose> => {
      try {
        const connection = await mongoose.connect(
          configService.get('MONGO_URI'),
        );
        console.log('db connected');
        return connection;
      } catch (error) {
        console.error(error);
      }
    },
  },
];
