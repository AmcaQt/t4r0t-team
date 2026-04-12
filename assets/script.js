const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = 'Message Received ✦';
    btn.style.background = 'linear-gradient(135deg,#7ec97e,#4a9a4a)';
    btn.disabled = true;
}

function animCount(el, target, suf) {
    let v = 0;
    const step = target / 60;
    const t = setInterval(() => {
        v = Math.min(v + step, target);
        el.textContent = Math.floor(v) + suf;
        if (v >= target) clearInterval(t);
    }, 16);
}

const ho = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        animCount(document.getElementById('stat-ctf'), 12, '+');
        animCount(document.getElementById('stat-wu'), 8, '+');
        ho.disconnect();
    }
}, { threshold: 0.5 });
const hs = document.querySelector('.hero-stats');
if (hs) ho.observe(hs);

const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let cur = '';
    document.querySelectorAll('section[id]').forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) cur = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--gold-lt)' : '';
    });
});