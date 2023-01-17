import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UserDeleteType } from './user-delete.type';

@Component({
  selector: 'lab-user-delete',
  standalone: true,
  imports: [CommonModule, MatListModule, ComponentsModule],
  templateUrl: './user-delete.component.html',
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

  onDelete() {
    console.warn('this is the submit values: ');
  }
}
