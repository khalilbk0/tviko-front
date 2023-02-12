import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AdInfosComponent } from './ad-infos.component';

describe('AdInfosComponent', () => {
  let component: AdInfosComponent;
  let fixture: ComponentFixture<AdInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
