import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses;
  constructor(private coursesService:CoursesService) { 
  this.courses=this.coursesService.courses;
  }

  ngOnInit(): void {
  }

}
