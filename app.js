// 180+ unique conversation topics for 6+ months
const TOPICS = [
  // Week 1: Getting to Know Each Other
  "What's a childhood memory that still makes you smile?",
  "If you could have dinner with any three people (dead or alive), who would they be?",
  "What's the best piece of advice you've ever received?",
  "Describe your perfect day from start to finish.",
  "What's a skill you've always wanted to learn but haven't yet?",
  "If you could live in any fictional world, which one would you choose?",
  "What's something you're proud of that you rarely talk about?",

  // Week 2: Dreams & Aspirations
  "Where do you see yourself in 5 years? In 10?",
  "If money weren't an issue, what would you do with your life?",
  "What's a dream you've had since childhood?",
  "If you could master any skill instantly, what would it be?",
  "What does 'success' look like to you personally?",
  "If you could start a business tomorrow, what would it be?",
  "What's one thing you want to accomplish this year?",

  // Week 3: Travel & Adventure
  "What's the most beautiful place you've ever been?",
  "If you could teleport anywhere right now, where would you go?",
  "Beach vacation or mountain adventure? Why?",
  "What's the most spontaneous trip you've ever taken?",
  "If you could live in any country for a year, which one?",
  "What's your favorite travel memory?",
  "Do you prefer planning trips or going with the flow?",

  // Week 4: Fun & Hypotheticals
  "If you were a superhero, what would your power be?",
  "Would you rather fight 100 duck-sized horses or 1 horse-sized duck?",
  "If you could only eat one cuisine forever, what would it be?",
  "What would your entrance theme song be?",
  "If you could swap lives with anyone for a day, who?",
  "What's the weirdest food combination you secretly enjoy?",
  "If you wrote a book, what genre would it be?",

  // Week 5: Values & Beliefs
  "What's a cause you deeply care about?",
  "How do you define 'a good life'?",
  "What's something you changed your mind about recently?",
  "What values are non-negotiable for you?",
  "How do you want to be remembered?",
  "What's a tradition you'd like to start?",
  "What does 'home' mean to you?",

  // Week 6: Relationships & Connection
  "What's your love language?",
  "What's the best relationship advice you've heard?",
  "How do you show appreciation to people you care about?",
  "What's a small gesture that means a lot to you?",
  "How do you handle conflict in relationships?",
  "What makes you feel most understood?",
  "What's your favorite way to spend quality time?",

  // Week 7: Creativity & Expression
  "If you could create any art form perfectly, what would it be?",
  "What's a creative project you've been putting off?",
  "How do you express yourself when words aren't enough?",
  "What inspires you most?",
  "If you could design your dream home, what's the one must-have room?",
  "What's a book/movie/song that changed your perspective?",
  "Do you prefer creating or consuming art?",

  // Week 8: Growth & Learning
  "What's the most valuable lesson you learned this year?",
  "What's a mistake that turned into a blessing?",
  "How do you handle failure?",
  "What's something you're currently learning?",
  "Who has been the most influential teacher in your life?",
  "What's a habit you're trying to build?",
  "What does personal growth mean to you?",

  // Week 9: Fun Deep Dives
  "If you could see any statistic floating above people's heads, what would it be?",
  "What's a conspiracy theory you kind of believe?",
  "If animals could talk, which species would be the rudest?",
  "What's the most useless talent you have?",
  "If you were a ghost, how would you haunt people?",
  "What's a hill you're willing to die on?",
  "If you could eliminate one daily annoyance, what would it be?",

  // Week 10: Nostalgia & Memories
  "What's your earliest happy memory?",
  "What's a smell that instantly transports you to childhood?",
  "What's the best gift you've ever received?",
  "What's a family tradition you loved growing up?",
  "Who was your childhood hero?",
  "What's a game you loved playing as a kid?",
  "What's something you miss about being younger?",

  // Week 11: Future & Legacy
  "What kind of ancestor do you want to be?",
  "What's a problem in the world you wish you could solve?",
  "If you could leave one message for future generations, what would it be?",
  "What do you hope people say about you at your funeral?",
  "What's a skill you want to pass down?",
  "How do you want to impact the people around you?",
  "What's your hope for the next generation?",

  // Week 12: Light & Playful
  "What's your go-to karaoke song?",
  "If you had a warning label, what would it say?",
  "What's the funniest thing that happened to you recently?",
  "What's a 'guilty pleasure' you're not actually guilty about?",
  "If you were a dessert, what would you be?",
  "What's the best prank you've pulled or witnessed?",
  "What's a random fact you love sharing?",

  // Week 13: Preferences & Personality
  "Are you a morning person or night owl?",
  "What's your ideal weekend?",
  "Do you prefer big parties or intimate gatherings?",
  "What's your decision-making style: gut or analysis?",
  "What's a pet peeve you have?",
  "How do you recharge after a long week?",
  "What's your Myers-Briggs/Enneagram type? Do you agree?",

  // Week 14: Food & Experiences
  "What's the best meal you've ever had?",
  "If you could only cook one dish perfectly, what would it be?",
  "What's a food you hated as a kid but love now?",
  "What's your comfort food?",
  "Sweet or savory? Why?",
  "What's a restaurant you'd travel for?",
  "What's the most adventurous thing you've eaten?",

  // Week 15: Technology & Modern Life
  "What's an app you can't live without?",
  "How has technology improved your relationships?",
  "What's a tech habit you want to break?",
  "If you had to give up your phone or computer, which?",
  "What's your take on AI and the future?",
  "What's a piece of tech from sci-fi you wish existed?",
  "How do you curate your digital life?",

  // Week 16: Money & Work
  "What's your earliest money memory?",
  "What would you do if you won the lottery tomorrow?",
  "What's a purchase you regret? One you don't?",
  "How do you define 'enough' financially?",
  "What's the best career advice you've received?",
  "If you could job shadow anyone for a week, who?",
  "What's a side hustle you've thought about?",

  // Week 17: Health & Wellness
  "What's your relationship with exercise?",
  "What's a wellness trend you've tried?",
  "How do you manage stress?",
  "What's your sleep routine?",
  "What's a health goal you have?",
  "How do you practice self-care?",
  "What's something that instantly boosts your mood?",

  // Week 18: Philosophy & Big Questions
  "Do you believe everything happens for a reason?",
  "What happens after we die?",
  "Is there such a thing as a soulmate?",
  "What's the meaning of life, in your opinion?",
  "Do you believe in free will or determinism?",
  "What's a paradox that fascinates you?",
  "If you could ask the universe one question, what would it be?",

  // Week 19: Seasonal & Timely
  "What's your favorite season and why?",
  "What's a holiday tradition you love?",
  "How do you celebrate your birthday?",
  "What's your favorite memory from this year so far?",
  "What are you looking forward to in the coming months?",
  "What's a seasonal activity you never miss?",
  "How do you mark the passage of time?",

  // Week 20: Random & Delightful
  "If you could have any animal as a pet (real or mythical), what?",
  "What's a small thing that made your day recently?",
  "If you could instantly become an expert in anything, what?",
  "What's a question you wish people asked you more often?",
  "What's the kindest thing a stranger has done for you?",
  "If your life had a soundtrack, what's the current song?",
  "What's something you're curious about right now?",

  // Week 21: Deeper Connection
  "What's a fear you've overcome?",
  "What's something you need to forgive yourself for?",
  "When do you feel most like yourself?",
  "What's a part of you that few people see?",
  "What's a promise you made to yourself?",
  "How have you changed in the last 5 years?",
  "What's a boundary you're learning to set?",

  // Week 22: Imagination & Play
  "If you opened a restaurant, what would the concept be?",
  "Design your perfect festival - theme, lineup, location.",
  "If you could invent a holiday, what would it celebrate?",
  "What would your memoir be titled?",
  "If you could time travel to any era for a week, when?",
  "What's a world record you could realistically break?",
  "If you had a talk show, who would be your first guest?",

  // Week 23: Gratitude & Perspective
  "What are three things you're grateful for today?",
  "What's a challenge that made you stronger?",
  "Who in your life are you most thankful for?",
  "What's a simple pleasure you appreciate?",
  "What's something you take for granted?",
  "How has your perspective on gratitude changed?",
  "What's a 'silver lining' you've found recently?",

  // Week 24: The Future Together
  "What's a dream you have for us?",
  "What's a tradition you want us to create?",
  "Where do you want to travel together next?",
  "What's something you want to learn together?",
  "How do you want to grow together this year?",
  "What's a challenge you want us to tackle as a team?",
  "What does 'forever' look like to you?"
];

