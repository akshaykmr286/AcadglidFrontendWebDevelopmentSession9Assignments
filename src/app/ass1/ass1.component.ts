import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CricketerService } from '../services/cricketer.service';
import { CriketerDropDownService } from '../services/criketer-drop-down.service';
import { ICricketList, ICricketerModel } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-ass1',
  templateUrl: './ass1.component.html',
  styleUrls: ['./ass1.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [CricketerService,CriketerDropDownService]
})
export class Ass1Component implements OnInit {

   /**Public variable */
  cricketersArray: ICricketList[] = [];
  playerType: IPlayerType[] = [];

  cricketerModel: ICricketerModel;
  cricketerDetail: ICricketList;

  constructor(private router:Router,private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService) { }
  
  ngOnInit() { 
    /**Define default values */
    this.cricketerModel = {
      firstName: '',
      lastName: '',
      favShot: '',
      playerType: ''
    };
    this.playerType = this._cricketerDropDown.getPlayerType();
  }
/**Add a cricket */
  addCriketer(values) {
    
    this.cricketerDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      favShot: values.favShot,
      batsmanBowler: values.playerType
    };
    // /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);

    this.cricketersArray = this._cricketService.getCricket();
  };

}
