import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postLike: Number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

  getClassByStatus(){
    switch (this.postLike){
      case 1:
        return 'green';

      case 0:
        return 'red';

      default:
        return 'grey';
    }
  }

  likePost(){
    this.postLike = 1;
  }

  unlikePost(){
    this.postLike = 0;
  }
}
