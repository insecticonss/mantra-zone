
// Simulate changing stats
function updateStats() {
    const statsValues = document.querySelectorAll('.stat-value');
    
    setInterval(() => {
        statsValues.forEach(stat => {
            if (stat.textContent.startsWith('$')) {
                const currentValue = parseFloat(stat.textContent.replace(/[$,]/g, ''));
                const newValue = currentValue + Math.random() * 1000;
                stat.textContent = `$${newValue.toLocaleString(undefined, { 
                    maximumFractionDigits: 0 
                })}`;
                
                // Add pulse animation
                stat.classList.add('pulse');
                setTimeout(() => {
                    stat.classList.remove('pulse');
                }, 600);
            }
        });
    }, 5000);
}

// Connect wallet functionality
function initializeWallet() {
    const connectButtons = document.querySelectorAll('.connect-wallet');
    const checkButton = document.querySelector('.check-button');
    
    connectButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Simulate wallet connection
            connectButtons.forEach(btn => {
                btn.textContent = '0x7Fc6...DDaE9';
            });
            
            if (checkButton) {
                checkButton.textContent = 'Checking...';
                setTimeout(() => {
                    // Randomly determine eligibility (70% chance)
                    const isEligible = Math.random() > 0.3;
                    checkButton.textContent = isEligible ? 'Claim Tokens' : 'Not Eligible';
                    checkButton.classList.toggle('check-button-eligible', isEligible);
                    
                    if (isEligible) {
                        checkButton.addEventListener('click', () => {
                            checkButton.textContent = 'Claiming...';
                            setTimeout(() => {
                                checkButton.textContent = 'Claimed';
                                checkButton.disabled = true;
                            }, 2000);
                        });
                    } else {
                        checkButton.disabled = true;
                    }
                }, 1500);
            }
        });
    });
}

// Add active state to FAQ items
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    initializeWallet();
    initializeFAQ();
    
    // Hero card hover effect
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.addEventListener('mouseenter', () => {
            heroCard.style.borderColor = 'rgba(255, 20, 147, 0.6)';
        });
        
        heroCard.addEventListener('mouseleave', () => {
            heroCard.style.borderColor = 'rgba(255, 20, 147, 0.2)';
        });
    }
});
