import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS } from 'src/app/application/routes';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UserDeleteApiService } from './user-delete-api.service';

type UserDeleteList = Record<'title' | 'description', string>;

@Component({
  selector: 'lab-user-delete',
  standalone: true,
  imports: [CommonModule, MatListModule, ComponentsModule],
  templateUrl: './user-delete.component.html',
})
export class UserDeleteComponent implements OnInit {
  user: Array<UserDeleteList>;
  paramId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userDeleteApiService: UserDeleteApiService,
  ) {
    this.user = [];
    this.paramId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngOnInit(): void {
    this.userDeleteApiService.getById(this.paramId).subscribe((response) => {
      this.user = [
        { title: 'ID', description: this.paramId },
        { title: 'First Name', description: response.firstName },
        { title: 'Last Name', description: response.lastName },
        { title: 'Age', description: response.age },
      ];
    });
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onDelete() {
    this.userDeleteApiService
      .delete(this.paramId)
      .subscribe(() => this.router.navigate([USERS]));
  }
}
