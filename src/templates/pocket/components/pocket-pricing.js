function initPocketPricing() {
  let currentChecked;

  const priceTags = document.querySelectorAll("[data-subscription-price]");

  // workaround for removing event listeners from element by cloning and replacing the element to avoid duplication of event listeners
  const subscriptionFilterBtns = document.querySelectorAll("[data-subscription-filter]");
  const subscriptionFilterBtnClones = Array.from(subscriptionFilterBtns).map(element => element.cloneNode(true));
  subscriptionFilterBtns.forEach((element, index) => element.parentNode.replaceChild(subscriptionFilterBtnClones[index], subscriptionFilterBtns[index]));

  subscriptionFilterBtnClones.forEach(btn => {
    const btnType = btn.dataset.subscriptionFilter;
    btn.addEventListener("click", (e) => {
      if (e.target.dataset.subscriptionFilter === btnType) { updateSubscriptions(btnType) }
    });
  });

  // swap between monthly and annually
  function updateSubscriptions(type) {
    type !== currentChecked
    if (type !== currentChecked) {
      currentChecked = type;

      styleBtn(currentChecked);

      switch (currentChecked) {
        case "monthly":
          priceTags.forEach(element => element.textContent = element.dataset.monthly);
          break;

        case "annually":
          priceTags.forEach(element => element.textContent = element.dataset.annually);
          break;
      };
    };
  };

  function styleBtn(currentChecked) {
    const activeBtn = subscriptionFilterBtnClones.filter(element => element.dataset.subscriptionFilter === currentChecked)[0];
    const inactiveBtn = subscriptionFilterBtnClones.filter(element => element.dataset.subscriptionFilter !== currentChecked)[0];

    activeBtn.querySelector("input").checked = true;

    activeBtn.classList.add("before:scale-x-100");
    activeBtn.classList.remove("before:scale-x-0");
    activeBtn.querySelector("span").classList.add("text-zinc-100");
    activeBtn.querySelector("span").classList.remove("text-zinc-700");

    inactiveBtn.classList.add("before:scale-x-0");
    inactiveBtn.classList.remove("before:scale-x-100");
    inactiveBtn.querySelector("span").classList.add("text-zinc-700");
    inactiveBtn.querySelector("span").classList.remove("text-zinc-100");
  }

  updateSubscriptions("monthly");
};

const pocketPricingSrc = document.currentScript?.src ?? null;

if (pocketPricingSrc) {
  togafy.module.registerScripts(pocketPricingSrc, (event) => {
    try {
      initPocketPricing();
    } catch (err) {
      console.log(err)
    }
  });
} else {
  console.error('Couldnt register script!', pocketPricingSrc);
};