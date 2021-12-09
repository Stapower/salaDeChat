import { AuthServiceService } from './../services/auth-service.service';
import { Component } from '@angular/core';
import { FirebaseAuth } from '../class/firebase-auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

constructor(public fireAuth: FirebaseAuth) {}

//justBringEntity
ngOnInit() {
    this.fireAuth.justBringEntity("/chat", this.messages);
}

seccion = "";
materia = "PPS";
myEmail = AuthServiceService.usuario;


messages = [];

newMessage;

submitMessage(event){

  console.log(event.key);
  
  if(event.key == "Enter"){
    this.saveMessage();
    console.log(event.key);
  }


}

saveMessage(){
  this.messages.push( {"email": this.myEmail[0], "time": {"seconds" : new Date().getSeconds()}, "message":this.newMessage} );
  var messageAux = this.newMessage.toString();
  this.fireAuth.addChat("/chat"+this.seccion, this.newMessage, this.myEmail[0]).then(response => { this.newMessage = "" }).catch(error => {});
  this.newMessage = "";

}


bubbleStyle = "";
//[ngStyle]="{'font-style': styleExp}"
selectTeam(team){
  this.seccion = team;
  
  if(team == 'A')
    this.bubbleStyle = "{background: rgb(1, 22, 80)}";

  if(team == 'B')
    this.bubbleStyle = "{background: rgb(173, 35, 1)}";

  this.fireAuth.justBringEntity2("/chat"+this.seccion, this.messages);

}



}
