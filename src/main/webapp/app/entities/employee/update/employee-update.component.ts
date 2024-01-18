import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';
import { IEnterprise } from 'app/entities/enterprise/enterprise.model';
import { EnterpriseService } from 'app/entities/enterprise/service/enterprise.service';
import { IDepartment } from 'app/entities/department/department.model';
import { DepartmentService } from 'app/entities/department/service/department.service';
import { Pays } from 'app/entities/enumerations/pays.model';
import { TypeEmployed } from 'app/entities/enumerations/type-employed.model';
import { Level } from 'app/entities/enumerations/level.model';
import { ContractType } from 'app/entities/enumerations/contract-type.model';
import { SalaryType } from 'app/entities/enumerations/salary-type.model';
import { EmployeeService } from '../service/employee.service';
import { IEmployee } from '../employee.model';
import { EmployeeFormService, EmployeeFormGroup } from './employee-form.service';

@Component({
  standalone: true,
  selector: 'jhi-employee-update',
  templateUrl: './employee-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class EmployeeUpdateComponent implements OnInit {
  isSaving = false;
  employee: IEmployee | null = null;
  paysValues = Object.keys(Pays);
  typeEmployedValues = Object.keys(TypeEmployed);
  levelValues = Object.keys(Level);
  contractTypeValues = Object.keys(ContractType);
  salaryTypeValues = Object.keys(SalaryType);

  enterprisesCollection: IEnterprise[] = [];
  employeesSharedCollection: IEmployee[] = [];
  departmentsSharedCollection: IDepartment[] = [];

  editForm: EmployeeFormGroup = this.employeeFormService.createEmployeeFormGroup();

  constructor(
    protected dataUtils: DataUtils,
    protected eventManager: EventManager,
    protected employeeService: EmployeeService,
    protected employeeFormService: EmployeeFormService,
    protected enterpriseService: EnterpriseService,
    protected departmentService: DepartmentService,
    protected activatedRoute: ActivatedRoute,
  ) {}

  compareEnterprise = (o1: IEnterprise | null, o2: IEnterprise | null): boolean => this.enterpriseService.compareEnterprise(o1, o2);

  compareEmployee = (o1: IEmployee | null, o2: IEmployee | null): boolean => this.employeeService.compareEmployee(o1, o2);

  compareDepartment = (o1: IDepartment | null, o2: IDepartment | null): boolean => this.departmentService.compareDepartment(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ employee }) => {
      this.employee = employee;
      if (employee) {
        this.updateForm(employee);
      }

      this.loadRelationshipsOptions();
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast(new EventWithContent<AlertError>('crmApp.error', { ...err, key: 'error.file.' + err.key })),
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const employee = this.employeeFormService.getEmployee(this.editForm);
    if (employee.id !== null) {
      this.subscribeToSaveResponse(this.employeeService.update(employee));
    } else {
      this.subscribeToSaveResponse(this.employeeService.create(employee));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEmployee>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(employee: IEmployee): void {
    this.employee = employee;
    this.employeeFormService.resetForm(this.editForm, employee);

    this.enterprisesCollection = this.enterpriseService.addEnterpriseToCollectionIfMissing<IEnterprise>(
      this.enterprisesCollection,
      employee.enterprise,
    );
    this.employeesSharedCollection = this.employeeService.addEmployeeToCollectionIfMissing<IEmployee>(
      this.employeesSharedCollection,
      employee.manager,
    );
    this.departmentsSharedCollection = this.departmentService.addDepartmentToCollectionIfMissing<IDepartment>(
      this.departmentsSharedCollection,
      employee.department,
    );
  }

  protected loadRelationshipsOptions(): void {
    this.enterpriseService
      .query({ filter: 'employee-is-null' })
      .pipe(map((res: HttpResponse<IEnterprise[]>) => res.body ?? []))
      .pipe(
        map((enterprises: IEnterprise[]) =>
          this.enterpriseService.addEnterpriseToCollectionIfMissing<IEnterprise>(enterprises, this.employee?.enterprise),
        ),
      )
      .subscribe((enterprises: IEnterprise[]) => (this.enterprisesCollection = enterprises));

    this.employeeService
      .query()
      .pipe(map((res: HttpResponse<IEmployee[]>) => res.body ?? []))
      .pipe(
        map((employees: IEmployee[]) =>
          this.employeeService.addEmployeeToCollectionIfMissing<IEmployee>(employees, this.employee?.manager),
        ),
      )
      .subscribe((employees: IEmployee[]) => (this.employeesSharedCollection = employees));

    this.departmentService
      .query()
      .pipe(map((res: HttpResponse<IDepartment[]>) => res.body ?? []))
      .pipe(
        map((departments: IDepartment[]) =>
          this.departmentService.addDepartmentToCollectionIfMissing<IDepartment>(departments, this.employee?.department),
        ),
      )
      .subscribe((departments: IDepartment[]) => (this.departmentsSharedCollection = departments));
  }
}
