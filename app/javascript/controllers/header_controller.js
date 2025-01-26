import { Controller } from "@hotwired/stimulus";
import { toggle } from "el-transition";

export default class extends Controller {
  static targets = ["dropdownMenu"]

  connect() {
    console.log('header connected');
  }

  toggleMenu(e) {
    toggle(this.dropdownMenuTarget);
  }
}
