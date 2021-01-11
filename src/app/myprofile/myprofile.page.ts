import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-myprofile",
  templateUrl: "./myprofile.page.html",
  styleUrls: ["./myprofile.page.scss"],
})
export class MyprofilePage {
  photo: SafeResourceUrl;
  user: any = {};
  urlAvatarDefaultImage = environment.urlAvatarDefaultImage;
  constructor(private sanitizer: DomSanitizer, private storage: Storage) {}
  ionViewDidEnter() {
    this.getUserData();
  }

  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    if (image) {
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
    }
  }
  async getUserData() {
    this.user = await this.storage.get("userData");
  }
}
