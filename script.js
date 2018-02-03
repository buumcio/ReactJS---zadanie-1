var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		poster: src = "https://ocdn.eu/images/pulscms/NDA7MDA_/e7109fb947cc621b3957be2e2bc1f953.jpeg"
	},
	{
		id: 2,
		title: 'Król lew',
		desc: 'Film o królu sawanny',
		poster: src = "http://1.fwcdn.pl/an/np/1985708/2016/5817_1.7.jpg"
	},
	{	
		id: 3,
		title: 'Władca Pierścieni',
		desc: 'Film o pierścieniu władzy',
		poster: src = "http://1.fwcdn.pl/q/q/77.0.jpg"
	},
	{	
		id: 4,
		title: 'Smerfy',
		desc: 'Film o niebieskich ludkach',
		poster: src = "https://ocdn.eu/pulscms-transforms/1/R8kktkqTURBXy8wZDM5Y2JkNDIyMmE3NjZhOGY1OWYzOThiZDllOTNiNC5qcGVnkpUDAADNBLDNAqOTBc0DIM0Bwg"
	},
	{	
		id: 5,
		title: 'Gladiator',
		desc: 'Film o starożytnym Rzymie',
		poster: src = "http://www.lepoint.fr/images/2017/03/21/7769155lpw-7769908-article-jpg_4171884_980x426.jpg"
	}
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img.src', {}, movie.poster)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );




ReactDOM.render(element, document.getElementById('app'));
