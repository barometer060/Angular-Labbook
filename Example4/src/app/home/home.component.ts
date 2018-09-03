import { Component, OnInit } from '@angular/core';
import {BooklistService} from '../booklist.service';
import {IBook} from './IBook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	booklist: IBook[] = [];
	titleFilter: string = '';
	authorFilter: string = '';
	yearFilter: number;
  idFilter: number;
  constructor(private ser: BooklistService) { }

  ngOnInit() {
  	this.ser.getData().subscribe(data => {
  		this.booklist = data;
  	})
  }

}
