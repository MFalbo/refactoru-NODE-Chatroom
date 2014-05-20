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
	

	$("#user-info").submit(function(){
		var userName = $("#user-name").val();
		socket.emit('nickname', userName);
		return false;
	});
	socket.on('ready', function(name){
		$('#users').append('<div>' + name + '</div>');
		$('#room').append('<div>User ' + name + ' has entered the room</div>');
	});


});
