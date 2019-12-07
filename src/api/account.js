import HTTPApi from "./httpApi";

class Account {
  login = "";
  password = "";
  name = "";
  mobile = "";
  isValid = false;
  user = null;

  constructor(attributes = {}) {
    this.login = attributes.login;
    this.password = attributes.password;
    this.name = attributes.name;
    this.mobile = attributes.mobile;
  }

  // make sure account is valid
  valdiation() {
    this.isValid = true;

    return "";
  }

  // persist this account to backend and return promise object
  save() {
    return HTTPApi.post();
  }
}

export default Account;
