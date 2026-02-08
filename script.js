// Check if DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}

function initAll() {
    console.log('🚀 Инициализация сайта...');
    initParticles();
    initCursor();
    initMobileMenu();
    initLanguage();
    initTheme();
    initScrollEffects();
    initMusicPlayer();
    initWeather();
    initStats();
    console.log('✅ Сайт загружен успешно!');
}

// Particles Background
const canvas = document.getElementById('particles');
if (!canvas) {
    console.error('❌ Canvas не найден');
}
const ctx = canvas ? canvas.getContext('2d') : null;

if (canvas && ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
        ctx.fillStyle = 'rgba(0, 255, 136, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    if (!canvas || !ctx) {
        console.warn('⚠️ Canvas не доступен, пропускаем частицы');
        return;
    }
    
    try {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        animateParticles();
        console.log('✅ Частицы инициализированы');
    } catch (error) {
        console.error('❌ Ошибка инициализации частиц:', error);
    }
}

function animateParticles() {
    if (!canvas || !ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Connect particles
    particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 * (1 - distance / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        });
    });
    
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Custom Cursor
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    // Disable custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice && cursor && cursorFollower) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.3;
            cursorY += (mouseY - cursorY) * 0.3;
            
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
            
            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Cursor hover effects
        const interactiveElements = document.querySelectorAll('a, button, .skill-item, .tool-item, .project-card, input, textarea');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(2)`;
                cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px) scale(1.5)`;
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
                cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px) scale(1)`;
            });
        });
        
        console.log('✅ Курсор инициализирован');
    } else {
        // Hide cursor elements on touch devices
        if (cursor) cursor.style.display = 'none';
        if (cursorFollower) cursorFollower.style.display = 'none';
        console.log('ℹ️ Кастомный курсор отключен (тач-устройство)');
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Rotating text in hero
const textItems = document.querySelectorAll('.text-item');
let currentIndex = 0;

function rotateText() {
    textItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % textItems.length;
    textItems[currentIndex].classList.add('active');
}

setInterval(rotateText, 3000);

// Counter animation for stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate counters
            if (entry.target.hasAttribute('data-target')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-item, .stat-item, .tool-item, .project-card, .badge, .contact-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Observe stat counters
    document.querySelectorAll('.stat-value[data-target]').forEach(el => {
        observer.observe(el);
    });
    
    // Animate project cards on hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const number = card.querySelector('.project-number');
            if (number) {
                number.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const number = card.querySelector('.project-number');
            if (number) {
                number.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Animate badges on load
    setTimeout(() => {
        document.querySelectorAll('.badge').forEach((badge, index) => {
            setTimeout(() => {
                badge.style.animation = 'bounceIn 0.6s ease';
            }, index * 100);
        });
    }, 500);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--text-primary)';
        }
    });
    
    // Navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Scroll to top button
    const scrollToTop = document.getElementById('scrollToTop');
    if (window.scrollY > 500) {
        scrollToTop.classList.add('visible');
    } else {
        scrollToTop.classList.remove('visible');
    }
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 800;
    }
});

// Skills tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.querySelector(`[data-content="${targetTab}"]`).classList.add('active');
    });
});

// Theme toggle with new design
const themeToggle = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    localStorage.setItem('theme', currentTheme);
});

// Language selector
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langButtons = document.querySelectorAll('.lang-dropdown button');

if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
        
        // Animate button
        if (langDropdown.classList.contains('active')) {
            langBtn.style.transform = 'translateY(-2px) scale(1.05)';
        } else {
            langBtn.style.transform = 'translateY(0) scale(1)';
        }
    });
}

document.addEventListener('click', () => {
    if (langDropdown) {
        langDropdown.classList.remove('active');
        if (langBtn) {
            langBtn.style.transform = 'translateY(0) scale(1)';
        }
    }
});

if (langDropdown) {
    langDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (typeof langManager !== 'undefined') {
            langManager.updateLanguage(lang);
            langDropdown.classList.remove('active');
            if (langBtn) {
                langBtn.style.transform = 'translateY(0) scale(1)';
            }
            
            // Add success animation
            langBtn.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                langBtn.style.animation = '';
            }, 500);
        }
    });
});

// Scroll to top button
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Current time in footer
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('currentTime').textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 60000);

// Animate skill progress bars
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 100);
            });
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.work');
if (skillsSection) {
    progressObserver.observe(skillsSection);
}

// Typing effect for hero label
const typingText = document.querySelector('.hero-label');
if (typingText) {
    const originalText = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            typingText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);
}

// Glitch effect on hover for project numbers
document.querySelectorAll('.project-number').forEach(number => {
    number.addEventListener('mouseenter', function() {
        const original = this.textContent;
        let glitchCount = 0;
        
        const glitchInterval = setInterval(() => {
            if (glitchCount < 3) {
                this.textContent = Math.floor(Math.random() * 100);
                glitchCount++;
            } else {
                this.textContent = original;
                clearInterval(glitchInterval);
            }
        }, 50);
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-large').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Magnetic effect for contact cards
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        this.style.transform = `translateY(-10px) rotateX(${deltaY * 5}deg) rotateY(${deltaX * 5}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

console.log('✨ Сайт Сусика загружен и готов к работе!');

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        console.log('✅ Мобильное меню инициализировано');
    }
}

