import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListType, UserPathType } from './user-list.type';

const DATASOURCE_MOCK = [
  { id: '1', firstName: 'valter', lastName: 'souza', age: '12' },
  { id: '2', firstName: 'luiz', lastName: 'monteiro', age: '22' },
  { id: '3', firstName: 'flavio', lastName: 'escaminosflau', age: '54' },
  { id: '4', firstName: 'roberta', lastName: 'fulas', age: '08' },
];

@Component({
  selector: 'lab-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<UserListType>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'age', 'actions'];
    this.dataSource = new MatTableDataSource(DATASOURCE_MOCK);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onNavigateTo(path: UserPathType, id = '') {
    const isPathById = id ? [path, id] : [path];

    this.router.navigate(isPathById, {
      relativeTo: this.activatedRoute,
    });
  }
}
