import $ from "jquery";
import { debounce } from "lodash";
import "./body.css";

$("body").append("<button>Click here to get started</button");
$("body").append("<p id='count'></p>");

function updateCounter() {
  const counter = $("#count");
  if (counter.text().length === 0) {
    counter.text(`1 clicks on the button`);
  } else {
    let val = Number(counter.text().split(" ")[0]);
    val += 1;
    counter.text(`${val} clicks on the button`);
  }
}

const btn = $("button");
$(btn).on("click", debounce(updateCounter));
