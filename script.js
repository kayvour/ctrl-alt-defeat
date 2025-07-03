// DOM Elements
const promptInput = document.getElementById('prompt-input');
const submitBtn = document.getElementById('submit-btn');
const resultsSection = document.getElementById('results-section');
const loadingOverlay = document.getElementById('loading-overlay');
const order66Overlay = document.getElementById('order66-overlay');
const sithResult = document.getElementById('sith-result');
const jediResult = document.getElementById('jedi-result');
const charCount = document.getElementById('char-count');

// Audio elements
const lightsaberSound = document.getElementById('lightsaber-sound');
const imperialMarch = document.getElementById('imperial-march');
const forceSound = document.getElementById('force-sound');

// State variables
let isProcessing = false;
let order66Triggered = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    createAdditionalStars();
    initializeAudio();
});

// Event Listeners
function initializeEventListeners() {
    // Input event listeners
    promptInput.addEventListener('input', handleInputChange);
    promptInput.addEventListener('keypress', handleKeyPress);
    
    // Submit button event listener
    submitBtn.addEventListener('click', handleSubmit);
    
    // Hover effects
    submitBtn.addEventListener('mouseenter', playHoverSound);
    
    // Order 66 overlay click to close
    order66Overlay.addEventListener('click', closeOrder66);
    
    // Escape key to close Order 66
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && order66Triggered) {
            closeOrder66();
        }
    });
    
    // Result cards hover effects
    document.querySelectorAll('.result-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            playSubtleSound();
        });
    });
}

// Input handling
function handleInputChange() {
    const text = promptInput.value;
    const length = text.length;
    
    // Update character counter
    charCount.textContent = length;
    
    // Update character counter color
    if (length > 800) {
        charCount.style.color = '#ff4757';
    } else if (length > 600) {
        charCount.style.color = '#ffa726';
    } else {
        charCount.style.color = '#4ecdc4';
    }
    
    // Enable/disable submit button
    submitBtn.disabled = length === 0 || isProcessing;
    
    // Check for Order 66 easter egg
    if (text.toLowerCase().includes('order 66') && !order66Triggered) {
        triggerOrder66();
    }
}

function handleKeyPress(e) {
    if (e.key === 'Enter' && e.ctrlKey && !submitBtn.disabled) {
        handleSubmit();
    }
}

// Submit handling
async function handleSubmit() {
    if (isProcessing || !promptInput.value.trim()) return;
    
    isProcessing = true;
    submitBtn.disabled = true;
    
    // Play lightsaber sound
    playLightsaberSound();
    
    // Show loading overlay
    showLoading();
    
    // Hide previous results
    resultsSection.classList.remove('show');
    
    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Generate responses
        const sithResponse = await generateSithRoast(promptInput.value);
        const jediResponse = await generateJediWisdom(promptInput.value);
        
        // Display results
        displayResults(sithResponse, jediResponse);
        
    } catch (error) {
        console.error('Error processing prompt:', error);
        displayError();
    } finally {
        hideLoading();
        isProcessing = false;
        submitBtn.disabled = promptInput.value.trim() === '';
    }
}

// AI Response Generation (Mock Implementation)
async function generateSithRoast(prompt) {
    // This would be replaced with actual OpenAI API call
    const sithRoasts = [
        `Your prompt is as unfocused as a Stormtrooper's aim. You've created something so mediocre that even Jar Jar Binks would cringe. The dark side flows through incompetence, and you are its vessel.`
    ];
    
    return sithRoasts[Math.floor(Math.random() * sithRoasts.length)];
}

async function generateJediWisdom(prompt) {
    // This would be replaced with actual OpenAI API call
    const jediWisdom = [
        `Young Padawan, your prompt shows potential, but needs focus. Consider being more specific about your desired outcome. Instead of "${prompt.substring(0, 30)}...", try: "Create a detailed [specific format] that [clear objective] for [target audience]." Clarity leads to better results, as a focused mind leads to mastery of the Force.`,
        `The Force guides us to improve your prompt. Be more specific about context, desired tone, and expected output format. Add constraints or examples to guide the AI. Remember: "Do or do not, there is no try" - be decisive in your instructions.`,
        `Wise Jedi, your prompt has good intentions but lacks structure. Consider the 5 W's: Who is your audience? What do you want created? When should it be used? Where will it be applied? Why is it important? These questions will strengthen your prompt like training strengthens a Jedi.`,
        `Patience, young one. Your prompt could benefit from more context and examples. Instead of general requests, provide specific scenarios or templates. "Show, don't just tell" - give the AI a clear path to follow, as a Master guides their Padawan.`,
        `The path to prompt mastery requires balance. Add more details about tone, style, and format. Include positive and negative examples. Specify constraints and desired length. Like a lightsaber, your prompt must be precisely crafted to be effective.`
    ];
    
    return jediWisdom[Math.floor(Math.random() * jediWisdom.length)];
}

