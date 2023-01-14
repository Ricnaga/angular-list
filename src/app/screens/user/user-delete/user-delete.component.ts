import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDeleteType } from './user-delete.type';

@Component({
  selector: 'lab-user-delete',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule],
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
})
export class UserDeleteComponent {
  user: Array<UserDeleteType> = [
    { title: 'ID', description: '3' },
    { title: 'First Name', description: 'Valter' },
    { title: 'Last Name', description: 'Escaminosflau' },
    { title: 'Age', description: '35' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
