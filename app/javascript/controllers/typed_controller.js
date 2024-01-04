import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';
// Connects to data-controller="typed"
export default class extends Controller {
static values ={
  sentences : Array
}

  connect() {
    const option = {strings: this.sentencesValue, typeSpeed: 40};
    new Typed(this.element, option)
  }
}