// Language initialization
function initLanguage() {
    if (typeof langManager !== 'undefined') {
        console.log('✅ Языковая система инициализирована');
    } else {
        console.warn('⚠️ Языковая система не найдена');
    }
}

// Theme initialization
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        console.log('✅ Переключатель темы инициализирован');
    }
}

// Scroll effects initialization
function initScrollEffects() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (sections.length > 0 && navLinks.length > 0) {
        console.log('✅ Эффекты прокрутки инициализированы');
    }
}

// Music player initialization
function initMusicPlayer() {
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        console.log('✅ Музыкальный плеер инициализирован');
    }
}

// Stats initialization
function initStats() {
    const visitCount = document.getElementById('visitCount');
    if (visitCount) {
        console.log('✅ Статистика инициализирована');
    }
}

// Time Display
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Time Display
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    // Update date
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('ru-RU', options);
        dateElement.textContent = dateStr;
    }
}

// Update time every second
updateTime();
setInterval(updateTime, 1000);

// Weather API
async function fetchWeather() {
    const weatherDisplay = document.getElementById('weatherDisplay');
    if (!weatherDisplay) return;
    
    try {
        // Using Open-Meteo API (free, no API key needed)
        const lat = 55.0084; // Novosibirsk latitude
        const lon = 82.9357; // Novosibirsk longitude
        
        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia%2FNovosibirsk`,
            { 
                signal: controller.signal,
                mode: 'cors',
                cache: 'no-cache'
            }
        );
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const current = data.current;
        
        // Weather code descriptions
        const weatherDescriptions = {
            0: 'Ясно',
            1: 'Преимущественно ясно',
            2: 'Переменная облачность',
            3: 'Пасмурно',
            45: 'Туман',
            48: 'Изморозь',
            51: 'Легкая морось',
            53: 'Морось',
            55: 'Сильная морось',
            61: 'Небольшой дождь',
            63: 'Дождь',
            65: 'Сильный дождь',
            71: 'Небольшой снег',
            73: 'Снег',
            75: 'Сильный снег',
            77: 'Снежная крупа',
            80: 'Ливень',
            81: 'Сильный ливень',
            82: 'Очень сильный ливень',
            85: 'Снегопад',
            86: 'Сильный снегопад',
            95: 'Гроза',
            96: 'Гроза с градом',
            99: 'Сильная гроза с градом'
        };
        
        const condition = weatherDescriptions[current.weather_code] || 'Неизвестно';
        
        weatherDisplay.innerHTML = `
            <div class="weather-info">
                <div class="weather-temp">${Math.round(current.temperature_2m)}°C</div>
                <div class="weather-details">
                    <div class="weather-city">Новосибирск</div>
                    <div class="weather-condition">${condition}</div>
                    <div class="weather-extra">
                        <span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                            </svg>
                            ${current.relative_humidity_2m}%
                        </span>
                        <span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
                            </svg>
                            ${Math.round(current.wind_speed_10m)} км/ч
                        </span>
                    </div>
                </div>
            </div>
        `;
        
        console.log('✅ Погода загружена успешно');
    } catch (error) {
        console.error('❌ Ошибка загрузки погоды:', error);
        
        // Fallback - показываем статичные данные
        weatherDisplay.innerHTML = `
            <div class="weather-info">
                <div class="weather-temp">--°C</div>
                <div class="weather-details">
                    <div class="weather-city">Новосибирск</div>
                    <div class="weather-condition">Загрузка...</div>
                    <div class="weather-extra">
                        <span style="color: var(--text-secondary); font-size: 0.9rem;">
                            ${error.name === 'AbortError' ? 'Превышено время ожидания' : 'Не удалось загрузить погоду'}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
}

// Load weather on page load
if (document.getElementById('weatherDisplay')) {
    // Delay weather loading to not block page
    setTimeout(() => {
        fetchWeather().catch(err => {
            console.warn('⚠️ Погода не загрузилась:', err);
        });
        // Update weather every 10 minutes
        setInterval(() => {
            fetchWeather().catch(err => {
                console.warn('⚠️ Обновление погоды не удалось:', err);
            });
        }, 600000);
    }, 1000);
}

// Music Player
const musicTracks = [
    {
        title: "stalk ur socials",
        artist: "slowed version",
        url: "stalk ur socials (slowed).mp3",
        duration: "3:45"
    },
    {
        title: "The Dark Triad",
        artist: "slenderpill x Versatile (Slowed + Low Honor)",
        url: "slenderpill_-_Versatile_-_The_Dark_Triad_-_Slowed_Low_Honor_(SkySound.cc).mp3",
        duration: "4:20"
    }
];

let currentTrackIndex = 0;
let isPlaying = false;
let audio = null;

// Initialize audio safely
try {
    audio = new Audio();
    audio.volume = 0.7;
    console.log('✅ Audio инициализирован');
} catch (error) {
    console.error('❌ Ошибка инициализации Audio:', error);
}

function loadTrack(index) {
    if (musicTracks.length === 0 || !audio) return;
    
    try {
        currentTrackIndex = index;
        const track = musicTracks[currentTrackIndex];
        
        audio.src = track.url;
        
        const titleEl = document.getElementById('trackTitle');
        const artistEl = document.getElementById('trackArtist');
        
        if (titleEl) titleEl.textContent = track.title;
        if (artistEl) artistEl.textContent = track.artist;
        
        // Update playlist active state
        document.querySelectorAll('.playlist-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        console.log('✅ Трек загружен:', track.title);
    } catch (error) {
        console.error('❌ Ошибка загрузки трека:', error);
    }
}

function togglePlay() {
    if (musicTracks.length === 0 || !audio) return;
    
    try {
        const playIcon = document.querySelector('.play-icon');
        const pauseIcon = document.querySelector('.pause-icon');
        
        if (isPlaying) {
            audio.pause();
            if (playIcon) playIcon.style.display = 'block';
            if (pauseIcon) pauseIcon.style.display = 'none';
        } else {
            audio.play().catch(err => {
                console.error('❌ Ошибка воспроизведения:', err);
            });
            if (playIcon) playIcon.style.display = 'none';
            if (pauseIcon) pauseIcon.style.display = 'block';
        }
        isPlaying = !isPlaying;
    } catch (error) {
        console.error('❌ Ошибка переключения воспроизведения:', error);
    }
}

function nextTrack() {
    if (musicTracks.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audio.play();
}

function prevTrack() {
    if (musicTracks.length === 0) return;
    currentTrackIndex = (currentTrackIndex - 1 + musicTracks.length) % musicTracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) audio.play();
}

// Event listeners for music player
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (playBtn) {
    playBtn.addEventListener('click', togglePlay);
    console.log('✅ Кнопка Play подключена');
}
if (nextBtn) {
    nextBtn.addEventListener('click', nextTrack);
    console.log('✅ Кнопка Next подключена');
}
if (prevBtn) {
    prevBtn.addEventListener('click', prevTrack);
    console.log('✅ Кнопка Prev подключена');
}

// Progress bar
if (audio) {
    audio.addEventListener('timeupdate', () => {
        const progressFill = document.getElementById('progressFill');
        if (progressFill && audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = progress + '%';
        }
        
        // Update time display
        const currentTimeEl = document.getElementById('currentTimeMusic');
        const durationEl = document.getElementById('durationMusic');
        if (currentTimeEl && durationEl) {
            currentTimeEl.textContent = formatTime(audio.currentTime);
            if (audio.duration) {
                durationEl.textContent = formatTime(audio.duration);
            }
        }
    });

    // Auto play next track
    audio.addEventListener('ended', () => {
        // Increment tracks played counter
        updateTracksPlayed();
        nextTrack();
    });
    
    console.log('✅ Audio события подключены');
}

// Click on progress bar to seek
const progressBar = document.querySelector('.progress-bar');
if (progressBar) {
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (audio.duration) {
            audio.currentTime = percent * audio.duration;
        }
    });
    
    // Touch support for progress bar
    progressBar.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = progressBar.getBoundingClientRect();
        const percent = (touch.clientX - rect.left) / rect.width;
        if (audio.duration) {
            audio.currentTime = percent * audio.duration;
        }
    });
}

