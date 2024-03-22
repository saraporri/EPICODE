import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
constructor(private router:ActivatedRoute){}

ngOnInit(){


  this.router.params.subscribe((parametriDellaRotta:any) => {

    console.log(parametriDellaRotta.id);


  })



}}
