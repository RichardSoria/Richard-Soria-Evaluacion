import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FormService, Form } from '../services/form.service';
import { NgIf, NgFor, CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule, FormsModule,
  ],
})
export class HomePage {
  newName: string = '';
  newLastName: string = '';
  newAge: number = 0;
  newGender: string = '';
  newEmail: string = '';
  newPhone: string = '';
  newAddress: string = '';
  newCedula: string = '';
  newBirthDate: string = '';
  newCareer: string = '';

  constructor(private FormService: FormService) { }

  createForm() {
    if (this.newName.trim() === '' || this.newLastName.trim() === '' || this.newAge <= 0 || this.newGender.trim() === '' || this.newEmail.trim() === '' || this.newPhone.trim() === '' || this.newAddress.trim() === '' || this.newCedula.trim() === '' || this.newBirthDate.trim()  === '' || this.newCareer.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
    this.FormService.createForm(this.newName, this.newLastName, this.newAge, this.newGender, this.newEmail, this.newPhone, this.newAddress, this.newCedula, this.newBirthDate, this.newCareer)
      .then(() => {
        alert('Formulario creado con éxito');
        // this.clearForm();
      })
      .catch((error) => {
        console.error('Error al crear el formulario: ', error);
      });
  }
}


