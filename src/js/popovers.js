export class Popovers {
  constructor(popovers) {
    this.popovers = popovers;
  }

  onButton(e) {
    e.preventDefault();
    const popovers = this.popovers.querySelector(".popovers");
    if (popovers.classList.contains("active")) {
      popovers.classList.remove("active");
    } else {
      popovers.classList.add("active");
    }
  }

  bind() {
    const button = this.popovers.querySelector(".btn");
    button.addEventListener("click", (e) => this.onButton(e));
  }
}