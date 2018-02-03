import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentid: number;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(
      (data) => this.studentid =+ data.get('id')
    )
  }

}
