import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-main',
  templateUrl: './library-main.page.html',
  styleUrls: ['./library-main.page.scss'],
})
export class LibraryMainPage implements OnInit {


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor() { }

  ngOnInit() {
  }
    
}
