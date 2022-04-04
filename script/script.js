
//DOM
const submitBtn = document.querySelector('.submit-btn');
const ratingBtns = document.querySelectorAll('.rating-btn');
const card1 = document.getElementById('component-wrapper');
const card2 = document.getElementById('thank-you-modal');
const rating = document.querySelector('.rating');
let ratingScore = 3; // default average score

submitBtn.addEventListener('click', getRating);
ratingBtns.forEach(btn => {
  btn.addEventListener('click', selectRating);
});

function getRating() {
  card1.classList.add('hide');
  rating.textContent = ratingScore;
  card2.classList.remove('hide');
  console.log('submiting');
}

function selectRating(event) {
  ratingBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  if (event.target.classList.contains('rating-btn')) {
      event.target.classList.add('active');
  } else {
      event.target.parentElement.classList.add('active');
  }

  //to select the rating number from the button
  //the event.target is the clicked button
  ratingScore = event.target.textContent;
  console.log(event.target);
}



