import { Module } from '@nestjs/common';
import { ProjectsController } from './api/projects.controller';
import { ProjectsService } from './api/projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
