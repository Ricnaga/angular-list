import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lab-card-form',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  @Input() title: string;
  @Input() subtitle: string;

  @Input() formGroup!: FormGroup;
  @Output() handleSubmit: EventEmitter<void>;
  @Output() handleCancel: EventEmitter<void>;

  constructor() {
    this.title = '';
    this.subtitle = '';
    this.handleCancel = new EventEmitter();
    this.handleSubmit = new EventEmitter();
  }
}
