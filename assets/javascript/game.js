    var isObi = false;
    var isLuke = false;
    var isSidious = false;
    var isMaul = false;
    var isDefender = false;
    var isHero = false;

starWarsGame = {
    characters: {
        obiWan: {
            damage: 10,
            health: 120
        },
        luke: {
            damage: 5,
            health: 100
        },
        sidious: {
            damage: 20,
            health: 150
        },
        maul: {
            damage: 25,
            health: 100,
        }
    },


    setUpGame: function(){
        
//picks a player
        this.playerPick();
        
//picks a defender
        this.defender();
        
        
        

    },

    playerPick: function(){

        $("body").on("click", "#obi", function(){
            isObi = true;
            isHero = true;
            $("#obi").appendTo(".hero-characters");
            $("#luke").appendTo(".enemy-characters");
            $("#sidious").appendTo(".enemy-characters");
            $("#maul").appendTo(".enemy-characters");
            $("#obi").attr({
                "id" : "user",
                "class" : "hero"
            });
            $("#luke").attr({
                "id" : "enemy1",
                "class" : "enemy"
            });
            $("#sidious").attr({
                "id" : "enemy2",
                "class" : "enemy"
            });
            $("#maul").attr({
                "id" : "enemy3",
                "class" : "enemy"
            });
            $(".hero-characters").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "background-color" : "white",
                "border-color" : "rgb(56, 173, 56)",
                "border-style" : "solid",
                "overflow" : "auto"
            });
            $(".enemy").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "border-style" : "solid",
                "border-color" : "black",
                "background-color" : "red",
                "overflow" : "auto"
            });
            
        });
        $("body").on("click", "#luke", function(){  
            isLuke = true;
            isHero = true;
            console.log(isLuke);
            $("#luke").appendTo(".hero-characters");
            $("#obi").appendTo(".enemy-characters");
            $("#sidious").appendTo(".enemy-characters");
            $("#maul").appendTo(".enemy-characters");
            $("#luke").attr({
                "id" : "user",
                "class" : "hero"
            });
            $("#obi").attr({
                "id" : "enemy1",
                "class" : "enemy"
            });
            $("#sidious").attr({
                "id" : "enemy2",
                "class" : "enemy"
            });
            $("#maul").attr({
                "id" : "enemy3",
                "class" : "enemy"
            });
            $(".hero-characters").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "background-color" : "white",
                "border-color" : "rgb(56, 173, 56)",
                "border-style" : "solid",
                "overflow" : "auto"
            });
            $(".enemy").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "border-style" : "solid",
                "border-color" : "black",
                "background-color" : "red",
                "overflow" : "auto"
            });
        });
        $("body").on("click", "#sidious", function(){  
            isSidious = true;
            isHero = true;
            console.log(isSidious);
            $("#sidious").appendTo(".hero-characters");
            $("#obi").appendTo(".enemy-characters");
            $("#luke").appendTo(".enemy-characters");
            $("#maul").appendTo(".enemy-characters");
            $("#sidious").attr({
                "id" : "user",
                "class" : "hero"
            });
            $("#obi").attr({
                "id" : "enemy1",
                "class" : "enemy"
            });
            $("#luke").attr({
                "id" : "enemy2",
                "class" : "enemy"
            });
            $("#maul").attr({
                "id" : "enemy3",
                "class" : "enemy"
            });
            $(".hero-characters").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "background-color" : "white",
                "border-color" : "rgb(56, 173, 56)",
                "border-style" : "solid",
                "overflow" : "auto"
            });
            $(".enemy").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "border-style" : "solid",
                "border-color" : "black",
                "background-color" : "red",
                "overflow" : "auto"
            });
        });
        $("body").on("click", "#maul", function(){     
            isMaul = true;
            isHero = true;
            console.log(isMaul);
            $("#maul").appendTo(".hero-characters");
            $("#obi").appendTo(".enemy-characters");
            $("#luke").appendTo(".enemy-characters");
            $("#sidious").appendTo(".enemy-characters");
            $("#maul").attr({
                "id" : "user",
                "class" : "hero"
            });
            $("#obi").attr({
                "id" : "enemy1",
                "class" : "enemy"
            });
            $("#luke").attr({
                "id" : "enemy2",
                "class" : "enemy"
            });
            $("#sidious").attr({
                "id" : "enemy3",
                "class" : "enemy"
            });
            $(".hero-characters").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "background-color" : "white",
                "border-color" : "rgb(56, 173, 56)",
                "border-style" : "solid",
                "overflow" : "auto"
            });
            $(".enemy").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "border-style" : "solid",
                "border-color" : "black",
                "background-color" : "red",
                "overflow" : "auto"
            });
        });

    },

    defender: function(){

        $("body").on("click", "#enemy1", function(){
            $("#enemy1").appendTo(".defender-characters");
            $("#enemy1").attr({
                "id" : "comp",
                "class" : "defender"
            });
            $(".defender").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "color" : "white",
                "background-color" : "black",
                "border-color" : "rgb(56, 173, 56)",
                "border-style" : "solid",
                "overflow" : "auto"
            });

        });
        $("body").on("click", "#enemy2", function(){
            $("#enemy2").appendTo(".defender-characters");
            $("#enemy2").attr({
                "id" : "comp",
                "class" : "defender"
            });
            $(".defender").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "color" : "white",
                "background-color" : "black",
                "border-color" : "rgb(56, 173, 56)",
                "border-style" : "solid",
                "overflow" : "auto"
            });
        });
        $("body").on("click", "#enemy3", function(){
            $("#enemy3").appendTo(".defender-characters");
            $("#enemy3").attr({
                "id" : "comp",
                "class" : "defender"
            });
            $(".defender").css({
                "float" : "left",
                "width" : "140px",
                "height" : "110px",
                "color" : "white",
                "background-color" : "black",
                "border-color" : "rgb(56, 173, 56)",
                "border-style" : "solid",
                "overflow" : "auto"
            });
        });
        
        this.attack();
    },

    attack: function(){
        if(this.isObi){
            $("body").on("click", "#attack", function(){

            });
        }
        else if(this.isLuke){
            $("body").on("click", "#attack", function(){
                
            });
        }
        else if(this.isSidious){
            $("body").on("click", "#attack", function(){
                
            });
        }
        else if(this.isMaul){
            $("body").on("click", "#attack", function(){
                
            });
        }

    },
      

    restart: function(){


    },

    

};

        
starWarsGame.setUpGame();
    
    