import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GridService } from '../grid.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { CountService } from '../count.service';


export interface IRandomUsers {
  id: number,
  uid:  number,
  password:  string,
  first_name:  string,
  last_name:  string,
  username:  string,
  email:  string,
  avatar:  string,
  gender:  string,
  phone_number: string,
  social_insurance_number:  string,
  date_of_birth: Date,
  address: {
    city: string,
    street_name: string,
    street_address: string,
    zip_code: string,
    state: string,
    country: string,
    coordinates: {
        lat: number,
        lng: number
    }
  }  
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit, OnDestroy {
  subs = new Subscription();

  displayedColumns: string[] = ['action', 'avatar', 'username', 'email', 'date_of_birth', 'coordinates.lat', 'coordinates.lng'];

  public dataSource:MatTableDataSource<IRandomUsers> | undefined;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  private dataArray: any;

  constructor(private service: GridService, private _snackBar: MatSnackBar,private countservice:CountService) { }

  ngOnInit() {
    this.subs.add(this.service.getRandomUsers()
      .subscribe((res) => {
        console.log(res);
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public openRecord(id: number, name: string): void {
    this._snackBar.open(`Record ${id} ${name} `, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });    
  }
  openSnackBar() {
    this._snackBar.open('Hello, Snackbar!', 'Close', {
      duration: 2000,
    });
  }
}
