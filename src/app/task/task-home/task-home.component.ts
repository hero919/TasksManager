import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewTaskComponent} from "../new-task/new-task.component";
import {CopyTaskComponent} from "../copy-task/copy-task.component";
import {ConfirmDialogComponent} from "../../shared/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {


  lists = [
    {
      id : 1,
      name: 'To Do',
      tasks: [
        {id: 1,
        desc: 'Task01 Description',
          completed: true,
        owner: {
          id: 1,
          name : 'Terry01',
          avatar: 'avatars:svg-11'
        },
        dueDate: new Date(),
          reminder: new Date()
        },
        {id: 1,
          desc: 'Task01 Description',
          owner: {
            id: 1,
            name : 'Terry02',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {id: 1,
          desc: 'Task01 Description',
          completed: true,
          owner: {
            id: 1,
            name : 'Terry03',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ],
    },
    {
      id : 1,
      name: 'To Do',
      tasks: [
        {id: 1,
          desc: 'Task01 Description',
          completed: true,
          owner: {
            id: 1,
            name : 'Terry01',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {id: 1,
          desc: 'Task01 Description',
          completed: false,
          owner: {
            id: 1,
            name : 'Terry02',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ],

    }
  ];



  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: 'New Task'}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdatedTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: 'Edit Task', task: task}})
  }
  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title : 'Delete Project List', content: 'Are you sure to delete this project list?'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


}
