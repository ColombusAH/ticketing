import { Module } from "@nestjs/common";
import { CommonSrvService } from "./common-srv.service";
import JwtAuthenticationGuard from "./guards/jwt-auth.guard";
import { LocalAuthenticationGuard } from "./guards/local-auth.guard";

@Module({
  providers: [
    CommonSrvService,
    JwtAuthenticationGuard,
    LocalAuthenticationGuard,
  ],
  exports: [CommonSrvService, JwtAuthenticationGuard, LocalAuthenticationGuard],
})
export class CommonSrvModule {}
