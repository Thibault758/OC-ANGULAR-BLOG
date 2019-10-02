import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post : Post;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(post : Post){
    post.loveIts ++;
  }

  onDontLoveIt(post : Post){
    post.loveIts -= 1;
  }

}
