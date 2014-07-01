function getShortMessages(messages) {
	return messages.map(function(element) {
		return element.message;
	}).filter(function(element) {
		return element.length < 50;
	});
}

module.exports = getShortMessages;