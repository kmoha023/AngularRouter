import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    /*
    * RelativeTo takes which path should be considered to append servers .
    * will not work with relativeTo because it will look for servers/servers
    * */
    // this.router.navigate(['servers'], {relativeTo: this.route});

    /* servers or /servers work here because unlike routerLink, navigate doesnt know what is the
     * current path.
    */
     this.router.navigate(['servers']);
    
  }

}
