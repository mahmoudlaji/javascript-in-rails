import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  
    static targets = ["items", "form"]

    
    send(event) {
      // [...]
    
      fetch(this.formTarget.action, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(this.formTarget)
      })
        .then(response => response.json())
        .then((data) => {
          if (data.inserted_item) {
            // beforeend could also be dynamic with Stimulus values
            this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)
          }
          this.formTarget.outerHTML = data.form
        })
    }
    
}
