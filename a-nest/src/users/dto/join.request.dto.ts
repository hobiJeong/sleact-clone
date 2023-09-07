import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
    @ApiProperty({
        example: 'jjb26433@naver.com',
        description: '이메일',
        required: true,
    })
    public email: string;

    @ApiProperty({
        example: '정비호',
        description: '닉네임',
        required: true,
    })
    public nickname: string;
    
    @ApiProperty({
        example: '비밀번호123',
        description: '비밀번호',
        required: true,
    })
    public password: string;
}