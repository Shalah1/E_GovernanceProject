import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from 'src/Entity/adminentity.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(AdminEntity) 
export class adminRepository extends Repository<AdminEntity>{
    //[ x: string ]: any;
}


// @EntityRepository(QuizDB2)
// export class Quiz2REpository extends Repository<QuizDB2>{}