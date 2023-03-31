const navLinks = document.querySelectorAll(".navigation-link");
const navA = document.querySelectorAll(".navigation-a");
const navDiv = document.querySelectorAll(".navigation-div");
console.log("hey")
const burgerMenuSelectedRef = document.getElementById(
  "burger-menu-selected-ref"
);
const burgerMenuSelectedText = document.getElementById(
  "burger-menu-selected-text"
);

const burgerBtn = document.getElementById("burger-button");
const burgerPanel = document.getElementById("burger-open-panel");
const burgerIcon = document.getElementById("burger-icon");
const burgerWrap = document.getElementById("burger-wrapper");

const NavigationObject = {
  text: "",
  href: "",
  ref: "",
  id: "",
};

let navigationItems = [];

burgerBtn.addEventListener("click", openBurgerMenu);

function openBurgerMenu() {
  burgerMenuSelectedRef.classList.add("hidden");
  burgerMenuSelectedText.classList.add("hidden");
  burgerPanel.classList.remove("hidden");
  burgerWrap.classList.remove(
    "bg-white/95",
    "shadow-sm",
    "[@supports(backdrop-filter:blur(0))]:bg-white/80",
    "[@supports(backdrop-filter:blur(0))]:backdrop-blur"
  );
  burgerPanel.classList.add(
    "bg-white/95",
    "shadow-sm",
    "[@supports(backdrop-filter:blur(0))]:bg-white/80",
    "[@supports(backdrop-filter:blur(0))]:backdrop-blur"
  );

  burgerMenuSelectedRef.classList.add("hidden");
  burgerMenuSelectedText.classList.add("hidden");
  burgerBtn.classList.add("relative", "z-10")
  burgerPanel.addEventListener("click", closeBurgerMenu);
  burgerBtn.removeEventListener("click", openBurgerMenu);
  burgerIcon.setAttribute("d", "M17 7 7 17M7 7l10 10");
  burgerBtn.addEventListener("click", closeBurgerMenu);
}

function closeBurgerMenu() {
  burgerMenuSelectedRef.classList.remove("hidden");
  burgerMenuSelectedText.classList.remove("hidden");
  burgerPanel.classList.add("hidden");
  burgerIcon.setAttribute("d", "m15 16-3 3-3-3M15 8l-3-3-3 3");
  burgerBtn.classList.remove("relative", "z-10")
  burgerWrap.classList.add(
    "bg-white/95",
    "shadow-sm",
    "[@supports(backdrop-filter:blur(0))]:bg-white/80",
    "[@supports(backdrop-filter:blur(0))]:backdrop-blur"
  );
  burgerPanel.classList.remove(
    "bg-white/95",
    "shadow-sm",
    "[@supports(backdrop-filter:blur(0))]:bg-white/80",
    "[@supports(backdrop-filter:blur(0))]:backdrop-blur"
  );

  burgerBtn.removeEventListener("click", closeBurgerMenu);
  burgerBtn.addEventListener("click", openBurgerMenu);
}

navLinks.forEach((link, index) => {
  const navItem = Object.create(NavigationObject);

  //   console.log(link)

  navItem.text = link.getAttribute("data-text");
  //   console.log(navItem.text)

  navItem.ref = link.getAttribute("data-ref");

  navItem.href = link.getAttribute("data-href");

  navItem.id = link.getAttribute("data-id");

  navItem.positionX = document.getElementById(navItem.id).offsetTop;

  console.log(navItem.positionX)

  navigationItems.push(navItem);
});

window.addEventListener("scroll", getScrollPositions);

function getScrollPositions() {
  for (let i = 0; i < navigationItems.length; i++) {
    if (window.scrollY + 250 >= navigationItems[i].positionX) {
      document.querySelectorAll("[data-href]").forEach((item) => {
        if (item.getAttribute("data-href") == navigationItems[i].href) {
          item.classList.add("border-blue-600", "bg-rose-100", "text-rose-700");
          item.classList.remove("text-slate-500/70");

          //   console.log(navigationItems)
          burgerMenuSelectedRef.textContent = navigationItems[i].ref;
          burgerMenuSelectedText.textContent = navigationItems[i].text;

          navLinks.forEach((link) => {
            link.setAttribute("data-selected", "");

            if (link.getAttribute("data-href") == navigationItems[i].href) {
              link.setAttribute("data-selected", "selected");
            }
          });
        } else {
          item.classList.remove(
            "border-blue-600",
            "bg-rose-100",
            "text-rose-700"
          );
          item.classList.add("text-slate-500/70");
        }
      });
    }
  }
}
