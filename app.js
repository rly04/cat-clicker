const clicker = document.getElementById("clicker");
const sticks = document.getElementById("sticks");
const dreamies = document.getElementById("dreamies");
const steak = document.getElementById("steak");
const catsSpan = document.getElementById("catsSpan");
const cpsSpan = document.getElementById("cpsSpan");
document.getElementById("reset").addEventListener("click", resetGameProgress);

const stats = {
  catCount: 0,
  cps: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.catCount = storageStats.catCount;
  stats.cps = storageStats.cps;
  updatePage();
}

function buyCat() {
  stats.catCount++;
  updatePage();
  updateStorage();
}

let sticksCost = 10;

function buyUpgradeSticks() {
  if (stats.catCount >= 10) {
    stats.cps++;
    stats.catCount -= sticksCost;
    updatePage();
    updateStorage();
  } else {
    alert("You need more cats for this upgrade! XD");
  }
}

let dreamiesCost = 200;

function buyUpgradeDreamies() {
  if (stats.catCount >= 200) {
    stats.cps += 50;
    stats.catCount -= dreamiesCost;
    updatePage();
    updateStorage();
  } else {
    alert("You need more cats for this upgrade! XD");
  }
}

let steakCost = 1000;

function buyUpgradeSteak() {
  if (stats.catCount >= 1000) {
    stats.cps += 250;
    stats.catCount -= steakCost;
    updatePage();
    updateStorage();
  } else {
    alert("You need more cats for this upgrade! XD");
  }
}

function updatePage() {
  catsSpan.textContent = stats.catCount;
  cpsSpan.textContent = stats.cps;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

clicker.addEventListener("click", buyCat);
sticks.addEventListener("click", buyUpgradeSticks);
dreamies.addEventListener("click", buyUpgradeDreamies);
steak.addEventListener("click", buyUpgradeSteak);

setInterval(function () {
  stats.catCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);

let play = function () {
  document.getElementById("meow").play();
};

function resetGameProgress() {
  stats.catCount = 0;
  stats.cps = 0;
  stats.upgrades = 0;
  upgradeCount = 0;
  localStorage.removeItem("stats");
  updatePage();
}
