import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdInputModule,
  MdListModule, MdGridListModule, MdDialog, MdDialogModule, MdAutocomplete, MdAutocompleteModule, MdMenuModule,
  MdCheckboxModule, MdDatepickerModule, MdRadioModule, MdNativeDateModule, MdSelectModule
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSelectModule
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSelectModule
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule { }
