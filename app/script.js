'use strict'

const api = require('pinyin-api')

window.onload = (event) => {
	chrome.tabs.executeScript( {
		code: 'window.getSelection().toString();'
	}, (text) => {
		api.convert(text)
		.then((res) => {
			console.log(res)
			document.querySelector('h1').innerHTML = res
		})
		.catch(console.error)
	})
}
