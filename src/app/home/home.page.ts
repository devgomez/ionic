import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { ModalplacePage } from "../modalplace/modalplace.page";
import { OpentripmapService } from "../services/opentripmap.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  searchForm: FormGroup;
  placesFound: any[];
  cityFound: any;
  countPlacesFound: number = 0;

  array = [1];
  arraySize: number;

  constructor(
    private opentripmapService: OpentripmapService,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      search: new FormControl(),
    });
  }

  async ionViewDidEnter() {
    this.getPlaceSearched({
      search: environment.openTripMap.defaultCity,
    });
  }

  async getPlaceSearched(data: any) {
    if (data.search != null && data.search != "") {
      this.placesFound = null;
      this.countPlacesFound = 0;
      try {
        this.cityFound = await this.opentripmapService.getCityFromSearch(
          data.search
        );
        if (this.cityFound) {
          this.countPlacesFound = await this.opentripmapService.getCountPlacesByLatLon(
            environment.openTripMap.radius,
            this.cityFound.lon,
            this.cityFound.lat,
            environment.openTripMap.rate,
            environment.openTripMap.formatJson
          );
          this.increaseArrayElement(this.countPlacesFound);

          this.placesFound = await this.opentripmapService.getPlacesByLatLon(
            environment.openTripMap.radius,
            this.cityFound.lon,
            this.cityFound.lat,
            environment.openTripMap.rate,
            environment.openTripMap.formatJson
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async showDetailPlace(place: any) {
    const placeSelected = await this.opentripmapService.getDetailPlaceByXid(
      place.xid
    );
    const modal = await this.modalController.create({
      component: ModalplacePage,
      componentProps: {
        placeSelected: placeSelected,
      },
    });
    return await modal.present();
  }

  increaseArrayElement(length: number) {
    this.arraySize = this.array[length - 1];
    this.arraySize += 1;
    this.array.push(this.arraySize);
  }
}
