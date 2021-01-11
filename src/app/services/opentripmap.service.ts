import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class OpentripmapService {
  endpointSearchCity = "geoname?name=";
  endpointGetByLatLon = "radius?";
  endpointDetailPlaceByXid = "xid/";
  constructor() {}

  async getCityFromSearch(city: string) {
    const url =
      environment.openTripMap.baseUrl +
      this.endpointSearchCity +
      city +
      "&" +
      environment.openTripMap.apikey;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getPlacesByLatLon(
    radius: string,
    lon: string,
    lat: string,
    rate: string,
    format: string
  ) {
    const url =
      environment.openTripMap.baseUrl +
      this.endpointGetByLatLon +
      "radius=" +
      radius +
      "&lon=" +
      lon +
      "&lat=" +
      lat +
      "&rate=" +
      rate +
      "&format=" +
      format +
      "&" +
      environment.openTripMap.apikey;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getCountPlacesByLatLon(
    radius: string,
    lon: string,
    lat: string,
    rate: string,
    format: string
  ) {
    const url =
      environment.openTripMap.baseUrl +
      this.endpointGetByLatLon +
      "radius=" +
      radius +
      "&lon=" +
      lon +
      "&lat=" +
      lat +
      "&rate=" +
      rate +
      "&format=" +
      format +
      "&" +
      environment.openTripMap.apikey;
    const response = await fetch(url);
    const data = await response.json();
    return data.length;
  }

  async getDetailPlaceByXid(xid: string) {
    const url =
      environment.openTripMap.baseUrl +
      this.endpointDetailPlaceByXid +
      xid +
      "?" +
      environment.openTripMap.apikey;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
