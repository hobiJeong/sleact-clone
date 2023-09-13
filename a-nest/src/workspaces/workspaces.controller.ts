import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WorkspacesService } from './workspaces.service';
import { User } from 'src/common/decorator/user.decorator';
import { Users } from 'src/entities/Users';
import { CreateWorkspaceDto } from './dto/create.workspace.dto';

@ApiTags('WORKSPACE')
@Controller('api/workspaces/')
export class WorkspacesController {
  constructor(private worksapcesService: WorkspacesService) {}

  @Get('/:keys')
  getMyWorkspacese(@User() user: Users) {
    return this.worksapcesService.findMyWorkspaces(user.id);
  }

  @Post()
  createWorkspaces(@User() user: Users, @Body() body: CreateWorkspaceDto) {
    return this.worksapcesService.createWorkspace(
      body.workspace,
      body.url,
      user.id,
    );
  }

  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  inviteMembersToWorkspace() {}

  @Delete(':url/members:id')
  kcikMembersFromWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}

  @Get(':url/users/:id')
  DEPERCATED_getMemberInfoInWorkspace() {
    this.getMemberInfoInWorkspace();
  }
}
