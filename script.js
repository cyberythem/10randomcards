// ==========================================
// 3D INTERACTIVE LIQUID DOT BACKGROUND LOGIC
// ==========================================
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/8) * (canvas.width/8)
}

// Track mouse for desktop
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Track touch for mobile devices
window.addEventListener('touchmove', function(event) {
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
});
window.addEventListener('touchstart', function(event) {
    mouse.x = event.touches[0].clientX;
    mouse.y = event.touches[0].clientY;
});

window.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});
window.addEventListener('touchend', function() {
    mouse.x = undefined;
    mouse.y = undefined;
});

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) { this.x += 1.5; }
            if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 1.5; }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) { this.y += 1.5; }
            if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 1.5; }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1.5;
        let directionY = (Math.random() * 2) - 1.5;
        let color = '#00f2fe'; 
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) 
                         + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance/20000);
                ctx.strokeStyle = 'rgba(0, 242, 254,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/8) * (canvas.width/8));
    init();
});

init();
animate();


// ==========================================
// 10 RANDOM CARDS LOGIC
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
    "Street interview near the local college.", "Sad Shayari with a dark, rainy filter.", "Scripted comedy about college exams.", 
    "Rate my outfit: Campus edition.", "Voice dubbing an intense anime fight scene.", "Customizing a 1:64 scale die-cast car.",
    "Mobile battle royale 1v4 clutch highlights.", "A day in the life in my hometown.", "Reviewing the best food in the city.",
    "Sad Shayari over late-night driving clips.", "How to set up a solar power battery bank.", "Practicing my professional voice-over reel.",
    "Trading indicators breakdown for beginners.", "Testing the camera quality on my phone.", "Reaction to the newest manga chapter.",
    "Explaining my favorite anime to a non-anime fan.", "Street photography around town.", "Home workout routine using household items.",
    "My favorite anime character moments.", "How I edit my short videos.", "Lip-sync comedy with a trending audio.",
    "Reviewing my home Wi-Fi speeds for gaming.", "Day in the life of a university student.", "Exploring my granny's village.",
    "DPI and sensitivity settings for mobile gaming.", "Top 5 toy cars in my collection.", "Voice acting: Villain monologue.",
    "Sad Shayari for broken hearts.", "College canteen food review.", "How to use PDF tools for studying.",
    "Setting up a stock trading account.", "My thoughts on the latest anime season.", "Mobile game sniper montage.",
    "The truth about starting a video channel.", "Vlogging a road trip to the mountains.", "How to get over creative block.",
    "Unboxing a new fast-charging cable.", "Scripted sketch: When your sibling deletes your game.", "Why I want to enter the dubbing industry.",
    "Aesthetic coffee pouring with lo-fi beats.", "Street style fashion in my city.", "Reviewing AI generation tools.",
    "How to fix laptop driver errors.", "What's on my phone (Student edition).", "Sad Shayari: The feeling of being lost.",
    "Public interviews: What song are you listening to?", "My mobile gaming HUD layout.", "Explaining options trading simply.",
    "The best spots to chill with my best friend.", "Behind the scenes of making a video."
];

const excusesList = [
    "My ping spiked to 999+.", "My phone screen froze.", "My sensitivity settings got reset.", "The other guy was definitely hacking.",
    "My digital shield didn't deploy.", "Someone bumped my arm!", "The sun was glaring on my screen.", "My fingers were sweaty.",
    "I had a massive frame drop.", "My touch sensitivity is too fast today.", "Forgot to change my settings.", "My character skill was on cooldown.",
    "The loot drop landed on me.", "I was lagging so hard I teleported.", "My screen protector is cracked.", "My home Wi-Fi disconnected.",
    "I was distracted by a video.", "I was looking at the minimap.", "Controller drift (even on mobile).", "I thought you had him!",
    "My battery was at 1%.", "The in-game store stole my luck.", "I was reloading.", "My auto-aim locked onto the wrong guy.",
    "I sneezed.", "I was scratching my nose.", "My device overheated.", "The game audio glitched.",
    "I was trying out a new HUD.", "I couldn't hear footsteps.", "My teammates blocked my shots.", "I got third-partied.",
    "The zone closed too fast.", "I dropped my device.", "I was typing a message.", "My screen didn't register the touch.",
    "I ran out of ammo.", "I was using the wrong weapon.", "I thought he was eliminated.", "I got a phone call in the middle of the fight.",
    "The game physics are broken.", "My crosshair disappeared.", "I was looking at a stock chart.", "I pressed the wrong button.",
    "I was admiring my toy cars.", "I was practicing my voice acting.", "The power inverter beeped and scared me.",
    "I got stuck on a rock.", "I thought we were playing casually.", "I let him win."
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

// 1. Anime Quote
function getAnimeQuote() {
    document.getElementById('anime-result').innerText = animeDeck.draw();
}

// 2. Card Painter (Bumped opacity from 0.2 to 0.7 so it's visible!)
function paintCard() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbaColor = `rgba(${r}, ${g}, ${b}, 0.7)`; 
    const hexColor = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    
    document.getElementById('color-card').style.backgroundColor = rgbaColor;
    document.getElementById('color-result').innerText = hexColor;
}

// 3. Text Reverser
function reverseText() {
    const input = document.getElementById('reverse-input').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverse-result').innerText = reversed || "...";
}

// 4. Coin Flipper
function flipCoin() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    document.getElementById('coin-result').innerText = result;
}

// 5. Content Idea
function generateReel() {
    document.getElementById('reel-result').innerText = contentDeck.draw();
}

// 6. Magic 8-Ball
function shake8Ball() {
    document.getElementById('eight-ball-result').innerText = eightBallDeck.draw();
}

// 7. Password Generator
function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('password-result').innerText = password;
}

// 8. Gaming Excuse
function getExcuse() {
    document.getElementById('excuse-result').innerText = excuseDeck.draw();
}

// 9. Roll D20
function rollD20() {
    const roll = Math.floor(Math.random() * 20) + 1;
    document.getElementById('d20-result').innerText = roll;
}

// 10. Word Counter
function countWords() {
    const text = document.getElementById('word-input').value.trim();
    const count = text === "" ? 0 : text.split(/\s+/).length;
    document.getElementById('word-result').innerText = `${count} words`;
        }
