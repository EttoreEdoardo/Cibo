import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  //@ts-ignore
  food: Data = {};
  productList!: any[];
  //https://world.openfoodfacts.org/api/v0/product/;
  //https://world.openfoodfacts.org/cgi/search.pl?search_terms&search_simple=1&action=process
                  
  searchText: string = "";

  constructor(private route: ActivatedRoute, public http: HttpClient){ }

  getRouterParam = (params: ParamMap) =>
  {    
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
  }

  getId = (a: string) => {
    const url = "https://world.openfoodfacts.org/api/v0/product/"
    if (a != "") {
      url + a;
    } else {
      this.route.paramMap.subscribe(this.getRouterParam);
    }
  }  

  searchProduct() {
    if (this.searchText && this.searchText.length > 0) {
      this.http.get(`https:world.openfoodfacts.org/cgi/search.pl?{{search_terms}}&search_simple=1&action=process`)
        .subscribe((response: any) => {
          this.productList = response.data;
          console.log(this.productList);
          
        })
    } else {
      this.productList = []; 
    }
  }
}
