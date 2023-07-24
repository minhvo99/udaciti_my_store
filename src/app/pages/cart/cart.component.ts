import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public formGroup!: FormGroup;
  public formInputAmount!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
   this.createForm();
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      fullName: ['', Validators.compose(
        [Validators.required, Validators.minLength(3)]
      )],
      address: ['', Validators.compose(
        [Validators.required, Validators.minLength(6)]
      )],
      creditCard: ['', Validators.required],
    });  
    // this.formGroup.valueChanges.subscribe((data) => { 
    //   console.log(data);
    // }
    // );
  }
  onSubmitForm() {
    console.log(this.formGroup.value);
  }
}
