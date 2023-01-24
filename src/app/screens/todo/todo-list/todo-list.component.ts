import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListApiService } from './todo-list-api.service';
import { TodoColumnKey, TodoListType, TodoPathType } from './todo-list.type';

@Component({
  selector: 'lab-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, AfterViewInit {
  displayedColumns: TodoColumnKey;
  dataSource: MatTableDataSource<TodoListType>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private todoListApiService: TodoListApiService,
  ) {
    this.displayedColumns = [
      'id',
      'title',
      'description',
      'remarks',
      'actions',
    ];
    this.dataSource = new MatTableDataSource();
  }

  setPagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.todoListApiService.get().subscribe((response) => {
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

  onNavigateTo(path: TodoPathType, id = '') {
    const isPathById = id ? [path, id] : [path];

    this.router.navigate(isPathById, {
      relativeTo: this.activatedRoute,
    });
  }
}
