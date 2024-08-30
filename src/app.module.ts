import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TodoModule } from './modules/to-do/todo.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "postgres",
    database: "todo",
    host: "ep-icy-river-a5r3ypb3.us-east-2.aws.neon.tech",
    port: 5432,
    username: "todo_owner",
    password:"dUQGtL0mzoY5",
    ssl: true,
    synchronize: true,
    autoLoadEntities: true,
    uuidExtension: "pgcrypto",
    namingStrategy: new SnakeNamingStrategy(),
}), TodoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//postgresql://todo_owner:dUQGtL0mzoY5@ep-icy-river-a5r3ypb3.us-east-2.aws.neon.tech/todo?sslmode=require
