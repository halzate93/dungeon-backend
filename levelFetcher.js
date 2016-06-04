

var getLevels = function(req, res)
{
	 res.send('{"monsters": [{"monsterType": "Spider","attackPoints": 5,"defensePoints": 10,"lifePoints": 100}]}');
};

exports.getLevels = getLevels;