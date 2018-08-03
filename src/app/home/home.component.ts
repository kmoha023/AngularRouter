import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params)=>{
      
    })
  }

  onLoadServer(id:number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit:'1'}, fragment:"loading"});
  }
}
