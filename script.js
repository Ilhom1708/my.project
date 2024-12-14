
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Tarjima sozlamalari
i18next.init({
    lng: 'uz', // Boshlang'ich til
    resources: {
        uz: {
            translation: {
                "title": "Biznesingiz Uchun Sayt",
                "description": "O'zbekiston bo'ylab xizmat ko'rsatamiz",
                "button": "Xizmatlarni Ko'rish"
            }
        },
        en: {
            translation: {
                "title": "Website for Your Business",
                "description": "We provide services across Uzbekistan",
                "button": "View Services"
            }
        }
    }
}, function(err, t) {
    updateContent();
});

// Kontentni yangilash
function updateContent() {
    document.getElementById('title').textContent = i18next.t('title');
    document.getElementById('description').textContent = i18next.t('description');
    document.getElementById('button').textContent = i18next.t('button');
}

// Tilni almashtirish funksiyasi
function changeLanguage(lang) {
    i18next.changeLanguage(lang, updateContent);
}
document.getElementById("chatForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const message = document.getElementById("chatMessage").value;
    if (message) {
        const chatWindow = document.getElementById("chatWindow");
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Pastga scroll
        document.getElementById("chatMessage").value = ""; // Tozalash
    }
});
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formani yubormaslik
    const email = document.getElementById("subscriberEmail").value;
    if (email) {
        const listItem = document.createElement("li");
        listItem.textContent = email;
        document.getElementById("subscribersList").appendChild(listItem);
        document.getElementById("subscriberEmail").value = ""; // Tozalash
        alert("Obuna bo'ldingiz!");
    }
});
