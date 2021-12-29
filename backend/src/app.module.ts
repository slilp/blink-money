import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { YearlyModule } from './yearly/yearly.module';
import { AssetModule } from './asset/asset.module';
import { LovModule } from './lov/lov.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    YearlyModule,
    AssetModule,
    LovModule,
    AuthModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
