const moneyTypeIn = document.querySelectorAll(".moneyForm.in > selector.moneyType");
const moneyNumIN = document.querySelectorAll(".moneyForm.in > .moneyNum");

const moneyTypeOut = document.querySelectorAll(".moneyForm.out > selector.moneyType");
const moneyNumOut = document.querySelectorAll(".moneyForm.in > .moneyNum");

function convertMoney (moneyType1, moneyType2, moneyNum) {
	fetch("https://api.exchangeratesapi.io/latest").then(
		resp => resp.json()
	).then(blob => {
		console.log (convertMoney_(blob, moneyType1, moneyType2, moneyNum))
	}).catch(error => { throw error })
}

function convertMoney_(moneyJsonData, moneyType1, moneyType2, moneyNum) {
	const {rates} = moneyJsonData;
	const moneyVal1 = rates[moneyType1]
	const moneyVal2 = rates[moneyType2]
	const change = moneyVal2 / moneyVal1
	return moneyNum * change
}

function updateUi() {
	const moneyTypeIn = moneyTypeIn.value()
	const moneyNumIn = moneyNumIn.value()

	const moneyTypeOut = moneyTypeOut.value()	

	moneyNumOut.html = convertMoney(moneyTypeIn, moneyTypeOut, moneyNumIn)
}

convertMoney("IDR", "CZK", 1)