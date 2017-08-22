import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'Terry01'
    },
    {
      id: 2,
      name: 'Terry02'
    },
    {
      id: 3,
      name: 'Terry03'
    },
    {
      id: 4,
      name: 'Terry04'
    }
  ];


  constructor() { }

  ngOnInit() {
  }


  displayUser(user: {id: string; name: string}) {
    return user ? user.name : '';
  }

}
