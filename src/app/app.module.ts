import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {CsvReaderComponent} from './views/csv-reader/csv-reader.component';
import {CsvTableComponent} from './views/csv-table/csv-table.component';
import {CsvOverviewComponent} from './views/csv-overview/csv-overview.component';
import {TableEditPopupComponent} from './views/csv-table/table-edit-popup/table-edit-popup.component';
import {CsvOverviewBottomSheetComponent} from './views/csv-overview/csv-overview-bottom-sheet/csv-overview-bottom-sheet.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CsvReaderComponent,
    CsvTableComponent,
    CsvOverviewComponent,
    TableEditPopupComponent,
    CsvOverviewBottomSheetComponent
  ],
  entryComponents: [
    TableEditPopupComponent,
    CsvOverviewBottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatMenuModule,
    MatBottomSheetModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatFormFieldModule,
    MatGridListModule,
    MatStepperModule,
    NgbModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
