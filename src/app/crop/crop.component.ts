import { Component } from '@angular/core';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent {
  result: string | null = null;

  onSubmit() {
    this.result = "Rice"; 
  }
}
