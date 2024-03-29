let button = document.getElementById("btn").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();
  // Open

  xhr.open("GET", "data.txt", true);

  xhr.onload = function() {
    console.log("Readystate:", xhr.readyState);
    if (this.status == 200 && this.readyState === 4) {
      //   console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<p>${this.responseText}</p>`;
    }
  };

  // older version
  //   xhr.onreadystatechange = function() {
  //     console.log("Readystate:", xhr.readyState);
  //     if (this.status == 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  //status values
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not found"

  xhr.onerror = function() {
    console.log("Request error...");
  };

  xhr.send();
}
