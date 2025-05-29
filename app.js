 const allButtons = document.querySelectorAll("button");
        const questions = document.querySelectorAll(".question");
        const navIcon = document.getElementById("nav-icon");
        const navMenu = document.getElementById("nav-menu");

        questions.forEach((question) => {
            question.addEventListener("click", () => {

                const currentContent = getComputedStyle(question).getPropertyValue("--q-after-content").trim();

                if (currentContent === "'+'") {
                    question.style.setProperty("--q-after-content", "'-'");
                } else {
                    question.style.setProperty("--q-after-content", "'+'")
                }

                const answer = question.nextElementSibling;
                answer.classList.toggle("visible");
            });
        });

        allButtons.forEach((button) => {
            button.addEventListener("click", () => {
                location.reload();
            })
        });

        document.querySelectorAll(".header-options p").forEach((p) => {
            p.addEventListener("click", () => {
                document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
            })
        });

        document.querySelectorAll("footer p").forEach((p) => {
            p.addEventListener("click", () => {
                document.querySelector("header").scrollIntoView({ behavior: "smooth" });
            })
        });

        navIcon.addEventListener("click", (event) => {
            navMenu.classList.toggle("active");
            event.stopPropagation();
        });

        document.addEventListener("click", (event) => {
            if (!navMenu.contains(event.target) && !navIcon.contains(event.target)) {
                navMenu.classList.remove("active");
            }

        });