import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-outcode-dialog',
    templateUrl: './outcode-dialog.component.html',
    styleUrls: [ './outcode-dialog.component.scss' ]
})
export class OutcodeDialogComponent {

    @Input() outcode;

    closeDialog() {
        this.outcode = null;
    }
}
