import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { StatisticsDetailComponent } from '../../components/statistics-detail/statistics-detail.component';
import { Statistics } from '../../shared/statistics';
import { StatisticsService } from '../../shared/statistics.service';
import { StatisticsComponent } from './statistics.component';
import { formDirectiveProvider } from '@angular/forms/src/directives/reactive_directives/form_group_directive';


describe('StatisticsComponent', () => {
    let component: StatisticsComponent;
    let fixture: ComponentFixture<StatisticsComponent>;
    let statisticsService: StatisticsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [StatisticsComponent, StatisticsDetailComponent],
            providers: [
                StatisticsComponent,
                { provide: StatisticsService, useClass: StatisticsService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StatisticsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        statisticsService = fixture.debugElement.injector.get(StatisticsService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.statistics).toEqual(new Statistics());
        // expect(component.loading).toEqual(false);
    });

    it('should getStatistics', () => {
        const field = 'field';
        const getStatisticsSpy = spyOn(statisticsService, 'getStatistics').and.returnValue(of(new Statistics()));
        component.getStatistics(field);
        expect(getStatisticsSpy).toHaveBeenCalledWith(field);
    });
});
