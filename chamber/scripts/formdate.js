document.getElementById('formLoadTime').value = Date.now();

// JavaScript to update membership level title and hidden input
document.querySelectorAll('.star-rating input').forEach(input => {
    input.addEventListener('change', function() {
        const membershipLevel = document.getElementById('membership-level');
        const membershipInput = document.getElementById('membership-input');
        switch(this.value) {
            case '1':
                membershipLevel.textContent = ' NP Membership';
                membershipInput.value = ' NP Membership';
                break;
            case '2':
                membershipLevel.textContent = ' Bronze Membership';
                membershipInput.value = ' Bronze Membership';
                break;
            case '3':
                membershipLevel.textContent = ' Silver Membership';
                membershipInput.value = ' Silver Membership';
                break;
            case '4':
                membershipLevel.textContent = ' Gold Membership';
                membershipInput.value = ' Gold Membership';
                break;
        }
    });
});
