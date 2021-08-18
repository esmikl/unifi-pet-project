import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder,FormGroup, Validators} from '@angular/forms';
import data from '../../states.json';
import {notificationAnimation, UNotificationComponent} from '@nelnet/unifi-components-angular';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss'],
  animations: [notificationAnimation.fadeInOut]
})
export class ApplyComponent implements OnInit {

  @ViewChild('success') success!: UNotificationComponent;

  adoptionForm!: FormGroup;
  states = data;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adoptionForm = this.formBuilder.group({
      nameCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      zipCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      stateCtrl: ['', Validators.required],
      dobCtrl: ['', Validators.required],
      householdTextarea: ['', Validators.required],
      activity: ['', Validators.required],
      currentlyOwnPets: [''],
      previouslyOwned: [''],
      reHomed: [''],
      signature: ['', Validators.required],
      dateSigned: ['', Validators.required]
    });
  }

  focusError(): void {
    if (this.adoptionForm.invalid) {
      //Give the document time to recognize the notification
      setTimeout(() => {
        document.getElementById('errorMessage')!.focus();
      });
    }
  }

  focusInput(event: any, id: string): void {
    event.preventDefault();
    document.getElementById(id)!.focus();
  }

  submit() {
    if (this.adoptionForm.invalid) {
      this.focusError();
    } else if (this.adoptionForm.valid) {
      document.getElementById('successMessage')!.focus();
      console.log(this.adoptionForm);
    }
  }
}
