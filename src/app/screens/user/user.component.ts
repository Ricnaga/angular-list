import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lab-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  title: string;

  constructor(private router: Router) {
    this.title = 'Usuários';
  }

  onBack() {
    this.router.navigate(['']);
  }
}
