import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results = []

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSearch(searchValue) {
   this.apiService.getGifs(searchValue.value).subscribe(data=>this.results=data);
  }
}
