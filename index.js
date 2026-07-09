document.addEventListener("DOMContentLoaded", () => {
    
    // Dynamic Pricing Estimate Calculator using Visual Cards
    const calcCards = document.querySelectorAll(".calc-item-card");
    const calcTotal = document.getElementById("calc-total");
    const calcSelectedList = document.getElementById("calc-selected-list");

    function updateCalculator() {
        let total = 0;
        calcSelectedList.innerHTML = "";
        let selectedCount = 0;

        calcCards.forEach(card => {
            if (card.classList.contains("active")) {
                selectedCount++;
                const name = card.dataset.name;
                const price = parseFloat(card.dataset.price);
                total += price;

                // Add item to sidebar list
                const li = document.createElement("li");
                li.innerHTML = `<span>${name}</span> <span>$${price}</span>`;
                calcSelectedList.appendChild(li);
            }
        });

        if (selectedCount === 0) {
            const emptyLi = document.createElement("li");
            emptyLi.className = "empty-msg";
            emptyLi.textContent = "No services selected";
            calcSelectedList.appendChild(emptyLi);
        }

        calcTotal.textContent = total;
    }

    calcCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
            updateCalculator();
        });
    });

    // Calculator Booking Form Submission
    const calcBookingForm = document.getElementById("calc-booking-form");
    const calcSuccess = document.getElementById("calc-success");

    calcBookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        calcBookingForm.style.display = "none";
        calcSuccess.classList.remove("hidden");
    });

    // FAQ Accordion Toggle
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(btn => {
        btn.addEventListener("click", () => {
            const faqItem = btn.parentElement;
            faqItem.classList.toggle("active");

            // Close other items
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                }
            });
        });
    });

    // Hero Form Handling
    const scheduleForm = document.getElementById("hero-schedule-form");
    const successAlert = document.getElementById("form-success-alert");

    scheduleForm.addEventListener("submit", (e) => {
        e.preventDefault();
        scheduleForm.style.display = "none";
        successAlert.classList.remove("hidden");
    });
});