// Display functions
function displayResults(sithText, jediText) {
    // Add typing animation effect
    typeWriter(sithResult, sithText, 30, () => {
        typeWriter(jediResult, jediText, 25, () => {
            // Show results section after typing is complete
            resultsSection.classList.add('show');
            playForceSound();
        });
    });
}

function displayError() {
    sithResult.textContent = "The dark side has consumed our connection to the Force. Try again, if you dare.";
    jediResult.textContent = "A disturbance in the Force prevents us from processing your request. Please try again, young Padawan.";
    resultsSection.classList.add('show');
}

function typeWriter(element, text, speed, callback) {
    element.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);
}

// Loading functions
function showLoading() {
    loadingOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideLoading() {
    loadingOverlay.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Order 66 Easter Egg
function triggerOrder66() {
    order66Triggered = true;
    
    // Play Imperial March
    playImperialMarch();
    
    // Show Order 66 overlay
    setTimeout(() => {
        order66Overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 500);
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (order66Triggered) {
            closeOrder66();
        }
    }, 5000);
    
    // Add red flash effect to body
    document.body.style.animation = 'red-flash 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

function closeOrder66() {
    order66Triggered = false;
    order66Overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Stop Imperial March
    if (imperialMarch) {
        imperialMarch.pause();
        imperialMarch.currentTime = 0;
    }
}

// Audio functions
function initializeAudio() {
    // Set volume levels
    if (lightsaberSound) lightsaberSound.volume = 0.3;
    if (imperialMarch) imperialMarch.volume = 0.4;
    if (forceSound) forceSound.volume = 0.2;
}

function playLightsaberSound() {
    try {
        if (lightsaberSound) {
            lightsaberSound.currentTime = 0;
            lightsaberSound.play().catch(e => console.log('Audio play prevented:', e));
        }
    } catch (e) {
        console.log('Audio not available:', e);
    }
}

function playImperialMarch() {
    try {
        if (imperialMarch) {
            imperialMarch.currentTime = 0;
            imperialMarch.play().catch(e => console.log('Audio play prevented:', e));
        }
    } catch (e) {
        console.log('Audio not available:', e);
    }
}

function playForceSound() {
    try {
        if (forceSound) {
            forceSound.currentTime = 0;
            forceSound.play().catch(e => console.log('Audio play prevented:', e));
        }
    } catch (e) {
        console.log('Audio not available:', e);
    }
}

function playHoverSound() {
    // Subtle hover sound effect
    if (lightsaberSound) {
        const hoverSound = lightsaberSound.cloneNode();
        hoverSound.volume = 0.1;
        hoverSound.play().catch(e => console.log('Audio play prevented:', e));
    }
}

function playSubtleSound() {
    // Very subtle sound for card hover
    if (forceSound) {
        const subtleSound = forceSound.cloneNode();
        subtleSound.volume = 0.05;
        subtleSound.play().catch(e => console.log('Audio play prevented:', e));
    }
}

// Visual effects
function createAdditionalStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'additional-stars';
    starsContainer.style.position = 'fixed';
    starsContainer.style.top = '0';
    starsContainer.style.left = '0';
    starsContainer.style.width = '100%';
    starsContainer.style.height = '100%';
    starsContainer.style.pointerEvents = 'none';
    starsContainer.style.zIndex = '-1';
    
    // Create random stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = '#fff';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
        
        starsContainer.appendChild(star);
    }
    
    document.body.appendChild(starsContainer);
}

// Add CSS animation for additional stars
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 1; }
    }
    
    .additional-stars {
        animation: move-stars 60s linear infinite;
    }
`;
document.head.appendChild(style);

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimizations
const debouncedInputChange = debounce(handleInputChange, 100);
promptInput.removeEventListener('input', handleInputChange);
promptInput.addEventListener('input', debouncedInputChange);

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Space or Enter to activate submit button when focused
    if ((e.key === ' ' || e.key === 'Enter') && document.activeElement === submitBtn && !submitBtn.disabled) {
        e.preventDefault();
        handleSubmit();
    }
});

// Add focus indicators for keyboard navigation
const focusableElements = [promptInput, submitBtn];
focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #4ecdc4';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Prevent form submission on Enter (except Ctrl+Enter)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.ctrlKey && document.activeElement === promptInput) {
        e.preventDefault();
    }
});

// Error handling for network issues
window.addEventListener('error', function(e) {
    console.error('Global error:', e);
    if (isProcessing) {
        hideLoading();
        displayError();
        isProcessing = false;
        submitBtn.disabled = promptInput.value.trim() === '';
    }
});

// Handle visibility change (tab switching)
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause audio when tab is not visible
        if (imperialMarch && !imperialMarch.paused) {
            imperialMarch.pause();
        }
    }
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateSithRoast,
        generateJediWisdom,
        triggerOrder66,
        closeOrder66
    };
}
