import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configurate } from './core/utils/configurate';
import { SignatureModule } from './signature/signature.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', Configurate.dbHost),
        port: Number(configService.get('DB_PORT', Configurate.dbPort)),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgrespw'),
        database: configService.get('DB_DATABASE', 'hellopaydev'),
        entities: [__dirname + '/**/*.entity{.js,.ts}'],
        synchronize: true,
      }),
    }),

    SignatureModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
