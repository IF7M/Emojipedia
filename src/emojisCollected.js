import React from "react";

// -this is for scraping data from websites using the console in the browser.
// -i gathered the data from (www.emojimeanings.net).
// -i edited the 'i' value for the 'emoji:' key to correct the data.
//emojisCollected=[]
// for (var i=1;i<document.querySelectorAll('.cardsEmojis_img img').length;i++){
//   emojisCollected.push({
//   id:i,
//   emoji:document.querySelectorAll('.cardsEmojis_img img')[i-1].src,
//   name: document.querySelectorAll('.card-title')[i].innerText,
//   meaning: document.querySelectorAll('.card-text')[i].innerText
// })
// }

const emojisCollected = [
  {
    id: 1,
    emoji: "https://www.emojimeanings.net/img/emojis/grinning-face_1f600.png",
    name: "😀 Grinning Face",
    meaning:
      "The happy smiling face is one of the most common emojis and universally applicable: you just want to say hello, express joy or excitement about something or brighten up a short text."
  },
  {
    id: 2,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-open-mouth_1f603.png",
    name: "😃 Smiling Face With Open Mouth",
    meaning:
      "Typical smiley face with open mouth and oval eyes. Is in a positive mood, shows its teeth and laughs cheerfully. Expresses enthusiasm: from a cheerful greeting to boundless joy."
  },
  {
    id: 3,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png",
    name: "😄 Smiling Face With Open Mouth And Smiling Eyes",
    meaning:
      "Smiley's mouth is wide open, its eyes squeezed shut with joy. Laughs loudly, cheerfully and heartily. Only the typical emoji eyes distinguish it from the classical smiley face. Can also be used for sarcasm."
  },
  {
    id: 4,
    emoji:
      "https://www.emojimeanings.net/img/emojis/grinning-face-with-smiling-eyes_1f601.png",
    name: "😁 Grinning Face With Smiling Eyes",
    meaning:
      "Happy face with a mischievous laugh. Represents lightheartedness and exuberance. Full of joy due to an event, excited and agitated or just a bit embarrassed."
  },
  {
    id: 5,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-open-mouth-and-tightly-closed-eyes_1f606.png",
    name: "😆 Smiling Face With Open Mouth And Closed Eyes",
    meaning:
      "Emoji is on the verge of a fit of laughter because something is so silly or incredibly funny. Also, mischievous or bitchy laughter about an event, or something that happened to another person.. Means the same as “XD“ and “X“ as a text-based emoticon."
  },
  {
    id: 6,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-holding-back-tears_1f979.png",
    name: "🥹 Face Holding Back Tears",
    meaning:
      "Slightly smiling face with tears in the eyes. It can express gratitude, emotion or pride. At the same time, however, anger or rage could be the reason for barely being able to hold back the tears. The emotional interpretation depends on the context of the communication."
  },
  {
    id: 7,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-open-mouth-and-cold-sweat_1f605.png",
    name: "😅 Smiling Face With Open Mouth & Cold Sweat",
    meaning:
      "Sweaty smile. Relief that a tight situation went well or was coped with positively, e.g. an important appointment. A difficult event is imminent and you are already nervous."
  },
  {
    id: 8,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-tears-of-joy_1f602.png",
    name: "😂 Face With Tears of Joy",
    meaning:
      "I am laughing to hard that I can hardly keep myself on my chair! Something is so incredibly funny that you cry laughing. Gets the giggles and can hardly contain himself. This emoji is the most popular and was named Word of the Year 2015."
  },
  {
    id: 9,
    emoji:
      "https://www.emojimeanings.net/img/emojis/rolling-on-the-floor-laughing_1f923.png",
    name: "🤣 Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 10,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-tear_1f972.png",
    name: "🥲 Smiling face with tear",
    meaning:
      "Smile, even in difficult times. Instead of being really happy, you smile despite the pain. The real feelings are hidden behind a smile. Someone is going through difficult times or has a lot of problems."
  },
  {
    id: 11,
    emoji:
      "https://www.emojimeanings.net/img/emojis/white-smiling-face_263a.png",
    name: "☺ Smiling Face",
    meaning:
      "I am as merry as a lark! Completely satisfied and speechless. Expression of bliss. Shy grin in response to a nice compliment or something great that happened."
  },
  {
    id: 12,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-smiling-eyes_1f60a.png",
    name: "😊 Smiling Face With Smiling Eyes",
    meaning:
      "Is grinning shyly and embarrassed. The red cheeks are an expression of joy. Represents happiness, contentment, peace of mind and gratitude. Text-based variant: ^^."
  },
  {
    id: 13,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-halo_1f607.png",
    name: "😇 Smiling Face With Halo",
    meaning:
      "Would like to express its (possibly pretended) innocence. Someone does good deeds, is very sweet, innocent and behaves in an exemplary way. The angelic face can also be used humorously for rather not so good deeds or behaviors."
  },
  {
    id: 14,
    emoji:
      "https://www.emojimeanings.net/img/emojis/slightly-smiling-face_1f642.png",
    name: "🙂 Slightly Smiling Face",
    meaning:
      "A light smile means you are satisfied with yourself and the world. Can make a statement sound friendlier than it might have been meant. Or have a sarcastic meaning when a smile does not actually fit the content."
  },
  {
    id: 15,
    emoji:
      "https://www.emojimeanings.net/img/emojis/upside-down-face_1f643.png",
    name: "🙃 Upside-Down Face",
    meaning:
      "Don't take me seriously! The message is either ambiguous, ironic or joking. Person plays the fool and horses around, or in response to a joke."
  },
  {
    id: 16,
    emoji: "https://www.emojimeanings.net/img/emojis/winking-face_1f609.png",
    name: "😉 Winking Face",
    meaning:
      "Smiley blinks mischievously with one eye. Expression of humor, has been pulling a practical joke, is flirting with you or has an ulterior motive. The wink weakens the message: do not take it seriously, regard it as humorous."
  },
  {
    id: 17,
    emoji: "https://www.emojimeanings.net/img/emojis/relieved-face_1f60c.png",
    name: "😌 Relieved Face",
    meaning:
      "Everything went well! Relieved smiley face. Is happy that something unpleasant is over without having caused any harm. Relaxed, thankful and free of worries."
  },
  {
    id: 18,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-heart-shaped-eyes_1f60d.png",
    name: "😍 Smiling Face With Heart-Eyes",
    meaning:
      "Happily beaming face with heart-shaped eyes. Insanely in love: with a person, a place or an object. Expresses the extent of love and affection as well as gratitude and is often part of romantic messages. Just does not know what to do with all the luck."
  },
  {
    id: 19,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-smiling-eyes-and-three-hearts_1f970.png",
    name: "🥰 Smiling face with smiling eyes and three hearts",
    meaning:
      "You are in love, sitting on cloud number nine. The romantic emoji with the enamored expression of the face stands for affairs of the heart."
  },
  {
    id: 20,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-throwing-a-kiss_1f618.png",
    name: "😘 Face Throwing a Kiss",
    meaning:
      "Smiley sends you a loving kiss that comes from the heart. Amicable, to express affection or with romantic intent, as an expression of love. May weaken a sarcastic response or be a reaction to a rude message. Symbol for flirting and showing gratitude."
  },
  {
    id: 21,
    emoji: "https://www.emojimeanings.net/img/emojis/kissing-face_1f617.png",
    name: "😗 Kissing Face",
    meaning:
      "The face sends kisses to another person. The open eyes and the neutral face are not so much a sign of an intimate kiss but rather a kiss to a friend or relative. “Thank you“, “Hello“ or “Goodbye“. Could also stand for “whistling” or “duck face”."
  },
  {
    id: 22,
    emoji:
      "https://www.emojimeanings.net/img/emojis/kissing-face-with-smiling-eyes_1f619.png",
    name: "😙 Kissing Face With Smiling Eyes",
    meaning:
      "Relaxed face expression, smiling eyes and kissing lips. A kiss to friends or “We hug and kiss you“ to relatives. Can also be used for whistling."
  },
  {
    id: 23,
    emoji:
      "https://www.emojimeanings.net/img/emojis/kissing-face-with-closed-eyes_1f61a.png",
    name: "😚 Kissing Face With Closed Eyes",
    meaning:
      "Cute face with closed eyes and rosy cheeks. As a thank you for a tip or a favor. Loving kiss to the closest friends, family or darling."
  },
  {
    id: 24,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-savouring-delicious-food_1f60b.png",
    name: "😋 Face Savouring Delicious Food",
    meaning:
      "Bon appetit! Smiley is licking the corner of its mouth with its tongue. Is hungry, just cooked something very delicious or eaten a whole dish. Often interpreted as a grimace, with tongue outstretched, and used after a funny message or when fooling around."
  },
  {
    id: 25,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-stuck-out-tongue_1f61b.png",
    name: "😛 Face With Stuck-Out Tongue",
    meaning:
      "Horseplay with friends, weakening an ironic remark and making sure that the other does not take seriously what has been said. Making fun of others: I knew you'd screw it up."
  },
  {
    id: 26,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-stuck-out-tongue-and-tightly-closed-eyes_1f61d.png",
    name: "😝 Face With Stuck-Out Tongue & Tightly Closed Eyes",
    meaning:
      "Making fun of someone, annoying or jokingly offending someone. In provocative news, crude or black humor as well as with glee."
  },
  {
    id: 27,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-stuck-out-tongue-and-winking-eye_1f61c.png",
    name: "😜 Face With Stuck-Out Tongue & Winking Eye",
    meaning:
      "Smiley boldly sticks out the tongue, winking with one eye. Has made a joke or wants to flirt with the chat partner. Is carefree and does not mean it seriously."
  },
  {
    id: 28,
    emoji:
      "https://www.emojimeanings.net/img/emojis/grinning-face-with-one-large-and-one-small-eye_1f92a.png",
    name: "🤪 Crazy Face",
    meaning:
      "Something is insanely funny. The mood is exuberant - you are totally silly and crazy. Totally freaking out with enthusiasm or joy. Maybe someone has even told an indecent joke."
  },
  {
    id: 29,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-one-eyebrow-raised_1f928.png",
    name: "🤨 Face With a Raised Eyebrow",
    meaning:
      "With the questioning look on the face, resembles the actor “The Rock“ (Dwayne Johnson). Can be used to express skepticism, disbelief or disapproval."
  },
  {
    id: 30,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-monocle_1f9d0.png",
    name: "🧐 Face With Monocle",
    meaning:
      "A monocle is a visual aid with only one glass. At the end of the 19th century it was a status symbol. Something seems suspicious! The smiley makes a warning look around. The “upper-class“ version of the pondering smiley."
  },
  {
    id: 31,
    emoji: "https://www.emojimeanings.net/img/emojis/nerd-face_1f913.png",
    name: "🤓 Nerd Face",
    meaning:
      "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
  },
  {
    id: 32,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-sunglasses_1f60e.png",
    name: "😎 Face With Sunglasses",
    meaning:
      "I'm the king of the world! Mr. Cool Smiley with sunglasses. Is totally self-assured and relaxed. Everything is absolutely easy and cool. Also a symbol for sun, summer holidays, and holidays on the beach."
  },
  {
    id: 33,
    emoji: "https://www.emojimeanings.net/img/emojis/disguised-face_1f978.png",
    name: "🥸 Disguised face",
    meaning:
      "Face with funny glasses and false eyebrows, bulbous nose and mustache stuck on. Someone wants to hide himself or their intentions. As a disguise: You want to get to the bottom of something unrecognized. Symbolic for carnival."
  },
  {
    id: 34,
    emoji:
      "https://www.emojimeanings.net/img/emojis/grinning-face-with-star-eyes_1f929.png",
    name: "🤩 Smirking Face With Starry Eyes",
    meaning:
      "Is very excited about something and already full of anticipation. Overwhelmed and speechless after meeting someone you like a lot. Fascinated by the glory and the world of the stars."
  },
  {
    id: 35,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-party-horn-and-party-hat_1f973.png",
    name: "🥳 Face with party blower and party hat",
    meaning:
      "That was a wild party or “Let's celebrate“. No matter what joyful event is in view, it will be celebrated appropriately. May also stand for the carnival season."
  },
  {
    id: 36,
    emoji: "https://www.emojimeanings.net/img/emojis/smirking-face_1f60f.png",
    name: "😏 Smirking/Whimsical Face",
    meaning:
      "Half a smile that oozes with complacency. Represents irony, coolness or playfulness. Be careful: Somebody could be up to something. Used as an offensive look for flirting or sexual innuendo."
  },
  {
    id: 37,
    emoji: "https://www.emojimeanings.net/img/emojis/unamused-face_1f612.png",
    name: "😒 Unamused Face",
    meaning:
      "The grumpy, sullen gaze expresses dissatisfaction. Is not enthusiastic about a thing and shows that. Expression of disinterest and disapproval."
  },
  {
    id: 38,
    emoji:
      "https://www.emojimeanings.net/img/emojis/disappointed-face_1f61e.png",
    name: "😞 Disappointed Face",
    meaning:
      "Face is drooping and directed downwards. Smiley is very sad and frustrated and gives a disappointed impression. Represents sorrow, remorse and regret."
  },
  {
    id: 39,
    emoji: "https://www.emojimeanings.net/img/emojis/pensive-face_1f614.png",
    name: "😔 Pensive Face",
    meaning:
      "A pensive expression on the face. Emoji looks downwards and needs time to think. Represents melancholy, general dissatisfaction and frustration."
  },
  {
    id: 40,
    emoji: "https://www.emojimeanings.net/img/emojis/worried-face_1f61f.png",
    name: "😟 Worried Face",
    meaning:
      "Worried looking face due to a complicated situation or important event. Feels anxious, insecure and uncomfortable."
  },
  {
    id: 41,
    emoji: "https://www.emojimeanings.net/img/emojis/confused-face_1f615.png",
    name: "😕 Confused Face",
    meaning:
      "Is confused or does not agree with something. Is uncertain or disappointed, had imagined this in a different way."
  },
  {
    id: 42,
    emoji:
      "https://www.emojimeanings.net/img/emojis/slightly-frowning-face_1f641.png",
    name: "🙁 Slightly frowning face",
    meaning:
      "„I’m sorry to hear that“ or „What you’re saying annoys me a little bit“. The frown can show rejection and anger or a person is surprised, anxious."
  },
  {
    id: 43,
    emoji:
      "https://www.emojimeanings.net/img/emojis/white-frowning-face_2639.png",
    name: "☹ Frowning Face",
    meaning:
      "Face with very sad mouth angle. Emoji seems unhappy and disgruntled. Dissatisfied with the weather, small mistakes or the behavior of a person."
  },
  {
    id: 44,
    emoji:
      "https://www.emojimeanings.net/img/emojis/persevering-face_1f623.png",
    name: "😣 Suffering Face",
    meaning:
      "Emoji is struggling and suffering. After a hard day, ready to throw in the towel. However, has to endure the situation and will have worked it through some day."
  },
  {
    id: 45,
    emoji: "https://www.emojimeanings.net/img/emojis/confounded-face_1f616.png",
    name: "😖 Confounded Face",
    meaning:
      "How on earth could that happen? Smiley is extremely dismayed and bewildered. Or damn angry: That's almost the final straw!"
  },
  {
    id: 46,
    emoji: "https://www.emojimeanings.net/img/emojis/tired-face_1f62b.png",
    name: "😫 Tired Face",
    meaning:
      "Overtired emoji with narrowed eyes and open mouth. Because of too little sleep, because of what is going on around you, from a person or situation. Is very exhausted and broken. Now needs peace first."
  },
  {
    id: 47,
    emoji: "https://www.emojimeanings.net/img/emojis/weary-face_1f629.png",
    name: "😩 Weary Face",
    meaning:
      "Leave me alone! Reluctant smiley with raised eyebrows and mouth downturned, moaning about grueling, unpleasant but inevitable things. Is weepy, upset and completely exhausted, mentally or physically."
  },
  {
    id: 48,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-pleading-eyes_1f97a.png",
    name: "🥺 Face with begging eyes",
    meaning:
      "The big eyes are shining, devoted facial expression. The emoji is entreatingly begging for something: wants to borrow some money or the car. If you cannot get ahead by asking for something, puppy dog eyes are the last resort to get what you want."
  },
  {
    id: 49,
    emoji: "https://www.emojimeanings.net/img/emojis/crying-face_1f622.png",
    name: "😢 Crying Face",
    meaning:
      "Smiley with drooping eyebrows is sad and crying. A tear drop is running down the cheek. A picture of misery. Not so much general sadness, but rather pain over one thing. It still hurts to remember a certain event."
  },
  {
    id: 50,
    emoji:
      "https://www.emojimeanings.net/img/emojis/loudly-crying-face_1f62d.png",
    name: "😭 Loudly Crying Face",
    meaning:
      "Emoji is both very sad and distraught, or is dying of laughter. Tears are pouring out of the eyes like a waterfall. Represents injury, pain or defeat. Is also used ironically or something is so funny that you die of laughter."
  },
  {
    id: 51,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-look-of-triumph_1f624.png",
    name: "😤 Face With Look of Triumph",
    meaning:
      "White steam clouds are coming out of the smiley's nose. Is snorting contemptuously as a sign of superiority. Is proud and triumphing over someone else."
  },
  {
    id: 52,
    emoji: "https://www.emojimeanings.net/img/emojis/angry-face_1f620.png",
    name: "😠 Angry Face",
    meaning:
      "Smiley is upset, angry, and totally furious. Reaction to something unfavorable or a sign of rejection. You had better keep out of the person's way."
  },
  {
    id: 53,
    emoji: "https://www.emojimeanings.net/img/emojis/pouting-face_1f621.png",
    name: "😡 Pouting Face",
    meaning:
      "The pouting face expresses displeasure with a person or situation. Beware, danger of explosion! Furious emoji face. Is annoyed and already sulking with a deep-red face."
  },
  {
    id: 54,
    emoji:
      "https://www.emojimeanings.net/img/emojis/serious-face-with-symbols-covering-mouth_1f92c.png",
    name: "🤬 Face With Symbols Over The Mouth",
    meaning:
      "The symbols over the mouth represent cursing. The serious-looking smiley is really upset and keeps using four-letter words. Represents a sudden outburst of fury or frustration."
  },
  {
    id: 55,
    emoji:
      "https://www.emojimeanings.net/img/emojis/shocked-face-with-exploding-head_1f92f.png",
    name: "🤯 Face With Exploding Head",
    meaning:
      "I cannot believe it. or “That will blow you away.“ Something is very exciting or surprising. The exploding head can also be used to express shock or awe."
  },
  {
    id: 56,
    emoji: "https://www.emojimeanings.net/img/emojis/flushed-face_1f633.png",
    name: "😳 Flushed Face",
    meaning:
      "Person is shocked, in an uncomfortable situation or has made a mistake. Expresses shame; something is very embarrassing. Reacts to a compliment or a flattering message that the person did not want to receive."
  },
  {
    id: 57,
    emoji: "https://www.emojimeanings.net/img/emojis/overheated-face_1f975.png",
    name: "🥵 Overheated face",
    meaning:
      "It is so hot, I will get a heat stroke right away! Bright red head, the tongue is hanging from the mouth and drops of sweat are on the forehead. The hottest place in the world lies in Iran: In 2005, the highest temperature of 70.7 °C was measured in the Dasht-e Lut desert."
  },
  {
    id: 58,
    emoji: "https://www.emojimeanings.net/img/emojis/freezing-face_1f976.png",
    name: "🥶 Freezing face",
    meaning:
      "It is so cold, you are about to freeze to death. The smile is almost frozen. Already totally blue in the face from the cold temperature, tortured facial expression. Only a cup of tea, coffee, or the hot tub can help now."
  },
  {
    id: 59,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-in-clouds_1f636-200d-1f32b.png",
    name: "😶‍🌫 Face in clouds",
    meaning:
      "This is nebulous! The face is surrounded by fog or clouds. Those who have their heads in the clouds are either dreamy or do not want to admit reality. The view of something is blurred. There may also be a state of confusion or bliss."
  },
  {
    id: 60,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-screaming-in-fear_1f631.png",
    name: "😱 Face Screaming in Fear",
    meaning:
      "Horror-stricken face with two hands, screaming. Is scared stiff, feeling nothing but fear and panic. The creepy emoji can also be used ironically or as a symbol for Halloween."
  },
  {
    id: 61,
    emoji: "https://www.emojimeanings.net/img/emojis/fearful-face_1f628.png",
    name: "😨 Fearful Face",
    meaning:
      "Scared smiley is frightened and stunned. Seems to be deeply shocked and surprised by an ominous event or intense experience."
  },
  {
    id: 62,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-open-mouth-and-cold-sweat_1f630.png",
    name: "😰 Face With Open Mouth & Cold Sweat",
    meaning:
      "Smiley with a blue forehead is shocked and worried. Cold sweat is dripping from the forehead and the mouth is open, dumbfounded. Sweating due to physical or mental stress."
  },
  {
    id: 63,
    emoji:
      "https://www.emojimeanings.net/img/emojis/disappointed-but-relieved-face_1f625.png",
    name: "😥 Disappointed but Relieved Face",
    meaning:
      "Is relieved that something is over, but also disappointed. Has experienced a stressful situation with an unpleasant outcome, for example, a test. Has gotten out of a difficult or delicate situation, but not without bumps and bruises."
  },
  {
    id: 64,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-cold-sweat_1f613.png",
    name: "😓 Face With Cold Sweat",
    meaning:
      "Stress or worry about a bad experience. Things went different than they should have. The school is stressing or there is still so much to do in the office. You are tired, but still have so much work to do."
  },
  {
    id: 65,
    emoji: "https://www.emojimeanings.net/img/emojis/hugging-face_1f917.png",
    name: "🤗 Hugging Face",
    meaning:
      "Smiley with red cheeks is stretching out its hands toward you. Wants to hug you. It's an open and cordial gesture and an expression of warmth and friendliness."
  },
  {
    id: 66,
    emoji: "https://www.emojimeanings.net/img/emojis/thinking-face_1f914.png",
    name: "🤔 Thinking Face",
    meaning:
      "The thinker's pose: Thoughtful face with the characteristic hand on the chin. Puts a statement, a person's intelligence, or an idea into question. Is mulling over something or thinking about a brilliant idea."
  },
  {
    id: 67,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-peeking-eye_1fae3.png",
    name: "🫣 Face With Peeking Eye",
    meaning:
      "I just can't look away! Something is quite terrible or unpleasant. Still, you really want to know what's happening. Can also mean don't look at me. I am not happy with the way I look. For example, because I look tired."
  },
  {
    id: 68,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-smiling-eyes-and-hand-covering-mouth_1f92d.png",
    name: "🤭 Face With Hand Over The Mouth",
    meaning:
      "Expresses shock, surprise, or a sudden perception. Typical gesture, which shows that the other person is not telling the truth. Thinks he's being lied to."
  },
  {
    id: 69,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-open-eyes-and-hand-over-mouth_1fae2.png",
    name: "🫢 Face With Open Eyes And Hand Over Mouth",
    meaning:
      "Oh no. The emoji's eyes are wide open. In shock or astonishment, it holds its hand over its mouth. Surprised at a situation or event. It is not clear whether it is something positive or negative."
  },
  {
    id: 70,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-finger-covering-closed-lips_1f92b.png",
    name: "🤫 Exhorting Face",
    meaning:
      "Shhh! is meant to silence others. Or someone is confiding a secret that should not be retold. Nicely telling your counterpart to shut up."
  },
  {
    id: 71,
    emoji: "https://www.emojimeanings.net/img/emojis/melting-face_1fae0.png",
    name: "🫠 Melting Face",
    meaning:
      "I'm melting! This smiling face becomes liquid on the underside. It either expresses that it's incredibly hot or that you're feeling uncomfortable right now: I'd like to sink into the ground!"
  },
  {
    id: 72,
    emoji: "https://www.emojimeanings.net/img/emojis/lying-face_1f925.png",
    name: "🤥 Lying Face",
    meaning:
      "As with Pinocchio, the nose becomes longer with each lie, which exposes him as a liar. Symbol of a falsehood, boast, or an unlikely story."
  },
  {
    id: 73,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-without-mouth_1f636.png",
    name: "😶 Face Without Mouth",
    meaning:
      "Emoji without a mouth. Is speechless, has no words. Someone does not want to or cannot say anything about a specific topic. Used in difficult, embarrassing or bad conversations. Imagine what it would say if it had a mouth!"
  },
  {
    id: 74,
    emoji:
      "https://www.emojimeanings.net/img/emojis/dotted-line-face_1fae5.png",
    name: "🫥 Dotted Line Face",
    meaning:
      "The face is colorless and surrounded by dashed lines. Someone feels depressed, distressed, lonely or closed. I am simply not seen! You could give me some attention."
  },
  {
    id: 75,
    emoji: "https://www.emojimeanings.net/img/emojis/neutral-face_1f610.png",
    name: "😐 Neutral Face",
    meaning:
      "Pokerface: Expressionless face with a neutral look. Unimpressed, awkward or indifferent."
  },
  {
    id: 76,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-diagonal-mouth_1fae4.png",
    name: "🫤 Face With Diagonal Mouth",
    meaning:
      "I don't know what to make of it! The crooked mouth represents concern, reluctance or disillusionment. It can also reflect annoyance or disappointment. The emotional state is neutral to negative."
  },
  {
    id: 77,
    emoji:
      "https://www.emojimeanings.net/img/emojis/expressionless-face_1f611.png",
    name: "😑 Expressionless Face",
    meaning:
      "Face without any emotional expression, with closed eyes and mouth. Tired, annoyed, emotionless, no patience, the end of the flagpole is reached. The right words are missing to continue a conversation."
  },
  {
    id: 78,
    emoji: "https://www.emojimeanings.net/img/emojis/grimacing-face_1f62c.png",
    name: "😬 Grimacing Face",
    meaning:
      "This is really embarrassing for me now! Expression of nervousness, awkwardness or embarrassment. Scared and guilty smile: Someone has done something stupid and tries to resolve the tense situation by grimacing."
  },
  {
    id: 79,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-rolling-eyes_1f644.png",
    name: "🙄 Face With Rolling Eyes",
    meaning:
      "Smiley is rolling its eyes. Finds the current situation or a person boring or annoying. Will disregard the message."
  },
  {
    id: 80,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-open-mouth_1f62e.png",
    name: "😮 Face With Open Mouth",
    meaning:
      "Wow, I'm impressed! Perplexed smiley is looking completely puzzled. Is positively or negatively surprised: from mildly astonished to completely steamrolled."
  },
  {
    id: 81,
    emoji:
      "https://www.emojimeanings.net/img/emojis/frowning-face-with-open-mouth_1f626.png",
    name: "😦 Frowning Face With Open Mouth",
    meaning:
      "I cannot believe you did that! Expresses horror as well as fear, worry and mistrust. In response to a negative surprise. Got caught red-handed and just feels totally taken by surprise."
  },
  {
    id: 82,
    emoji: "https://www.emojimeanings.net/img/emojis/anguished-face_1f627.png",
    name: "😧 Anguished Face",
    meaning:
      "Something unexpected happened! Face with raised eyebrows, open eyes and open mouth. A mixture of shock and disappointment. Represents fear, frustration, horror and unexpected, negative surprises."
  },
  {
    id: 83,
    emoji: "https://www.emojimeanings.net/img/emojis/hushed-face_1f62f.png",
    name: "😯 Speechless Face",
    meaning:
      "Oh my goodness! The unpleasantly surprised face is lost for words due to a shocking affair. In response to bad behavior or a rude message. Nothing can be added to what has just been said."
  },
  {
    id: 84,
    emoji: "https://www.emojimeanings.net/img/emojis/astonished-face_1f632.png",
    name: "😲 Astonished Face",
    meaning:
      "That's incredible, I had no idea! Astonished face with wide open mouth and eyes: overwhelmed with surprise, completely shocked or sheer incredulity. Can hardly believe what just happened!"
  },
  {
    id: 85,
    emoji: "https://www.emojimeanings.net/img/emojis/yawning-face_1f971.png",
    name: "🥱 Yawning face",
    meaning:
      "I am dog-tired! The eyes are closed and the hand covers a yawn. The night was too short, you couldn't get enough sleep. Indication that a topic or a person is not of interest, but rather boring."
  },
  {
    id: 86,
    emoji: "https://www.emojimeanings.net/img/emojis/sleeping-face_1f634.png",
    name: "😴 Sleeping Face",
    meaning:
      "Good night and sweet dreams! In comics or cartoons, zZz above the head stands for sleeping characters. The emoji is tired, wants to go to bed or is just about to fall asleep from boredom."
  },
  {
    id: 87,
    emoji: "https://www.emojimeanings.net/img/emojis/drooling-face_1f924.png",
    name: "🤤 Drooling Face",
    meaning:
      "Slobbering face, the saliva flowing from the corner of the mouth. Represents desire for a person, delicious food, the new car, or the anticipation of an event. Expression of extreme interest and desire."
  },
  {
    id: 88,
    emoji: "https://www.emojimeanings.net/img/emojis/sleepy-face_1f62a.png",
    name: "😪 Sleepy Face",
    meaning:
      "Emoji is dead tired and would love to sleep now. The bubble emerging from the nose is a typical manga symbol for a sleeping character. Or as an expression that a conversation or excursion is extremely boring and drowsy."
  },
  {
    id: 89,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-exhaling_1f627-200d-1f4a8.png",
    name: "😮‍💨 Smiley exhaling audibly",
    meaning:
      "The emoji exhales noisily. Maybe with relief (phew, that was a close thing!) or with disappointment. There is something we may not like at all. Can also mean that the day was very exhausting and now you feel fatigue."
  },
  {
    id: 90,
    emoji: "https://www.emojimeanings.net/img/emojis/dizzy-face_1f635.png",
    name: "😵 Dizzy Face",
    meaning:
      "I feel dizzy! Smiley with crossed eyes and open mouth is totally dazed. Is confused and so dizzy it doesn't know which side is up. Also symbolizes strong emotions or drunkenness."
  },
  {
    id: 91,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-spiral-eyes_1f635-200d-1f4ab.png",
    name: "😵‍💫 Face with spiral eyes",
    meaning:
      "The mouth is open, the eyes are spirals. The emoji has circulatory problems and is dizzy. Something or someone has cast a spell over us, we are hypnotized. There may be disorientation, e.g. in a foreign city or in a department store."
  },
  {
    id: 92,
    emoji:
      "https://www.emojimeanings.net/img/emojis/zipper-mouth-face_1f910.png",
    name: "🤐 Zipper-Mouth Face",
    meaning:
      "Smiley with zipper instead of a mouth is keeping a secret for itself. Lips are closed or chat partner's lips should remain closed. Can also mean silence because you cannot find the right words."
  },
  {
    id: 93,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-uneven-eyes-and-wavy-mouth_1f974.png",
    name: "🥴 Face with unequal eyes and wavy mouth",
    meaning:
      "Eyes half open, half closed, slanted mouth, flushed cheeks. The emoji has a confused facial expression: due to tiredness or the currently confused emotional world. Also known as drunken face."
  },
  {
    id: 94,
    emoji: "https://www.emojimeanings.net/img/emojis/nauseated-face_1f922.png",
    name: "🤢 Nauseated Face",
    meaning:
      "Disgusted smiley, which is already green with sickness and nausea. Might mean disgust, reluctance, or aversion, or stand for sickness."
  },
  {
    id: 95,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-open-mouth-vomiting_1f92e.png",
    name: "🤮 Face With Open Mouth, Throwing Up",
    meaning:
      "I could almost throw up. Might show how drunk the person was last night. The puking smiley can also state what you think of something."
  },
  {
    id: 96,
    emoji: "https://www.emojimeanings.net/img/emojis/sneezing-face_1f927.png",
    name: "🤧 Sneezing Face",
    meaning:
      "A sneezing face with eyes closed, blowing its nose into a handkerchief. I caught a cold! Shows that someone is ill or feels uncomfortable."
  },
  {
    id: 97,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-medical-mask_1f637.png",
    name: "😷 Face With Medical Mask",
    meaning:
      "The mask is for protection. Either to protect yourself or others from infection. Someone is in the hospital, has to go to the doctor or has caught a disease. Wearing the masks is widely spread in Asia."
  },
  {
    id: 98,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-thermometer_1f912.png",
    name: "🤒 Face With Thermometer",
    meaning:
      "The sad face with the thermometer in the mouth expresses illness. Caught a flu or other illness that is associated with fever. Or is worried about getting sick."
  },
  {
    id: 99,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-head-bandage_1f915.png",
    name: "🤕 Face With Head Bandage",
    meaning:
      "Sad looking face with head bandage: Someone is ill, had an accident, or is in hospital. The bandage symbolizes health problems."
  },
  {
    id: 100,
    emoji:
      "https://www.emojimeanings.net/img/emojis/money-mouth-face_1f911.png",
    name: "🤑 Money-Mouth Face",
    meaning:
      "Smiley has dollar signs in its eyes, the tongue is a banknote. Could have won something or is sensing a financial chance. Implicates a sense of wealth."
  },
  {
    id: 101,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-cowboy-hat_1f920.png",
    name: "🤠 Face With Cowboy Hat",
    meaning:
      "Howdy! Typical American smiley with cowboy hat from the Wild West. Stands for freedom, nature, and hard work."
  },
  {
    id: 102,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-face-with-horns_1f608.png",
    name: "😈 Smiling Face With Horns",
    meaning:
      "Mischievously grinning goblin smiley with small devil horns. Wants to cause trouble, is a real teaser or planning something ugly just now."
  },
  {
    id: 103,
    emoji: "https://www.emojimeanings.net/img/emojis/imp_1f47f.png",
    name: "👿 Goblin",
    meaning:
      "The goblin is frowning, looking grim, and does not feel like joking. You should be particularly careful. Represents mischievous acts or remarks as well as treachery."
  },
  {
    id: 104,
    emoji: "https://www.emojimeanings.net/img/emojis/japanese-ogre_1f479.png",
    name: "👹 Japanese Ogre “Namahage“",
    meaning:
      "The Oni represents a demon and spirit of hell in Japanese mythology. An ugly figure with horns, chasing evil souls. Traditional disguise on New Year's Eve to ward off evil spirits."
  },
  {
    id: 105,
    emoji: "https://www.emojimeanings.net/img/emojis/japanese-goblin_1f47a.png",
    name: "👺 Japanese Goblin",
    meaning:
      "The Tengu (literally: heavenly dog) is an evil and magical being from Japan. Has supernatural powers and brings forth disaster. The red mask has eyebrows and a beard and a noticeably long nose."
  },
  {
    id: 106,
    emoji: "https://www.emojimeanings.net/img/emojis/clown-face_1f921.png",
    name: "🤡 Clown Face",
    meaning:
      "Stop fooling around! Made-up clown face from the circus world. Stands for fun and entertainment, but can also trigger fears in certain people - at least since Stephen King's horror movie “It“."
  },
  {
    id: 107,
    emoji: "https://www.emojimeanings.net/img/emojis/pile-of-poo_1f4a9.png",
    name: "💩 Pile of Poo",
    meaning:
      "Crap, oh no! Such a sh**! The comic version of a pile of feces. Can describe a situation, replace the swear word, or criticize a statement of the chat partner."
  },
  {
    id: 108,
    emoji: "https://www.emojimeanings.net/img/emojis/ghost_1f47b.png",
    name: "👻 Ghost",
    meaning:
      "The funny-smiling ghost is too cute to frighten others or cause harm. Symbol for Halloween or jokingly for creepy things, e.g. movies."
  },
  {
    id: 109,
    emoji: "https://www.emojimeanings.net/img/emojis/skull_1f480.png",
    name: "💀 Skull",
    meaning:
      "This is extremely dangerous! The skull emoji is used in unpleasant situations or to symbolize terrible things. Can stand for a real threat, but can also be used sarcastically or humorously."
  },
  {
    id: 110,
    emoji:
      "https://www.emojimeanings.net/img/emojis/skull-and-crossbones_2620.png",
    name: "☠ Skull and Crossbones",
    meaning:
      "Be careful! The death's head with crossed bones is a symbol of death. A warning sign for toxic substances and hazards."
  },
  {
    id: 111,
    emoji:
      "https://www.emojimeanings.net/img/emojis/extraterrestrial-alien_1f47d.png",
    name: "👽 Alien",
    meaning:
      "The aliens are here! Symbol for an extraterrestrial being. However, smiles friendly and comes in peace."
  },
  {
    id: 112,
    emoji: "https://www.emojimeanings.net/img/emojis/robot-face_1f916.png",
    name: "🤖 Robot Face",
    meaning:
      "The mouth of the robot face resembles a grimace. It's like being remotely controlled and working like a robot. Can also be used for deadhearted people or refer to artificial intelligence and sci-fi movies."
  },
  {
    id: 113,
    emoji: "https://www.emojimeanings.net/img/emojis/jack-o-lantern_1f383.png",
    name: "🎃 Pumpkin lantern",
    meaning:
      "Trick or treat! A candle is placed in a hollowed-out pumpkin with a grimace. The Halloween tradition was brought to the US by Irish immigrants. The emoji is usually sent as a symbol for Halloween."
  },
  {
    id: 114,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-cat-face-with-open-mouth_1f63a.png",
    name: "😺 Smiling Cat Face With Open Mouth",
    meaning:
      "Laughing cat with open mouth. Means fun and smirking, mostly used by cat lovers. The cattiness might stand for femininity."
  },
  {
    id: 115,
    emoji:
      "https://www.emojimeanings.net/img/emojis/grinning-cat-face-with-smiling-eyes_1f638.png",
    name: "😸 Grinning Cat Face With Smiling Eyes",
    meaning:
      "Cat face, which is in a good mood. The eyes are smiling, it's grinning broadly and very satisfied. The chat partner can have fun with this cat."
  },
  {
    id: 116,
    emoji:
      "https://www.emojimeanings.net/img/emojis/cat-face-with-tears-of-joy_1f639.png",
    name: "😹 Cat Face With Tears of Joy",
    meaning:
      "Cat emoji with clenched eyes and open mouth. Is enthusiastic and helpless with laughter. Something is extremely funny or silly. You are relieved and have tears of joy in your eyes."
  },
  {
    id: 117,
    emoji:
      "https://www.emojimeanings.net/img/emojis/smiling-cat-face-with-heart-shaped-eyes_1f63b.png",
    name: "😻 Smiling Cat Face With Heart-Eyes",
    meaning:
      "Overjoyed, laughing cat face with hearts on the eyes. Is very much in love or very grateful for a friendly service. Likes something very much and expresses admiration that way."
  },
  {
    id: 118,
    emoji:
      "https://www.emojimeanings.net/img/emojis/cat-face-with-wry-smile_1f63c.png",
    name: "😼 Cat Face With Wry Smile",
    meaning:
      "Cat is laughing daringly with boldly raised corners of the mouth. It mocks you, is sarcastic or having fun at your expense. Might fancy a flirt. However, you had better be cautious."
  },
  {
    id: 119,
    emoji:
      "https://www.emojimeanings.net/img/emojis/kissing-cat-face-with-closed-eyes_1f63d.png",
    name: "😽 Kissing Cat Face With Closed Eyes",
    meaning:
      "Cat with red cheeks and eyes closed. Its lips are pointed and it wants to kiss you. Cats have a reputation for being very choosy and tend to show affection rather reluctantly."
  },
  {
    id: 120,
    emoji: "https://www.emojimeanings.net/img/emojis/weary-cat-face_1f640.png",
    name: "🙀 Weary Cat Face",
    meaning:
      "Cat is tired and exhausted. It has got hollow, white eyes and is holding its paws next to the mouth. Needs a break right now. Reaction to something scandalous or shocking."
  },
  {
    id: 121,
    emoji: "https://www.emojimeanings.net/img/emojis/crying-cat-face_1f63f.png",
    name: "😿 Crying Cat Face",
    meaning:
      "Cat face with down-turned eyebrows and corners of the mouth. A tear is running down the cheek. Just received bad news. Expression of empathy."
  },
  {
    id: 122,
    emoji:
      "https://www.emojimeanings.net/img/emojis/pouting-cat-face_1f63e.png",
    name: "😾 Pouting Cat Face",
    meaning:
      "Pouting face of a grumpy cat. The corners of the mouth and the whiskers are pointing downwards. Is in a bad mood, frustrated, and has turned away angrily. Known as the Grumpy Cat, a grumpy-looking cat that became an Internet phenomenon."
  },
  {
    id: 123,
    emoji: "https://www.emojimeanings.net/img/emojis/heart-hands_1faf6.png",
    name: "🫶 Heart Hands",
    meaning:
      "The fingers of these two joined hands form a heart. It can be used according to the red heart ❤ and represents love, gratitude and appreciation. Popular gesture on selfies or vacation pictures with friends."
  },
  {
    id: 124,
    emoji:
      "https://www.emojimeanings.net/img/emojis/palms-up-together_1f932.png",
    name: "🤲 Holding hands up, palms against each other",
    meaning:
      "I'm praying that everything will go smoothly today or “Can you lend me some money please?“ The upturned palms represent a form of praying or asking for handouts. In American sign language, the symbol of an open book."
  },
  {
    id: 125,
    emoji: "https://www.emojimeanings.net/img/emojis/open-hands-sign_1f450.png",
    name: "👐 Open Hands",
    meaning:
      "The two opened hands are stretched toward the counterpart. Represents affection and openness. Could also stand for a hug."
  },
  {
    id: 126,
    emoji:
      "https://www.emojimeanings.net/img/emojis/person-raising-both-hands-in-celebration_1f64c.png",
    name: "🙌 Person Raising Both Hands In Celebration",
    meaning:
      "Hallelujah! Hands are stretched upwards to celebrate. Is having a party, dancing wildly and friskily. Is in a good mood or having a lot of fun. Can also stand for “Banzai”, a Japanese cheer that brings luck and joy for 10,000 years."
  },
  {
    id: 127,
    emoji:
      "https://www.emojimeanings.net/img/emojis/clapping-hands-sign_1f44f.png",
    name: "👏 Clapping Hands",
    meaning:
      "Bravo, very well done! Emoji shows two clapping hands. Is mostly used for expressing consent and appreciation. Can also be used sarcastically, if something truly doesn't deserve any applause!"
  },
  {
    id: 128,
    emoji: "https://www.emojimeanings.net/img/emojis/handshake_1f91d.png",
    name: "🤝 Handshake",
    meaning:
      "Shake on it! The handshake can stand for a greeting or farewell, a sign of agreement or for a deal. Two people are holding hands or, in a figurative sense, to give someone a helping hand."
  },
  {
    id: 129,
    emoji: "https://www.emojimeanings.net/img/emojis/thumbs-up-sign_1f44d.png",
    name: "👍 “Thumbs-Up” Sign",
    meaning:
      "Well done! Hand with thumb turned up. Stands for commitment, agreement and approval! Caution: In Arab countries, this is interpreted as showing the two fingers."
  },
  {
    id: 130,
    emoji:
      "https://www.emojimeanings.net/img/emojis/thumbs-down-sign_1f44e.png",
    name: "👎 Thumbs Down Sign",
    meaning:
      "That was really bad! Thumb turned down stands for rejection, disapproval and dislike. Also known as the false death myth meaning with Roman gladiators."
  },
  {
    id: 131,
    emoji:
      "https://www.emojimeanings.net/img/emojis/fisted-hand-sign_1f44a.png",
    name: "👊 Fist Hand",
    meaning:
      "The stretched-out fist means “Check!“ an encouragement. Welcome between friends or gesture of agreement. Can also be interpreted as a threatening punch."
  },
  {
    id: 132,
    emoji: "https://www.emojimeanings.net/img/emojis/raised-fist_270a.png",
    name: "✊ Raised Fist",
    meaning:
      "I can do it! The raised fist implies power and strength. Stands for something you believe in. also meant as a political gesture and symbol of defiance, solidarity and resistance."
  },
  {
    id: 133,
    emoji:
      "https://www.emojimeanings.net/img/emojis/left-facing-fist_1f91b.png",
    name: "🤛 Fist Pointing Left",
    meaning:
      "In conjunction with other emojis a sign of a hit. Casual form of greeting. The gesture 🤜🤛 is known as fist check, fist greeting or colloquially as a ghetto fist."
  },
  {
    id: 134,
    emoji:
      "https://www.emojimeanings.net/img/emojis/right-facing-fist_1f91c.png",
    name: "🤜 Fist Pointing Right",
    meaning:
      "A hand clenched in a fist pointing to the right. The hand gesture is used to greet friends as a sign of respect as well as approval or congratulation."
  },
  {
    id: 135,
    emoji:
      "https://www.emojimeanings.net/img/emojis/hand-with-index-and-middle-fingers-crossed_1f91e.png",
    name: "🤞 Hand With Crossed Fingers",
    meaning:
      "The closed fist with crossed index and middle fingers is used to wish someone luck. Children usually use this gesture to annihilate a promise or oath."
  },
  {
    id: 136,
    emoji: "https://www.emojimeanings.net/img/emojis/victory-hand_270c.png",
    name: "✌ Victory Hand",
    meaning:
      "No offense! Symbol of peace, which became known in the 60s by the hippies. “V” hand signal stands for victory. In Great Britain, can be seen in an insulting way as a woman with spread-out legs."
  },
  {
    id: 137,
    emoji:
      "https://www.emojimeanings.net/img/emojis/hand-with-index-finger-and-thumb-crossed_1faf0.png",
    name: "🫰 Hand With Index Finger And Thumb Crossed",
    meaning:
      "The crossed thumb and index finger is a gesture that is often used in connection with money. Either to collect debts or because something costs a lot. In South Korea, on the other hand, the “finger heart“ stands for love and connection."
  },
  {
    id: 138,
    emoji:
      "https://www.emojimeanings.net/img/emojis/i-love-you-hand-sign_1f91f.png",
    name: "🤟 I Love You Gesture",
    meaning:
      "In the American sign language, the fist with outstretched little finger, index finger and thumb means “I love you“. The ILY sign mainly conveys a general, positive message."
  },
  {
    id: 139,
    emoji:
      "https://www.emojimeanings.net/img/emojis/sign-of-the-horns_1f918.png",
    name: "🤘 Sign of the Horns",
    meaning:
      "Rock on! Little finger and forefinger are forming horns. The metal horn is a gesture of metal rock fans. Can have many meanings, such as unfaithfulness (by horny husband/wife), sign to ward off misfortune, devil's salutation or sacred gesture in Buddhism."
  },
  {
    id: 140,
    emoji: "https://www.emojimeanings.net/img/emojis/ok-hand-sign_1f44c.png",
    name: "👌 Ok Hand Sign",
    meaning:
      "Thumb and forefinger form an O. Symbol for “Okay!“ Sign of approval, agreement or that everything is okay. Careful, in some countries it is considered offensive and insulting (“you a**hole“)."
  },
  {
    id: 141,
    emoji: "https://www.emojimeanings.net/img/emojis/pinched-fingers_1f90c.png",
    name: "🤌 Pinched fingers",
    meaning:
      "What do you want?! “Ma che vuoi” is one of the most famous gestures in Italy. Universally applicable when someone asks for something or when you wish for something yourself. The more often the gesture is used, the more impatient or frustrated the other person is."
  },
  {
    id: 142,
    emoji: "https://www.emojimeanings.net/img/emojis/pinching-hand_1f90f.png",
    name: "🤏 Pinching hand",
    meaning:
      "Just this tiny bit is missing! Thumb and forefinger are close together to grab a small object. Indication that something is small or only available in small quantities."
  },
  {
    id: 143,
    emoji: "https://www.emojimeanings.net/img/emojis/palm-down-hand_1faf3.png",
    name: "🫳 Palm Down Hand",
    meaning:
      "I hold the threads in my hand! The palm of the hand points downward. It is reaching for something or letting go of something. In some cultures, this sign is also used as a request (“Get lost“ or “Go slowly“)."
  },
  {
    id: 144,
    emoji: "https://www.emojimeanings.net/img/emojis/palm-up-hand_1faf4.png",
    name: "🫴 Palm Up Hand",
    meaning:
      "Give it to me! A hand with the palm open upward, as if demanding, catching, or offering something. But it can also mean “Follow me“ or “I extend my hand to you“. Whether the interpretation is positive or negative depends on the context."
  },
  {
    id: 145,
    emoji:
      "https://www.emojimeanings.net/img/emojis/white-left-pointing-backhand-index_1f448.png",
    name: "👈 Back Of Hand Pointing To The Left",
    meaning:
      "Right this way! Trigger finger shows to the left. Is meant to point in a certain direction, indicate something or mark the important part of a message."
  },
  {
    id: 146,
    emoji:
      "https://www.emojimeanings.net/img/emojis/white-right-pointing-backhand-index_1f449.png",
    name: "👉 Back Of Hand Pointing To The Right",
    meaning:
      "Trigger finger shows to the right. Draws your attention to something following or wants to remind you of something. Can also be an admonishing wiggling of the trigger finger."
  },
  {
    id: 147,
    emoji:
      "https://www.emojimeanings.net/img/emojis/white-up-pointing-backhand-index_1f446.png",
    name: "👆 Back Of Hand Pointing Upwards",
    meaning:
      "Lifting the forefinger up as a warning or to emphasize a statement. Can also mean “I've got time“ or “I'm in it“. Wants to draw attention to something."
  },
  {
    id: 148,
    emoji:
      "https://www.emojimeanings.net/img/emojis/white-down-pointing-backhand-index_1f447.png",
    name: "👇 Back Of Hand Pointing Downwards",
    meaning:
      "Hand with raised forefinger pointing down. You want to draw attention to something: look at the text below! Or you don't feel well, you are feeling down."
  },
  {
    id: 149,
    emoji:
      "https://www.emojimeanings.net/img/emojis/white-up-pointing-index_261d.png",
    name: "☝ Up Pointing Index",
    meaning:
      "The raised forefinger stands for a threat: Beware! Could also be a gesture of instruction. Someone has an announcement to make or something important to say."
  },
  {
    id: 150,
    emoji: "https://www.emojimeanings.net/img/emojis/raised-hand_270b.png",
    name: "✋ Raised Hand",
    meaning:
      "Emoji shows a raised palm with fingers. It stands for a welcome or farewell as well as for “Stop, I've had enough!“ High five want to congratulate or celebrate a success."
  },
  {
    id: 151,
    emoji:
      "https://www.emojimeanings.net/img/emojis/raised-back-of-hand_1f91a.png",
    name: "🤚 Raised Back of Hand",
    meaning:
      "A raised hand, which is shown in reverse position (back of the hand is in the front). Someone wants to draw attention to himself, e.g. to ask something or to signalize his participation."
  },
  {
    id: 152,
    emoji:
      "https://www.emojimeanings.net/img/emojis/raised-hand-with-fingers-splayed_1f590.png",
    name: "🖐 Raised Hand With Fingers Splayed",
    meaning:
      "“Don't come closer” or “Stop, wait!” The spread out hand can also indicate the number 5 or a high five."
  },
  {
    id: 153,
    emoji:
      "https://www.emojimeanings.net/img/emojis/raised-hand-with-part-between-middle-and-ring-fingers_1f596.png",
    name: "🖖 Mr. Spock Greeting",
    meaning:
      "Fingers are spread between the ring and middle finger, creating a “V“. A hand sign based on sacred Jewish letters. The gesture has become known by the series “Star Trek“ and Mr. Spock: Live long and in peace."
  },
  {
    id: 154,
    emoji:
      "https://www.emojimeanings.net/img/emojis/waving-hand-sign_1f44b.png",
    name: "👋 Waving Hand",
    meaning:
      "Hello and goodbye! Have a good trip! A friendly waving hand. Can be used as a welcome or farewell. Or sarcastically, if you wished someone or something would disappear."
  },
  {
    id: 155,
    emoji: "https://www.emojimeanings.net/img/emojis/call-me-hand_1f919.png",
    name: "🤙 “Call Me” Hand Sign",
    meaning:
      "The closed fist with abducted thumb and little finger has a phone-like shape. “Call me“ or “Let's have a call soon“. Similar to the surfer greeting “Hang loose“."
  },
  {
    id: 156,
    emoji: "https://www.emojimeanings.net/img/emojis/leftwards-hand_1faf2.png",
    name: "🫲 Leftwards Hand",
    meaning:
      "I extend my hand to you! The hand is directed to the left. Could represent a peace offering. It represents a helping hand, reaching for something, or in combination with the hand pointing to the right, a handshake."
  },
  {
    id: 157,
    emoji: "https://www.emojimeanings.net/img/emojis/rightwards-hand_1faf1.png",
    name: "🫱 Rightwards Hand",
    meaning:
      "Turn right! The hand points to the right. Can stand for the hand itself or the movement, such as touch, take, point. Combined with the hand pointing to the left, the emojis make a handshake. 🫱🫲"
  },
  {
    id: 158,
    emoji: "https://www.emojimeanings.net/img/emojis/flexed-biceps_1f4aa.png",
    name: "💪 Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 159,
    emoji: "https://www.emojimeanings.net/img/emojis/mechanical-arm_1f9be.png",
    name: "🦾 Mechanical arm",
    meaning:
      "Be as strong as a robot! The high-tech arm prosthesis enables amputees to move their arms and hands. Expresses enthusiasm for Star Wars, robot technology, bionics or science fiction."
  },
  {
    id: 160,
    emoji:
      "https://www.emojimeanings.net/img/emojis/reversed-hand-with-middle-finger-extended_1f595.png",
    name: "🖕 Reversed Hand With Middle Finger Extended",
    meaning:
      "In western culture, the middle finger smiley is used as a rude and offensive gesture."
  },
  {
    id: 161,
    emoji: "https://www.emojimeanings.net/img/emojis/writing-hand_270d.png",
    name: "✍ Writing Hand",
    meaning:
      "Right hand writing with a pen. Is related to writing. I'll contact you and write a message to you. There will be a test in school. You're writing a poem for your honey."
  },
  {
    id: 162,
    emoji:
      "https://www.emojimeanings.net/img/emojis/person-with-folded-hands_1f64f.png",
    name: "🙏 Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 163,
    emoji:
      "https://www.emojimeanings.net/img/emojis/index-pointing-at-the-viewer_1faf5.png",
    name: "🫵 Index Pointing At The Viewer",
    meaning:
      "You! The index finger of the hand points to the viewer. The sign can stand for “You are meant“ or “You deserve it“. Also often used in marketing to attract attention."
  },
  {
    id: 164,
    emoji: "https://www.emojimeanings.net/img/emojis/foot_1f9b6.png",
    name: "🦶 Foot",
    meaning:
      "Finally walking barefoot again. You are standing on your own feet or would like to receive a foot massage from your sweetheart. Some like feet, others hate them, some have smelly feet and others have their feet well-tended. Our feet carry us and are the symbolic foundation of our body."
  },
  {
    id: 165,
    emoji: "https://www.emojimeanings.net/img/emojis/leg_1f9b5.png",
    name: "🦵 Leg",
    meaning:
      "You have got great legs or “I am going to do leg training tomorrow“. In the course of our lives, our legs carry us for 130.000 km. That is about three times around the earth. Man, as the only creature, is moving on two legs. The leg contains our body's largest bone, the largest joint and the largest muscle."
  },
  {
    id: 166,
    emoji: "https://www.emojimeanings.net/img/emojis/mechanical-leg_1f9bf.png",
    name: "🦿 Mechanical leg",
    meaning:
      "We're watching RoboCop! In connection with leg amputees or accessibility. Expresses an interest in science fiction or robot technology. The legs are as stiff as those of a robot: the soccer or leg training in the studio was too hard."
  },
  {
    id: 167,
    emoji: "https://www.emojimeanings.net/img/emojis/ring_1f48d.png",
    name: "💍 Ring",
    meaning:
      "Will you marry me? Also “I'm spoken for!” The ring is set with a diamond, the most precious gem ever. Is mostly used in conjunction with relationships or for expressing approval."
  },
  {
    id: 168,
    emoji: "https://www.emojimeanings.net/img/emojis/lipstick_1f484.png",
    name: "💄 Lipstick",
    meaning:
      "I'll dress up! The lipstick beautifies millions of women's lips worldwide. The signal color red is associated with passion, liveliness and attractiveness. Stands for parties, fashion and fun. Often also combined with e.g. the dancing emoji 💄💃 to plan a fun evening."
  },
  {
    id: 169,
    emoji: "https://www.emojimeanings.net/img/emojis/kiss-mark_1f48b.png",
    name: "💋 Kiss Mark",
    meaning:
      "Red sensual lip print. Would like to give you a kiss, thereby leaving an imprint of the lipstick. Can mean “You're so nice” or “Many thanks!”"
  },
  {
    id: 170,
    emoji: "https://www.emojimeanings.net/img/emojis/mouth_1f444.png",
    name: "👄 Mouth",
    meaning:
      "A slightly opened mouth and red, full lips have a strong, attractive signaling effect on both sexes. “I'll send you a kiss“ or “Tonight I'm going to sing at a party“."
  },
  {
    id: 171,
    emoji: "https://www.emojimeanings.net/img/emojis/biting-lip_1fae6.png",
    name: "🫦 Biting Lip",
    meaning:
      "The bite on the lip signals: I find you hot and want to flirt! But it can also be used as a symbol of anxiety, tension or insecurity. Ask your conversation partner about his thoughts."
  },
  {
    id: 172,
    emoji: "https://www.emojimeanings.net/img/emojis/tooth_1f9b7.png",
    name: "🦷 Tooth",
    meaning:
      "I have got a toothache or someone is getting a bit long in the tooth. You need to brush your teeth now or you indulge in your sweet tooth. Enamel is the hardest material in the human body. 22 million bacteria live in a mouth."
  },
  {
    id: 173,
    emoji: "https://www.emojimeanings.net/img/emojis/tongue_1f445.png",
    name: "👅 Tongue",
    meaning:
      "Sticking out the tongue is a naughty gesture and a childish sign of defiance. Can be used to reinforce a joke or to tease and provoke. I am in a good mood and ready for jokes!"
  },
  {
    id: 174,
    emoji: "https://www.emojimeanings.net/img/emojis/ear_1f442.png",
    name: "👂 Ear",
    meaning:
      "The ear emoji can mean “I can hear something” or “You have my full attention”. The ear is also one of the erotic zones of man and woman."
  },
  {
    id: 175,
    emoji:
      "https://www.emojimeanings.net/img/emojis/ear-with-hearing-aid_1f9bb.png",
    name: "🦻 Ear with hearing aid",
    meaning:
      "I cannot hear you! 466 million people worldwide are hard of hearing. Hearing aids improve the quality of life. Perhaps you have a hearing aid yourself, are hearing impaired, or don't want to hear certain things at all."
  },
  {
    id: 176,
    emoji: "https://www.emojimeanings.net/img/emojis/nose_1f443.png",
    name: "👃 Nose",
    meaning:
      "The nose generally stands for the olfactory sense. Emoji indicates that something has a strong scent. Depending on the context, this may be nice or unpleasant."
  },
  {
    id: 177,
    emoji: "https://www.emojimeanings.net/img/emojis/footprints_1f463.png",
    name: "👣 Footprints",
    meaning:
      "Two footprints suggest difficulties, which will soon be overcome by your own efforts. Also used as a symbol for a baby's feet, or: I'm on the way!"
  },
  {
    id: 178,
    emoji: "https://www.emojimeanings.net/img/emojis/eye_1f441.png",
    name: "👁 Eye",
    meaning:
      "I have an eye on you! Something is interesting to watch or is being observed. In ancient cultures often a religious sign, such as the eye of Horus or the evil eye in the Orient."
  },
  {
    id: 179,
    emoji: "https://www.emojimeanings.net/img/emojis/eyes_1f440.png",
    name: "👀 Eyes",
    meaning:
      "Beware, someone is watching you! Two eyes are looking to the left. Something is being watched or checked. You're under observation!"
  },
  {
    id: 180,
    emoji: "https://www.emojimeanings.net/img/emojis/brain_1f9e0.png",
    name: "🧠 Brain",
    meaning:
      "Use your brain!, “I am taxing my brain right now“, or “brainwashing someone“. Our most important organ controls our body and personality. The human brain weighs 1.3 kg, consists of 60 % fat and consumes 20 % of the basal metabolic rate."
  },
  {
    id: 181,
    emoji:
      "https://www.emojimeanings.net/img/emojis/anatomical-heart_1fac0.png",
    name: "🫀 Anatomical heart",
    meaning:
      "You’ve got a big heart! The heart symbolizes love but also life. The heart beats around 3 billion times in the course of a lifetime. The lifelike image is often used in connection with a doctor or health."
  },
  {
    id: 182,
    emoji: "https://www.emojimeanings.net/img/emojis/lungs_1fac1.png",
    name: "🫁 Lungs",
    meaning:
      "I should stop smoking! Anatomically correct image of the lungs. The vital organ is responsible for breathing. In connection with the respiratory tract, health or doctors."
  },
  {
    id: 183,
    emoji: "https://www.emojimeanings.net/img/emojis/bone_1f9b4.png",
    name: "🦴 Bone",
    meaning:
      "I am chilled to the bone. You work your fingers to the bone or you are skin and bones. Dog treat or part of the body. The human skeleton consists of 200 bones weighing about 15 % of the total body weight."
  },
  {
    id: 184,
    emoji:
      "https://www.emojimeanings.net/img/emojis/speaking-head-in-silhouette_1f5e3.png",
    name: "🗣 Talking Head",
    meaning:
      "The silhouette of a talking face. Can refer to rumors or to a person who likes to talk a lot. The news is already circulating!"
  },
  {
    id: 185,
    emoji:
      "https://www.emojimeanings.net/img/emojis/bust-in-silhouette_1f464.png",
    name: "👤 Silhouette of a Bust",
    meaning:
      "Silhouette of a person, a shadow. Represents anonymity, secrets and unknown things. Is often used as a symbol for a user or a guest profile in software or with computers."
  },
  {
    id: 186,
    emoji:
      "https://www.emojimeanings.net/img/emojis/busts-in-silhouette_1f465.png",
    name: "👥 Silhouette Of Two Busts",
    meaning:
      "The silhouette of two people. A friend you can rely on is standing behind you. Also symbolizes a community or group."
  },
  {
    id: 187,
    emoji: "https://www.emojimeanings.net/img/emojis/people-hugging_1fac2.png",
    name: "🫂 People hugging",
    meaning:
      "We’ll always be there for one another! You could use some affection or as a gesture that you would like to hug the other person. A hug expresses physical closeness, affection, comfort and security."
  },
  {
    id: 188,
    emoji: "https://www.emojimeanings.net/img/emojis/baby_1f476.png",
    name: "👶 Baby",
    meaning:
      "A baby face with a ringlet. Emoji can indicate an imminent pregnancy or the desire for a child."
  },
  {
    id: 189,
    emoji: "https://www.emojimeanings.net/img/emojis/girl_1f467.png",
    name: "👧 Girl",
    meaning:
      "Face of a smiling girl with cute pigtails. Represents youth and a happy childhood. “Don't be girlish“ or “girl Friday“."
  },
  {
    id: 190,
    emoji: "https://www.emojimeanings.net/img/emojis/child_1f9d2.png",
    name: "🧒 Child",
    meaning:
      "I want to have many children in the future! The gender-neutral variant of a child's face. Someone behaves childish or immature and should grow up urgently!"
  },
  {
    id: 191,
    emoji: "https://www.emojimeanings.net/img/emojis/boy_1f466.png",
    name: "👦 Boy",
    meaning:
      "Male child, between eight and twelve years old. Is related to children, childhood and family. Can also be used to signal that someone is behaving childishly."
  },
  {
    id: 192,
    emoji: "https://www.emojimeanings.net/img/emojis/adult_1f9d1.png",
    name: "🧑 Adult",
    meaning:
      "The adults are in the majority today! The gender-neutral version of an adult person. It's about a group or an individual whose gender does not matter."
  },
  {
    id: 193,
    emoji: "https://www.emojimeanings.net/img/emojis/man_1f468.png",
    name: "👨 Man",
    meaning:
      "Male adult face with mustache. Simple and common emoji. Can generally be used for men, e.g. you talk about someone whose name you do not know."
  },
  {
    id: 194,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-curly-haired_1f469-200d-1f9b1.png",
    name: "👩‍🦱 Curly-haired woman",
    meaning:
      "Woman with curly hair. The emoji illustrates how one self or other people look like. You have just come from the hairdresser's or want to change your hair into a head of curls for the party. It is genetically determined if someone has straight or curly hair."
  },
  {
    id: 195,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-curly-haired_1f468-200d-1f9b1.png",
    name: "👨‍🦱 Curly-haired man",
    meaning:
      "A man with curly hair: Australian surfer boy or guy with pompadour. This emoji illustrates the look of the new boyfriend, colleague or neighbor. Only 15% of the people of European descent have curls."
  },
  {
    id: 196,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-red-haired_1f469-200d-1f9b0.png",
    name: "👩‍🦰 Red-haired woman",
    meaning:
      "Julianne Moore, Nicole Kidman or Pippi Longstocking. In Germany, only two percent have naturally red hair, worldwide about one percent, and the rest had a little help. You are proud of your hair color or would like to announce that you have been at the hairdresser's."
  },
  {
    id: 197,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-red-haired_1f468-200d-1f9b0.png",
    name: "👨‍🦰 Red-haired man",
    meaning:
      "Prince Harry, Vincent van Gogh, Boris Becker or Robert Redford. Red hair is rare: Only about one to two percent of the world's population have this hair color. Mostly in combination with fair skin and freckles. At 13 %, Scotland has the highest proportion of redheads, followed by Ireland and Wales."
  },
  {
    id: 198,
    emoji:
      "https://www.emojimeanings.net/img/emojis/blonde-woman_1f471-200d-2640-fe0f.png",
    name: "👱‍♀️ Blond woman",
    meaning:
      "Marilyn Monroe or Pamela Anderson. Blond angel, choir girl, blond bombshell, silly or sexpot: No other hair color is more tainted with stereotype. Worldwide, only 2% are naturally blond, though, the rest had a little help."
  },
  {
    id: 199,
    emoji:
      "https://www.emojimeanings.net/img/emojis/blond-man_1f471-200d-2642-fe0f.png",
    name: "👱‍♂️ Blond man",
    meaning:
      "The attractive Swede, the stereotype of a surfer, Daniel Craig or the nice new neighbor. Only 2% of the world's population is blond. Most blondies live in Northern Europe. Men rarely stay blond, their hair gets darker with increasing age."
  },
  {
    id: 200,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-white-haired_1f469-200d-1f9b3.png",
    name: "👩‍🦳 White-haired woman",
    meaning:
      "This has given me a lot of gray hairs! Or “I need to dye my hair!“ Gray hair stands for wisdom, kindness and happiness. Dyed “granny hair“ is a trend. Natural gray is a taboo, at least with the celebrities."
  },
  {
    id: 201,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-white-haired_1f468-200d-1f9b3.png",
    name: "👨‍🦳 White-haired man",
    meaning:
      "Aging with dignity or growing gray hair because of stress. Due to genetic factors or external influences, the hair becomes gray. Fact: Eight out of every 10 women find gray-haired men attractive. Represents maturity and experience."
  },
  {
    id: 202,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-bald_1f469-200d-1f9b2.png",
    name: "👩‍🦲 Bald woman",
    meaning:
      "Sinéad O'Connor or Britney Spears. The clear-cut can stand for a fashion statement, expression of sexual determination but also for a serious illness. Also a trend in the social media (#boldandbadchallenge)."
  },
  {
    id: 203,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-bald_1f468-200d-1f9b2.png",
    name: "👨‍🦲 Bald man",
    meaning:
      "I am slowly getting bald! Vin Diesel, Bruce Willis or Jason Statham – many action heroes are bald. Represents strength and dominance. 66% of all men over the age of 35 are affected by loss of hair. Symbol of the aging process. But there can also be a serious illness behind the hair loss."
  },
  {
    id: 204,
    emoji: "https://www.emojimeanings.net/img/emojis/bearded-person_1f9d4.png",
    name: "🧔 Bearded person",
    meaning:
      "He is a real nature-boy or “You look like a hipster“. Full beard, goatee beard, mustache or three-day beard. Symbol of maturity, masculinity and wisdom of the age."
  },
  {
    id: 205,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-beard_1f9d4-200d-2640-fe0f.png",
    name: "🧔‍♀️ Woman with beard",
    meaning:
      "The long-haired woman has a beard. Perhaps due to genetic predisposition or a hormonal disorder. She had to be a “man's man”, that is, meet the expectations that are placed on men in particular. A beard stands for power, strength and self-confidence."
  },
  {
    id: 206,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-beard_1f9d4-200d-2642-fe0f.png",
    name: "🧔‍♂️ Man with beard",
    meaning:
      "Man with long hair and hair growing on his face. With this, beard lovers express individuality, but above all potency and masculinity. Formerly a typical symbol of a barbarian, now a fashion trend."
  },
  {
    id: 207,
    emoji: "https://www.emojimeanings.net/img/emojis/older-woman_1f475.png",
    name: "👵 Elderly Woman",
    meaning:
      "Go to the granny farm! A friendly elderly woman with glasses and a bun. Can refer to a family member or the nice, elder neighbor."
  },
  {
    id: 208,
    emoji: "https://www.emojimeanings.net/img/emojis/older-adult_1f9d3.png",
    name: "🧓 Elderly adult",
    meaning:
      "This rather concerns the older generation! Not yet old, but neither young anymore. Gender-neutral version of an older person. It is about people of mature age in general, where gender does not matter."
  },
  {
    id: 209,
    emoji: "https://www.emojimeanings.net/img/emojis/older-man_1f474.png",
    name: "👴 Old Man",
    meaning:
      "Friendly looking elderly gentleman with wrinkles and bald head. Represents aging in general, a father figure, the grandfather, possibly a teacher. The emoji can express how you feel after a hard day or call your chat partner old-fashioned."
  },
  {
    id: 210,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-with-gua-pi-mao_1f472.png",
    name: "👲 Man with Chinese cap",
    meaning:
      "The Asian man is wearing a traditional Chinese headgear, called gau pi mao. Was worn during the Qing dynasty 1616-1912, China’s last dynasty. In the context of China: culture, people, country."
  },
  {
    id: 211,
    emoji: "https://www.emojimeanings.net/img/emojis/man-with-turban_1f473.png",
    name: "👳 Person with turban",
    meaning:
      "Stories from One Thousand and One Nights! Several long strips of fabric are wrapped around the head using a special technique. Symbol of the Orient and Muslim countries. The turban also has a protective function, it protects against sand and sun and is a fashionable accessory."
  },
  {
    id: 212,
    emoji:
      "https://www.emojimeanings.net/img/emojis/person-with-headscarf_1f9d5.png",
    name: "🧕 Person with scarf",
    meaning:
      "Triangular or suitably folded fabric for headgear. Is worn for practical, religious, cultural or fashionable reasons. The inventor of the emoji is a 16-year-old girl from Vienna who has since been on the list of the most influential teenagers in 2017."
  },
  {
    id: 213,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-police-officer_1f46e-200d-2640-fe0f.png",
    name: "👮‍♀️ Police woman",
    meaning:
      "Wanted by the police! Occupationally, the woman in the police uniform has to do with the fight against crime or she carries out private investigations. Beware, someone is watching over law and order!"
  },
  {
    id: 214,
    emoji: "https://www.emojimeanings.net/img/emojis/police-officer_1f46e.png",
    name: "👮 Policeman",
    meaning:
      "Your friendly police department. Often used in police context. Got caught driving faster than a speeding bullet. Or is investigating a case, getting to the bottom of something!"
  },
  {
    id: 215,
    emoji:
      "https://www.emojimeanings.net/img/emojis/construction-worker_1f477.png",
    name: "👷 Builder",
    meaning:
      "This emoji shows a construction worker with helmet and safety vest. Used in connection with hard physical work."
  },
  {
    id: 216,
    emoji: "https://www.emojimeanings.net/img/emojis/guardsman_1f482.png",
    name: "💂 Guardsman",
    meaning:
      "I will watch over it! The guardsmen with bearskin caps and red uniforms are a symbol of England. The changing of the guard at Buckingham Palace is as popular with tourists as the latter's trying to elicit a response from the guards."
  },
  {
    id: 217,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-sleuth_1f575-fe0f-200d-2640-fe0f.png",
    name: "🕵️‍♀️ Female detective",
    meaning:
      "I am getting on to the track of the truth! Trench coat, hat and dark sunglasses: The woman is investigating in secrecy. She reveals secrets and exposes bad intentions. Enough with the secrets!"
  },
  {
    id: 218,
    emoji: "https://www.emojimeanings.net/img/emojis/sleuth-or-spy_1f575.png",
    name: "🕵 Detective",
    meaning:
      "An undercover agent with the distinctive coat and hat. Sometimes he uses a magnifying glass to closely inspect evidence. The covered face stands for confidentiality or secrecy. I will solve the mystery!"
  },
  {
    id: 219,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-health-worker_1f469-200d-2695-fe0f.png",
    name: "👩‍⚕️ Female staff in public health",
    meaning:
      "My medical studies are really exhausting! The woman in a white lab coat and stethoscope symbolizes healthcare. Can illustrate the profession or stand for health or illness."
  },
  {
    id: 220,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-health-worker_1f468-200d-2695-fe0f.png",
    name: "👨‍⚕️ Male staff in public health",
    meaning:
      "Please send for the doctor! Symbolizes healthcare and can represent a doctor, nurse, therapist or surgeon. Someone has health problems or has an appointment with the doctor."
  },
  {
    id: 221,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-farmer_1f469-200d-1f33e.png",
    name: "👩‍🌾 Female farmer",
    meaning:
      "We are going on a farm holiday! Nature, animals, meadows and fields. The woman in a straw hat and dungarees works in agriculture, grows fruit and vegetables or is nature-loving."
  },
  {
    id: 222,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-farmer_1f468-200d-1f33e.png",
    name: "👨‍🌾 Male farmer",
    meaning:
      "We are going to the countryside! The man wears a straw or cowboy hat and dungarees. Refers to rural life, agriculture, horticulture or stock farming. Represents a close affinity to nature or a self-supporter."
  },
  {
    id: 223,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-cook_1f469-200d-1f373.png",
    name: "👩‍🍳 Female cook",
    meaning:
      "I'm going to convince you of my cooking skills tonight! The woman with the characteristic chef's working clothes is a gourmet chef or an amateur cook, works in the catering trade or might not have any cooking talent at all."
  },
  {
    id: 224,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-cook_1f468-200d-1f373.png",
    name: "👨‍🍳 Male cook",
    meaning:
      "Too many cooks spoil the broth! The man is wearing a chef's jacket as well as a chef's hat and is responsible for the preparation of tasty food. Whereas men are often only able to “cook“ fried eggs at home, you can find more men than women in professional kitchens."
  },
  {
    id: 225,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-student_1f469-200d-1f393.png",
    name: "👩‍🎓 Female student",
    meaning:
      "The swotting was worth the trouble, now the celebration can start! The school, vocational training, further education or the studies were successfully completed. Represents education and knowledge."
  },
  {
    id: 226,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-student_1f468-200d-1f393.png",
    name: "👨‍🎓 Male student",
    meaning:
      "A brand new university graduate! At some colleges, cap and gown or doctoral cap are worn at graduation ceremonies following the American example. Symbol for (further) education."
  },
  {
    id: 227,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-singer_1f469-200d-1f3a4.png",
    name: "👩‍🎤 Female singer",
    meaning:
      "You can buy this for a song! Whether in the car or on the grand stage, the female singer at the microphone loves the show and enjoys entertaining her audience. Can also stand for the lust for life, lightheartedness and a carefree time."
  },
  {
    id: 228,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-singer_1f468-200d-1f3a4.png",
    name: "👨‍🎤 Male singer",
    meaning:
      "You are a born entertainer! The man at the microphone is either a pop star, singing in the shower or he enjoys singing his own praises. Depending on the version, the singer looks like David Bowie or Prince."
  },
  {
    id: 229,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-teacher_1f469-200d-1f3eb.png",
    name: "👩‍🏫 Female teacher",
    meaning:
      "A woman with class: the teacher. A woman is standing in front of a blackboard in order to teach. Two thirds of all educators are female. Hardly any other profession is confronted with more prejudices."
  },
  {
    id: 230,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-teacher_1f468-200d-1f3eb.png",
    name: "👨‍🏫 Male teacher",
    meaning:
      "I wish I was a teacher! You are very happy with the new lecturer, teacher or professor. Symbolizes any kind of educational institution where teaching takes place. It can also be used jokingly if you teach the other person or play the eager beaver."
  },
  {
    id: 231,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-factory-worker_1f469-200d-1f3ed.png",
    name: "👩‍🏭 Female factory worker",
    meaning:
      "I'm an amateur craftswoman now! The woman is wearing protective goggles and clothing and is holding a going welding apparatus in her hand. You are a worker in manufacturing or in the metal industry, interested in physics and chemistry or like to repair things."
  },
  {
    id: 232,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-factory-worker_1f468-200d-1f3ed.png",
    name: "👨‍🏭 Male factory worker",
    meaning:
      "This will weld us together! During welding, parts are permanently interconnected. For protection, special goggles and resistant clothing must be worn. The man works in manufacturing, in a factory or is an amateur craftsman."
  },
  {
    id: 233,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-technologist_1f469-200d-1f4bb.png",
    name: "👩‍💻 Female technologist",
    meaning:
      "You spend too much time online! A computer freak, student, blogger or online shopping enthusiast. The woman spends a lot of time in front of the computer because of her hobby, her education or her job."
  },
  {
    id: 234,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-technologist_1f468-200d-1f4bb.png",
    name: "👨‍💻 Male technologist",
    meaning:
      "I find new technologies exciting! The man is sitting in front of the computer or laptop and is working, either as a developer or IT expert. Someone is spending too much time online playing video games."
  },
  {
    id: 235,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-office-worker_1f469-200d-1f4bc.png",
    name: "👩‍💼 Female office worker",
    meaning:
      "I'll stay in the office longer today! The woman in business attire works as an employee, businesswoman, assistant or manager in an office."
  },
  {
    id: 236,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-office-worker_1f468-200d-1f4bc.png",
    name: "👨‍💼 Male office worker",
    meaning:
      "Represents pencil pushers or suits. Whether employee, director, manager or businessman: The clothes indicate an office job. Or the man is dressing up and wearing the new suit."
  },
  {
    id: 237,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-mechanic_1f469-200d-1f527.png",
    name: "👩‍🔧 Female mechanic",
    meaning:
      "I can do that myself! or “I need to bring my car to the garage!“ The woman is wearing a boiler suit for her profession or wants to emphasize her ability to repair things."
  },
  {
    id: 238,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-mechanic_1f468-200d-1f527.png",
    name: "👨‍🔧 Male mechanic",
    meaning:
      "I'm going to work on the car later! or “I can fix everything!“ The man in the boiler suit could be working as an electrician, craftsman, plumber or mechanic. Stands for manual skills or maybe for their absence."
  },
  {
    id: 239,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-scientist_1f469-200d-1f52c.png",
    name: "👩‍🔬 Female scientist",
    meaning:
      "I'm experimenting a little! With the color of my hair, in the kitchen or in the laboratory. Goggles and lab coat indicate a female biologist, chemist, physicist or scientist. Shows an interest in chemistry or illustrates that a solution is being searched for."
  },
  {
    id: 240,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-scientist_1f468-200d-1f52c.png",
    name: "👨‍🔬 Male scientist",
    meaning:
      "What will be the outcome of it? The man is wearing goggles and a lab coat and works as a scientist or researcher in a laboratory. Something is still in the experimental stage, but they are already researching the solution."
  },
  {
    id: 241,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-artist_1f469-200d-1f3a8.png",
    name: "👩‍🎨 Female artist",
    meaning:
      "Don't paint a gloomy picture of everything! A woman with the stereotypical beret on her head and with a paintbrush and painter's palette in her hand. She is an artist by profession, has discovered a new hobby for herself or is painting the apartment. Expression of creativity and self-realization."
  },
  {
    id: 242,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-artist_1f468-200d-1f3a8.png",
    name: "👨‍🎨 Male artist",
    meaning:
      "Don't always paint everything in black and white or gray and drab! A painter with a paintbrush and painter's palette in his hand. Represents creative talent, originality and self-realization."
  },
  {
    id: 243,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-firefighter_1f469-200d-1f692.png",
    name: "👩‍🚒 Female firefighter",
    meaning:
      "Firefighters advance when something is burning. A hot discussion is going on, a childhood dream job is coming true, there is a fire somewhere or the kitchen fire from your last attempt to cook could be extinguished by yourself."
  },
  {
    id: 244,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-firefighter_1f468-200d-1f692.png",
    name: "👨‍🚒 Male firefighter",
    meaning:
      "What's the fire? The firefighters' protective clothing protects firefighters from the high temperatures. The fire department extinguishes fires, saves lives and sometimes cats from trees. Used in conjunction with safety, fire protection and the job profile."
  },
  {
    id: 245,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-pilot_1f469-200d-2708-fe0f.png",
    name: "👩‍✈️ Female pilot",
    meaning:
      "Welcome on board, this is your pilot speaking! The woman in a uniform, epaulettes with stripes and a cap navigates a plane. Represents dreams, change and freedom. In 1988 a female co-pilot was in a cockpit for the first time, in 2000 the first female captain."
  },
  {
    id: 246,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-pilot_1f468-200d-2708-fe0f.png",
    name: "👨‍✈️ Male pilot",
    meaning:
      "This is your captain speaking, we are entering our final approach! The man with a uniform, brevet and cap is a (future) pilot. Refers to flying or navigating and aircraft in general."
  },
  {
    id: 247,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-astronaut_1f469-200d-1f680.png",
    name: "👩‍🚀 Female astronaut",
    meaning:
      "Discover new things, reach unexpected heights or leave everything behind! The female astronaut (Lat. star traveler) is going on an exploring expedition to space. The childhood dream of many. Often used in connection with the universe."
  },
  {
    id: 248,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-astronaut_1f468-200d-1f680.png",
    name: "👨‍🚀 Male astronaut",
    meaning:
      "As a kid I wanted to become an astronaut! The astronaut in a space suit explores the universe in a spaceship. Also used to express interest in space travel and planets. Represents the desire to discover something new and to increase the expansion of the mind."
  },
  {
    id: 249,
    emoji:
      "https://www.emojimeanings.net/img/emojis/female-judge_1f469-200d-2696-fe0f.png",
    name: "👩‍⚖️ Female judge",
    meaning:
      "Woman is wearing a black robe and holding a judge's gavel. The task of judges is jurisprudence. Can be used in connection with courts or the judiciary. A decision must be made or justice must prevail!"
  },
  {
    id: 250,
    emoji:
      "https://www.emojimeanings.net/img/emojis/male-judge_1f468-200d-2696-fe0f.png",
    name: "👨‍⚖️ Male judge",
    meaning:
      "Guilty as charged! or “No plaintiff, no judge“. The judge stands for law as well as for justice."
  },
  {
    id: 251,
    emoji: "https://www.emojimeanings.net/img/emojis/bride-with-veil_1f470.png",
    name: "👰 Bride",
    meaning:
      "I'm getting married! Refers to the bride herself, a marriage or a soon-to-be wedding. Can be used for invitations, wedding anniversary, planning a celebration or looking for a wedding dress."
  },
  {
    id: 252,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-with-veil_1f470-200d-2642-fe0f.png",
    name: "👰‍♂️ Man with veil",
    meaning:
      "We are going to marry! The bridal veil is a fashion accessory and once was a symbol of virginity. Can be used for cross-dressing, a homosexual wedding, or jokingly for a feminine man."
  },
  {
    id: 253,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-in-tuxedo_1f935-200d-2640-fe0f.png",
    name: "🤵‍♀️ Woman in tuxedo",
    meaning:
      "It's going to be glamorous tonight! In the 1920s, style icon Marlene Dietrich made the tuxedo socially acceptable. In the 1960s, Yves Saint Laurent added “Le Smoking” to his collection. Fashionable symbol of emancipation and women's movement."
  },
  {
    id: 254,
    emoji: "https://www.emojimeanings.net/img/emojis/man-in-tuxedo_1f935.png",
    name: "🤵 Man in a tuxedo",
    meaning:
      "Today is a big day! The tuxedo consists of a jacket, a vest and trousers. Particularly elegant and suitable for sophisticated occasions. Symbolically, the emoji stands for an official occasion or celebration, for example, a banquet or your own wedding. The tuxedo also illustrates affectionate appointments and reunions."
  },
  {
    id: 255,
    emoji: "https://www.emojimeanings.net/img/emojis/princess_1f478.png",
    name: "👸 Princess",
    meaning:
      "A beautiful, distinguished and aristocratic princess with a crown or a diadem. The dream of all little girls. You can be happy if a man sends you this emoji, because then you are his princess."
  },
  {
    id: 256,
    emoji: "https://www.emojimeanings.net/img/emojis/prince_1f934.png",
    name: "🤴 Prince",
    meaning:
      "A prince (from the Latin princeps = the first one) with crown. Title of nobility as the descendant of a king. The emoji is also used ironically for a show off or for a wealthy, good-looking man. The prince is considered a general symbol of luck and represents reason, intellect and masculinity. Your wishes will come true."
  },
  {
    id: 257,
    emoji:
      "https://www.emojimeanings.net/img/emojis/person-with-crown_1fac5.png",
    name: "🫅 Person With Crown",
    meaning:
      "You are so noble! The person with crown stands for rule, status, nobility and monarchy. Or to tease a person who thinks they are too good for themselves. Most often, the emoji is used in a positive context."
  },
  {
    id: 258,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-superhero_1f9b8-200d-2640-fe0f.png",
    name: "🦸‍♀️ Superhero",
    meaning:
      "With superhuman powers, they fight evil and thus protect humanity. The costume is used for the recognition factor but also for the protection of their identity. They are characterized by a high morality, great courage and sense of justice as well as the unconditional commitment to others. But every superhero is also vulnerable and has his or her underbelly."
  },
  {
    id: 259,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-supervillain_1f9b9-200d-2640-fe0f.png",
    name: "🦹‍♀️ Super villain",
    meaning:
      "The super villain is the evil adversary of the superhero, e.g. Lex Luther and Superman or Joker and Batman. They usually have superhuman abilities, a high intelligence and suffer from megalomania. The villain acts out his or her evil side and enjoys it."
  },
  {
    id: 260,
    emoji:
      "https://www.emojimeanings.net/img/emojis/mother-christmas_1f936.png",
    name: "🤶 Mary Christmas",
    meaning:
      "The friendly elderly woman with a red and white cap and glasses is Santa Claus’ wife. First mentioned in the short story “A Christmas Legend“ (1849) by James Rees. Represents the feast of Christmas and the contemplative pre-Christmas period."
  },
  {
    id: 261,
    emoji:
      "https://www.emojimeanings.net/img/emojis/father-christmas_1f385.png",
    name: "🎅 Santa Claus",
    meaning:
      "Merry Christmas! The plump, friendly elderly gentleman with a red cap and a white beard lives up in the north. On Christmas Eve, he slips through the chimney to put the presents under the Christmas tree for the good children."
  },
  {
    id: 262,
    emoji:
      "https://www.emojimeanings.net/img/emojis/mx-claus_1f9d1-200d-1f384.png",
    name: "🧑‍🎄 Christmas person",
    meaning:
      "I love Christmas! Gender-neutral alternative to Santa Claus and Mrs. Claus. With regard to Christmas. Symbolic figure for Christmas gifts: Bring presents to the good children, the bad ones get the birching."
  },
  {
    id: 263,
    emoji: "https://www.emojimeanings.net/img/emojis/mage_1f9d9.png",
    name: "🧙 Magician",
    meaning:
      "This is just hocus-pocus or “I'm not a magician!“ Someone wants to watch fantasy movies or has an idea for a carnival costume. Whether real magician or magical personality: It's about supernatural magic."
  },
  {
    id: 264,
    emoji: "https://www.emojimeanings.net/img/emojis/elf_1f9dd.png",
    name: "🧝 Elf",
    meaning:
      "My favorite movie is Lord of the Rings! The small, graceful nature spirits with the pointed ears are mediators between nature and humans. The mythical creatures have supernatural abilities, can fly and become invisible. Represent timidity, delicateness and a close affinity to nature."
  },
  {
    id: 265,
    emoji: "https://www.emojimeanings.net/img/emojis/troll_1f9cc.png",
    name: "🧌 Troll",
    meaning:
      "I love fantasy! The mythical creature from Norse mythology with green skin and a big nose is a troll. However, the Emoji can also be used for wantonly annoying other Internet users (“trolling“)."
  },
  {
    id: 266,
    emoji: "https://www.emojimeanings.net/img/emojis/vampire_1f9db.png",
    name: "🧛 Vampire",
    meaning:
      "I am a creature of the night or “you bloodsucker“! Dark cloak and pointed fangs: The undead in man-shape leave their graves at night to drink blood, preferably of the human kind. Have supernatural powers. The most famous vampire is probably Count Dracula."
  },
  {
    id: 267,
    emoji: "https://www.emojimeanings.net/img/emojis/zombie_1f9df.png",
    name: "🧟 Zombie",
    meaning:
      "Walking around like a zombie, playing “Resident Evil“ or watching “The Walking Dead“! Fictional creature from horror movies: a walking dead person, deprived of his or her soul. Mostly bad, scary and out for revenge. Represents will-less, dependent people."
  },
  {
    id: 268,
    emoji: "https://www.emojimeanings.net/img/emojis/genie_1f9de.png",
    name: "🧞 Genie",
    meaning:
      "Tales from Thousand and One Nights, I Dream of Jeannie or Aladdin and the Magic Lamp. Character from oriental fairy tales: Locked in a bottle or lamp for punishment, the genie must satisfy three wishes for everyone who frees him. Metaphor for self-inflicted danger."
  },
  {
    id: 269,
    emoji: "https://www.emojimeanings.net/img/emojis/merperson_1f9dc.png",
    name: "🧜 Mermaid",
    meaning:
      "The female mythical creature lives underwater and is a mixture of female and fish body. Only a man's love can free the mermaid from her fate. Walt Disney's “Arielle“ is well-known."
  },
  {
    id: 270,
    emoji: "https://www.emojimeanings.net/img/emojis/fairy_1f9da.png",
    name: "🧚 Fairy",
    meaning:
      "You still believe in the tooth fairy or “I love Peter Pan films“. The mostly beautiful mythical creatures have magic powers. They can be female as well as male, good or bad. They symbolize magic, purity and childishness."
  },
  {
    id: 271,
    emoji: "https://www.emojimeanings.net/img/emojis/ninja_1f977.png",
    name: "🥷 Ninja",
    meaning:
      "I have never been here! Dressed in black, masked and armed with a throwing star or sword. Japanese martial artist and master of camouflage and deception. Stands for espionage, supernatural abilities and dark fascination."
  },
  {
    id: 272,
    emoji: "https://www.emojimeanings.net/img/emojis/baby-angel_1f47c.png",
    name: "👼 Baby Angel",
    meaning:
      "I am innocent or “You are an angel!“ The baby angel emoji with a halo around its head often stands for a miracle, hope or faith."
  },
  {
    id: 273,
    emoji: "https://www.emojimeanings.net/img/emojis/pregnant-woman_1f930.png",
    name: "🤰 Pregnant woman",
    meaning:
      "Someone is expecting a visit from the stork. The pregnant woman who is holding her belly is going to have a baby! The roly-poly belly can also stand for weight gain or you ate too much (“food baby“)."
  },
  {
    id: 274,
    emoji: "https://www.emojimeanings.net/img/emojis/pregnant-man_1fac3.png",
    name: "🫃 Pregnant Man",
    meaning:
      "A man put his hands on his pregnancy belly. Can also express that you have eaten very lush and well. Also used jokingly for the “beer belly“. The emoji usually has a positive meaning."
  },
  {
    id: 275,
    emoji: "https://www.emojimeanings.net/img/emojis/pregnant-person_1fac4.png",
    name: "🫄 Pregnant Person",
    meaning:
      "The person embraces her belly and is obviously pregnant. Also used to illustrate the degree of satiety (food baby) or to represent a beer belly. Pregnancy is represented here regardless of gender."
  },
  {
    id: 276,
    emoji: "https://www.emojimeanings.net/img/emojis/breast-feeding_1f931.png",
    name: "🤱 Breastfeeding",
    meaning:
      "I woke up every two hours last night! A woman breastfeeding a baby. According to a study, about 80% of the mothers in Germany breastfeed their child for about 7 months. Breastfeeding in public is a controversial topic and triggered a trend in social media in 2017."
  },
  {
    id: 277,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-feeding-baby_1f469-200d-1f37c.png",
    name: "👩‍🍼 Woman feeding baby",
    meaning:
      "I am babysitting! A woman is feeding a baby with the bottle. Expression of motherliness and care. Jokingly for a mother's boy."
  },
  {
    id: 278,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-feeding-baby_1f468-200d-1f37c.png",
    name: "👨‍🍼 Man feeding baby",
    meaning:
      "He is on parental leave! The man is bottle feeding the baby on his arm. The family has grown or you are a proud father. They can also be siblings."
  },
  {
    id: 279,
    emoji:
      "https://www.emojimeanings.net/img/emojis/person-feeding-baby_1f9d1-200d-1f37c.png",
    name: "🧑‍🍼 Person feeding baby",
    meaning:
      "My sibling is born! The person is feeding the baby in their arms and smilingly looks at the infant. It's about your own child or sibling love, childcare or parental leave."
  },
  {
    id: 280,
    emoji:
      "https://www.emojimeanings.net/img/emojis/person-bowing-deeply_1f647.png",
    name: "🙇 Person Bowing Deeply",
    meaning:
      "A person who is bowing to you. Is grateful because of something and deeply bows to you. Can also be an offering of reverence."
  },
  {
    id: 281,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-no-good-gesture_1f645.png",
    name: "🙅 Face With No Good Gesture",
    meaning:
      "Stop this immediately! Woman with crossed arms. Defensive posture. Shows that something is wrong and disruptive. A signal to stop."
  },
  {
    id: 282,
    emoji:
      "https://www.emojimeanings.net/img/emojis/face-with-ok-gesture_1f646.png",
    name: "🙆 Face With Ok Gesture",
    meaning:
      "Everything is okay! Woman with hands above her head (OK sign). Wants to tell you that everything is fine. Represents advocacy and approval. Because of the posture also known as ballerina."
  },
  {
    id: 283,
    emoji:
      "https://www.emojimeanings.net/img/emojis/information-desk-person_1f481.png",
    name: "💁 Information Desk Person",
    meaning:
      "How can I assist? The service-oriented and friendly woman at the information desk answers a customer's question and uses a hand gesture. Can be used as a question at the end of a message: “What do you think?“ or “I do not care.“"
  },
  {
    id: 284,
    emoji:
      "https://www.emojimeanings.net/img/emojis/happy-person-raising-one-hand_1f64b.png",
    name: "🙋 Happy Person Raising One Hand",
    meaning:
      "Person is cheerful and lifts a hand. Wants to be noticed and to say that he or she has a question or an answer."
  },
  {
    id: 285,
    emoji: "https://www.emojimeanings.net/img/emojis/deaf-person_1f9cf.png",
    name: "🧏 Deaf person",
    meaning:
      "I am deaf! A person moves the index finger between ear and mouth. In American sign language, the sign for deaf. 360 million people worldwide are hearing impaired or deaf, that is 0.1% of the total population."
  },
  {
    id: 286,
    emoji: "https://www.emojimeanings.net/img/emojis/face-palm_1f926.png",
    name: "🤦 Man Grabbing His Head",
    meaning:
      "Facepalm describes a gesture that became popular through the Star Trek series. “That cannot be true!“ is what you think when facing the stupidity of other people. Can also be used if you are embarrassed for someone else."
  },
  {
    id: 287,
    emoji: "https://www.emojimeanings.net/img/emojis/shrug_1f937.png",
    name: "🤷 Person Shrugs",
    meaning:
      "“I don't know how I can help you” or “Such is life” . The shrug of the shoulders shows ignorance, confusion or the lack of interest in something. Text version: ¯\\_(ツ)_/¯"
  },
  {
    id: 288,
    emoji:
      "https://www.emojimeanings.net/img/emojis/person-with-pouting-face_1f64e.png",
    name: "🙎 Pouting Person",
    meaning:
      "I am dissatisfied! Emoji pouts and openly shows its displeasure. Could be an indication that someone is angry and annoyed."
  },
  {
    id: 289,
    emoji: "https://www.emojimeanings.net/img/emojis/person-frowning_1f64d.png",
    name: "🙍 Frowning Person",
    meaning:
      "Emoji shows a woman with a frown. Her expression is very distressed and sad. Could indicate sad news."
  },
  {
    id: 290,
    emoji: "https://www.emojimeanings.net/img/emojis/haircut_1f487.png",
    name: "💇 Person at the hairdresser's",
    meaning:
      "I have to go to the hairdresser's! A change in style is planned or a big event is upcoming. Men visit the hairdresser's more often than women. However, women pay more than men. Symbol of beauty and vanity."
  },
  {
    id: 291,
    emoji: "https://www.emojimeanings.net/img/emojis/face-massage_1f486.png",
    name: "💆 Person is being massaged",
    meaning:
      "Whether appointment at the hairdresser's, visit to the beautician or wellness day: The person enjoys a head or facial massage. Maybe the day was stressful, you are assailed by a headache and you just want to relax."
  },
  {
    id: 292,
    emoji:
      "https://www.emojimeanings.net/img/emojis/person-in-steamy-room_1f9d6.png",
    name: "🧖 Person in Steam Sauna",
    meaning:
      "Let's relax! The steam sauna is heated to 80 to 105 °C with a sauna heater. The use of a sauna serves for relaxation and promotes good health. In Scandinavia and Russia, it even serves for cultivating social contacts."
  },
  {
    id: 293,
    emoji: "https://www.emojimeanings.net/img/emojis/nail-polish_1f485.png",
    name: "💅 Nail Polish",
    meaning:
      "Woman painting her fingernails is preparing for a special occasion or is dressing up to go out. Can stand for beauty in general, femininity or a manicure appointment. Represents casualness and carefreeness."
  },
  {
    id: 294,
    emoji: "https://www.emojimeanings.net/img/emojis/selfie_1f933.png",
    name: "🤳 Selfie",
    meaning:
      "Let me take a selfie first! The extended arm holds a cell phone to take a selfie. Often used for self-marketing and a mass phenomenon on social media. Figuratively for a narcissistic person or self-promoter."
  },
  {
    id: 295,
    emoji: "https://www.emojimeanings.net/img/emojis/dancer_1f483.png",
    name: "💃 Dancing",
    meaning:
      "“I want to party” or “I'm so excited!” The dancing woman in the red dress is also often associated with salsa. In general stands for fun and joy."
  },
  {
    id: 296,
    emoji: "https://www.emojimeanings.net/img/emojis/man-dancing_1f57a.png",
    name: "🕺 Dancing Man",
    meaning:
      "I had so much fun at the party! Someone had a great time or would like to party in a club. Represents events of all kinds that can be danced at."
  },
  {
    id: 297,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-with-bunny-ears_1f46f.png",
    name: "👯 Women With Bunny Ears",
    meaning:
      "Two Playboy Bunnies with rabbit ears. These models represent the American Playboy magazine for men and globally stand for attractiveness. The emoji is also used as a symbol for ballet as well as for “Let's party!”"
  },
  {
    id: 298,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-in-business-suit-levitating_1f574.png",
    name: "🕴 Hovering Man in Suit",
    meaning:
      "Hovering man in hat and suit. Mix of exclamation marks and the logo of the seventies band “The Specialists“. Can be used as a symbol for a ghost."
  },
  {
    id: 299,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-in-manual-wheelchair_1f469-200d-1f9bd.png",
    name: "👩‍🦽 Woman in wheelchair",
    meaning:
      "Is the place accessible? A wheelchair enables a person with impaired mobility to lead a self-determined life. In 1869 the first patent for a wheelchair was granted in the USA. Today there are around 600 variations."
  },
  {
    id: 300,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-in-manual-wheelchair_1f468-200d-1f9bd.png",
    name: "👨‍🦽 Man in wheelchair",
    meaning:
      "We're watching a wheelchair basketball game! Whether due to physical disabilities or injuries, the vehicle enables mobility. In connection with accessibility."
  },
  {
    id: 301,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-in-motorized-wheelchair_1f469-200d-1f9bc.png",
    name: "👩‍🦼 Woman in motorized wheelchair",
    meaning:
      "Grandma wants an electric vehicle! To stay mobile and to cover longer distances. Suitable for seniors or for people who are limited in walking. Often seen in the US or in American films."
  },
  {
    id: 302,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-in-motorized-wheelchair_1f468-200d-1f9bc.png",
    name: "👨‍🦼 Man in motorized wheelchair",
    meaning:
      "The electromobile can be controlled using a joystick. For bridging distances for people who are limited in walking. As a joke, because you currently feel very old or move very slowly due to tiredness."
  },
  {
    id: 303,
    emoji: "https://www.emojimeanings.net/img/emojis/pedestrian_1f6b6.png",
    name: "🚶 Pedestrian",
    meaning:
      "A person is on foot or going for a walk. Can also be used to tell others to cool their jets or to slow things down."
  },
  {
    id: 304,
    emoji:
      "https://www.emojimeanings.net/img/emojis/woman-with-probing-cane_1f469-200d-1f9af.png",
    name: "👩‍🦯 Woman with white cane",
    meaning:
      "Please be careful, visually impaired person. The white cane is an official indicator for blind people. With the help of the long stick, the ground can be scanned for obstacles. For orientation and mobility."
  },
  {
    id: 305,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-with-probing-cane_1f468-200d-1f9af.png",
    name: "👨‍🦯 Man with white cane",
    meaning:
      "Soon I'll be as blind as a bat! The white cane supports visually impaired people in their mobility. By swinging it, obstacles or height differences are recognized."
  },
  {
    id: 306,
    emoji: "https://www.emojimeanings.net/img/emojis/kneeling-person_1f9ce.png",
    name: "🧎 Kneeling person",
    meaning:
      "One person is kneeling on both knees. Represents a person who is resting or praying. Kneeling down can be a gesture of humility, express religious worship or a meditation posture. Diverted as an emoji for oral sex."
  },
  {
    id: 307,
    emoji: "https://www.emojimeanings.net/img/emojis/runner_1f3c3.png",
    name: "🏃 Runner",
    meaning:
      "The person is very athletic and goes jogging regularly. Someone is late or in a hurry and is running to quicker get from one place to another. “I am on the way!“"
  },
  {
    id: 308,
    emoji: "https://www.emojimeanings.net/img/emojis/standing-person_1f9cd.png",
    name: "🧍 Standing person",
    meaning:
      "“He's standing out against others” or “She’s standing above them!” The full body image of a standing person, face forward and without movement. Can be used for a person in general."
  },
  {
    id: 309,
    emoji:
      "https://www.emojimeanings.net/img/emojis/man-and-woman-holding-hands_1f46b.png",
    name: "👫 Man and Woman Holding Hands",
    meaning:
      "With you, all worries are gone! Couple in love is standing side by side. Man and woman are holding hands, beaming happily."
  },
  {
    id: 310,
    emoji:
      "https://www.emojimeanings.net/img/emojis/two-women-holding-hands_1f46d.png",
    name: "👭 Two Women Holding Hands",
    meaning:
      "Two women are holding hands. They could be best friends or siblings. Emoji could also explicitly stand for the same-sex female love."
  },
  {
    id: 311,
    emoji:
      "https://www.emojimeanings.net/img/emojis/two-men-holding-hands_1f46c.png",
    name: "👬 Two Men Holding Hands",
    meaning:
      "We are a great team! Two men holding hands. Can stand for friendship or represent a gay couple."
  },
  {
    id: 312,
    emoji:
      "https://www.emojimeanings.net/img/emojis/people-holding-hands_1f9d1-200d-1f91d-200d-1f9d1.png",
    name: "🧑‍🤝‍🧑 People holding hand",
    meaning:
      "We're walking through life hand in hand! Two people holding hands. Expression of affection, whether in a friendship or a relationship. Symbolic for “I stand by you” or “You can always count on me”."
  },
  {
    id: 313,
    emoji:
      "https://www.emojimeanings.net/img/emojis/couple-with-heart_1f491.png",
    name: "💑 Couple With Heart",
    meaning:
      "I'm so happy with you! A couple in love (man and woman) next to each other. Both are happy and laughing. The heart represents love."
  },
  {
    id: 314,
    emoji:
      "https://www.emojimeanings.net/img/emojis/couple-with-heart-woman-woman_1f469-200d-2764-fe0f-200d-1f469.png",
    name: "👩‍❤️‍👩 Couple with heart: man, man",
    meaning:
      "Two men standing close together, a heart hovering between them. Love is in the air. Whether newly in love or already in a relationship. The emoji stands for deep feelings and romance."
  },
  {
    id: 315,
    emoji:
      "https://www.emojimeanings.net/img/emojis/couple-with-heart-man-man_1f468-200d-2764-fe0f-200d-1f468.png",
    name: "👨‍❤️‍👨 Couple with heart: woman, woman",
    meaning:
      "Two women with a heart floating in the air between them. The heart represents the romantic relationship between them. It's either young love or they already heard the wedding bells. Symbolic for same-sex love."
  },
  {
    id: 316,
    emoji: "https://www.emojimeanings.net/img/emojis/kiss_1f48f.png",
    name: "💏 Kiss",
    meaning:
      "Man and woman with closed eyes and lips pointed to kiss. They would love to kiss now. The pink heart stands for love."
  },
  {
    id: 317,
    emoji:
      "https://www.emojimeanings.net/img/emojis/kiss-woman-woman_1f469-200d-2764-fe0f-200d-1f48b-200d-1f469.png",
    name: "👩‍❤️‍💋‍👩 Kiss: woman, woman",
    meaning:
      "The eyes are closed, the women are kissing or are about to kiss. The two are in a romantic relationship and feel for each other. The heart stands for their feelings and symbolizes love."
  },
  {
    id: 318,
    emoji:
      "https://www.emojimeanings.net/img/emojis/kiss-man-man_1f468-200d-2764-fe0f-200d-1f48b-200d-1f468.png",
    name: "👨‍❤️‍💋‍👨 Kiss: man, man",
    meaning:
      "Two men with their eyes closed just before they kiss. The two are in a romantic relationship and are in love."
  },
  {
    id: 319,
    emoji: "https://www.emojimeanings.net/img/emojis/woman_1f469.png",
    name: "👩 Woman",
    meaning:
      "She is a great woman! The emoji shows an adult female face. Refers to gender and can be used for a mother through a businesswoman to the female neighbor."
  },
  {
    id: 320,
    emoji: "https://www.emojimeanings.net/img/emojis/family_1f46a.png",
    name: "👪 Family",
    meaning:
      "Can refer to the classical constellation of father, mother, child(ren), or to a close relationship within the family. You start a family or are invited to a party in the inner circle."
  },
  {
    id: 321,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-woman-boy_1f469-200d-1f466.png",
    name: "👩‍👦 Family: woman, boy",
    meaning:
      "My little brother is annoying! The woman is the sister or mother of a little boy. Represents family ties. May mean the woman is a single parent."
  },
  {
    id: 322,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-woman-girl_1f469-200d-1f467.png",
    name: "👩‍👧 Family: woman, girl",
    meaning:
      "My daughter is like me or “I like spending time with my sister“. Used by the mother, it can refer to the daughter or vice versa. Represents family ties. May mean the woman is a single parent."
  },
  {
    id: 323,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-woman-girl-boy_1f469-200d-1f467-200d-1f466.png",
    name: "👩‍👧‍👦 Family: woman, girl, boy",
    meaning:
      "The man is working, his wife spends the day alone with the children. Can refer to a particular mother with her children, to a single parent, or to motherly love in general."
  },
  {
    id: 324,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-woman-boy-boy_1f469-200d-1f466-200d-1f466.png",
    name: "👩‍👦‍👦 Family: woman, boy, boy",
    meaning:
      "My sons are great or “I am a mother of twins“. Can stand for motherly love in general or for kinship."
  },
  {
    id: 325,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-woman-girl-girl_1f469-200d-1f467-200d-1f467.png",
    name: "👩‍👧‍👧 Family: woman, girl, girl",
    meaning:
      "A mere women's household is great! Mother of two daughters or twins. Can also be an aunt with her nieces, or sisters."
  },
  {
    id: 326,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-man-boy_1f468-200d-1f466.png",
    name: "👨‍👦 Family: man, boy",
    meaning:
      "Like father, like son or “He takes completely after the father“. Symbolizes a family (father and son, brothers, cousins) and a close relationship. May stand for a father and son trip, love among brothers and sisters or a single parent."
  },
  {
    id: 327,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-man-girl_1f468-200d-1f467.png",
    name: "👨‍👧 Family: man, girl",
    meaning:
      "I'm raising my daughter on my own or “My little sister is my one and all“. The persons are related or in a close relationship with each other."
  },
  {
    id: 328,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-man-girl-boy_1f468-200d-1f467-200d-1f466.png",
    name: "👨‍👧‍👦 Family: man, girl, boy",
    meaning:
      "Single father or the wife is out and about and the husband is looking after the children. A proud father who spends time with his children or an older brother who takes care of his siblings."
  },
  {
    id: 329,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-man-boy-boy_1f468-200d-1f466-200d-1f466.png",
    name: "👨‍👦‍👦 Family: man, boy, boy",
    meaning:
      "Family man with his sons or the big brother with his younger brothers. Whether related by blood or not, there is a close emotional relationship. Illustrates a father's love, an excursion with his sons or a single father."
  },
  {
    id: 330,
    emoji:
      "https://www.emojimeanings.net/img/emojis/family-man-girl-girl_1f468-200d-1f467-200d-1f467.png",
    name: "👨‍👧‍👧 Family: man, girl, girl",
    meaning:
      "I guard my daughters jealously! Girls are often daddy's girls and fathers would love to lay the world at their princesses' feet. The father is spending time with his daughters or is a single parent."
  },
  {
    id: 331,
    emoji: "https://www.emojimeanings.net/img/emojis/ball-of-yarn_1f9f6.png",
    name: "🧶 Ball of wool",
    meaning:
      "Untangle the ravel in your head! The fur of sheep, goats and camels is made into wool. By rolling it up to a ball the wool does not get entangled. It warms you, is cuddly and is used for crocheting or knitting. As ball of fur, can be the nickname for fluffy baby animals."
  },
  {
    id: 332,
    emoji: "https://www.emojimeanings.net/img/emojis/spool-of-thread_1f9f5.png",
    name: "🧵 Thread reel",
    meaning:
      "You are losing the thread, pull the string or dangle on the string. Something is running like a golden thread through a story. A thread of fibers is rolled up on the reel. Used for handicrafts, such as sewing."
  },
  {
    id: 333,
    emoji: "https://www.emojimeanings.net/img/emojis/coat_1f9e5.png",
    name: "🧥 Coat",
    meaning:
      "It is raining, I'll put on a coat! The days are getting colder or it's already winter. The coat protects against rain and chill and is a fashionable accessory."
  },
  {
    id: 334,
    emoji: "https://www.emojimeanings.net/img/emojis/lab-coat_1f97c.png",
    name: "🥼 Laboratory coat",
    meaning:
      "Later on, I will have to go to the doctor! The knee-length coat made of white or light fabric is used as working garment in the chemical or medical industry. Symbol of cleanliness and purity."
  },
  {
    id: 335,
    emoji: "https://www.emojimeanings.net/img/emojis/safety-vest_1f9ba.png",
    name: "🦺 Safety vest",
    meaning:
      "My new workwear is here! The vest in signal colors serves for better visibility. Used by construction workers, airport employees or stadium stewards, as well as in the event of breakdowns in road traffic."
  },
  {
    id: 336,
    emoji: "https://www.emojimeanings.net/img/emojis/womans-clothes_1f45a.png",
    name: "👚 Woman's Clothes",
    meaning:
      "I am dressing up today! The feminine garment can be worn on many occasions. Whether casually in your leisure time or businesslike at work. The blouse can represent fashion and femininity."
  },
  {
    id: 337,
    emoji: "https://www.emojimeanings.net/img/emojis/t-shirt_1f455.png",
    name: "👕 T-Shirt",
    meaning:
      "It is getting warmer outside, you can wear short sleeves again. You need new t-shirts, the girlfriend wants to go shopping. At the so-called wet t-shirt contest the female participants are soused with water."
  },
  {
    id: 338,
    emoji: "https://www.emojimeanings.net/img/emojis/jeans_1f456.png",
    name: "👖 Jeans",
    meaning:
      "The cult trousers are extremely popular with both sexes. As dungarees, because of the robustness or as casual wear, because of the offhandedness. The blue jeans can stand for fashion, casual look or shopping."
  },
  {
    id: 339,
    emoji: "https://www.emojimeanings.net/img/emojis/briefs_1fa72.png",
    name: "🩲 Underpants",
    meaning:
      "Briefs, panties, knickers. Whether underwear or swimming trunks, this model is scanty and tight. Men have an average of 23 underpants in their closets. Four out of five men buy their underwear themselves and the most popular color is black."
  },
  {
    id: 340,
    emoji: "https://www.emojimeanings.net/img/emojis/shorts_1fa73.png",
    name: "🩳 Shorts",
    meaning:
      "Pack your swimming trunks! We’re going to the lake or on vacation. The comfortable item of clothing can be swimming trunks, boxer shorts, Bermuda shorts or slacks."
  },
  {
    id: 341,
    emoji: "https://www.emojimeanings.net/img/emojis/necktie_1f454.png",
    name: "👔 Shirt With Tie",
    meaning:
      "A shirt with a matching tie is often worn for work and formal occasions. There is something to celebrate and the man is dressing up."
  },
  {
    id: 342,
    emoji: "https://www.emojimeanings.net/img/emojis/dress_1f457.png",
    name: "👗 Dress",
    meaning:
      "Symbol of femininity. Whether dress with spaghetti straps in summer, evening dress for the chic event or party dress for the club. Represents fashion, shopping or beauty."
  },
  {
    id: 343,
    emoji: "https://www.emojimeanings.net/img/emojis/bikini_1f459.png",
    name: "👙 Bikini",
    meaning:
      "I want to go swimming and to bathe in the sun! The bikini is a symbol of summer, sun and fun. Can also mean “You look great, sexy bikini!”"
  },
  {
    id: 344,
    emoji: "https://www.emojimeanings.net/img/emojis/kimono_1f458.png",
    name: "👘 Kimono",
    meaning:
      "Traditional Japanese garment. The kimono is worn by both men and women. Symbol of Japanese culture or cuisine as well as travel to Japan."
  },
  {
    id: 345,
    emoji: "https://www.emojimeanings.net/img/emojis/sari_1f97b.png",
    name: "🥻 Sari",
    meaning:
      "The wrap robe is a traditional piece of clothing. The colorful fabric is between 5 and 9 m long. Expresses the preference for Bollywood films or fashion and represents Hinduism or India."
  },
  {
    id: 346,
    emoji:
      "https://www.emojimeanings.net/img/emojis/one-piece-swimsuit_1fa71.png",
    name: "🩱 One-piece swimsuit",
    meaning:
      "Summer can come! With swimwear you associate hot summer days, swimming in the lake or vacationing by the sea. Maybe a new swimsuit is needed or you may have discovered swimming for yourself."
  },
  {
    id: 347,
    emoji: "https://www.emojimeanings.net/img/emojis/thong-sandal_1fa74.png",
    name: "🩴 Thongs",
    meaning:
      "Summer, sun, sea! Leisure sandals for the summer. Sandals are the oldest type of shoes in the world and have been around for 3,000 years. In the 1950s, the plastic variant was spread over the world from Japan via the USA. Synonym for the beach lifestyle."
  },
  {
    id: 348,
    emoji: "https://www.emojimeanings.net/img/emojis/flat-shoe_1f97f.png",
    name: "🥿 Ballerina",
    meaning:
      "I am going to put on ballerinas for our city stroll! The ballerina is a flat, girlish shoe to slip in. The name comes from the visual resemblance to the shoes used in ballet. Ballerinas are very popular, can be perfectly combined and are comfortable."
  },
  {
    id: 349,
    emoji:
      "https://www.emojimeanings.net/img/emojis/high-heeled-shoe_1f460.png",
    name: "👠 High-Heeled Shoe",
    meaning:
      "Attention, here comes a vamp! Men are sexually attracted by red high heels. Wants to go out and experience something exciting."
  },
  {
    id: 350,
    emoji: "https://www.emojimeanings.net/img/emojis/womans-sandal_1f461.png",
    name: "👡 Woman's Sandal",
    meaning:
      "The fashionable, open lady's shoe can only be worn in spring or summer. Represents beautiful and warm days, balmy summer nights or holidays."
  },
  {
    id: 351,
    emoji: "https://www.emojimeanings.net/img/emojis/womans-boots_1f462.png",
    name: "👢 Ladies’ boots",
    meaning:
      "I’ve got great new boots or I'm dressing up today! The days are getting cooler and eventually we can wear boots again. Maybe the other person wants to go shopping for new boots: On average, women buy six pairs of shoes per year."
  },
  {
    id: 352,
    emoji: "https://www.emojimeanings.net/img/emojis/mans-shoe_1f45e.png",
    name: "👞 Man's Shoe",
    meaning:
      "I bought new shoes! The men's shoe can be worn at work, for going out or in leisure time. On average, men own 8 pairs of shoes, women 17."
  },
  {
    id: 353,
    emoji: "https://www.emojimeanings.net/img/emojis/athletic-shoe_1f45f.png",
    name: "👟 Sports shoe",
    meaning:
      "We are going jogging! A special shoe for sports activities, for example, for the gym or for golfing, or a sneaker as a fashionable item. The emoji symbolizes a healthy and active lifestyle."
  },
  {
    id: 354,
    emoji: "https://www.emojimeanings.net/img/emojis/hiking-boot_1f97e.png",
    name: "🥾 Hiking boot",
    meaning:
      "Let's go hiking! The robust shoes protect the foot and provide stability, shock absorption and surefootedness. In the past, hiking was considered boring, but it is becoming a trend sport now. Out into nature!"
  },
  {
    id: 355,
    emoji: "https://www.emojimeanings.net/img/emojis/socks_1f9e6.png",
    name: "🧦 Socks",
    meaning:
      "“This knocked his socks off!”, “Put a sock in it!” or “Now pull your socks up!” Socks protect our feet from the cold and help to avoid blisters. A status symbol till the Middle Ages, a bulk good today. If you aren't careful, they are eaten by the washing machine or the dog!"
  },
  {
    id: 356,
    emoji: "https://www.emojimeanings.net/img/emojis/gloves_1f9e4.png",
    name: "🧤 Gloves",
    meaning:
      "It's cold, I need my gloves! Accessory, protection or winter clothing. Gloves protect hands from coldness, humidity and dirt."
  },
  {
    id: 357,
    emoji: "https://www.emojimeanings.net/img/emojis/scarf_1f9e3.png",
    name: "🧣 Scarf",
    meaning:
      "Wrap up warm, it's cold outside! Part of winter clothing on cold days. Whether winter holiday or fashion accessory, the scarf protects you against wind, is cuddly and keeps your neck warm."
  },
  {
    id: 358,
    emoji: "https://www.emojimeanings.net/img/emojis/top-hat_1f3a9.png",
    name: "🎩 Top Hat",
    meaning:
      "In Great Britain, the top hat is worn on traditional occasions like a wedding. Also known from Monopoly."
  },
  {
    id: 359,
    emoji: "https://www.emojimeanings.net/img/emojis/billed-cap_1f9e2.png",
    name: "🧢 Baseball cap",
    meaning:
      "We are following the games of the Major League! The baseball cap with the sun visor is a fashionable headgear and protects against the sun. The cap has its origin with the baseball players in the United States. Today it is part of casual wear."
  },
  {
    id: 360,
    emoji: "https://www.emojimeanings.net/img/emojis/womans-hat_1f452.png",
    name: "👒 Woman's Hat",
    meaning:
      "On the one hand, the hat is a sunscreen, on the other hand a fashionable accessory. Often made of straw, with wide brim and ribbon. Symbol for summer and vacation. In many cultures symbol of social status."
  },
  {
    id: 361,
    emoji: "https://www.emojimeanings.net/img/emojis/graduation-cap_1f393.png",
    name: "🎓 Alumnus Hat",
    meaning:
      "The graduation ceremony will be tomorrow! The black, square hat with a tassel is also called graduation hat, bachelor hat or scholar hat. The graduates collectively toss up their hats at the ceremony after having obtained their academic degrees. Symbol for graduation of school or examinations, and for education."
  },
  {
    id: 362,
    emoji:
      "https://www.emojimeanings.net/img/emojis/helmet-with-white-cross_26d1.png",
    name: "⛑ Rescue Worker's Helmet",
    meaning:
      "In Japan, the white cross is used as a safety notice on construction sites. The protective helmet can refer to rescue workers or people working in emergency services."
  },
  {
    id: 363,
    emoji: "https://www.emojimeanings.net/img/emojis/military-helmet_1fa96.png",
    name: "🪖 Military helmet",
    meaning:
      "I will fight for you! The camouflage helmet is part of the uniform and protects the wearer. In connection with the military or the soldier's profession. Jokingly for an authoritarian person."
  },
  {
    id: 364,
    emoji: "https://www.emojimeanings.net/img/emojis/crown_1f451.png",
    name: "👑 Crown",
    meaning:
      "“This is top” or “You are the best!” The crown embellished with precious jewels represents power and luxury. Is also known as king emoji."
  },
  {
    id: 365,
    emoji: "https://www.emojimeanings.net/img/emojis/pouch_1f45d.png",
    name: "👝 Clutch",
    meaning:
      "Let's go out tonight! The small, chic bag only offers space for the bare essentials and is carried in the hand. This stylish accessory is perfect for parties, business events or other important events."
  },
  {
    id: 366,
    emoji: "https://www.emojimeanings.net/img/emojis/purse_1f45b.png",
    name: "👛 Wallet",
    meaning:
      "After the shopping trip, the money has run out or the wallet was forgotten at home. The accessory keeps loose money but also credit cards or make-up. Can refer to shopping or money and stand for femininity and everything girlish."
  },
  {
    id: 367,
    emoji: "https://www.emojimeanings.net/img/emojis/handbag_1f45c.png",
    name: "👜 Handbag",
    meaning:
      "I really need a new handbag! Fashion accessory and for carrying personal belongings. Women spend 76 days of their lives on finding items in their handbag. The handbag also stands for privacy."
  },
  {
    id: 368,
    emoji: "https://www.emojimeanings.net/img/emojis/briefcase_1f4bc.png",
    name: "💼 Briefcase",
    meaning:
      "He’s got a business appointment! Business papers, files or the laptop are transported in the briefcase. Stands for seriousness and professional life. Some success or career advancement can be placed in the plus column."
  },
  {
    id: 369,
    emoji: "https://www.emojimeanings.net/img/emojis/school-satchel_1f392.png",
    name: "🎒 Satchel",
    meaning:
      "We’re going back to school or we have vacation time! There is room in the satchel for books, notebooks and lunch. The emoji is mostly used in connection with school and education but also for traveling."
  },
  {
    id: 370,
    emoji: "https://www.emojimeanings.net/img/emojis/luggage_1f9f3.png",
    name: "🧳 Suitcase",
    meaning:
      "I pack my bags and take with me... I am going on a journey! Symbol of wanderlust, freedom and vacation. We usually fetch our suitcase only during the holiday season. Women pack in an organized way with a list, yet often taking too much with them while men tackle packing in a relaxed manner."
  },
  {
    id: 371,
    emoji: "https://www.emojimeanings.net/img/emojis/eyeglasses_1f453.png",
    name: "👓 Glasses",
    meaning:
      "I'll take a close look at this! The glasses help people with poor eyesight to better see their environment. Some people wear glasses to look intellectual or intelligent. Symbol for bookworms or nerds."
  },
  {
    id: 372,
    emoji: "https://www.emojimeanings.net/img/emojis/dark-sunglasses_1f576.png",
    name: "🕶 Dark Sunglasses",
    meaning:
      "I've got the swag! Symbol for hot, sunny days but also for coolness and distinctive mark of agents. With dark glasses, other people can be watched unnoticed."
  },
  {
    id: 373,
    emoji: "https://www.emojimeanings.net/img/emojis/goggles_1f97d.png",
    name: "🥽 Safety glasses",
    meaning:
      "I need new ski goggles or “We wear safety goggles in the lab“. The safety glasses protect the eyes from dust, water, dirt, splinters and other harmful influences."
  },
  {
    id: 374,
    emoji: "https://www.emojimeanings.net/img/emojis/closed-umbrella_1f302.png",
    name: "🌂 Closed umbrella",
    meaning:
      "It’s going to rain, take an umbrella with you! The emoji can refer to the weather (clouds are coming up) or the umbrella itself. The umbrella is already 1,000 years old and was originally designed to protect people against the sun."
  }
];

export default emojisCollected;
