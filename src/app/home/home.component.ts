import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name="Sois";
  public age= 10;
  public fruit = ['apple', 'banana', 'pear', 'orange']
  public fruitAll=[
    {name:'apple', price:5.0,downPrice:true},
    {name:'pear', price:4.0, downPrice:false},
    {name:'banana', price:3.0, downPrice:true},
    {name:'organe', price:-4.5,downPrice:false }
  ]

  public cities = [
    {city:'Chọn thành phố', district:[]},
    {city:'An Giang', district:["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]},
    {city:'Bà Rịa - Vũng Tàu', district:["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]},
    {city:'Bình Dương', district:["Thành phố Thủ Dầu Một","Thị xã Bến Cát","Thị xã Tân Uyên","Huyện Bắc Tân Uyên","Huyện Dầu Tiếng","Huyện Dĩ An","Huyện Phú Giáo","Huyện Tân Uyên","Huyện Thuận An"]},

  ];
  public districts : string[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('cities = ', this.cities)
  }

  public resetName(){
    this.name='';
    console.log('resetName')
  }

  public changeCity(event: any){
    const city = event.target.value;
    console.log('', event.target.value)
    // cách 1
    const search = this.cities.filter((data) =>data.city===city)
    if(search && search.length>0){
      this.districts=search[0].district;
    }
    // cách 2
    // this.districts=this.cities.find(data =>data.city === city)?.district || [];
  } 
}
