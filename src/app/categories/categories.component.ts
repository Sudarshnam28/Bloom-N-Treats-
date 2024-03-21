import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
 products$:Observable<any>;
constructor(private prodService:ProductsService){
this.products$=this.prodService.getCategory().pipe(
  map((item:any)=>{
    return item;
  })
);
}

onEdit(categoryId: any): void {
  const updatedCategory = {}; // Define your updatedCategory object here
  this.prodService.updateCategory(categoryId, updatedCategory).subscribe(
    (res: any) => {
      console.log('Category updated successfully:', res);
    },
    (error: any) => {
      console.error('Error updating category:', error);
    }
  );
}


}
