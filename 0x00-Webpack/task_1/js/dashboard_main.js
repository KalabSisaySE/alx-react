import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append($('<p>').attr('id', 'count'));
$('body').append('<p>Copyright - Holberton School</p>');

const updateCounter = () => {
  const p = $('#count');
  const text = p.text();
  if (text.length === 0) {
    p.text('1 clicks on the button');
  } else {
    let count = Number(text.split(' ')[0]);
    count += 1;
    p.text(`${count} clicks on the button`);
  }
};

const btn = $(':button');
$(btn).on('click', _.debounce(updateCounter, 500));
