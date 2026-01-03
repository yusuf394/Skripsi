// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Ucapan Semangat Data
const ucapanSkripsi = [
    "Kamu sudah sampai sejauh ini! Skripsi bukan akhir, tapi awal dari perjalanan baru. Tetap semangat! 💪",
    "Setiap halaman yang kamu tulis adalah langkah menuju kesuksesan. Kamu pasti bisa! ✨",
    "Skripsi itu seperti puzzle - setiap bagian yang kamu selesaikan membuat gambaran besar semakin jelas. Keep going! 🧩",
    "Ingat, semua orang yang lulus pernah merasakan apa yang kamu rasakan sekarang. Kamu tidak sendirian! 🌟",
    "Progress kecil tetap progress. Setiap paragraf, setiap halaman, setiap revisi adalah kemenangan! 🏆",
    "Skripsi adalah bukti bahwa kamu bisa menyelesaikan sesuatu yang sulit. Kamu lebih kuat dari yang kamu kira! 💎",
    "Jangan menyerah! Setiap malam yang kamu habiskan untuk skripsi akan terbayar dengan kebahagiaan saat wisuda! 🎓",
    "Kamu sedang menulis cerita kesuksesanmu sendiri. Setiap kata adalah langkah menuju impian! 📖",
    "Skripsi itu marathon, bukan sprint. Ambil napas, istirahat, lalu lanjutkan dengan semangat baru! 🏃",
    "Setiap revisi membuat skripsimu lebih baik. Trust the process! 🌈"
];

const ucapanTugas = [
    "Tugas akhir adalah mahkota dari perjalanan akademismu. Kamu sudah hampir sampai! 👑",
    "Setiap komponen tugas akhir yang kamu selesaikan adalah bukti dedikasi dan kerja kerasmu. Amazing! 🌟",
    "Tugas akhir bukan hanya tentang nilai, tapi tentang proses belajar dan berkembang. Kamu sudah melakukannya dengan baik! 📚",
    "Ingat, tugas akhir adalah kesempatan untuk menunjukkan apa yang sudah kamu pelajari. Kamu pasti bisa! 💪",
    "Setiap bug yang kamu fix, setiap fitur yang kamu buat, adalah langkah menuju kesempurnaan. Keep coding! 💻",
    "Tugas akhir adalah bukti bahwa kamu bisa menciptakan sesuatu yang berarti. Bangga dengan dirimu! 🎨",
    "Jangan lupa, semua ahli pernah menjadi pemula. Kamu sedang dalam perjalanan menjadi ahli! 🚀",
    "Setiap presentasi, setiap demo, adalah kesempatan untuk bersinar. Kamu punya ini! ⭐",
    "Tugas akhir adalah investasi untuk masa depanmu. Setiap jam yang kamu habiskan adalah investasi yang berharga! 💰",
    "Kamu sedang membangun sesuatu yang akan membuatmu bangga. Tetap semangat sampai finish line! 🏁"
];

// Get Random Ucapan
function getUcapanSkripsi() {
    const randomIndex = Math.floor(Math.random() * ucapanSkripsi.length);
    const ucapanContent = document.getElementById('ucapan-skripsi');
    ucapanContent.innerHTML = `<p>${ucapanSkripsi[randomIndex]}</p>`;
    ucapanContent.style.animation = 'fadeInUp 0.5s ease';
    setTimeout(() => {
        ucapanContent.style.animation = '';
    }, 500);
}

function getUcapanTugas() {
    const randomIndex = Math.floor(Math.random() * ucapanTugas.length);
    const ucapanContent = document.getElementById('ucapan-tugas');
    ucapanContent.innerHTML = `<p>${ucapanTugas[randomIndex]}</p>`;
    ucapanContent.style.animation = 'fadeInUp 0.5s ease';
    setTimeout(() => {
        ucapanContent.style.animation = '';
    }, 500);
}

// Quotes Data
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" }
];

