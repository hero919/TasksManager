import { Component, OnInit } from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewProjectComponent} from "../new-project/new-project.component";
import {InviteComponent} from "../invite/invite.component";
import {ConfirmDialogComponent} from "../../shared/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {


  projects = [
    {
      'name': 'Enterprise Level Platform',
      'desc': 'This is an enterprise inner project',
      'coverImg': 'assets/img/road.jpg'
    },
    {
      'name': 'Enterprise Level Platform',
      'desc': 'This is an enterprise inner project',
      'coverImg': 'assets/img/flower01.png'
    }
  ];

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title : 'Add new Project'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: 'Edit Project'}});

  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title : 'Delete Project', content: 'Are you sure to delete this project?'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
