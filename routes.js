var express = require('express');
var router = express.Router();

var lyrics = [
  "'WHITE WHALE, HOLY GRAIL!!'",
  "'You can run to the sea, you can run to the forest!",
  "'And the sky opened up and it swallowed us whole!!'",
  "'The hero of the gods, The crossing of the threshold, The belly of the whale'",
  "'Don't stay; run away. He has ordered assassination'",
  "'Pursue happiness with diligence'",
  "'it is hard to see through all the haze atop the trees, hold my head on stable ground, watch as the earth falls all around'",
  "'The end is not the end you see, it's just the recognition of a memory'",
  "'And I know it ain't right, but I'll fight my whole life, just to prove that I was right'",
  "'Trouble rolls in, as the tides, they twist and make the turn'",
  "'Tired and lost, no one to trust, who is there to give the push?'",
  "'I killed a man, cuz he killed my goat.'",
  "'Earth has burst, mountain flames, moon beheld, Father snake, mind control has left its nest'",
  "'When the Sultan gives orders to take your head, you must ride the winds to safety or you'll wind up dead'",
  "'Fallen from grace cause I been away too long, leaving you behind with my lonesome song'",
  "'The light will lead you ashore'"

];

router.get("/mastodon", function (req, res) {
  res.json(lyrics[Math.floor(Math.random() * lyrics.length)]);

});

module.exports = router;
