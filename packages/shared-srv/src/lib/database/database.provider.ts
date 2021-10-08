import { ConfigService } from "@nestjs/config";
import * as mongoose from "mongoose";

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    inject: [ConfigService],
    useFactory: async (
      configService: ConfigService
    ): Promise<typeof mongoose> => {
      try {
        const connection = await mongoose.connect(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          configService.get("MONGO_URI")!
        );
        return connection;
      } catch (error) {
        return Promise.reject(
          `DB Connection failed given connection config ${configService.get(
            "MONGO_URI"
          )}`
        );
      }
    },
  },
];
