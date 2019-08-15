import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  lessonStart() {
    this.router.navigate(['/lesson-start']);
  }
  lessonEnd() {
    this.router.navigate(['/lesson-end']);
  }

}