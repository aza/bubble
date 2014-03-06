var Bubbles = function(numBubblesToMake){
	var list = [],
			self = this,
			numNames = 25,
			curIndex = 0

	this.create = function(){
		var scale = Math.min(Math.random()+.2, 1)
		var b = $('<div>')
			.attr({
				class:'bubble',
				speed: (Math.random()+.5)*1,
				wobble: (Math.random()+.5),
				scale: scale
			})
			.css({
				top: 1300+(Math.random()-.5)*300,
				left: 200+(Math.random()-.5)*1000,
				webkitTransform: 'scale3d(' + scale +  ',' + scale + ',1)',
				backgroundImage: 'url(gfx/bubbles/' + (curIndex++%25) + '.png)',
				backgroundSize: '100% 100%',
				zIndex: Math.round(scale*1000)
			})
			.appendTo('.bubbles')

		if( scale < .5 ){
			//b.css({opacity: scale+.5})
		}
		list.push(b)
	}

	function update(){
		var time = Date.now()/1000
		list.forEach(function(el, i){

			el.css({
				top: '-=' + el.attr('speed')*1.5,
				left: '+=' + (Math.sin( time + parseFloat(el.attr('scale')) ) * el.attr('wobble'))/el.attr('speed')
			})

			if( el.offset().top + el.height() < -10 ){
				// Remove the item from the list
				list.splice(i, 1)
				self.create()

			}
		})
	}

	for( var i=0; i<numBubblesToMake; i++){
		self.create()
	}

	setInterval(update, 20)
}

var bubbles = new Bubbles(10)
