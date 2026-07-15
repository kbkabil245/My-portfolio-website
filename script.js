// ============================================================
// Mobile Sidebar Toggle
// ============================================================
function openSidebar() {
    document.getElementById("mySidebarMenu").classList.add("active");
}

function closeSidebar() {
    document.getElementById("mySidebarMenu").classList.remove("active");
}

// ============================================================
// Page Initialization (Sticky Header, Typing Effects, Scroll Reveal, Scroll-to-Top)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    // Sticky Header Functionality
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) { header.classList.add("sticky"); }
        else { header.classList.remove("sticky"); }
    });

    // Typing Text Effect Engine
    const typingSpan = document.querySelector(".typing-text");
    if (typingSpan) {
        const roles = ["QA Automation Engineering.", "Manual Testing.", "Automation Testing (Selenium/Java)."];
        let roleIndex = 0, charIndex = 0, isDeleting = false;
        function typeEffect() {
            let currentRole = roles[roleIndex];
            if (isDeleting) {
                typingSpan.innerHTML = `I am into <span style="color: #3b82f6; font-weight: bold; text-shadow: 0 0 10px rgba(59,130,246,0.2);">${currentRole.substring(0, charIndex - 1)}</span>`;
                charIndex--;
            } else {
                typingSpan.innerHTML = `I am into <span style="color: #3b82f6; font-weight: bold; text-shadow: 0 0 10px rgba(59,130,246,0.2);">${currentRole.substring(0, charIndex + 1)}</span>`;
                charIndex++;
            }
            let typeSpeed = isDeleting ? 40 : 80;
            if (!isDeleting && charIndex === currentRole.length) { typeSpeed = 1500; isDeleting = true; }
            else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typeSpeed = 500; }
            setTimeout(typeEffect, typeSpeed);
        }
        setTimeout(typeEffect, 1000);
    }

    // Header logo typing effect
    const headerLogo = document.querySelector(".logo");
    if (headerLogo) {
        const headerText = "Welcome To My Portfolio Website";
        let logoCharIndex = 0;
        function typeHeaderLogo() {
            headerLogo.textContent = headerText.slice(0, logoCharIndex + 1);
            logoCharIndex++;
            if (logoCharIndex < headerText.length) {
                setTimeout(typeHeaderLogo, 80);
            }
        }
        setTimeout(typeHeaderLogo, 500);
    }

    // Dual-Direction Scroll Reveal Engine (Up & Down Animation)
    function revealSections() {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;


            if (elementTop < windowHeight - 60 && elementBottom > 60) {
                element.classList.add("active");
            }

            else {
                element.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial Trigger

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    function toggleScrollToTop() {
        if (!scrollToTopBtn) return;
        if (window.scrollY > 100) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    }
    window.addEventListener("scroll", toggleScrollToTop);
    toggleScrollToTop();
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

// ============================================================
// Chatbase Live Chat Widget Loader
// ============================================================
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="XGkfGJgfF50PKh0U38aBF";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();

// ============================================================
// Auto-hide Chatbase Bubble (5s)
// ============================================================
// Message 5 second-la maraikanum na 5000 nu kodunga
setTimeout(function() {
    var chatWidget = document.querySelector('.chatbase-bubble');
    // Ithu widget-ai hide panna try pannum
    if (chatWidget) {
        // Optional: oru fade out effect kooda kudukalam
        chatWidget.style.display = 'none';
    }
}, 5000);

// ============================================================
// Auto-hide Chatbase Bubble Message (4s after load)
// ============================================================
window.addEventListener('load', function() {
    setTimeout(function() {
        // Intha class name chatbase-oda wrapper class
        var chatWidget = document.querySelector('.chatbase-bubble-message');
        if (chatWidget) {
            chatWidget.style.display = 'none';
        }
    }, 4000); // 4 seconds
});

// ============================================================
// Live Test Automation Simulator
// ============================================================
document.getElementById('run-sim-btn').addEventListener('click', function() {
    const btn = this;
    const screen = document.getElementById('terminal-screen');

    // Multi-click validation checking logic
    if (btn.disabled) return;
    btn.disabled = true;
    btn.style.opacity = '0.6';
    btn.innerText = 'Executing Scripts...';
    screen.innerHTML = ''; // Reset core screen log buffer array loop

    // Live sequence console mock data engine
    const logMessages = [
        "[INFO] 🚀 Initializing Selenium WebDriver engine...",
        "[INFO] 🖥️ Launching headless Chrome Browser instance v126.x...",
        "[INFO] 🌐 Navigating target deployment URL: https://qa-env.app/login",
        "[INFO] 🔍 Locating WebElements: username_field, password_field...",
        "[DATA] ✍️ Typing test target payload context credentials...",
        "[EVENT] 🖱️ Triggering click event sequence on: login_submit_btn",
        "[WAIT] ⏳ Explicit wait active: Synchronizing dynamic Dashboard elements...",
        "[VERIFY] 🎯 Asserting Expected Title vs Actual Page Title...",
        "[PASS] ✅ Assert True: User Dashboard loaded successfully.",
        "[INFO] 🏁 Closing active WebDriver sessions cleanly...",
        "\n--- [RESULT] TOTAL: 1 | PASSED: 1 | FAILED: 0 (Execution Time: 2.4s) ---"
    ];

    let index = 0;

    function printNextLog() {
        if (index < logMessages.length) {
            // Append target row block element
            screen.innerHTML += logMessages[index] + "\n";
            screen.scrollTop = screen.scrollHeight; // Auto-scroll container to bottom anchor
            index++;
            // Dynamically create a realistic staggering typing lag interval timer
            setTimeout(printNextLog, Math.floor(Math.random() * 400) + 200);
        } else {
            // Reset button context fields when loop exits safely
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.innerText = 'Run Test Execution';
        }
    }

    printNextLog();
});

const sr = scrollReveal({
    distance: '80px', 
    duration: 5000, 
    delay: 300,
    reset: true
});
sr.reveal('.reveal', { origin: 'top' });
