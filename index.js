document.addEventListener("DOMContentLoaded", () => {
    
    // Dynamic Pricing Estimate Calculator using Visual Cards
    const calcCards = document.querySelectorAll(".calc-item-card");
    const calcTotal = document.getElementById("calc-total");
    const calcSelectedList = document.getElementById("calc-selected-list");
    const calcSelectedHidden = document.getElementById("calc-selected-hidden");

    function updateCalculator() {
        let total = 0;
        calcSelectedList.innerHTML = "";
        let selectedCount = 0;
        const selectedNames = [];

        calcCards.forEach(card => {
            if (card.classList.contains("active")) {
                selectedCount++;
                const name = card.dataset.name;
                const price = parseFloat(card.dataset.price);
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

    calcCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
            updateCalculator();
        });
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
