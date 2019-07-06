module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length%2){return false;}
  var t = str.split('');
  for ( var i = 1; i < t.length; i++) {
	  for (var j=0; j < bracketsConfig.length; j++){
		  if ((t[i] == bracketsConfig[j][1]) && (t[i-1] == bracketsConfig[j][0])) {
			  t.splice( i-1, 2);
			  i = i - 2;
		  }
	  }
  }
  if (t.length>0) {return false;}
  else {return true;}
}
