import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldBaseModel } from './models/field-base.model';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lab-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() field!: FieldBaseModel<string>;
  @Input() form!: FormGroup;
}
