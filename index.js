document.addEventListener("DOMContentLoaded", () => {
    
    // Mobile Nav Toggle
    const mobileToggle = document.getElementById("mobile-nav-toggle");
    const desktopNav = document.querySelector(".desktop-nav");

    if (mobileToggle && desktopNav) {
        mobileToggle.addEventListener("click", () => {
            desktopNav.classList.toggle("active");
            // Change icon between bars and times
            const icon = mobileToggle.querySelector("i");
            if (desktopNav.classList.contains("active")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });
        
        // Close menu drawer when clicking a link
        desktopNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                desktopNav.classList.remove("active");
                const icon = mobileToggle.querySelector("i");
                if (icon) icon.className = "fa-solid fa-bars";
            });
        });
    }

    // Dynamic Pricing Estimate Calculator using Select Dropdowns
    const selectFields = document.querySelectorAll(".calc-select-field");
    const calcTotal = document.getElementById("calc-total");
    const calcSelectedList = document.getElementById("calc-selected-list");
    const calcSelectedHidden = document.getElementById("calc-selected-hidden");

    function updateCalculator() {
        let total = 0;
        calcSelectedList.innerHTML = "";
        let selectedCount = 0;
        const selectedNames = [];

        selectFields.forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            const price = parseFloat(selectedOption.value);
            const name = selectedOption.dataset.name;

            if (price > 0) {
                selectedCount++;
                total += price;
                selectedNames.push(name);

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
        if (calcSelectedHidden) {
            calcSelectedHidden.value = selectedNames.join(", ") || "None";
        }
    }

    selectFields.forEach(select => {
        select.addEventListener("change", updateCalculator);
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
});
