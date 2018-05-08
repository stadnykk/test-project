import { Component } from '@angular/core';
import 'rxjs/Rx';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppService } from './app.service';
import { SortOrderEnum } from './app-sort-order.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
    searchForm: FormGroup;
    results;
    outcode;
    sortingOrder: SortOrderEnum;

    constructor(
        private appService: AppService,
        private fb: FormBuilder
    ) {
        this.initializeForm();
    }

    get getSearchControl(): FormControl {
        return this.searchForm.get('search') as FormControl;
    }

    showDialog(outcode: string): void {
        this.appService.getOutcodes(outcode)
            .map(data => data['result'])
            .subscribe(res => {
                this.outcode = res;
            });
    }

    sortBy(sortField): void {
        if (!this.sortingOrder) {
            this.results = this.results.sort((a, b) => {
                return a[ sortField ] < b[ sortField ];
            });
            this.sortingOrder = SortOrderEnum.Desc;
        } else {
            this.results = this.results.sort((a, b) => {
                return a[ sortField ] > b[ sortField ];
            });
            this.sortingOrder = SortOrderEnum.Acs;
        }
    }

    onSubmit(): void {
        if (this.searchForm.valid) {
            this.appService.getPostcodes(this.getSearchControl.value)
                .map(postCodes => postCodes['result'])
                .subscribe(codes => {
                    this.results = codes;
                });
        }
    };

    private initializeForm(): void {
        this.searchForm = this.fb.group({
            search: [ '', [ Validators.required ] ]
        });
    }
}
