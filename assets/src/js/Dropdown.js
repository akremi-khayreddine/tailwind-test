export class Dropdown {
  isOpen = false;
  isDropdownOver = false;

  get element() {
    return document.querySelector(`[dropdown=${this.id}]`);
  }

  get dropdown() {
    return document.getElementById(this.id);
  }

  constructor(id) {
    this.id = id;
    this.onOver();
    this.onOut();
    this.dropdownOver();
    this.dropdownOut();
  }

  dropdownOver(fn = null) {
    this.dropdown
      .getElementsByClassName("dropdown-content")[0]
      .addEventListener("mouseover", (event) => {
        this.isDropdownOver = true;
        this.dropdown.hidden = false;
        if (fn) {
          fn(event);
        }
      });
  }

  dropdownOut(fn = null) {
    this.dropdown
      .getElementsByClassName("dropdown-content")[0]
      .addEventListener("mouseout", (event) => {
        this.isDropdownOver = false;
        this.isOpen = false;
        this.dropdown.hidden = true;
        if (fn) {
          fn(event);
        }
      });
  }

  onOver(fn = null) {
    this.element.addEventListener("mouseover", (event) => {
      this.isOpen = true;
      this.dropdown.hidden = false;
      if (fn) {
        fn(event);
      }
    });
  }

  onOut(fn) {
    this.dropdown.addEventListener("mouseout", (event) => {
      this.isOpen = false;
      this.dropdown.hidden = true;
      if (fn) {
        fn(event);
      }
    });
    this.element.addEventListener("mouseout", (event) => {
        this.isOpen = false;
        this.dropdown.hidden = true;
        if (fn) {
          fn(event);
        }
      });
  }
}
