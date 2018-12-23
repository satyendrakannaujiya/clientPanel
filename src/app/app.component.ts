import { Component } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
interface client {
  firstName: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor(private afs: AngularFirestore) {
    // console.log("within app.components constructor");
    // var collection = this.afs.collection('clients').valueChanges();
    // collection.subscribe((item)=>{
    // 	  //  console.log("Items" + item);
    // 	   // return ""
    // })
  }
}
