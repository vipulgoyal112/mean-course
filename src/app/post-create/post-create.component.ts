import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  value = 'Clear me';
  newPost='NO CONTENT';
  enteredValue='';
  newPost2='newPost2';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = postInput.value;
  }

  onAddPostTwoWayBinding(){
    this.newPost2 = this.enteredValue
  }

}
