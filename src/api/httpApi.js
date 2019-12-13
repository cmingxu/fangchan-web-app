import CONFIG from "../config";
import queryString from "query-string";

class HTTPApi {
  static pathWithQuery(path, query) {
    if (query) {
      return (
        CONFIG.baseURI +
        path +
        "?" +
        queryString.stringify(query, { arrayFormat: "bracket" })
      );
    } else {
      return CONFIG.baseURI + path;
    }
  }

  static default_headers(headers = {}) {
    let default_headers = {
      "Content-Type": "application/json",
      Token: CONFIG.accountToken
    };

    // if (User.current_user) {
    //   headers.Token = User.current_user.token;
    // }
    return Object.assign(default_headers, headers);
  }

  static handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  static get(path, option = null) {
    let query = option ? option.query : {};
    let headers = option ? option.headers : {};
    return fetch(HTTPApi.pathWithQuery(path, query), {
      method: "GET",
      headers: HTTPApi.default_headers(headers)
    })
      .then(this.handleErrors)
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }

  static post(path, option, body) {
    let query = option ? option.query : {};
    let headers = option ? option.headers : {};
    return fetch(HTTPApi.pathWithQuery(path, query), {
      method: "POST",
      headers: HTTPApi.default_headers(headers),
      body: JSON.stringify(body)
    })
      .then(this.handleErrors)
      .then(response => response.json())
      .catch(err => {
        console.log(err);
      });
  }
}

export default HTTPApi;
