import { SalaryForm } from './../Data/salaryform.dto';
import { EmployeeForm } from './../Data/employee.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,  
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Patch, Res, Session, UseGuards } from '@nestjs/common/decorators';
import { AdminForm, AdminName } from '../Data/adminformupdate.dto';
import { AdminFormUpdate } from '../Data/adminmodule.dto';
import { AdminService } from '../Services/adminservice.service';
import { EmployeeService } from 'src/Services/employee.service';
import { SessionGuard } from 'src/Controller/session.guard';
import { SalaryService } from 'src/Services/salaryservice.service';
import { EmployeeFormUpdate } from 'src/Data/employeeupdate.dto';
import { createReadStream } from 'fs';
import { Pool } from 'pg';
import * as fastcsv from 'fast-csv';

@Controller('/admin')
export class AdminController {
  constructor(private adminService: AdminService,
    private empService: EmployeeService,
    private salaryService: SalaryService,
    //privatee MailService:

  ) { }
  
 
  @Get('/index')
  @UseGuards(SessionGuard)
  getAdmin(): any { 
    return this.adminService.getIndex();
  }

  @Get("allNames")
  @UseGuards(SessionGuard)
  findAllNames(): any {
    return this.adminService.getallNames();
  }

  // @Get()
  // @UseGuards(SessionGuard)
  // findAll():any{
  //   return this.adminService.getallEmails
  // }

  @Get("allEmails")
  @UseGuards(SessionGuard)
  findAllEmails(): any {
    return this.adminService.getallEmails();
  }

  @Get('/findadmin/:id')
  @UseGuards(SessionGuard)
  getAdminByID(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.getUserByID(id);
  }

  @Get("allsal")
  @UseGuards(new SessionGuard)
  findNoOSal(): any {
    var total = this.adminService.getallNumbers();
    // var s = "total salary gets";
    return total;
  }

  @Get("totalSal")
  @UseGuards(new SessionGuard)
  totalSal(): any{
    return this.adminService.getSum();
    }

  @Get('/findadmin/name')
  @UseGuards(new SessionGuard)
  getAdminByIDName(@Param() p: any): any {
    return this.adminService.getUserByIDName(p);
  }

  @Get("findinfoByName/:name")     
  @UseGuards(new SessionGuard)
  getAdminNames(@Param("name") name: string): any {
    return this.adminService.getAdminByName(name);
  }

    @Get("findEmployeeByAdmin/:id")
    @UseGuards(new SessionGuard)
    getEmployeeByAdminId(@Param("id", ParseIntPipe) idParam: number): any {
    return this.adminService.getEmpUsingAdminID(idParam);
  }

  @Get("allSalFromSalTable") 
  @UseGuards(new SessionGuard)
  totalSalaryProvided(): any {
  
    return this.salaryService.getSum();
  }



  // -------------------------------------------
  @Post('/insertAdmin')
  @UseGuards(SessionGuard)  
  @UsePipes(new ValidationPipe())
  insertAdmin(@Body() mydto: AdminForm): any {
    
    return this.adminService.insertUser(mydto);
  }
  
  @Put('/updateAdmin/')
  @UsePipes(new ValidationPipe())
  @UseGuards(SessionGuard)
  updateAdmin(@Session() session    ,
    @Body('name') name: string): any {
    console.log(session.email)      
    return this.adminService.updateUser(name, session.name);
  }

  @Put('/updateadmin/:id')
  @UseGuards(new SessionGuard)
  @UsePipes(new ValidationPipe())
  updateAdminbyid(@Session() session,
    @Body() mydto: AdminForm,
    @Param('id', ParseIntPipe) id: number,
  ): any {        
    return this.adminService.updateUserbyid(mydto, id);
  }
  @Delete('/deleteadmin/:id')         
  @UseGuards(new SessionGuard)                
  deleteAdminbyid(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.deleteUserbyid(id);
  }

  @Post('sendemail')    
  //@UseGuards(new SessionGuard)
  sendEmail(@Body() mydata) {  
    return this.adminService.sendEmail(mydata);
  }
      
  @Post("/insertSal")
  @UseGuards(new SessionGuard)
  @UsePipes(new ValidationPipe())
  insertSal(@Body() salDto: SalaryForm): any {                        
    return this.salaryService.insertSalary(salDto);            
  } 

  @Delete('/deleteSal/:id')
  @UseGuards(new SessionGuard)
  deleteSalbyid(@Param('id', ParseIntPipe) id: number): any {
  return this.salaryService.deleteUserbyid(id);
  }
  
}