// Format time helper
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Volume control
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeControl = document.getElementById('volumeControl');

if (volumeBtn && volumeSlider) {
    volumeBtn.addEventListener('click', () => {
        volumeSlider.style.display = volumeSlider.style.display === 'none' ? 'block' : 'none';
    });
}

if (volumeControl) {
    audio.volume = 0.7; // Default volume
    volumeControl.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });
}

// Auto play next track
audio.addEventListener('ended', () => {
    // Increment tracks played counter
    updateTracksPlayed();
    nextTrack();
});

// Tracks played counter
function updateTracksPlayed() {
    let tracksPlayed = localStorage.getItem('tracksPlayed') || 0;
    tracksPlayed = parseInt(tracksPlayed) + 1;
    localStorage.setItem('tracksPlayed', tracksPlayed);
    
    const tracksPlayedEl = document.getElementById('tracksPlayed');
    if (tracksPlayedEl) {
        tracksPlayedEl.textContent = tracksPlayed;
    }
}

// Initialize tracks played counter
function initTracksPlayed() {
    const tracksPlayed = localStorage.getItem('tracksPlayed') || 0;
    const tracksPlayedEl = document.getElementById('tracksPlayed');
    if (tracksPlayedEl) {
        tracksPlayedEl.textContent = tracksPlayed;
    }
}

