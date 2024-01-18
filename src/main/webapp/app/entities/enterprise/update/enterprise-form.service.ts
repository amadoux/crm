import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IEnterprise, NewEnterprise } from '../enterprise.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IEnterprise for edit and NewEnterpriseFormGroupInput for create.
 */
type EnterpriseFormGroupInput = IEnterprise | PartialWithRequiredKeyOf<NewEnterprise>;

type EnterpriseFormDefaults = Pick<NewEnterprise, 'id'>;

type EnterpriseFormGroupContent = {
  id: FormControl<IEnterprise['id'] | NewEnterprise['id']>;
  companyName: FormControl<IEnterprise['companyName']>;
  businessRegisterNumber: FormControl<IEnterprise['businessRegisterNumber']>;
  uniqueIdentificationNumber: FormControl<IEnterprise['uniqueIdentificationNumber']>;
  businessDomicile: FormControl<IEnterprise['businessDomicile']>;
  businessEmail: FormControl<IEnterprise['businessEmail']>;
  businessPhone: FormControl<IEnterprise['businessPhone']>;
  country: FormControl<IEnterprise['country']>;
  city: FormControl<IEnterprise['city']>;
  manager: FormControl<IEnterprise['manager']>;
  businessLogo: FormControl<IEnterprise['businessLogo']>;
  businessLogoContentType: FormControl<IEnterprise['businessLogoContentType']>;
  mapLocator: FormControl<IEnterprise['mapLocator']>;
  mapLocatorContentType: FormControl<IEnterprise['mapLocatorContentType']>;
};

export type EnterpriseFormGroup = FormGroup<EnterpriseFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class EnterpriseFormService {
  createEnterpriseFormGroup(enterprise: EnterpriseFormGroupInput = { id: null }): EnterpriseFormGroup {
    const enterpriseRawValue = {
      ...this.getFormDefaults(),
      ...enterprise,
    };
    return new FormGroup<EnterpriseFormGroupContent>({
      id: new FormControl(
        { value: enterpriseRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      companyName: new FormControl(enterpriseRawValue.companyName, {
        validators: [Validators.required],
      }),
      businessRegisterNumber: new FormControl(enterpriseRawValue.businessRegisterNumber, {
        validators: [Validators.required],
      }),
      uniqueIdentificationNumber: new FormControl(enterpriseRawValue.uniqueIdentificationNumber, {
        validators: [Validators.required],
      }),
      businessDomicile: new FormControl(enterpriseRawValue.businessDomicile),
      businessEmail: new FormControl(enterpriseRawValue.businessEmail, {
        validators: [Validators.required, Validators.maxLength(255)],
      }),
      businessPhone: new FormControl(enterpriseRawValue.businessPhone, {
        validators: [Validators.required],
      }),
      country: new FormControl(enterpriseRawValue.country),
      city: new FormControl(enterpriseRawValue.city),
      manager: new FormControl(enterpriseRawValue.manager),
      businessLogo: new FormControl(enterpriseRawValue.businessLogo),
      businessLogoContentType: new FormControl(enterpriseRawValue.businessLogoContentType),
      mapLocator: new FormControl(enterpriseRawValue.mapLocator),
      mapLocatorContentType: new FormControl(enterpriseRawValue.mapLocatorContentType),
    });
  }

  getEnterprise(form: EnterpriseFormGroup): IEnterprise | NewEnterprise {
    return form.getRawValue() as IEnterprise | NewEnterprise;
  }

  resetForm(form: EnterpriseFormGroup, enterprise: EnterpriseFormGroupInput): void {
    const enterpriseRawValue = { ...this.getFormDefaults(), ...enterprise };
    form.reset(
      {
        ...enterpriseRawValue,
        id: { value: enterpriseRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): EnterpriseFormDefaults {
    return {
      id: null,
    };
  }
}
