import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { OutcodeDialogComponent } from './outcode-dialog/outcode-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        OutcodeDialogComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [ AppService ],
    bootstrap: [ AppComponent ],
    entryComponents: [ OutcodeDialogComponent ]
})
export class AppModule {
}
