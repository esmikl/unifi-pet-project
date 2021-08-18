import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UPanelsModule,
  UNotificationModule,
  UInputModule,
  UFormHelperTextModule,
  UFormControlModule,
  ULabelModule,
  URadioButtonModule,
  UCheckboxModule,
  UAppBarModule,
  UButtonModule,
  UDrawerModule,
  UStepperModule,
  UtilsModule,
  USelectModule
} from '@nelnet/unifi-components-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UAppBarModule,
    UButtonModule,
    UDrawerModule,
    UPanelsModule,
    UNotificationModule,
    UInputModule,
    UFormControlModule,
    UFormHelperTextModule,
    ULabelModule,
    URadioButtonModule,
    UCheckboxModule,
    UStepperModule,
    UtilsModule,
    USelectModule
  ],
  exports: [
    UAppBarModule,
    UButtonModule,
    UDrawerModule,
    UPanelsModule,
    UNotificationModule,
    UInputModule,
    UFormControlModule,
    UFormHelperTextModule,
    ULabelModule,
    URadioButtonModule,
    UCheckboxModule,
    UStepperModule,
    UtilsModule,
    USelectModule
  ]
})
export class UnifiComponentsModule { }
