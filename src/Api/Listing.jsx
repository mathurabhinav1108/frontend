import { Component } from "react";
import Api from "./Api";

class Listing extends Component {
  async login(data) {
    return Api.post("/user/login", data);
  }

  async Numbersgenerate(data) {
    return Api.get("/random-numbers", data);
  }

  async numbersGet(data) {
    return Api.get("/get-random-numbers", data);
  }

  async Rowsget(data) {
    return Api.get("/rows", data);
  }

  async RowsAdd(data) {
    return Api.post("/rows", data);
  }

  async RowsUpdate(Id, data) {
    return Api.put(`/rows/${Id}`, data);
  }

  async RowsDelete(data) {
    return Api.delete(`/rows/${data}`);
  }

  async SessionsGet(data) {
    return Api.get("/sessions", data);
  } 
  
  async Backup(data) {
    return Api.get("/restore-backup", data);
  }
  
  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default Listing;