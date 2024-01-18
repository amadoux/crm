import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../enterprise.test-samples';

import { EnterpriseFormService } from './enterprise-form.service';

describe('Enterprise Form Service', () => {
  let service: EnterpriseFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterpriseFormService);
  });

  describe('Service methods', () => {
    describe('createEnterpriseFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createEnterpriseFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            companyName: expect.any(Object),
            businessRegisterNumber: expect.any(Object),
            uniqueIdentificationNumber: expect.any(Object),
            businessDomicile: expect.any(Object),
            businessEmail: expect.any(Object),
            businessPhone: expect.any(Object),
            country: expect.any(Object),
            city: expect.any(Object),
            manager: expect.any(Object),
            businessLogo: expect.any(Object),
            mapLocator: expect.any(Object),
          }),
        );
      });

      it('passing IEnterprise should create a new form with FormGroup', () => {
        const formGroup = service.createEnterpriseFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            companyName: expect.any(Object),
            businessRegisterNumber: expect.any(Object),
            uniqueIdentificationNumber: expect.any(Object),
            businessDomicile: expect.any(Object),
            businessEmail: expect.any(Object),
            businessPhone: expect.any(Object),
            country: expect.any(Object),
            city: expect.any(Object),
            manager: expect.any(Object),
            businessLogo: expect.any(Object),
            mapLocator: expect.any(Object),
          }),
        );
      });
    });

    describe('getEnterprise', () => {
      it('should return NewEnterprise for default Enterprise initial value', () => {
        const formGroup = service.createEnterpriseFormGroup(sampleWithNewData);

        const enterprise = service.getEnterprise(formGroup) as any;

        expect(enterprise).toMatchObject(sampleWithNewData);
      });

      it('should return NewEnterprise for empty Enterprise initial value', () => {
        const formGroup = service.createEnterpriseFormGroup();

        const enterprise = service.getEnterprise(formGroup) as any;

        expect(enterprise).toMatchObject({});
      });

      it('should return IEnterprise', () => {
        const formGroup = service.createEnterpriseFormGroup(sampleWithRequiredData);

        const enterprise = service.getEnterprise(formGroup) as any;

        expect(enterprise).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IEnterprise should not enable id FormControl', () => {
        const formGroup = service.createEnterpriseFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewEnterprise should disable id FormControl', () => {
        const formGroup = service.createEnterpriseFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
