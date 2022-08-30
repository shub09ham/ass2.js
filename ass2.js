function oppositesign (x,y)
	{
		return ((x ^ y) < 0);
	}

	let x = +121, y = -12;
	if (oppositesign (x, y) == true)
		document.write("true");
	else
		document.write("false");


