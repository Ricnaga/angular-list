import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UserListApiService } from './user-list-api.service';
import { UserListType, UserPathType } from './user-list.type';

@Component({
  selector: 'lab-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    ComponentsModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: Array<keyof UserListType | 'actions'>;
  dataSource: MatTableDataSource<UserListType>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userListApiService: UserListApiService,
  ) {
    this.displayedColumns = ['id', 'firstName', 'lastName', 'age', 'actions'];
    this.dataSource = new MatTableDataSource();
  }

  setPagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.userListApiService.get().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.setPagination();
    });
  }

  ngAfterViewInit() {
    this.setPagination();
  }

  onFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onNavigateTo(path: UserPathType, id = '') {
    const isPathById = id ? [path, id] : [path];

    this.router.navigate(isPathById, {
      relativeTo: this.activatedRoute,
    });
  }
}
