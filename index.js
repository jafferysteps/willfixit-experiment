document.addEventListener("DOMContentLoaded", () => {
    
    // Zip Code Service Checker
    const checkZipBtn = document.getElementById("check-zip-btn");
    const zipInput = document.getElementById("zip-input");
    const checkerResponse = document.getElementById("checker-response");

    // Sample active San Antonio service zip codes
    const activeZips = ["78247", "78209", "78258", "78216", "78230", "78248", "78259", "78232"];

    checkZipBtn.addEventListener("click", () => {
        const zip = zipInput.value.trim();
        checkerResponse.classList.remove("hidden", "response-success", "response-fail");

        if (zip === "") {
            checkerResponse.textContent = "Please enter a valid zip code.";
            checkerResponse.classList.add("response-fail");
            return;
        }

        if (activeZips.includes(zip)) {
            checkerResponse.textContent = `✓ Yes! We serve ${zip} with immediate dispatch priority.`;
            checkerResponse.classList.add("response-success");
        } else {
            checkerResponse.textContent = `✗ Sorry, ${zip} is outside our immediate service area. Call us to confirm.`;
            checkerResponse.classList.add("response-fail");
        }
    });

    // Dynamic Pricing Estimate Calculator
    const calcChecks = document.querySelectorAll(".calc-check");
    const calcTotal = document.getElementById("calc-total");
    const calcSelectedList = document.getElementById("calc-selected-list");

    function updateCalculator() {
        let total = 0;
        calcSelectedList.innerHTML = "";
        let selectedCount = 0;

        calcChecks.forEach(check => {
            if (check.checked) {
                selectedCount++;
                const name = check.dataset.name;
                const price = parseFloat(check.dataset.price);
                total += price;

                // Add list item
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

    calcChecks.forEach(check => {
        check.addEventListener("change", updateCalculator);
    });

    // FAQ Accordion Toggle
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(btn => {
        btn.addEventListener("click", () => {
            const faqItem = btn.parentElement;
            
            // Toggle active class
            faqItem.classList.toggle("active");

            // Close others if desired (accordion style)
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                }
            });
        });
    });

    // Form Handling
    const scheduleForm = document.getElementById("hero-schedule-form");
    const successAlert = document.getElementById("form-success-alert");

    scheduleForm.addEventListener("submit", (e) => {
        e.preventDefault();
        scheduleForm.style.display = "none";
        successAlert.classList.remove("hidden");
    });
});
