import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lab-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule],
})
export class UserCreateComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
