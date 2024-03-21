import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  
  constructor(private toastr: ToastrService,private router:Router) {}

  showSuccess() {
    this.toastr.success('This is a success message!', 'Success');
  }
  showError() {
    this.toastr.error('This is a Error message!', 'Error');
  }
  showWarning() {
    this.toastr.warning('This is a Warning message!', 'Warning');
  }
  showInfo() {
    this.toastr.info('This is a Info message!', 'Info');
  }
}
