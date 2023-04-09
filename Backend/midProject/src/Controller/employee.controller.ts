import { DoctorService } from './../Services/doctor.service';
import { EmployeeFormUpdate, EmployeeFormUpdate2 } from './../Data/employeeupdate.dto';
import { Delete, Get, Patch, Query, Session } from '@nestjs/common/decorators';
import { EmployeeForm, EmployeeForm3 } from './../Data/employee.dto';
import { EmployeeService } from 'src/Services/employee.service';
import { Body, Controller, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { SessionGuard } from './session.guard';
import { EmployeeForm2 } from 'src/Data/employee2dto';
import { EmployeeService2 } from 'src/Services/employeeservice2.service';
import { DoctorForm } from 'src/Data/doctorform';


@Controller('employee') 
    export class EmployeeController{
    constructor(private readonly empService: EmployeeService,
      private employeeService2: EmployeeService2,
      private doctorService :DoctorService
    ) { }
  
//--------------------------------------------

    //Senior emp inserted by admin
    @Post("/insertEmployee")
    @UseGuards(new SessionGuard)
  @UsePipes(new ValidationPipe())
  insertEmployee(@Body() empDto: EmployeeForm): any {
    return this.empService.insertEmployee(empDto);
    }

    @Put('/updateemployee/:id')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateEmployeebyid(
    @Body() mydto: EmployeeForm3,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.empService.updateUserbyid(mydto, id);
  }
    
    @Get("findEmployeeByAdmin/:id")
    @UseGuards(new SessionGuard)
  getEmployeeByAdminId(@Param("id", ParseIntPipe) idParam: number): any {
    return this.empService.getEmpUsingAdminID(idParam);
    }

    @Delete("deleteEmployeeUsingHisId/:id")
    @UseGuards(new SessionGuard)
     deleteEmployeeById(@Param("id", ParseIntPipe) IdParam: any) {
    return this.empService.deleteEmployeeByAdminId(IdParam);
  }

    @Get("allNames")
    @UseGuards(new SessionGuard)
  findAllNames(): any {
    return this.empService.getallNames();
    }

    @Get("dashboard") 
    @UseGuards(new SessionGuard)
    employeeDashboard():any{
        return this.empService.getDashboard();
    }

    @Get('/index2')
    @UseGuards(new SessionGuard)
  getEmployee2(): any {
    return this.employeeService2.getIndex2();
  }

  @Get('/findemployee2/:id')
  @UseGuards(new SessionGuard)
  getEmployee2ByID(@Param('id', ParseIntPipe) id: number): any {
    return this.employeeService2.getUser2ByID(id);
  }
  @Get('/findemployee2')
  @UseGuards(new SessionGuard)
  getEmployee2ByIDName(@Query() qry: any): any {
    return this.employeeService2.getUser2ByIDName(qry);
  }

@Put('/updateemployee2/')
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  updateEmployee2(@Session() session,@Body('name') name: string): any {
    console.log(session.email);
    return this.employeeService2.updateUser2(name, session.email);
  }

@Put('/updateemployee2/:id')
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  updateEmployee2byid(
    @Body() mydto: EmployeeFormUpdate2,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.employeeService2.updateUser2byid(mydto, id);
  }

@Delete('/deleteemployee2/:id')
   @UseGuards(SessionGuard)
  deleteEmployee2byid(@Param('id', ParseIntPipe) id: number): any {
    return this.employeeService2.deleteUser2byid(id);
  }

  //-----------------------------------junior emp
    @Post('/insertemployee2')
    @UseGuards(new SessionGuard)
    @UsePipes(new ValidationPipe())
    insertEmployee2(@Body() employee2dto: EmployeeForm2): any {
    return this.employeeService2.insertEmployee2(employee2dto);
   }

    @Put('/Updateemployee2')
    @UseGuards(new SessionGuard)
     @UsePipes(new ValidationPipe())
    UpdateEmployee2(@Body() employee2dto: EmployeeForm2): any {
      return this.employeeService2.updateemployee2(employee2dto);
    }

    @Get('/findemployee2byemployee/:id')
    @UseGuards(new SessionGuard)
    getEmployee2ByemployeeID(@Param('id', ParseIntPipe) id: number): any {
       return this.empService.getEmployee2sByemployeeID(id);
    }

    @Get('/findemployeebyemployee2/:id')
    @UseGuards(new SessionGuard)
    getEmployeeByEmployee2ID(@Param('id', ParseIntPipe) id: number): any {
       return this.employeeService2.getEmployee2sByemployeeID(id);
    }
  @Post('sendemail')
  sendEmail(@Body() mydata) {
    return this.empService.sendEmail(mydata);
  }

  // ----------------------------------doctor-----------------------

  @Post('/insertdoctor')
  @UsePipes(new ValidationPipe())
    insertDoctor(@Body() doctordto: DoctorForm): any {
      return this.doctorService.insertDoctor(doctordto);
    }

    @Put('/Updatedoctor')
    @UsePipes(new ValidationPipe())
      UpdateDoctor(@Body() doctordto: DoctorForm): any {
        return this.doctorService.Updatedoctor(doctordto);
      }
   
    @Get('/finddoctorsbyemployee/:id')
    getDoctorByEmployeeID(@Param('id', ParseIntPipe) id: number): any {
      return this.empService.getDoctorsByemployeeID(id);
    }

    @Get('/findemployeebydoctor/:id')
    getEmployeeByDoctorID(@Param('id', ParseIntPipe) id: number): any {
       return this.doctorService.getDoctorsByemployeeID(id);
    }
}
    
