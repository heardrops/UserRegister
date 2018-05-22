
function initSelect(select, value, text, selectedIndex) {
	var part1 = "<option value='";
	var part2 = "'>";
	var part3 = "</option>";
	var result = "";

	for(var i = 0; i < value.length; i++) {
		result += part1 + value[i];
		if(selectedIndex == i) {
			result += "' selected='selected";
		}
		result += part2 + text[i] + part3;
	}

	select.innerHTML = result;
};


var yearValue = [];
var selectedIndex = makeYearArange(yearValue, 13, 55, 18);
var slcBirthdayYear = document.getElementById("slcBirthdayYear");
initSelect(slcBirthdayYear, yearValue, yearValue, selectedIndex);

var slcBirthdayMonth = document.getElementById("slcBirthdayMonth");
var monthValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var monthCaption = [
	'01', '02', '03', '04', '05', '06', 
	'07', '08', '09', '10', '11', '12'];
initSelect(slcBirthdayMonth, monthValue, monthCaption, 0);

var slcBirthdayDate = document.getElementById("slcBirthdayDate");
resetDate(slcBirthdayYear, slcBirthdayMonth, slcBirthdayDate);

slcBirthdayYear.onchange = function() {
	resetDate(slcBirthdayYear, slcBirthdayMonth, slcBirthdayDate);
};

slcBirthdayMonth.onchange = function() {
	resetDate(slcBirthdayYear, slcBirthdayMonth, slcBirthdayDate);
};

var hobbyName = document.getElementsByName("ckbHobby");
var btnHobbySelectedAll = document.getElementById("btnHobbySelectedAll");
var btnHobbySelectedRevange = document.getElementById("btnHobbySelectedRevange");
var btnHobbySelectedClear = document.getElementById("btnHobbySelectedClear");

function selectedAll() {
	for(var i = 0; i < hobbyName.length; i++) {
		if(hobbyName[i].checked == false) {
			hobbyName[i].checked = true;
		}
	}
};

function selectedRevange() {
	for(var i = 0; i < hobbyName.length; i++) {
		hobbyName[i].checked == false ? (hobbyName[i].checked = true):(hobbyName[i].checked=false);
	}
};

function selectedClear() {
	for(var i = 0; i < hobbyName.length; i++) {
		if(hobbyName[i].checked == true) {
			hobbyName[i].checked = false;
		}
	}
};

btnHobbySelectedAll.addEventListener("click", selectedAll);
btnHobbySelectedRevange.addEventListener("click", selectedRevange);
btnHobbySelectedClear.addEventListener("click", selectedClear);

var stop = document.getElementById("stop");
stop.addEventListener('click', function() {
	divBox.style.animationPlayState  = "paused"; 
});
/*
全选：
btnHobbySelectedAll.onclick = function selectedAll() {
	for(var i = 0; i < hobbyName.length; i++) {
		if(hobbyName[i].checked == false) {
			hobbyName[i].checked = true;
		}
	}
};
 */