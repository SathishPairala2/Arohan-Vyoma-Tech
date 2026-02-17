/**
 * TECHMAWA - Form Handler
 * Contact form validation and submission
 */

export function initForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            company: document.getElementById('company').value.trim(),
            website: document.getElementById('website').value.trim(),
            budget: document.getElementById('budget').value,
            timeline: document.getElementById('timeline').value,
            message: document.getElementById('message').value.trim(),
            agreement: document.getElementById('agreement').checked,
            services: []
        };

        // Get selected services
        const serviceCheckboxes = document.querySelectorAll('input[name="service"]:checked');
        serviceCheckboxes.forEach((checkbox) => {
            formData.services.push(checkbox.value);
        });

        // Validate
        if (!validateForm(formData)) {
            // Error message is handled within validateForm or logic below
            return;
        }

        // Simulate form submission
        try {
            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;

            // Set loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

            console.log('Form Data Submitted:', formData);

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success
            showMessage('Thank you! Your message has been received. I will contact you within 24 hours.', 'success');
            form.reset();

            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

        } catch (error) {
            console.error(error);
            showMessage('Oops! Something went wrong. Please try again.', 'error');
            const submitBtn = form.querySelector('.btn-submit');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
    });

    function validateForm(data) {
        // Basic required fields
        if (!data.name || !data.email || !data.phone || !data.message) {
            showMessage('Please fill in all required contact fields.', 'error');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return false;
        }

        // Service validation
        if (data.services.length === 0) {
            showMessage('Please select at least one service.', 'error');
            return false;
        }

        // Budget & Timeline validation
        if (!data.budget || !data.timeline) {
            showMessage('Please select your budget and timeline.', 'error');
            return false;
        }

        // Agreement validation
        if (!data.agreement) {
            showMessage('Please agree to be contacted.', 'error');
            return false;
        }

        return true;
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}
