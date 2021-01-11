import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor() {}

  async signUp(userToRegister: any) {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(userToRegister),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const response = await fetch(environment.authUserApi.baseUrl, options);
      console.log("response");
      let data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
