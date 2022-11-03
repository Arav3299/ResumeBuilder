import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  yearArray :any =[];
  proficiency=[10,20,30,40,50,60,70,80,90,100]
  resumeForm:FormGroup;

  ngOnInit(): void {
     
    var currentYear = (new Date()).getFullYear();
    for (var i = 1950; i <= currentYear; i++) {
       this.yearArray.push(i);
  }
  }
  constructor(private formbuilder:FormBuilder,private navi:Router) {

    this.resumeForm=this.formbuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      number:['',Validators.required],
      role:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      photo:['',Validators.required],

      skill1:['',Validators.required],
      skill2:['',Validators.required],
      skill3:['',Validators.required],
      skill4:['',Validators.required],
      skill5:['',Validators.required],

      language1:['',Validators.required],
      language2:['',Validators.required],
      language3:['',Validators.required],

      roleInCompany:['',Validators.required],
      company:['',Validators.required],
      fromw:['',Validators.required],
      tow:['',Validators.required],
      description:['',Validators.required],

      college:['',Validators.required],
      fromc:['',Validators.required],
      toc:['',Validators.required],
      aboutclg:['',Validators.required],

      school10:['',Validators.required],
      from10:['',Validators.required],
      to10:['',Validators.required],
      abouts10:['',Validators.required],

      school12:['',Validators.required],
      from12:['',Validators.required],
      to12:['',Validators.required],
      abouts12:['',Validators.required],

      interest1:['',Validators.required],
      interest2:['',Validators.required],
      interest3:['',Validators.required],

      aboutproject:['',Validators.required],

      p1:['',Validators.required],
      p2:['',Validators.required],
      p3:['',Validators.required],
      p4:['',Validators.required],
      p5:['',Validators.required],

      lp1:['',Validators.required],
      lp2:['',Validators.required],
      lp3:['',Validators.required],

      certificate:['',Validators.required],
      fromcert:['',Validators.required],
      tocert:['',Validators.required],
      aboutcert:['',Validators.required],


})
}

file:any;

imageShow: any= '';
onFileChanged(event:any) {
  this.file = event.target.files[0]
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
   this.imageShow = (<FileReader>event.target).result;
 }
 
}


   onSubmit(){
    this.navi.navigate(['output'],{state:{data:this.resumeForm.value,img:this.imageShow}})
    console.log(this.resumeForm);
   }


}
