'use strict';

function chunk(arr, len) {
	var chunks = [],
		i = 0,
		n = arr.length;
	while (i < n) {
		chunks.push(arr.slice(i, (i += len)));
	}
	return chunks;
}

document.getElementById('menu1').addEventListener('click', function menu1() {
	chrome.windows.getCurrent({ populate: true }, function(oldWin) {
		chrome.tabs.query({}, tabs => {
			// alert(tabs.length);
			var tabGroup = chunk(tabs, 20);
			tabGroup.forEach(group => {
				var tabsToMove = group.map(x => x.id);
				chrome.windows.create(
					{
						top: oldWin.top,
						left: oldWin.left,
						width: oldWin.width,
						height: oldWin.height,
						focused: false
					},
					function(newWin) {
						chrome.tabs.move(
							tabsToMove,
							{
								windowId: newWin.id,
								index: -1
							},
							function() {
								// alert('foo');
								chrome.tabs.query({}, tabs => {
									// alert(tabs.length);
								});
							}
						);
					}
				);
			});
		});
	});
});

document.getElementById('menu2').addEventListener('click', function menu2() {
	chrome.tabs.query({}, function(tabs) {
		window.tabs = tabs;
		var selected_tabs = tabs.filter(x => x.url === 'chrome://newtab/');
		console.log(selected_tabs);
		var tabs_id = selected_tabs.map(x => x.id);
		chrome.tabs.remove(tabs_id);
	});
});

document.getElementById('menu3').addEventListener('click', function menu3() {
	chrome.tabs.executeScript({
		file: 'scripts/inject.js'
	}, (errs) => {
		console.log(errs);
	});
});