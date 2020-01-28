module.exports.run = (client, msg, args) => {

    //if (!args[1]) return msg.channel.send("А что я должна предсказать?");
  
    textprediction = ["Орел", "Решка"];
  
    msg.channel.send(textprediction[Math.floor(Math.random() * textprediction.length)]);
  }

  //msg.channel.send(":crystal_ball:  " +