import $ from "jquery";

export function win(numTurns) {
  $(".modal-title").text("Congratulations! You won!");
  $(".modal-body").text(`Thanks for playing. You beat the game in ${numTurns} number of turns! Please click the 'Play Again' button to restart.`);
}

export function lose() {
  $(".modal-title").text("Whoops! You lost!");
  $(".modal-body").text(`Thanks for playing. Maybe next time. Please click the 'Play Again' button to restart.`);
}

export function showModal() {
  $(".modal").modal("show");
}