// Get Random Quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteCard = document.getElementById('quote-display');
    quoteCard.innerHTML = `
        <p class="quote-text">"${quotes[randomIndex].text}"</p>
        <p class="quote-author">- ${quotes[randomIndex].author}</p>
    `;
    quoteCard.style.animation = 'fadeInUp 0.5s ease';
    setTimeout(() => {
        quoteCard.style.animation = '';
    }, 500);
}

// Checklist Functionality
let checklistSkripsi = JSON.parse(localStorage.getItem('checklistSkripsi')) || [];
let checklistTugas = JSON.parse(localStorage.getItem('checklistTugas')) || [];

function renderChecklist(type) {
    const checklist = type === 'skripsi' ? checklistSkripsi : checklistTugas;
    const listElement = document.getElementById(`checklist-${type}`);
    
    listElement.innerHTML = '';
    
    if (checklist.length === 0) {
        listElement.innerHTML = '<p style="text-align: center; color: #999;">Belum ada item. Tambahkan item revisi!</p>';
        return;
    }
    
    checklist.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = `checklist-item ${item.completed ? 'completed' : ''}`;
        itemElement.innerHTML = `
            <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleChecklistItem('${type}', ${index})">
            <span>${item.text}</span>
            <button onclick="removeChecklistItem('${type}', ${index})">🗑️ Hapus</button>
        `;
        listElement.appendChild(itemElement);
    });
}

function addChecklistItem(type) {
    const input = document.getElementById(`new-item-${type}`);
    const text = input.value.trim();
    
    if (text === '') {
        alert('Silakan masukkan item revisi!');
        return;
    }
    
    if (type === 'skripsi') {
        checklistSkripsi.push({ text, completed: false });
        localStorage.setItem('checklistSkripsi', JSON.stringify(checklistSkripsi));
    } else {
        checklistTugas.push({ text, completed: false });
        localStorage.setItem('checklistTugas', JSON.stringify(checklistTugas));
    }
    
    input.value = '';
    renderChecklist(type);
}

function toggleChecklistItem(type, index) {
    if (type === 'skripsi') {
        checklistSkripsi[index].completed = !checklistSkripsi[index].completed;
        localStorage.setItem('checklistSkripsi', JSON.stringify(checklistSkripsi));
    } else {
        checklistTugas[index].completed = !checklistTugas[index].completed;
        localStorage.setItem('checklistTugas', JSON.stringify(checklistTugas));
    }
    
    renderChecklist(type);
}

function removeChecklistItem(type, index) {
    if (confirm('Yakin ingin menghapus item ini?')) {
        if (type === 'skripsi') {
            checklistSkripsi.splice(index, 1);
            localStorage.setItem('checklistSkripsi', JSON.stringify(checklistSkripsi));
        } else {
            checklistTugas.splice(index, 1);
            localStorage.setItem('checklistTugas', JSON.stringify(checklistTugas));
        }
        
        renderChecklist(type);
    }
}

// Initialize Checklists
renderChecklist('skripsi');
renderChecklist('tugas');

// Pomodoro Timer
let timerInterval = null;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let currentMode = 'pomodoro';
let pomodoroCount = parseInt(localStorage.getItem('pomodoroCount')) || 0;

const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const timerCircle = document.getElementById('timer-circle');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const pomodoroCountDisplay = document.getElementById('pomodoro-count');

const circumference = 2 * Math.PI * 140;
timerCircle.style.strokeDasharray = circumference;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerMinutes.textContent = minutes.toString().padStart(2, '0');
    timerSeconds.textContent = seconds.toString().padStart(2, '0');
    
    const progress = (timeLeft / (currentMode === 'pomodoro' ? 25 * 60 : currentMode === 'short' ? 15 * 60 : 5 * 60)) * circumference;
    timerCircle.style.strokeDashoffset = circumference - progress;
}

