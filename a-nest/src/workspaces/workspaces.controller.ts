import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/')
export class WorkspacesController {
    @Get()
    getMyWorkspacese() {

    }

    @Post()
    createWorkspaces() {
        
    }

    @Get(':url/members')
    getAllMembersFromWorkspace() {

    }

    @Post(':url/members')
    inviteMembersToWorkspace() {

    }

    @Delete(':url/members:id')
    kcikMembersFromWorkspace() {
        
    }

    @Get(':url/members/:id')
    getMemberInfoInWorkspace() {

    }

    @Get(':url/users/:id')
    DEPERCATED_getMemberInfoInWorkspace() {
        this.getMemberInfoInWorkspace();

    }
}
