import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { Region } from '../../models/region';
import { Nation } from '../../models/nationindetail';
import { NationsService } from '../../services/nations.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  region_name: string;
  region_description: string;
  nations: Nation[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nationService: NationsService) { }

  ngOnInit(): void {

    let region_id = this.route.snapshot.params["region_id"];


    // this.router.events.subscribe(event => {
    //   if(event instanceof NavigationStart) {
    //     const region_id = event.url.split("/").pop();   
             
        this.nationService.getRegion(region_id).subscribe( data => {
          this.region_name = data ["region_name"];
          this.region_description = data ["region_description"];
        });
        this.nationService.getNationsByRegion(region_id).subscribe( data => {
          this.nations = data;
        console.log(this.nations);
        });
  //     }
  //   })
  //   const region_id = this.route.snapshot.paramMap.get("code");
  //   this.nationService.getRegion(region_id).subscribe( data => this.region = data);
  //   this.nationService.getNationsByRegion(region_id).subscribe( data => this.nations = data);
  }
}


