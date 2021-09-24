// constructr function
function Star(el, count, callback) {
  // local variables are not accessible in the prototype that's why we are using this keyword .
  this.el = document.querySelector(el);
  this.count = count;
  this.callback = callback;
  this.active = -1;

  this.init();
  this.bindEvents();
}

// prototype.init, it will not generate the instance of star every type .

Star.prototype.init = function () {
  var div = document.createDocumentFragment("div");

  // whenever we are going to call the init function with some instance, so this will be copied from its instance value .
  for (var i = 1; i <= this.count; i++) {
    var starElement = document.createElement("i");
    starElement.classList.add("fa");
    starElement.classList.add("fa-star-o");
    starElement.dataset["ratingValue"] = i;

    div.appendChild(starElement);
  }
  this.el.appendChild(div);
};

Star.prototype.fill = function (activeValue) {
  for (var i = 1; i <= this.count; i++) {
    if (i <= activeValue) {
      document
        .querySelector("i[data-rating-value='" + i + "']")
        .classList.add("fa-star");
    } else {
      document
        .querySelector("i[data-rating-value='" + i + "']")
        .classList.remove("fa-star");
    }
  }
};

Star.prototype.bindEvents = function () {
  this.el.addEventListener("mouseover", (e) => {
    // console.log(e.target.dataset["ratingValue"]);
    this.fill(e.target.dataset["ratingValue"]);
  });

  this.el.addEventListener("mouseout", (e) => {
    this.fill(this.active);
  });

  this.el.addEventListener("click", (e) => {
    this.active = e.target.dataset["ratingValue"];
    // we have also perform the mouseover functionality so we don't need the fill funcationality again
    // this.fill(this.active);
    this.callback(this.active);
  });
};
