document.addEventListener("DOMContentLoaded", function () {
    // ==========================================
    // 1. INJECT AUTH MODAL DYNAMICALLY TO ALL PAGES
    // ==========================================
    const modalHTML = `
    <!-- Auth Modal -->
    <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="border-radius: 16px; border: none; box-shadow: var(--shadow-lg);">
          <div class="modal-header" style="border-bottom: none; padding: 25px 25px 10px;">
            <h4 class="modal-title" id="authModalLabel" style="font-family: 'Outfit', sans-serif; font-weight: 800; color: var(--text-main);">Dolly's Club</h4>
            <button type="button" class="btn-close" data-bs-close="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style="padding: 10px 25px 25px;">
            <!-- Tabs for Sign In / Sign Up -->
            <ul class="nav nav-pills nav-justified mb-4" id="authTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="signin-tab" data-bs-toggle="pill" data-bs-target="#signin-panel" type="button" role="tab" aria-controls="signin-panel" aria-selected="true" style="border-radius: 30px; font-family: 'Outfit', sans-serif; font-weight: 600;">Sign In</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="signup-tab" data-bs-toggle="pill" data-bs-target="#signup-panel" type="button" role="tab" aria-controls="signup-panel" aria-selected="false" style="border-radius: 30px; font-family: 'Outfit', sans-serif; font-weight: 600;">Sign Up</button>
              </li>
            </ul>
            
            <div class="tab-content" id="authTabContent">
              <!-- Sign In Panel -->
              <div class="tab-pane fade show active" id="signin-panel" role="tabpanel" aria-labelledby="signin-tab">
                <form id="signinForm">
                  <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <input type="email" class="form-control" placeholder="Enter your email" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Enter your password" required>
                  </div>
                  <button type="submit" class="btn btn-dark w-100 mt-3 py-2">Sign In</button>
                </form>
              </div>
              
              <!-- Sign Up Panel -->
              <div class="tab-pane fade" id="signup-panel" role="tabpanel" aria-labelledby="signup-tab">
                <form id="signupForm">
                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="form-control" placeholder="Enter your full name" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <input type="email" class="form-control" placeholder="Enter your email" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Create a password" required>
                  </div>
                  <button type="submit" class="btn btn-dark w-100 mt-3 py-2">Create Account</button>
                </form>
              </div>
            </div>
            
            <div id="authSuccessMsg" class="text-center mt-3 text-success-pink" style="display: none;"></div>
          </div>
        </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Get modal instance and tabs
    const authModalEl = document.getElementById('authModal');
    const signinTabEl = document.getElementById('signin-tab');
    const signupTabEl = document.getElementById('signup-tab');
    const authSuccessMsg = document.getElementById('authSuccessMsg');
    const tabContentEl = document.getElementById('authTabContent');

    // ==========================================
    // 2. BIND NAV HEADER BUTTONS TO MODAL OPEN
    // ==========================================
    const signupBtn = document.querySelector('a.btn-light[href="#"]');
    const signinBtn = document.querySelector('a.btn-outline-light[href="#"]');

    if (signupBtn) {
        signupBtn.setAttribute('data-bs-toggle', 'modal');
        signupBtn.setAttribute('data-bs-target', '#authModal');
        signupBtn.addEventListener('click', function () {
            // Trigger SignUp tab activate
            authSuccessMsg.style.display = 'none';
            tabContentEl.style.display = 'block';
            const tab = new bootstrap.Tab(signupTabEl);
            tab.show();
        });
    }

    if (signinBtn) {
        signinBtn.setAttribute('data-bs-toggle', 'modal');
        signinBtn.setAttribute('data-bs-target', '#authModal');
        signinBtn.addEventListener('click', function () {
            // Trigger SignIn tab activate
            authSuccessMsg.style.display = 'none';
            tabContentEl.style.display = 'block';
            const tab = new bootstrap.Tab(signinTabEl);
            tab.show();
        });
    }

    // Handle Forms Submission Inside Modal
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');

    if (signinForm) {
        signinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            tabContentEl.style.display = 'none';
            authSuccessMsg.innerText = "Welcome back! Sign in successful.";
            authSuccessMsg.style.display = 'block';
            setTimeout(() => {
                const modal = bootstrap.Modal.getInstance(authModalEl);
                modal.hide();
                signinForm.reset();
            }, 2500);
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            tabContentEl.style.display = 'none';
            authSuccessMsg.innerText = "Congratulations! Your Dolly's Club account has been successfully created.";
            authSuccessMsg.style.display = 'block';
            setTimeout(() => {
                const modal = bootstrap.Modal.getInstance(authModalEl);
                modal.hide();
                signupForm.reset();
            }, 2500);
        });
    }

    // ==========================================
    // 3. HANDLE EVENTS PAGE: INJECT EVENT MODAL
    // ==========================================
    if (window.location.pathname.includes("events.html")) {
        const eventModalHTML = `
        <!-- Event Registration Modal -->
        <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="border-radius: 16px; border: none; box-shadow: var(--shadow-lg);">
              <div class="modal-header" style="border-bottom: none; padding: 25px 25px 10px;">
                <h4 class="modal-title" id="eventModalLabel" style="font-family: 'Outfit', sans-serif; font-weight: 800; color: var(--text-main);">Event Registration</h4>
                <button type="button" class="btn-close" data-bs-close="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" style="padding: 10px 25px 25px;">
                <form id="eventRegistrationForm">
                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="form-control" placeholder="Enter your name" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email Address</label>
                    <input type="email" class="form-control" placeholder="Enter your email" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Select Event</label>
                    <select class="form-select" id="eventSelect">
                      <option value="Pink Party Night">Pink Party Night - 15 June 2026</option>
                      <option value="Movie Night">Movie Night - 22 June 2026</option>
                      <option value="Music & Chill">Music & Chill - 30 June 2026</option>
                    </select>
                  </div>
                  <button type="submit" class="btn btn-dark w-100 mt-3 py-2">Confirm Registration</button>
                </form>
                <div id="eventSuccessMsg" class="text-center mt-3 text-success-pink" style="display: none;"></div>
              </div>
            </div>
          </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', eventModalHTML);

        // Bind all "Join Event" buttons to open the modal and auto-select the event!
        const eventSelect = document.getElementById('eventSelect');
        const eventModalEl = document.getElementById('eventModal');
        const eventSuccessMsg = document.getElementById('eventSuccessMsg');
        const eventForm = document.getElementById('eventRegistrationForm');

        const joinEventBtns = document.querySelectorAll('a.btn-dark[href="#"]');
        joinEventBtns.forEach(btn => {
            btn.setAttribute('data-bs-toggle', 'modal');
            btn.setAttribute('data-bs-target', '#eventModal');

            btn.addEventListener('click', function () {
                eventSuccessMsg.style.display = 'none';
                eventForm.style.display = 'block';

                // Find card title to pre-select event dropdown!
                const card = btn.closest('.card-body');
                if (card) {
                    const eventTitle = card.querySelector('h4').innerText.trim();
                    for (let option of eventSelect.options) {
                        if (option.text.includes(eventTitle)) {
                            eventSelect.value = option.value;
                            break;
                        }
                    }
                }
            });
        });

        if (eventForm) {
            eventForm.addEventListener('submit', function (e) {
                e.preventDefault();
                eventForm.style.display = 'none';
                const selectedText = eventSelect.options[eventSelect.selectedIndex].text.split(" - ")[0];
                eventSuccessMsg.innerText = `Registration confirmed! We are thrilled to welcome you to the ${selectedText}. Check your inbox for your confirmation ticket!`;
                eventSuccessMsg.style.display = 'block';

                setTimeout(() => {
                    const modal = bootstrap.Modal.getInstance(eventModalEl);
                    modal.hide();
                    eventForm.reset();
                }, 4000);
            });
        }
    }

    // ==========================================
    // 4. HANDLE MEMBERSHIP FORM SUBMISSION
    // ==========================================
    if (window.location.pathname.includes("membership.html")) {
        const membershipForm = document.querySelector('form');
        if (membershipForm) {
            // Append success message element placeholder
            const msgPlaceholder = document.createElement('div');
            msgPlaceholder.id = "membershipMsg";
            msgPlaceholder.style.display = "none";
            membershipForm.appendChild(msgPlaceholder);

            membershipForm.addEventListener('submit', function (e) {
                e.preventDefault();
                
                // Hide fields & button, show success
                const inputs = membershipForm.querySelectorAll('.mb-3');
                inputs.forEach(el => el.style.display = 'none');
                const submitBtn = membershipForm.querySelector('button[type="submit"]');
                if (submitBtn) submitBtn.style.display = 'none';
                
                const nameVal = membershipForm.querySelector('input[type="text"]').value;
                const typeVal = membershipForm.querySelector('select').value;
                
                msgPlaceholder.innerHTML = `Welcome to Dolly's Club, ${nameVal}! Your <strong>${typeVal} Membership</strong> registration has been submitted successfully. We have sent an onboarding email with your credentials.`;
                msgPlaceholder.className = "text-center text-success-pink";
                msgPlaceholder.style.display = "block";
            });
        }
    }

    // ==========================================
    // 5. HANDLE CONTACT FORM STYLE
    // ==========================================
    if (window.location.pathname.includes("contact.html")) {
        const contactForm = document.getElementById('contactForm');
        const contactMsg = document.getElementById('msg');
        if (contactForm && contactMsg) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                contactForm.style.display = 'none';
                contactMsg.innerText = "Message sent successfully! We will get back to you within 24 hours.";
                contactMsg.className = "text-center text-success-pink";
                contactMsg.style.display = "block";
            });
        }
    }
});
