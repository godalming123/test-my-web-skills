import * as main from './js/logic.js';

//test setting
main.CreateSetting(
	"animation duration",
	"--transition",
	function (settingsInput) {
		settingsInput.setAttribute("min", 0);
		settingsInput.setAttribute("max", 4);
		settingsInput.setAttribute("value", 1);
	},
	"s",
	"range"
);

main.CreateSetting(
	"roundness",
	"--border-radius",
	function (settingsInput) {
		settingsInput.setAttribute("min", 0);
		settingsInput.setAttribute("max", 20);
		settingsInput.setAttribute("value", 5);
	},
	"px",
	"range"
);