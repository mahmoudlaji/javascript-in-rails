import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  
    static targets = ["items", "form"]

    
    send(event) {
      event.preventDefault();
    
      fetch(this.formTarget.action, {
        method: "POST", // Could be dynamic with Stimulus values
        headers: { "Accept": "application/json" },
        body: new FormData(this.formTarget)
      })
        .then(response => response.json())
        .then((data) => {
          console.log(data)
        })
    }
}
