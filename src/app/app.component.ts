import {Component} from '@angular/core'

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
export class AppComponent {
  posts: Post[] = [
    {title: 'Привет', text: 'Витя', id: 1},
    {title: 'Хочу выучить Angular и сейчас учу его', text: 'Angular очень крутой Framework', id: 2}
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }
}
