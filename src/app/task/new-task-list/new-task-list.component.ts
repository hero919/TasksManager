import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) private data, private dialogRef: MdDialogRef) { }

  ngOnInit() {
    this.title = this.data.tile;
  }

}