initTracksPlayed();

// Render playlist
function renderPlaylist() {
    const playlist = document.getElementById('playlist');
    if (!playlist) return;
    
    if (musicTracks.length === 0) {
        playlist.innerHTML = '<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">Треки скоро появятся...</div>';
        return;
    }
    
    playlist.innerHTML = musicTracks.map((track, index) => `
        <div class="playlist-item" data-index="${index}">
            <div class="playlist-item-info">
                <div class="playlist-item-title">${track.title}</div>
                <div class="playlist-item-artist">${track.artist}</div>
            </div>
            <div class="playlist-item-duration">${track.duration || '0:00'}</div>
        </div>
    `).join('');
    
    // Add click listeners
    document.querySelectorAll('.playlist-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            loadTrack(index);
            if (!isPlaying) togglePlay();
        });
    });
}

// Initialize playlist
renderPlaylist();

// Visit counter
function updateVisitCount() {
    let visits = localStorage.getItem('visitCount') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('visitCount', visits);
    
    const visitCountEl = document.getElementById('visitCount');
    if (visitCountEl) {
        animateNumber(visitCountEl, 0, visits, 1000);
    }
}

// Animate number
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Online time tracker
let onlineStartTime = Date.now();

function updateOnlineTime() {
    const onlineTimeEl = document.getElementById('onlineTime');
    if (onlineTimeEl) {
        const elapsed = Math.floor((Date.now() - onlineStartTime) / 1000 / 60); // minutes
        const hours = Math.floor(elapsed / 60);
        const minutes = elapsed % 60;
        
        if (hours > 0) {
            onlineTimeEl.textContent = `${hours}ч ${minutes}м`;
        } else {
            onlineTimeEl.textContent = `${minutes}м`;
        }
    }
}

// Update online time every minute
setInterval(updateOnlineTime, 60000);
updateOnlineTime();

// Initialize visit counter
updateVisitCount();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space - play/pause
    if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        togglePlay();
    }
    // Arrow Right - next track
    if (e.code === 'ArrowRight' && e.ctrlKey) {
        e.preventDefault();
        nextTrack();
    }
    // Arrow Left - previous track
    if (e.code === 'ArrowLeft' && e.ctrlKey) {
        e.preventDefault();
        prevTrack();
    }
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Prevent zoom on double tap for iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Optimize scroll performance on mobile
let ticking = false;
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll(lastScrollY);
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

function handleScroll(scrollY) {
    // Navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Scroll to top button
    const scrollToTop = document.getElementById('scrollToTop');
    if (scrollToTop) {
        if (scrollY > 500) {
            scrollToTop.classList.add('visible');
        } else {
            scrollToTop.classList.remove('visible');
        }
    }
    
    // Active nav link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--text-primary)';
        }
    });
}

// Detect mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Optimize animations for mobile
if (isMobile) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
    
    // Disable parallax on mobile
    window.removeEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - scrolled / 800;
        }
    });
}
