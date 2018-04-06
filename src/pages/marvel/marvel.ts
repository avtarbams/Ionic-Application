import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MarvelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marvel',
  templateUrl: 'marvel.html',
  
})
export class MarvelPage {
  public charName;
  public image;
  public desc;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charName = navParams.get("character");
    this.image = navParams.get("images");
    this.desc = navParams.get("description");
  }


  ionViewDidLoad() {
    
  }

}