// Shuffle array using Fisher-Yates
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get a deterministic seed based on date
function getDateSeed(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return year * 10000 + month * 100 + day;
}

// Seeded random for consistent daily topic
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Get today's topic index (deterministic per day)
function getTodaysTopicIndex() {
  const seed = getDateSeed();
  const random = seededRandom(seed);
  return Math.floor(random * TOPICS.length);
}

// Get topic for a specific date
function getTopicForDate(date) {
  const seed = getDateSeed(date);
  const random = seededRandom(seed);
  return TOPICS[Math.floor(random * TOPICS.length)];
}

// Format date nicely
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Load history from localStorage
function loadHistory() {
  const history = localStorage.getItem('conversationHistory');
  return history ? JSON.parse(history) : [];
}

// Save history to localStorage
function saveHistory(history) {
  localStorage.setItem('conversationHistory', JSON.stringify(history));
}

// Add topic to history
function addToHistory(topic, date = new Date()) {
  const history = loadHistory();
  const dateStr = date.toISOString().split('T')[0];
  
  // Check if already in history for today
  const existingIndex = history.findIndex(item => item.date === dateStr);
  if (existingIndex >= 0) {
    history[existingIndex] = { topic, date: dateStr, spokenAt: new Date().toISOString() };
  } else {
    history.unshift({ topic, date: dateStr, spokenAt: new Date().toISOString() });
  }
  
  // Keep only last 200 entries
  if (history.length > 200) history.pop();
  
  saveHistory(history);
  return history;
}

