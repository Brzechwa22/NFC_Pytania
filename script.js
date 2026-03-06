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
        reference: "Księga Rodzaju 4"
    },
    {
        title: "Nocna walka",
        content: [
            "Walczyłem z Nieznajomym aż do świtu. Choć wyszedłem z tego starcia utykając, otrzymałem nowe imię i błogosławieństwo.",
            "Moja walka była zmaganiem z samym sobą i z Bogiem."
        ],
        reflection: "Jakie „nocne walki” toczysz w swoim życiu? Czy pozwalasz Bogu, by zmieniał Twoją tożsamość?",
        reference: "Księga Rodzaju 32"
    },
    {
        title: "Burza na jeziorze",
        content: [
            "On spał na wezgłowiu, a my ginęliśmy z przerażenia. Gdy Go obudziliśmy, jednym słowem uciszył żywioły...",
            "...ale zapytał nas o coś, co dotknęło fundamentów naszej duszy: „Czemu tak bojaźliwi jesteście? Jakże wam brak wiary?”."
        ],
        reflection: "Co jest Twoją „burzą”, w której zapominasz, że On jest na łodzi razem z Tobą?",
        reference: "Ewangelia wg św. Marka 4"
    },
    {
        title: "Bogaty młodzieniec",
        content: [
            "Przyszedłem z gorliwym sercem, zachowując wszystkie przykazania.",
            "Odszedłem jednak smutny, bo jedno zdanie Mistrza odsłoniło to, co naprawdę posiadało moje serce."
        ],
        reflection: "Co jest tą „jedną rzeczą”, której boisz się oddać, by pójść za Jezusem w pełni?",
        reference: "Ewangelia wg św. Mateusza 19"
    },
    {
        title: "Lustro marności",
        content: [
            "Mówiono o mnie, że jestem najmądrzejszy, a jednak moje księgi zaczynają się od słów „Marność nad marnościami”.",
            "Szukałem szczęścia w wiedzy, bogactwie i przyjemnościach, by dojść do zaskakującego wniosku na końcu drogi."
        ],
        reflection: "Na czym budujesz poczucie sensu życia? Czy to, co gonisz, nie jest tylko „pogonią za wiatrem”?",
        reference: "Księga Koheleta 1-12"
    },
    {
        title: "Uczta u faryzeusza",
        content: [
            "Weszłam nieproszona, przynosząc tylko łzy i flakonik olejku.",
            "Nie powiedziałam ani słowa, ale moje czyny krzyczały o wdzięczności. Gospodarz mnie potępił, ale On mnie obronił."
        ],
        reflection: "Czy potrafisz kochać „wielką miłością” dlatego, że doświadczyłeś przebaczenia, czy raczej oceniasz innych z góry?",
        reference: "Ewangelia wg św. Łukasza 7"
    },
    {
        title: "Zaparcie się w blasku ognia",
        content: [
            "Trzy razy zapiał kogut, a ja przypomniałem sobie Jego słowa.",
            "Wcześniej byłem gotów oddać życie, w chwili próby nie znałem nawet Jego imienia."
        ],
        reflection: "Jak reagujesz na własne upadki? Czy uciekasz w rozpacz, czy pozwalasz, by Jezus spojrzał na Ciebie z miłością mimo Twojej słabości?",
        reference: "Ewangelia wg św. Łukasza 22"
    },
    {
        title: "Talent zakopany w ziemi",
        content: [
            "Dostałem tylko jeden, podczas gdy inni dostali więcej. Bałem się surowości Pana, więc ukryłem go głęboko.",
            "Zwróciłem tyle, ile dostałem, a jednak zostałem nazwany „sługą złym i gnuśnym”."
        ],
        reflection: "Czy paraliżujący strach przed błędem nie sprawia, że marnujesz dary, które otrzymałeś dla dobra innych?",
        reference: "Ewangelia wg św. Mateusza 25"
    },
    {
        title: "Droga do Emaus",
        content: [
            "Szliśmy pogrążeni w smutku, rozmawiając o tym, co się wydarzyło. On do nas dołączył, ale Go nie poznaliśmy.",
            "Nasze serca pałały, gdy wyjaśniał nam Pisma, ale oczy otworzyły się dopiero przy jednym, konkretnym geście."
        ],
        reflection: "Gdzie szukasz Boga? Czy potrafisz rozpoznać Go w „łamaniu chleba” i w drugim człowieku, który idzie obok Ciebie?",
        reference: "Ewangelia wg św. Łukasza 24"
    },
    {
        title: "Pytanie w ogrodzie",
        content: [
            "To pierwsze pytanie, jakie Bóg zadał człowiekowi, gdy ten ukrył się w zaroślach ze wstydu.",
            "Nie brzmiało ono: „Co zrobiłeś?”, ale: „Gdzie jesteś?”."
        ],
        reflection: "Gdzie jesteś dzisiaj w swojej relacji z Bogiem? Czy ukrywasz się za maskami, czy masz odwagę wyjść z cienia?",
        reference: "Księga Rodzaju 3"
    },
    {
        title: "Srebrniki na dłoni",
        content: [
            "Wyczekiwałem na moment, by Go wydać. Pocałunek, który miał być znakiem przyjaźni, stał się pieczęcią zdrady.",
            "Nie szukałem przebaczenia, lecz sędziów, a na koniec sznura."
        ],
        reflection: "Czy w Twoim życiu zdarzają się „małe zdrady” wartości w zamian za chwilowy zysk lub święty spokój?",
        reference: "Ewangelia wg św. Mateusza 26-27"
    },
    {
        title: "Namiot w drodze",
        content: [
            "Byłem „człowiekiem bez ojczyzny”, który usłyszał: „Wyjdź z twojej ziemi rodzinnej”. Nie wiedziałem, dokąd idę, ale wiedziałem, Komu zaufałem.",
            "Stałem się ojcem narodów, choć długo nie miałem nawet syna."
        ],
        reflection: "Czy masz w sobie dość wiary, by porzucić to, co znane i bezpieczne, gdy czujesz, że Bóg wzywa Cię do czegoś większego?",
        reference: "Księga Rodzaju 12 i 15"
    },
    {
        title: "Winna latorośl",
        content: [
            "On jest krzewem, a my latoroślami. Powiedział wyraźnie: „Beze Mnie nic uczynić nie możecie”.",
            "Odcięta gałąź usycha i staje się opałem."
        ],
        reflection: "Z czego czerpiesz soki życiowe? Czy Twoje działania rodzą trwałe owoce, czy są tylko jałowym wysiłkiem?",
        reference: "Ewangelia wg św. Jana 15"
    },
    {
        title: "Głos na pustyni",
        content: [
            "Jadłem miód i szarańczę, nosiłem wielbłądzią skórę. Moim zadaniem było „zmniejszać się”, aby On mógł wzrastać.",
            "Byłem głosem wołającym o prostowanie dróg dla Pana."
        ],
        reflection: "Czy potrafisz ustąpić pola innym? Czy w Twoim życiu jest miejsce na pokorę, która pozwala Bogu być w centrum?",
        reference: "Ewangelia wg św. Łukasza 3 i Jana 3"
    },
    {
        title: "Dom na piasku i na skale",
        content: [
            "Dwaj ludzie budowali. Dom jednego wyglądał tak samo dobrze jak drugiego – dopóki nie przyszła burza.",
            "Wtedy okazało się, który z nich tylko słuchał, a który wprowadzał słowa w czyn."
        ],
        reflection: "Co jest fundamentem Twoich decyzji? Opinie ludzi (piasek) czy trwałe wartości Ewangelii (skała)?",
        reference: "Ewangelia wg św. Mateusza 7"
    },
    {
        title: "Marta i Maria",
        content: [
            "Jedna biegała wokół gości, troszcząc się o posiłek, druga siedziała u Jego stóp.",
            "Pan powiedział, że tylko jedna rzecz jest naprawdę potrzebna."
        ],
        reflection: "Czy Twoja „aktywność dla Boga” nie zabiera Ci czasu na „przebywanie z Bogiem”?",
        reference: "Ewangelia wg św. Łukasza 10"
    },
    {
        title: "Miłosierny Samarytanin",
        content: [
            "Przeszli obok: kapłan i lewita – ludzie, którzy znali Prawo na pamięć.",
            "Zatrzymał się ten, którego uważano za gorszego. Nie pytał o wyznanie, lecz opatrzył rany."
        ],
        reflection: "Kto jest Twoim bliźnim? Czy Twoja religijność przekłada się na konkretną pomoc człowiekowi w potrzebie?",
        reference: "Ewangelia wg św. Łukasza 10"
    },
    {
        title: "Przebaczenie bez granic",
        content: [
            "Piotr zapytał: „Ile razy mam przebaczyć? Czy aż siedem?”.",
            "Odpowiedź Mistrza wywróciła świat do góry nogami, wprowadzając matematykę miłosierdzia, która nie zna końca."
        ],
        reflection: "Komu wciąż nie potrafisz wybaczyć? Czy zdajesz sobie sprawę, ile Tobie zostało darowane?",
        reference: "Ewangelia wg św. Mateusza 18"
    },
    {
        title: "Ostatni wyrok",
        content: [
            "Król nie pytał o modlitwy ani o posty. Pytał o to, czy byłeś głodny, spragniony, nagi lub w więzieniu.",
            "Odpowiedź na to pytanie decyduje o wieczności."
        ],
        reflection: "Czy dostrzegasz oblicze Chrystusa w ludziach marginalizowanych i zapomnianych?",
        reference: "Ewangelia wg św. Mateusza 25"
    }
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

    // 3. Logika płynniejszego i szybszego przewijania
    const scrollSpeed = 1.5;     // Prędkość: zwiększona dla szybszego przesuwania
    const delayBeforeScroll = 2500; // Czas: skrócony do 2.5 sekundy
    const intervalTime = 20;     // Płynność: zmniejszony interwał (więcej odświeżeń = płynny ruch)
    
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
