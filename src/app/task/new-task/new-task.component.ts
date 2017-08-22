import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  title: '';

  priorities = [
    {
      label: 'Emergency',
      value: 1
    },
    {
      label: 'Medium',
      value: 2
    }
  ];
  constructor(@Inject(MD_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data.task));
  }

}
