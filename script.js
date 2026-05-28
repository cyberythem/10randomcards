// ==========================================
// 10 RANDOM CARDS LOGIC (UPDATED WITH SARCASM & DRAMA)
// ==========================================

class NoRepeatDeck {
    constructor(items) {
        this.items = items;
        this.deck = [];
    }
    draw() {
        if (this.deck.length === 0) {
            this.deck = [...this.items];
            for (let i = this.deck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
        }
        return this.deck.pop();
    }
}

const animeQuotesList = [
    "Yare Yare Daze.", "Domain Expansion.", "Waku Waku!", "Are you the strongest because you're Satoru Gojo?", 
    "I reject my humanity, JoJo!", "Muda Muda Muda Muda!", "Stand proud, you are strong.", "Oh, you're approaching me?",
    "With this treasure, I summon...", "I'm going to be a great magician, Roxy-sensei.", "Heh.", "Star Platinum, The World!",
    "Nah, I'd win.", "Kore ga... Requiem da.", "I love you in every universe.", "I'll leave the rest to you.", 
    "Anya likes peanuts.", "Forgive me, Sasuke.", "I am atomic.", "I will be the Pirate King!", "Bankai.", 
    "Tatakae.", "Give up on your dreams and die.", "I want to live!", "Plus Ultra!", "It’s over 9000!", 
    "People die if they are killed.", "El Psy Kongroo.", "Omae wa mou shindeiru.", "Nani?!", "I am Justice!",
    "I'll take a potato chip... and eat it!", "If you don't take risks, you can't create a future.", "Bungee Gum possesses the properties of both rubber and gum.", 
    "I'm not a hero because I want your approval.", "Just who the hell do you think I am?!", "Believe it!", 
    "Whatever you do, enjoy it to the fullest.", "A lesson without pain is meaningless.", "Fear is not evil.",
    "I have no enemies.", "Wake up to reality.", "The only ones who should kill, are those prepared to be killed.",
    "You don't need a reason to save people.", "To defeat evil, I must become a greater evil.", "Even if I die, I'll keep my promise.",
    "There's no such thing as a painless lesson.", "Nothing happened.", "I am the hope of the universe.", "This is my ninja way!"
];

const contentIdeasList = [
    "My attempt at being an 'influencer' while my best friend dies of embarrassment.", "Sad Shayari: Narrated by a voice that sounds suspiciously like a broken robot.", "Scripted comedy: Explaining to my parents why I'm not a doctor yet.", 
    "Rate my outfit: The 'I woke up and chose chaos' collection.", "Voice dubbing an anime fight, but I replace all the shouts with confused noises.", "Customizing a toy car to look like my life: Fast, shiny, and likely to crash.",
    "Mobile gaming 'clutch' montage, but it's just me running into a wall for 30 seconds.", "Day in the life: Procrastinating in 4K resolution.", "Reviewing food, but I just give every place a 'meh' rating.",
    "Sad Shayari: Specifically for when I lose my charger.", "How to use a solar battery, or as I call it, 'My expensive desk paperweight'.", "My professional voice-over reel (Warning: Contains heavy breathing).",
    "Trading indicators: A guide to losing money faster.", "Testing my phone camera on my cat because humans are too judgmental.", "Reaction to the newest manga: I have no idea what just happened.",
    "Explaining anime stands to my grandmother, who definitely regrets asking.", "Street photography: Trying to look artistic while avoiding eye contact.", "Home workout: How to lift a bag of chips with extreme intensity.",
    "Analyzing my anime waifu choices like it's a thesis paper.", "How I edit videos: Mostly just adding filters and praying.", "Lip-syncing: Trying to match the audio while eating snacks.",
    "Reviewing home Wi-Fi: Speed depends on my level of desperation.", "Day in the life: Student edition (a.k.a. staring at the ceiling).", "Exploring the village: Looking for cell signal.",
    "DPI settings: Changing numbers until the screen goes black.", "Top 5 toy cars: None are in mint condition.", "Voice acting: Villain monologue, but I sound like I have a cold.",
    "Sad Shayari: The epic saga of an empty inbox.", "College canteen review: It’s not food, it’s a challenge.", "How to use PDF tools: Clicking things until they work.",
    "Setting up a trading account: Just so I can watch numbers go down in real-time.", "My thoughts on the season: It exists. I watched it.", "Sniper montage: Featuring 99% misses and one lucky shot.",
    "Starting a channel: Because my ego needed more room.", "Vlogging the mountains: 10 minutes of walking, 5 hours of editing.", "Creative block: A story in 50 variations of nothing.",
    "Unboxing a cable: Thrilling content, I know.", "Sketch: When the sibling deletes the save file. R.I.P.", "Dubbing career: I'm just here for the free snacks.",
    "Pouring coffee: Pretending I'm a professional, then burning my tongue.", "Street style: Wearing my most comfortable pajamas.", "Reviewing AI: It's smarter than me, which is a low bar.",
    "Laptop drivers: A horror movie in three parts.", "What's on my phone: Mostly apps I forgot to delete.", "Sad Shayari: My last brain cell is signing off.",
    "Street interview: 'What are you listening to?' (I'm listening to a fan hum).", "Gaming layout: I can't reach the buttons, but it looks cool.", "Options trading: Just gambling with extra steps.",
    "The best spots to chill: Anywhere the Wi-Fi reaches.", "Behind the scenes: My mess of a bedroom."
];

const excusesList = [
    "My ping spiked to 999+ and sent me to a different dimension.", "My phone screen decided to go on a vacation.", "My sensitivity settings reset, so now I'm aiming for the clouds.", "The other guy was definitely hacking—or I'm just bad. Let's go with hacking.",
    "My digital shield didn't deploy, or maybe I forgot to press the button.", "Someone bumped my arm! A completely valid reason for my terrible aim.", "The sun was glaring, preventing me from seeing my impending doom.", "My fingers were sweaty; it’s a tactical disadvantage.",
    "I had a frame drop right when I needed to be a pro.", "My touch sensitivity is way too fast for my human reflexes.", "Forgot to change my settings, so I’m basically playing blind.", "My character skill was on cooldown—a classic design flaw.",
    "The loot drop landed on me. Does that count as a participation trophy?", "I was lagging so hard I teleported behind the enemy and still died.", "My screen protector is cracked; it’s basically an obstacle course.", "My home Wi-Fi disconnected, and now I’m just staring at a loading screen.",
    "I was distracted by a video. Education comes first, right?", "I was looking at the minimap and forgot to look at the actual game.", "Controller drift—yes, even on a touch screen. It’s a ghost.", "I thought you had him! Why am I the only one carrying?",
    "My battery was at 1%. I was playing on hard mode.", "The in-game store stole my luck with a terrible bundle.", "I was reloading. Does no one understand the concept of time?", "My auto-aim locked onto the wrong guy. It’s the game’s fault.",
    "I sneezed. It ruined my entire strategy.", "I was scratching my nose. A tactical pause.", "My device overheated. It’s basically a portable heater now.", "The game audio glitched, or I just have bad ears.",
    "I was trying out a new layout. It’s a work in progress.", "I couldn't hear footsteps over the sound of my own panic.", "My teammates blocked my shots. They’re the real enemies.", "I got third-partied while I was contemplating my choices.",
    "The zone closed too fast. It’s just rude.", "I dropped my device. It’s a sign to quit for the day.", "I was typing a message. Relationships matter more than kills.", "My screen didn't register the touch. Are you blind, phone?",
    "I ran out of ammo. Why don't they give us infinite everything?", "I was using the wrong weapon. I thought it was a laser beam.", "I thought he was eliminated! He was clearly a ghost.", "I got a phone call in the middle of the fight. Who even calls?",
    "The physics are broken. That rock was definitely supposed to be intangible.", "My crosshair disappeared. I was just guessing at that point.", "I was looking at a stock chart. Trading is a full-time job.", "I pressed the wrong button. My fingers are too clumsy for this.",
    "I was admiring my toy cars. Priorities, man.", "I was practicing my voice acting. You can't put a price on art.", "The inverter beeped and scared the soul out of me.",
    "I got stuck on a rock. I am one with the scenery now.", "I thought we were playing casually. Why are you sweating?", "I let him win. I’m a generous soul."
];

const magic8BallList = [
    "It is certain.", "Reply hazy, try again.", "Don't count on it.", "Without a doubt.", "Very doubtful.",
    "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.",
    "Yes.", "Signs point to yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.",
    "Concentrate and ask again.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Absolutely not.",
    "The algorithm says yes.", "Ping is too high to answer.", "Domain Expansion: Yes.", "Yare Yare... No.",
    "Only if you grind for it.", "The charts are bearish on that one.", "404 Error: Answer not found.", "Sure, why not?",
    "I wouldn't bet my toys on it.", "It's a trap!", "The stars align in your favor.", "Looks like a skill issue.",
    "Waku Waku! Yes!", "Nah, I'd win.", "Leave it to fate.", "Not in a million years.", "It is your destiny.",
    "Try turning it off and on again.", "You already know the answer.", "The universe shrugs.", "Check your Wi-Fi and ask again.",
    "100% Guaranteed.", "In your dreams.", "Maybe tomorrow.", "Don't overthink it.", "Go for it!",
    "I plead the fifth.", "It's a secret.", "Ask your sibling.", "Definitely... maybe."
];

const animeDeck = new NoRepeatDeck(animeQuotesList);
const contentDeck = new NoRepeatDeck(contentIdeasList);
const excuseDeck = new NoRepeatDeck(excusesList);
const eightBallDeck = new NoRepeatDeck(magic8BallList);

// --- The 10 Functions ---

function getAnimeQuote() {
    document.getElementById('anime-result').innerText = animeDeck.draw();
}
// Updated Card Painter to target the button inside the card
function paintCard() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbaColor = `rgba(${r}, ${g}, ${b}, 0.6)`; 
    const hexColor = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    
    // Target the button inside the second card specifically
    const colorBtn = document.querySelector('#color-card button');
    colorBtn.style.backgroundColor = rgbaColor;
    colorBtn.style.borderColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
    document.getElementById('color-result').innerText = hexColor;
}

function reverseText() {
    const input = document.getElementById('reverse-input').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverse-result').innerText = reversed || "...";
}

function flipCoin() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById('coin-result').innerText = result;
}

function generateReel() {
    document.getElementById('reel-result').innerText = contentDeck.draw();
}

function shake8Ball() {
    document.getElementById('eight-ball-result').innerText = eightBallDeck.draw();
}

function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('password-result').innerText = password;
}

function getExcuse() {
    document.getElementById('excuse-result').innerText = excuseDeck.draw();
}

function rollD20() {
    const roll = Math.floor(Math.random() * 20) + 1;
    document.getElementById('d20-result').innerText = roll;
}

function countWords() {
    const text = document.getElementById('word-input').value.trim();
    const count = text === "" ? 0 : text.split(/\s+/).length;
    document.getElementById('word-result').innerText = `${count} words`;
}
