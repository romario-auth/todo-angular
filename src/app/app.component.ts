import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: String = "Minhas tarefas";
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })
    this.todos.push(new Todo(1, "Limpar a cozinha", true));
    this.todos.push(new Todo(2, "Ir ao mercador", false));
    this.todos.push(new Todo(3, "Fazer pão de queijo", false));
  }

  clear()
  {
    this.form.reset();
  }

  add()
  {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));

    this.clear();
  }

  remove (todo: Todo)
  {
    const index = this.todos.indexOf(todo);

    if(index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo)
  {
    todo.done = true;

  }

  markAsUndone(todo: Todo)
  {
    todo.done = false;
  }

  save()
  {
    // Implement save: Save localstore, database or API
  }

  load()
  {
    // Implement load: load data from localstore, database or API
  }

}
