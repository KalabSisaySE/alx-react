import $ from 'jquery';
import _ from 'lodash';

let count = 0;

const updateCounter = () => {
  const p = $('#count');
  count += 1;
  p.text(`${count} clicks on the button`);
};

const btn = $('<button>Click here to get started</button>').on(
  'click',
  _.debounce(updateCounter, 100),
);

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append(btn);
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');
