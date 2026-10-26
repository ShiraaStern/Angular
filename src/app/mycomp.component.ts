import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface subjectGrade {
  subject: string;
  grade: number;
}

@Component({
  selector: 'app-mycomp',
  imports: [CommonModule,CommonModule],
  templateUrl: './mycomp.component.html',
  styleUrl: './mycomp.component.css'
})
export class MyComp {
  subjectGrades: subjectGrade[] = [
    { subject: "Math", grade: 85 },
    { subject: "Science", grade: 90 },
    { subject: "English", grade: 78 },
    { subject: "History", grade: 92 },
    { subject: "Art", grade: 88 }
  ];
}
