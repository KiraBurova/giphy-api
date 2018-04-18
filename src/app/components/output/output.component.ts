import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

import {Gif} from '../../models/gif';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent  {
  gifs: Gif[];

  constructor(private apiService: ApiService){
    apiService.getResults$().subscribe((data) => this.gifs = data);
}
}
