import {Component, OnInit} from '@angular/core'
import set = Reflect.set;

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Привет', text: 'Витя', id: 1}, {
      title: 'Хочу выучить Angular и сейчас учу его',
      text: 'Angular очень крутой Framework',
      id: 2
    }
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0] = {
        title: 'Changed!',
        text: 'Changed23',
        id: 22
      }
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(i => i.id !== id)
  }
}
