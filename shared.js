let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanBtns = document.querySelectorAll(".plan button");
let modalBtns = document.querySelectorAll(".modal button");
let btnToggle = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

eventAdder = (ele, displayProp, eventType, displayPropReceiver) => {
  if (NodeList.prototype.isPrototypeOf(ele)) {
    ele.forEach(btn => {
      btn.addEventListener(eventType, () => {
        applyDisplayProp(displayPropReceiver, displayProp);
      });
    });
    return;
  }
  ele.addEventListener(eventType, () =>
    applyDisplayProp(displayPropReceiver, displayProp)
  );
};

applyDisplayProp = (displayPropReceiver, displayProp) => {
  displayPropReceiver.forEach(ele => {
    ele.style.display = displayProp;
  });
};

eventAdder(btnToggle, "block", "click", [mobileNav, backdrop]);
eventAdder(backdrop, "none", "click", [backdrop, mobileNav]);
if (selectPlanBtns) {
  eventAdder(selectPlanBtns, "block", "click", [modal, backdrop]);
}

if (modalBtns) {
  eventAdder(modalBtns, "none", "click", [backdrop]);
}
