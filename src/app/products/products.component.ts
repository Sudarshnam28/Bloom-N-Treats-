import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  categoryList:any[]=[];
  productList:any[]=[]
  ngOnInit(): void {
    // this.prodService.getAllProducts().subscribe((data:any)=>{
    //   this.products=data;
    //   console.log(data);
    // })
    this.getAllCategories();
    this.getAllProducts();
  }
  isSidePanelVisible:boolean=false;
  productObj:any={
    "productId":0,
    "productName":"",
    "productPrice":0,
    "productDescription":"",
    "createdDate":new Date(),
    "deliveryTimeSpan":"",
    "categoryId":0,
    "categoryName":"",
    "productImageUrl":""
  }
  getAllCategories() {
    this.prodService.getCategory().subscribe((res: any) => {
      if (res) {
        this.categoryList = res;
      } else {
        console.error('Response is null or undefined');
      }
    });
  }
  
  getAllProducts() {
    this.prodService.getProducts().subscribe((res: any) => {
      if (res) {
        this.productList = res;
      } else {
        console.error('Response is null or undefined');
      }
    });
  }
  
  constructor(private prodService:ProductsService){

  }
  onSave(){
    this.prodService.saveProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res){
        alert("product created");
        this.getAllProducts();
      }else{
        alert(res.message);
      }
    })
  }
  onEdit(item:any){
this.productObj=item;
this.openSidePanel();
  }
  onDelete(item:any){
const isDelete=confirm('Are you sure you want to delete?');
if(isDelete){
  this.prodService.deleteProduct(item.productId).subscribe((res:any)=>{
    debugger;
    if(res){
      alert("product deleted");
      this.getAllProducts();
    }else{
      alert(res.message);
    }
  })
}
  }

  onUpdate(){
    this.prodService.updateProduct(this.productObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("product updated");
        this.getAllProducts();
      }else{
        alert(res.message);
      }
    })
  }

  openSidePanel(){
this.isSidePanelVisible=true;
  }
closeSidePanel(){
  this.isSidePanelVisible=false;
}
}
