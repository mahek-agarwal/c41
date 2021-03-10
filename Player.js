class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.end=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  carsAtend(){
    var  Ref  = database.ref("carsAtend");
    Ref.on("value",function(data){
       this.end=data.val()  
    })
  }
  static updatecarsAtend(range){
    database.ref("/").update({
      carsAtend: range
  })
}

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
