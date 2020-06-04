var today = new Date();

var hournow = today.getHours();

var greeting;

if (hournow > 18) {
  greeting = 'Good evening';
}
else if (hournow > 12) {
  greeting = 'Good Afternoon';
}
else if (hournow > 0) {
  greeting = 'Good Morning';
} else {
  greeting = 'Welcome';
}


document.write('<h3>' + greeting + '</h3>');
