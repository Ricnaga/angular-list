import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCreateField } from './user-create-field.type';

@Component({
  selector: 'lab-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule],
})
export class UserCreateComponent {
  FIELDS: Array<UserCreateField> = [
    { label: 'Nome', placeholder: 'Informe o nome' },
    { label: 'Sobrenome', placeholder: 'Informe o sobrenome' },
    { label: 'Idade', placeholder: 'Informe a idade' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
