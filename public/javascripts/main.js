$(function(){
	// connect the socket.io server
	var socket = io.connect('http://localhost');
	// $("#message-input").on('keyup', function(e){
	// 		console.log(e.keyCode);
	// 		if(e.keyCode === 13){
	// 			socket.emit('message', 'this is a test');
	// 		}
	// 	})

	
	//define socket events
	socket.on('connect', function(){
		$("#message-input").on('keyup', function(e){
			// console.log(e.keyCode);
			if(e.keyCode === 13){
				var userInput = $('#message-input').val();
				socket.emit('message', userInput);
				$('#message-input').val('');
			}
		})

	});
	
	// attach events
	socket.on('message', function(message){
		var messageLine = $('<div> USERNAME: ' + message + '</div>');
		$('#room').append(messageLine);
	})
});
