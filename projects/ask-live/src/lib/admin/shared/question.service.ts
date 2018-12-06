import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../../shared/model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private db: AngularFirestore) { }

  get(): Observable<Question[]> {
    return this.db.collection<Question>('questions').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Question;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }

  create(): void {

  }

  delete(questionId: string) {
    this.db.doc('questions/' + questionId).delete();
  }

  edit(question: Question) {

  }
}
