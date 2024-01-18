import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { EnterpriseService } from '../service/enterprise.service';

import { EnterpriseComponent } from './enterprise.component';

describe('Enterprise Management Component', () => {
  let comp: EnterpriseComponent;
  let fixture: ComponentFixture<EnterpriseComponent>;
  let service: EnterpriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'enterprise', component: EnterpriseComponent }]),
        HttpClientTestingModule,
        EnterpriseComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              defaultSort: 'id,asc',
            }),
            queryParamMap: of(
              jest.requireActual('@angular/router').convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              }),
            ),
            snapshot: { queryParams: {} },
          },
        },
      ],
    })
      .overrideTemplate(EnterpriseComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(EnterpriseComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(EnterpriseService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 123 }],
          headers,
        }),
      ),
    );
  });

  it('Should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.enterprises?.[0]).toEqual(expect.objectContaining({ id: 123 }));
  });

  describe('trackId', () => {
    it('Should forward to enterpriseService', () => {
      const entity = { id: 123 };
      jest.spyOn(service, 'getEnterpriseIdentifier');
      const id = comp.trackId(0, entity);
      expect(service.getEnterpriseIdentifier).toHaveBeenCalledWith(entity);
      expect(id).toBe(entity.id);
    });
  });
});
