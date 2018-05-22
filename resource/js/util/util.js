function resetDate(selectYearEle, selectMonthEle, selectDateEle) {
	var selectedYear = selectYearEle.value;
	var selectedMonth = selectMonthEle.value;
	var dateArray = makeDateArange(selectedYear, selectedMonth);
	initSelect(selectDateEle, dateArray, dateArray, 0);
};

function makeDateArange(year, month) {
	var value = [];
	for(var i = 1; i <= 31; i++) {
		value[i-1] = ((i + 100) + "").substring(1);
	}
	var newDate = new Date(year, month, 0);
	value.length = newDate.getDate();

	return value;
};

function makeYearArange(value, startAge, endAge, defaultAge) {
	var today = new Date();
	var curYear = today.getYear() + 1900;
	var startYear = curYear - endAge;
	var endYear = curYear - startAge + 1;
	var selectedIndex = endAge - defaultAge;

	var i = 0;
	for(var year = startYear; year < endYear; year++, i++) {
		value[i] = year;
	}

	return selectedIndex;
};
