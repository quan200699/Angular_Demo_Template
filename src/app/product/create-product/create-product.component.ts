import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = {};
  products: Product[] = [];

  constructor() {
  }

  ngOnInit() {
    $(function() {
      $('.select2').select2();
    });
  }

  addNewProduct() {
    this.product.category = $('.select2').val();
    this.products.push(this.product);
    $(function() {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      Toast.fire({
        type: 'success',
        title: 'Tạo mới thành công!'
      });
    });
  }
}