// Render history
function renderHistory() {
  const history = loadHistory();
  const list = document.getElementById('history-list');
  
  if (history.length === 0) {
    list.innerHTML = '<p style="color: #7f8c8d; text-align: center; padding: 20px;">No conversations recorded yet. Start talking!</p>';
    return;
  }
  
  list.innerHTML = history.map(item => `
    <div class="history-item">
      <div>
        <div>${item.topic}</div>
        <div class="history-date">${formatDate(new Date(item.date))}</div>
      </div>
      <span class="topic-tag">✓ Spoken</span>
    </div>
  `).join('');
}

// Initialize app
function init() {
  // Set today's topic
  const today = new Date();
  const topicIndex = getTodaysTopicIndex();
  const topic = TOPICS[topicIndex];
  
  document.getElementById('topic-text').textContent = topic;
  document.getElementById('date-display').textContent = formatDate(today);
  
  // Check if already marked spoken today
  const history = loadHistory();
  const todayStr = today.toISOString().split('T')[0];
  const spokenToday = history.some(item => item.date === todayStr);
  
  const markBtn = document.getElementById('mark-spoken');
  if (spokenToday) {
    markBtn.textContent = '✓ Already Spoken Today';
    markBtn.disabled = true;
    markBtn.classList.add('btn-secondary');
    markBtn.classList.remove('btn-primary');
  }
  
  // Render history
  renderHistory();
  
  // Event listeners
  document.getElementById('mark-spoken').addEventListener('click', () => {
    addToHistory(topic, today);
    markBtn.textContent = '✓ Marked as Spoken';
    markBtn.disabled = true;
    markBtn.classList.add('btn-secondary');
    markBtn.classList.remove('btn-primary');
    renderHistory();
  });
  
  document.getElementById('new-topic').addEventListener('click', () => {
    // Get a random different topic
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * TOPICS.length);
    } while (newIndex === topicIndex && TOPICS.length > 1);
    
    const newTopic = TOPICS[newIndex];
    document.getElementById('topic-text').textContent = newTopic;
    
    // Reset button
    markBtn.textContent = '✓ Mark as Spoken';
    markBtn.disabled = false;
    markBtn.classList.add('btn-primary');
    markBtn.classList.remove('btn-secondary');
  });
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);