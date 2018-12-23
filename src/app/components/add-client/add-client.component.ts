import { Component, OnInit, ViewChild } from "@angular/core";
import { Client } from "../../models/Client";
import { FlashMessagesService } from "angular2-flash-messages";
import { ClientService } from "../../services/client.service";
import { Router } from "@angular/router";
import { SettingsService } from "../../services/settings.service";
@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.css"]
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    balance: 0,
    phone: ""
  };

  disableBalanceOnAdd: boolean;
  @ViewChild("clientForm") form: any;
  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private settingService: SettingsService
  ) {}

  ngOnInit() {
    this.disableBalanceOnAdd = this.settingService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    console.log(value, valid);
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if (!valid) {
      //Show error
      this.flashMessage.show("Please fill the form correctly", {
        cssClass: "alert-danger",
        timeout: 4000
      });
    } else {
      //Add ewn clint

      this.clientService.newClient(value);
      //Show message
      this.flashMessage.show("New Client Added", {
        cssClass: "alert-success",
        timeout: 4000
      });
      this.router.navigate(["/"]);
    }
  }
}
