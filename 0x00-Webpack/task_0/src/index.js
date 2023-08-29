import $ from 'jquery';

const paragraphs = [
  'Holberton Dashboard',
  'Dashboard data for the students',
  'Copyright - Holberton School',
];

for (let paragraph of paragraphs) {
  $('body').append(`<p>${paragraph}</p>`);
}
