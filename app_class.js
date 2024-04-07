function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.decreaseBtn = element.querySelector('.decrease');
    this.increaseBtn = element.querySelector('.increase');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
    // bind this to all functions
    this.increased = this.increased.bind(this);
    this.decreased = this.decreased.bind(this);
    this.resets = this.resets.bind(this);

    this.increaseBtn.addEventListener('click', this.increased);
    this.decreaseBtn.addEventListener('click', this.decreased);
    this.resetBtn.addEventListener('click', this.resets);
  }
  increased() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decreased() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  resets() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
