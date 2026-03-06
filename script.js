// Baza zagadek
const riddles = [
    {
        title: "Głos w ciszy",
        content: [
            "Nie było mnie w potężnym wichrze, nie było mnie w trzęsieniu ziemi ani w ogniu.",
            "Przyszedłem jako „szmer łagodnego powiewu”. Prorok musiał zasłonić twarz, by mnie usłyszeć."
        ],
        reflection: "Czy w zgiełku codzienności potrafisz stworzyć przestrzeń na ciszę, w której mówi Bóg?",
        reference: "1 Królewska 19"
    },
    {
        title: "Pytanie o brata",
        content: [
            "Padło na samym początku historii ludzkości i odbija się echem do dziś: „Czyż jestem stróżem brata mego?”.",
            "Wypowiedział je ktoś, kto pozwolił, by zazdrość spaliła mu serce."
        ],
        reflection: "Za kogo czujesz się dziś odpowiedzialny? Czy unikasz odpowiedzialności za relacje, które wymagają naprawy?",
        reference: "Rodzaju 4"
    },
    {
        title: "Nocna walka",
        content: [
            "Walczyłem z Nieznajomym aż do świtu. Choć wyszedłem z tego starcia utykając, otrzymałem nowe imię i błogosławieństwo.",
            "Moja walka była zmaganiem z samym sobą i z Bogiem."
        ],
        reflection: "Jakie „nocne walki” toczysz w swoim życiu? Czy pozwalasz Bogu, by zmieniał Twoją tożsamość?",
        reference: "Rodzaju 32"
    }
    // TUTAJ MOŻESZ DODAĆ KOLEJNE ZAGADKI WEDŁUG POWYŻSZEGO SCHEMATU
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Losowanie jednej zagadki z bazy
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const selectedRiddle = riddles[randomIndex];

    // 2. Wypełnianie HTMLa wylosowaną treścią
    document.getElementById("riddle-title").textContent = selectedRiddle.title;
    
    const contentDiv = document.getElementById("riddle-content");
    selectedRiddle.content.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        contentDiv.appendChild(p);
    });

    document.getElementById("reflection-text").textContent = selectedRiddle.reflection;
    document.getElementById("reference-text").innerHTML = `<strong>Gdzie szukać?</strong><br>${selectedRiddle.reference}`;

    // 3. Logika powolnego przewijania
    const scrollSpeed = 1;     
    const delayBeforeScroll = 3000; 
    const intervalTime = 40;   
    
    let hasReachedBottom = false;

    setTimeout(() => {
        const scrollInterval = setInterval(() => {
            const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5;
            
            if (isBottom) {
                clearInterval(scrollInterval); 
                
                if (!hasReachedBottom) {
                    hasReachedBottom = true;
                    document.getElementById('reflection-section').classList.remove('hidden');
                }
            } else {
                window.scrollBy(0, scrollSpeed);
            }
        }, intervalTime);

        // Wykrywanie ręcznego przewijania
        window.addEventListener('scroll', () => {
            const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
            if (isBottom && !hasReachedBottom) {
                clearInterval(scrollInterval);
                hasReachedBottom = true;
                document.getElementById('reflection-section').classList.remove('hidden');
            }
        });

    }, delayBeforeScroll);
});
