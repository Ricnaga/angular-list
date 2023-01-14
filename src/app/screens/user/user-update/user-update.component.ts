import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lab-user-update',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
