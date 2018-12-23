import { Component, OnInit, ViewChild } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { SettingsService } from "../../services/settings.service";
@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.css"]
})
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    balance: 0,
    phone: ""
  };

  disabledBalanceOnEdit: boolean;
  @ViewChild("clientForm") form: any;
  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private settingService: SettingsService
  ) {}

  ngOnInit() {
    this.disabledBalanceOnEdit = this.settingService.getSettings().disableBalanceOnEdit;
    this.id = this.route.snapshot.params["id"];
    this.clientService
      .getClient(this.id)
      .subscribe(client => (this.client = client));
  }

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    // console.log(value, valid);
    if (!valid) {
      this.flashMessage.show("Please fill form correctly", {
        cssClass: "alert-danger",
        timeout: 4000
      });
    } else {
      // Add id to client
      value.id = this.id;
      //Update the client
      this.clientService.updateClient(value);
      this.flashMessage.show("Client Updated", {
        cssClass: "alert-success",
        timeout: 4000
      });
      this.router.navigate(["/client/" + this.id]);
    }
  }
}
