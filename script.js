Vue.component('xisawinner',{
	template: '<h1><i class="fas fa-times"></i>WINNER!</h1>'

});
Vue.component('oisawinner',{
	template:'<h1><i class="far fa-circle"></i>WINNER!</h1>'
});
Vue.component('itsadraw',{
	template:'<h1>DRAW!</h1>'
});

var tictac = new Vue({
	el:"#tictac",
	data:{
		place:[
			{pen: '1'},
			{pen: '2'},
			{pen: '3'},
			{pen: '4'}, 
			{pen: '5'}, 
			{pen: '6'}, 
			{pen: '7'}, 
			{pen: '8'},
			{pen: '9'}		
			],
			x: false,
			blockclick: false,
			winner: "none",
			o: false,
			draw: false,
			xwinning: 0,
			owinning: 0,
	},
	methods: {
		plslice: function(start, end){
			return this.place.slice(start, end);
		},
		winning: function(){
			if(this.place[0].pen == this.place[1].pen && this.place[1].pen == this.place[2].pen
				|| this.place[3].pen == this.place[4].pen && this.place[4].pen == this.place[5].pen
				|| this.place[6].pen == this.place[7].pen && this.place[7].pen == this.place[8].pen
				|| this.place[0].pen == this.place[3].pen && this.place[3].pen == this.place[6].pen
				|| this.place[1].pen == this.place[4].pen && this.place[4].pen == this.place[7].pen
				|| this.place[2].pen == this.place[5].pen && this.place[5].pen == this.place[8].pen
				|| this.place[0].pen == this.place[4].pen && this.place[4].pen == this.place[8].pen
				|| this.place[2].pen == this.place[4].pen && this.place[4].pen == this.place[6].pen
				){
				if(this.place[0].pen == this.place[1].pen && this.place[1].pen == this.place[2].pen){
					this.winner = this.place[1].pen;
				}else if(this.place[3].pen == this.place[4].pen && this.place[4].pen == this.place[5].pen){
					this.winner = this.place[4].pen;
				}else if(this.place[6].pen == this.place[7].pen && this.place[7].pen == this.place[8].pen){
					this.winner = this.place[7].pen;
				}else if(this.place[0].pen == this.place[3].pen && this.place[3].pen == this.place[6].pen){
					this.winner = this.place[3].pen;
				}else if(this.place[1].pen == this.place[4].pen && this.place[4].pen == this.place[7].pen){
					this.winner = this.place[4].pen;
				}else if(this.place[2].pen == this.place[5].pen && this.place[5].pen == this.place[8].pen){
					this.winner = this.place[5].pen;
				}else if(this.place[0].pen == this.place[4].pen && this.place[4].pen == this.place[8].pen){
					this.winner = this.place[4].pen;
				}else{
					this.winner = this.place[2].pen;
				}
				if(this.winner == "O"){
					this.o = true;
					this.owinning++;
				}else{
					this.o = false;
					this.xwinning++;
				}
				this.blockclick = true;
			}else{
				return false;
			}
		},
		setThis: function(pl) {
				if(pl.pen != 'X' && pl.pen != 'O' && this.blockclick == false){
				if(this.x == true){
					pl.pen = 'X';
						this.checkDraw();
						this.winning()
				}else{
					pl.pen = 'O';
						this.checkDraw();
						this.winning()
				}
				this.x = !this.x;
			}
		},
		restart: function(){
			var place = this.place;
			if(this.blockclick == true){
				this.blockclick = false;
				for(var i=0; i<this.place.length; i++){
					place[i].pen = i;
					}
					this.o = false;
					this.winner = "b";
					this.draw =false;

			}
		},
		checkDraw: function(){
			var x = 9;
			for(var i = 0; i<this.place.length; i++){
				if(!Number(this.place[i].pen) == true){
					x = x-1;
				}
			}
			if(x==0 && this.winning() == false){
				this.blockclick = true;
				this.draw = true;
			}else{
				console.log(x);
			}
		}
	}

})