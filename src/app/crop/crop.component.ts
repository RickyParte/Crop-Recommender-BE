import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent {
  constructor(private http: HttpClient) {}
  result: string | null = null;
  
  onSubmit(formData:NgForm) {
    console.log(formData.value);
    const data = formData.value;
    this.http.post('http://localhost:5000/crops', data).subscribe((response:any) => {
      this.result = response.crop; 
    });
  }
  
}
