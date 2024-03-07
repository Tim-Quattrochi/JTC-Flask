if (window.location.pathname === "/football") {
  const btn = document.createElement("button");
  btn.innerText = "See my favorite NFL team!";
  btn.style.width = "120px";
  btn.style.height = "40px";
  btn.style.margin = "0 auto";
  btn.style.cursor = "pointer";
  btn.style.backgroundColor = "#000080";
  btn.style.color = "white";
  btn.style.borderRadius = "5px";
  btn.style.display = "block";
  document.body.append(btn);

  btn.addEventListener("click", fetchFootballTeam);
}

const renderData = (data) => {
  const { team } = data;
  const { displayName } = team;

  const img = document.createElement("img");
  img.src = team.logos[0].href;
  img.style.width = team.logos[0].width;
  img.classList.add("logo");
  document.body.append(img);
  const h1 = document.createElement("h1");
  h1.innerText = displayName;
  document.body.append(h1);
};

const renderStats = (data) => {
  const { team } = data;
  for (const stat of team.record.items[0].stats) {
    //render the status in a table
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.innerText = stat.name;
    tr.append(th);
    const td = document.createElement("td");
    td.innerText = stat.value;
    tr.append(td);
    table.append(tr);
    document.body.append(table);
  }
};

async function fetchFootballTeam() {
  const res = await fetch(
    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/3"
  );
  if (res.status !== 200) {
    throw new Error("something went wrong with our 3rd party API");
  }

  const data = await res.json();

  renderData(data);
  renderStats(data);
}
