import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  adoptionFormArray!: FormArray;
  adoptionInfoGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adoptionInfoGroup = this.formBuilder.group({
      nameCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      cityCtrl: ['', Validators.required],
      zipCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required]
    });
    // this.adoptionFormArray = new FormArray([
    //   this.formBuilder.group({
    //     this.adoptionInfoGroup
    //   });
    // ]);
  }

}