function setPomodoroTime(minutes) {
    if (isRunning) {
        if (!confirm('Timer sedang berjalan. Yakin ingin mengubah waktu?')) {
            return;
        }
        pauseTimer();
    }
    
    timeLeft = minutes * 60;
    if (minutes === 25) {
        currentMode = 'pomodoro';
    } else if (minutes === 15) {
        currentMode = 'short';
    } else {
        currentMode = 'quick';
    }
    
    updateTimerDisplay();
    
    // Update active button
    document.querySelectorAll('.btn-timer').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function startTimer() {
    if (timeLeft === 0) {
        resetTimer();
    }
    
    isRunning = true;
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            isRunning = false;
            startBtn.style.display = 'inline-block';
            pauseBtn.style.display = 'none';
            
            // Play notification sound (if browser allows)
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('Pomodoro Selesai! 🎉', {
                    body: 'Waktunya istirahat!',
                    icon: '🍅'
                });
            }
            
            // If it was a pomodoro, increment count
            if (currentMode === 'pomodoro') {
                pomodoroCount++;
                localStorage.setItem('pomodoroCount', pomodoroCount.toString());
                pomodoroCountDisplay.textContent = pomodoroCount;
            }
            
            alert('Timer selesai! 🎉');
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

function resetTimer() {
    pauseTimer();
    if (currentMode === 'pomodoro') {
        timeLeft = 25 * 60;
    } else if (currentMode === 'short') {
        timeLeft = 15 * 60;
    } else {
        timeLeft = 5 * 60;
    }
    updateTimerDisplay();
}

// Request notification permission
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Initialize timer display
updateTimerDisplay();
pomodoroCountDisplay.textContent = pomodoroCount;

// Schedule Functionality
let schedules = JSON.parse(localStorage.getItem('schedules')) || [];

function renderSchedule() {
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = '';
    
    if (schedules.length === 0) {
        scheduleList.innerHTML = '<p style="text-align: center; color: #999;">Belum ada jadwal. Tambahkan jadwal baru!</p>';
        return;
    }
    
    // Sort schedules by date and time
    schedules.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA - dateB;
    });
    
    schedules.forEach((schedule, index) => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        
        const scheduleDate = new Date(`${schedule.date}T${schedule.time}`);
        const now = new Date();
        const isPast = scheduleDate < now;
        
        scheduleItem.innerHTML = `
            <h4>${schedule.title}</h4>
            <p>📅 ${formatDate(schedule.date)}</p>
            <p>⏰ ${schedule.time}</p>
            ${schedule.notes ? `<p>📝 ${schedule.notes}</p>` : ''}
            ${isPast ? '<p style="color: #999;">⏳ Sudah lewat</p>' : ''}
            <button onclick="removeSchedule(${index})">🗑️ Hapus</button>
        `;
        
        if (isPast) {
            scheduleItem.style.opacity = '0.6';
        }
        
        scheduleList.appendChild(scheduleItem);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

function addSchedule() {
    const title = document.getElementById('schedule-title').value.trim();
    const date = document.getElementById('schedule-date').value;
    const time = document.getElementById('schedule-time').value;
    const notes = document.getElementById('schedule-notes').value.trim();
    
    if (!title || !date || !time) {
        alert('Silakan isi semua field yang wajib!');
        return;
    }
    
    schedules.push({ title, date, time, notes });
    localStorage.setItem('schedules', JSON.stringify(schedules));
    
    document.getElementById('schedule-title').value = '';
    document.getElementById('schedule-date').value = '';
    document.getElementById('schedule-time').value = '';
    document.getElementById('schedule-notes').value = '';
    
    renderSchedule();
}

function removeSchedule(index) {
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
        schedules.splice(index, 1);
        localStorage.setItem('schedules', JSON.stringify(schedules));
        renderSchedule();
    }
}

// Initialize Schedule
renderSchedule();

// Set today's date as default
const today = new Date().toISOString().split('T')[0];
document.getElementById('schedule-date').value = today;

// Add scroll animation on load
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add active nav link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

