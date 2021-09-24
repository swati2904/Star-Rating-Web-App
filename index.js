// constructr function
function Star(el, count, callback) {
  // local variables are not accessible in the prototype that's why we are using this keyword .
  this.el = el;
  this.count = count;
  this.callback = callback;
  this.active = -1;

  this.init();
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
  document.querySelector(this.el).appendChild(div);
};
