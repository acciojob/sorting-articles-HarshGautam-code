const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// remove leading articles for comparison only
function normalize(str) {
  return str.replace(/^(a |an |the )/i, '').toLowerCase();
}

// sort ignoring a, an, the
bands.sort((a, b) => {
  const A = normalize(a);
  const B = normalize(b);
  if (A < B) return -1;
  if (A > B) return 1;
  return 0;
});

// render list
const ul = document.getElementById('band');
ul.innerHTML = bands.map(b => `<li>${b}</li>`).join('');