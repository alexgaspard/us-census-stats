import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Statistics } from '../../shared/statistics';


@Component({
    selector: 'app-statistics-detail',
    templateUrl: './statistics-detail.component.html',
    styleUrls: ['./statistics-detail.component.css']
})
export class StatisticsDetailComponent implements OnInit {
    @Input() statistics: Statistics;
    @Input() loading: boolean;
    @Output() selected = new EventEmitter<string>(true);

    readonly ALLOWED_FIELDS = ['age', 'class of worker', 'industry code', 'occupation code', 'education', 'wage per hour',
        'last education', 'marital status', 'major industry code', 'major occupation code', 'mace',
        'hispanice', 'sex', 'member of labor', 'reason for unemployment', 'fulltime', 'capital gain',
        'capital loss', 'dividends', 'income tax liability', 'previous residence region',
        'previous residence state', 'household-with-family', 'household-simple', 'weight', 'msa-change',
        'reg-change', 'within-reg-change', 'lived-here', 'migration prev res in sunbelt',
        'num persons worked for employer', 'father birth country', 'mother birth country', 'birth country',
        'citizenship', 'own business or self employed', 'veterans benefits', 'weeks worked in year', 'year',
        'salary range'];

    constructor() {
        this.statistics = new Statistics();
        this.loading = true;
    }

    ngOnInit() {
        this.selected.emit(this.ALLOWED_FIELDS[0]);
    }

    select(value: string): void {
        this.selected.emit(value);
    }
}
