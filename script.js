window.addEventListener("load", function () {
  let json = [];

  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      json.sort((a, b) => Number(b.hoursInSpace) - Number(a.hoursInSpace));

      const container = document.getElementById("container");

      document.querySelector("h1").innerHTML = `<p>${
        json.length + 1
      } Astronauts</p>`;

      container.innerHTML = "";
      for (let i = 0; i < json.length; i++) {
        container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li id="activeStatus${json[i].id}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
        </div>

         `;
        if (json[i].active === true) {
          document.querySelector(`#activeStatus${json[i].id}`).style.color =
            "green";
        }
      }
    });
  });
});
