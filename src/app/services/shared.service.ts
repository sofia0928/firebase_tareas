import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { Firestore, addDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  getNotes(){
    let notesColletion = collection(this.fs,'task')
    return collectionData(notesColletion, {idField:'id'})
  }

  addNotes(desc:string){
    let data = {description:desc};
    let notesColletion = collection(this.fs,'task');
    return addDoc(notesColletion, data);

  }

  deleteNotes(id:string){
    let docRef = doc(this.fs, 'task/'+ id)
    return deleteDoc(docRef);
  }
}
