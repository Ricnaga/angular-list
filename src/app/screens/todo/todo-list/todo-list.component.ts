import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoColumnKey, TodoListType, TodoPathType } from './todo-list.type';

const DATASOURCE_MOCK = [
  {
    id: '1',
    title: 'valter',
    description: 'souza',
    remarks: 'observation 1',
  },
  {
    id: '2',
    title: 'luiz',
    description: 'monteiro',
    remarks: 'observation 2',
  },
  {
    id: '3',
    title: 'flavio',
    description: 'escaminosflau',
    remarks: 'observation 3',
  },
  {
    id: '4',
    title: 'roberta',
    description: 'fulas',
    remarks: 'observation 4',
  },
];

@Component({
  selector: 'lab-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements AfterViewInit {
  displayedColumns: TodoColumnKey;
  dataSource: MatTableDataSource<TodoListType>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.displayedColumns = [
      'id',
      'title',
      'description',
      'remarks',
      'actions',
    ];
    this.dataSource = new MatTableDataSource(DATASOURCE_MOCK);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onNavigateTo(path: TodoPathType, id = '') {
    const isPathById = id ? [path, id] : [path];

    this.router.navigate(isPathById, {
      relativeTo: this.activatedRoute,
    });
  }
}
