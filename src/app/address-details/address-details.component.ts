import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  rForm: FormGroup;
  post:any;
  city:string='';
  street:string='';
  country:string='';

  constructor(private fb:FormBuilder) { 
    this.rForm= fb.group({
      'city':[null,Validators.required],
      'street':[null,Validators.compose([Validators.required])],
      'country':[null,Validators.compose([Validators.required])],
      'validate':''
             } );
  }

  ngOnInit() {
  }
  concatAddress(post){
    this.city=post.city;
    this.street=post.street;
    this.country=post.country;
    document.write(this.city+" ,"+this.street+" , "+this.country);

  }


}
