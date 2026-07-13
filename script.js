function loadSharedContent() {
    const headerHTML = `
    <nav style="background: rgba(10,15,30,0.95);height: 65px; border-bottom: 1px solid #22c55e">
        <div class="nav-container" style="max-width:1280px; margin: 0 auto; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center;">
        <a href="index.html" style="display: flex; align-items: center;gap: 15px; text-decoration: auto; color: deepskyblue;" ">
        
        <span style="font-size:1.6rem;color: #22c55e; font-weight:600;">VBB</span><span style="color: deeppink;">Veena ByteBits Limited </span>
        </a>
        <ul class="nav-links" style="display: flex; gap: 2.5rem;list-style: none; margin: 0;">
            <li><a href="index.html" class="nav-links" style="color: #a3e635; text-decoration: none; font-weight: 500;">HOME</a> </li>
            <li><a href="about.html" class="nav-links" style="color: chartreuse; text-decoration: none; font-weight: 500;">ABOUT</a> </li>
            <li><a href="skills.html" class="nav-links" style="color: cyan; text-decoration: none; font-weight: 500;">SKILLS</a> </li>
            <li><a href="projects.html" class="nav-links" style="color: red; text-decoration: #a3e635; font-weight: 500;">PROJECTS</a> </li>
            <li><a href="resume.html" class="nav-links" style="color: purple; text-decoration: white; font-weight: 500;">RESUME</a> </li>
            <li><a href="contacts.html" class="nav-links" style="color: deepskyblue; text-decoration: black; font-weight: 500;">CONTACTS</a> </li>
        </ul>
        <div style="display: flex; align-items: center; gap: 1rem;">
        <button onclick="toggleTheme()" style="background: none;border: none;color: white;font-size: 1.5rem;cursor:pointer;">
        <i class="fas fa-moon" id="theme-icon"></i>
        </button>
        <button onclick=function downloadResume() {
        
        }
        "downloadResume()" class="btn-primary" style="padding: 10px 24px;">Resume</button>
        <button onclick="toggleMobileMenu()" style="font-size: 1.8rem;background: white;border:
         yellow;color: deepskyblue;cursor: pointer;padding: 5px 10px;">☰</button>
        </div>
        </div>
        </nav>`;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    const footerHTML = `
    <footer style="background: #020617; color:#64748b; text-align:center; padding:2rem 2rem; margin-top:9rem; border-top: 1px solid powderblue">
        <div style="max-width: 1200px; margin: 0 auto;">
            <p style="font-size: 1.15rem; margin-bottom: 2rem;">&copy; 2026 Veena ByteBits. All Rights Reserved.</p>
            <p style="margin-bottom: 1.5rem; color: #22c55e;">Linux Administration | Networking | Python Development | Ethical Hacking</p>
            
            <div style="display: flex; justify-content: center; gap: 2.5rem; margin-top: 1.5rem; font-size:1.5rem;">
                <a href="#" style="color: deeppink; text-decoration: none;">X</a>
                <a href="#" style="color: yellow; text-decoration: none;">GitHub</a>
                <a href="#" style="color: black; text-decoration: none;">Youtube</a>
                
            </div>
            <p style="margin-top: 2rem; font-size: 0.9rem;color: mediumpurple;">Built with passion for technology and security.</p>
            
         </div>   
     </footer>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function toggleMobileMenu() {
    let menu = document.getElementById('mobile-menu')

    if (!menu) {
        const nav = document.querySelector('nav');
        menu = document.createElement('div');
        menu.id = 'mobile-menu';
        menu.style.cssText = `
            position: relative;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(15,23,42,0.98);
            padding: 1.5rem 2rem;
            display: none;
            z-index:999;
            `;

        menu.innerHTML = `
            <a href="index.html" style="display:block; padding:12px 0; color: inherit; text-decoration: none; font-size:1.1rem;">Home</a>
            <a href="about.html" style="display: block; padding: 12px 0; color: inherit; text-decoration: none;font-size: 1.1rem;">About</a>
            <a href="skills.html" style="display: block; padding: 12px 0; color: inherit; text-decoration: none; font-size: 1.1rem;">Skills</a>
            <a href="resume.html" style="display: block; padding: 12px 0; color: red;text-decoration: black; font-size: 1.1rem;">Resume</a>
            <a href="projects.html" style="display: block; padding: 12px 0; color: inherit; text-decoration: none; font-size: 1.1rem;">Projects</a>
            <a href="contacts.html" style="display: block; padding: 12px 0; color: inherit; text-decoration: none; font-size: 1.1rem;">Contacts</a>
            
            `;
        nav.appendChild(menu);
    }
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function toggleTheme() {
    alert("Resume download would start here.");

}

function handleScroll() {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add('visible');
        }
    });
}

function typeWriter() {
    const text = "SECURE + AUTOMATED + CONNECTED";
    const element = document.getElementById('tagline')
    let i = 0
    element.innerHTML = "";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }

    type()
}

function downloadResume() {
    window.location.href = "veena_resume.pdf";

}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 800);
});
document.addEventListener('DOMContentLoaded', () => {
    loadSharedContent();
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-icon').className = savedTheme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 300)


});
