import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarvelPage } from '../marvel/marvel';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
  pushPage = MarvelPage;
  im: boolean = false;
  ca: boolean = false;
  hulk: boolean = false;
  bw: boolean = false;

  constructor(public navCtrl: NavController) {
    
  }

  changeim(){
    if(this.im){
      this.ca=false;
      this.bw=false;
      this.hulk=false;
    }
  }
  changeca(){
    if(this.ca){
      this.im=false;
      this.bw=false;
      this.hulk=false;
    }
  
  }
  changehulk(){
    if(this.hulk){
      this.im=false;
      this.bw=false;
      this.ca=false;
    }
  
  }
  changebw(){
    if(this.bw){
      this.im=false;
      this.hulk=false;
      this.ca=false;
    }

  }
  navigate(){
    if (this.im){
      this.navCtrl.push(MarvelPage, {
        character: "Iron Man",
        images: "iman.png",
        description: "A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward Tony Stark suffers a severe chest injury during a kidnapping in which his captors attempt to force him to build a weapon of mass destruction. He instead creates a powered suit of armor to save his life and escape captivity. Later, Stark augments his suit with weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man, while at first concealing his true identity",
      })
    }
    else if(this.ca){
      this.navCtrl.push(MarvelPage, {
        character: "Captain America",
        images: "cam.png",
        description: "Frail, sickly young man who is enhanced to the peak of human ability by an experimental serum in order to aid the United States war effort. Evans, who previously worked with Marvel as the Human Torch in the Fantastic Four film series, said he declined the part three times before signing a six-picture deal with Marvel, explaining that, At the time, I remember telling a buddy of mine, 'If the movie bombs. If the movie hits. I was just scared. I realized my whole decision-making process was fear-based, and you never want to make a decision out of fear. I can't believe I was almost too chicken to play Captain America.Evans ultimately agreed to the role, saying, I think Marvel is doing a lot of good things right now, and its a fun character. ... I think the story of Steve Rogers is great. "
      })
    }
    else if(this.hulk){
      this.navCtrl.push(MarvelPage, {
        character: "The Incredible Hulk",
        images: "incred.png",
        description: "During the experimental detonation of a gamma bomb, scientist Robert Bruce Banner saves teenager Rick Jones who has driven onto the testing field; Banner pushes Jones into a trench to save him, but is hit with the blast, absorbing massive amounts of gamma radiation. He awakens later seemingly unscathed, but that night transforms into a lumbering grey form. A pursuing soldier dubs the creature a hulk.Originally, it was believed that Banner transformations into the Hulk were caused by sunset and undone at sunrise, but later, after Rick witnessed Banner turn into Hulk at daytime following a failed attempt by Ross' men to shoot the Hulk into space, it was discovered to be caused by anger. Banner was cured in The Incredible Hulk #4, but chose to restore Hulk's powers with Banner's intelligence. The gamma-ray machine needed to affect the transformation-induced side effects that made Banner temporarily sick and weak when returned to his normal state."
      })
    }
    else if(this.bw){
      this.navCtrl.push(MarvelPage, {
        character: "Black Widow",
        images: "black.png",
        description: "Natasha was born in Stalingrad (now Volgograd), Russia. The first and best-known Black Widow is a Russian agent trained as a spy, martial artist, and sniper, and outfitted with an arsenal of high-tech weaponry, including a pair of wrist-mounted energy weapons dubbed her Widow's Bite. She wears no costume during her first few appearances but simply evening wear and a veil. Romanova eventually defects to the U.S. for reasons that include her love for the reluctant-criminal turned superhero archer, Hawkeye."
      })
    }
    else{
      this.navCtrl.push(MarvelPage, {
        character: "None",
        images: "none.png",
        description: "None of the character of the list Selected. Please select a Marvel Character from the list"
      })
      
    }
  }


}
