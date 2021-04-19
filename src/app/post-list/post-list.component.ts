import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    { title: 'First Post', content: 'This is my First\'s post' },
    { title: 'Second Post', content: 'This is my Second\'s post' },
    { title: 'Third Post', content: 'This is my Third\'s post' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
