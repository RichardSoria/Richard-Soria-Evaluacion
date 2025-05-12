import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, orderBy } from '@angular/fire/firestore';

export interface Form {
  name: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  cedula: string;
  birthDate: string;
  career: string;
}

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private firestore: Firestore) { }

  createForm(name: string,
    lastName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    address: string,
    cedula: string,
    birthDate: string,
    career: string) {
    const formRef = collection(this.firestore, 'forms');
    const form: Form = {
      name,
      lastName,
      age,
      gender,
      email,
      phone,
      address,
      cedula,
      birthDate,
      career
    }
    return addDoc(formRef, form);
  }

  }
