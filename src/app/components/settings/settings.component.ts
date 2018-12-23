import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { SettingsService } from "../../services/settings.service";
import { Settings } from "../../models/Settings";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private settingsServie: SettingsService
  ) {}

  ngOnInit() {
    this.settings = this.settingsServie.getSettings();
  }
  onSubmit() {
    this.settingsServie.changeSettings(this.settings);
    this.flashMessage.show("settings saved ", {
      cssClass: "alert-success",
      timeout: 4000
    });
  }
}
