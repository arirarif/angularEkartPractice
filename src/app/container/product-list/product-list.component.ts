import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      "id": 1,
      "name": "Nike React Infinity Run Flyknit",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "NIKE",
      "gender": "MEN",
      "category": "RUNNING",
      "size": [6, 7, 8, 9, 10],
      "color": ["White", "Blue", "Black"],
      "price": 160,
      "discountPrice": 140,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "nike-react-infinity-run-flyknit"
    },{
      "id": 2,
      "name": "Adidas Solarboost 3",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "ADIDAS",
      "gender": "WOMEN",
      "category": "RUNNING",
      "size": [6, 7, 8, 9],
      "color": ["Blue", "Gray", "White"],
      "price": 160,
      "discountPrice": 140,
      "is_in_inventory": true,
      "items_left": 7,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "adidas-solarboost-3"
    },
    {
      "id": 3,
      "name": "Brooks Ghost 14",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "BROOKS",
      "gender": "UNISEX",
      "category": "RUNNING",
      "size": [7, 8, 9, 10],
      "color": ["Black", "Red", "Gray"],
      "price": 150,
      "discountPrice": 140,
      "is_in_inventory": true,
      "items_left": 5,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "brooks-ghost-14"
    },
    {
      "id": 4,
      "name": "New Balance Fresh Foam 1080v11",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "NEW BALANCE",
      "gender": "MEN",
      "category": "RUNNING",
      "size": [8, 9, 10, 11],
      "color": ["Black", "Green", "Yellow"],
      "price": 150,
      "discountPrice": 140,
      "is_in_inventory": true,
      "items_left": 9,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "new-balance-fresh-foam-1080v11"
    },
    {
      "id": 5,
      "name": "Saucony Ride 14",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "SAUCONY",
      "gender": "WOMEN",
      "category": "RUNNING",
      "size": [6, 7, 8, 9],
      "color": ["Purple", "Gray", "White"],
      "price": 130,
      "discountPrice": 140,
      "is_in_inventory": false,
      "items_left": 6,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "saucony-ride-14"
    },
    {
      "id": 6,
      "name": "Asics Gel-Nimbus 23",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "ASICS",
      "gender": "WOMEN",
      "category": "RUNNING",
      "size": [6, 7, 8],
      "color": ["Pink", "Blue", "Black"],
      "price": 160,
      "is_in_inventory": false,
      "items_left": 4,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "asics-gel-nimbus-23"
    },
    {
      "id": 7,
      "name": "Hoka One One Clifton 8",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "HOKA ONE ONE",
      "gender": "MEN",
      "category": "RUNNING",
      "size": [7, 8, 9],
      "color": ["Blue", "Gray", "White"],
      "price": 150,
      "is_in_inventory": false,
      "items_left": 8,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "hoka-one-one-clifton-8"
    },
    {
      "id": 8,
      "name": "Mizuno Wave Rider 24",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "MIZUNO",
      "gender": "UNISEX",
      "category": "RUNNING",
      "size": [8, 9, 10],
      "color": ["Black", "Yellow", "Red"],
      "price": 140,
      "is_in_inventory": true,
      "items_left": 10,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "mizuno-wave-rider-24"
    },
    {
      "id": 9,
      "name": "Under Armour HOVR Machina 2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "UNDER ARMOUR",
      "gender": "WOMEN",
      "category": "RUNNING",
      "size": [6, 7, 8, 9],
      "color": ["Black", "Pink", "Gray"],
      "price": 150,
      "is_in_inventory": false,
      "items_left": 6,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "under-armour-hovr-machina-2"
    },
    {
      "id": 10,
      "name": "Salomon Speedcross 5 GTX",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "SALOMON",
      "gender": "MEN",
      "category": "RUNNING",
      "size": [7, 8, 9],
      "color": ["Black", "Yellow", "Green"],
      "price": 170,
      "is_in_inventory": true,
      "items_left": 5,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "salomon-speedcross-5-gtx"
    },
    {
      "id": 11,
      "name": "Reebok Forever Floatride Energy 2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "REEBOK",
      "gender": "WOMEN",
      "category": "RUNNING",
      "size": [6, 7, 8],
      "color": ["Purple", "Gray", "White"],
      "price": 100,
      "is_in_inventory": true,
      "items_left": 7,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "reebok-forever-floatride-energy-2"
    },
    {
      "id": 12,
      "name": "Nike Air Zoom Pegasus 38",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "NIKE",
      "gender": "MEN",
      "category": "RUNNING",
      "size": [8, 9, 10],
      "color": ["Blue", "Black", "Gray"],
      "price": 120,
      "is_in_inventory": true,
      "items_left": 4,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "nike-air-zoom-pegasus-38"
    },
    {
      "id": 13,
      "name": "Adidas Ultraboost 21",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind...",
      "brand": "ADIDAS",
      "gender": "WOMEN",
      "category": "RUNNING",
      "size": [6, 7, 8, 9],
      "color": ["Pink", "Gray", "White"],
      "price": 180,
      "is_in_inventory": true,
      "items_left": 9,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i-665455a5-45de-40fb-945f-c1852b82480d/nike-react-infinity-run-flyknit",
      "slug": "adidas-ultraboost-21"
    }
    
  ];

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter( p => p.is_in_inventory === true ).length;
  totalProductOutStock = this.products.filter( p => p.is_in_inventory === false ).length;


  @Input()
  searchText: string = '';


selectedFilterRadioButton : string = 'all';

  onFilterChange(value : string){    
    this.selectedFilterRadioButton = value
  }
}
