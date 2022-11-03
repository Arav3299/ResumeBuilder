import { Component, HostListener, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  isShow: boolean | undefined;
  topPosToStartShowing = 100;
  resumeData:any;
  photo:any;
  role:any;
  email:any;
  number:any;
  city:any;
  state:any;
  name:any;
  skills:any=[];
  languages:any=[];
  roleInCompany:any;
  company: any;
  fromc: any;
  tow: any;
  desc: any;
  college: any;
  toc: any;
  aboutclg: any;
  to10: any;
  from10: any;
  school10: any;
  abouts10: any;
  academic:any=[];
  fromw: any;
  school12: any;
  from12: any;
  to12: any;
  abouts12: any;
 interests:any=[];
 certificate:any;
  fromcert: any;
  tocert: any;
  aboutcert: any;
  project: any;
  
  
ngOnInit(){
 
    this.resumeData=history.state.data;
    this.photo=history.state.img;
    this.name=this.resumeData.name;
    this.role=this.resumeData.role;
    this.email=this.resumeData.email;
    this.number=this.resumeData.number;
    this.city=this.resumeData.city,this.state=this.resumeData.state,
    this.skills.push({"skill":this.resumeData.skill1,"pro":this.resumeData.p1},
    {"skill":this.resumeData.skill2,"pro":this.resumeData.p2},{"skill":this.resumeData.skill3,"pro":this.resumeData.p3},
    {"skill":this.resumeData.skill4,"pro":this.resumeData.p4},{"skill":this.resumeData.skill5,"pro":this.resumeData.p5},
    )
    this.languages.push(
      {"lang":this.resumeData.language1,"pro":this.resumeData.lp1},
      {"lang":this.resumeData.language2,"pro":this.resumeData.lp2},
      {"lang":this.resumeData.language3,"pro":this.resumeData.lp3}

    )
    this.roleInCompany=this.resumeData.roleInCompany,this.company=this.resumeData.company,
    this.fromw=this.resumeData.fromw,this.tow=this.resumeData.tow,
    this.desc=this.resumeData.description,

    this.college=this.resumeData.college,this.fromc=this.resumeData.fromc,
    this.toc=this.resumeData.toc,this.aboutclg=this.resumeData.aboutclg
   
    this.school10=this.resumeData.school10,this.from10=this.resumeData.from10,
    this.to10=this.resumeData.to10,this.abouts10=this.resumeData.abouts10

    this.school12=this.resumeData.school12,this.from12=this.resumeData.from12,
    this.to12=this.resumeData.to12,this.abouts12=this.resumeData.abouts12

      this.academic.push(
        {"name":this.college,"from":this.fromc,"to":this.toc,"desc":this.aboutclg},
        {"name":this.school10,"from":this.from10,"to":this.to10,"desc":this.abouts10},
        {"name":this.school12,"from":this.from12,"to":this.to12,"desc":this.abouts12},
      )
    this.interests.push(this.resumeData.interest1,this.resumeData.interest2,this.resumeData.interest3)
    this.certificate=this.resumeData.certificate,this.fromcert=this.resumeData.fromcert,
    this.tocert=this.resumeData.tocert,
    this.aboutcert=this.resumeData.aboutcert,
    this.project=this.resumeData.aboutproject
    console.log(this.academic);
    
  }

  exportAsPdf(){
    let data:any = document.getElementById('myResume');  
        html2canvas(data).then(canvas => {
          let fileWidth = 210;
          let fileHeight = (canvas.height * fileWidth) / canvas.width;
          let height1=301;
          const FILEURI = canvas.toDataURL('image/png');
          let PDF = new jsPDF('p', 'mm', 'a4');
          var height = PDF.internal.pageSize.getHeight();
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
          PDF.save('angular-demo.pdf');  
      }); 
  }
   
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
