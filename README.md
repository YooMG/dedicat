# Deutsch Diktat-Trainer Pro 🎧📝

Ein interaktiver, webbasierter Satz-für-Satz Hörverständnis- und Diktat-Trainer für Deutschlernende. Die Anwendung läuft vollständig im Browser (Client-Side) und benötigt kein Backend.

## ✨ Features

* **Custom Audio-Player:** Ein modernes, minimalistisches Interface mit Zeitanzeige, einstellbarer Wiedergabegeschwindigkeit ($0.5x$, $0.75x$, $1x$) und schnellen Buttons zum Vor- und Zurückspringen (5 Sekunden).
* **Intelligentes Tipp-System:** Der "Tipp anzeigen"-Button vergleicht die Eingabe Wort für Wort und deckt schrittweise immer *nur das erste falsche oder fehlende Wort* in auffallendem Grün auf.
* **Präzise Fehlerkorrektur:** Beim Überprüfen der Antwort werden fehlerhafte Wörter dezent unterstrichen, während korrekte Wörter sauber als Text stehen bleiben.
* **Hotkeys für flüssiges Arbeiten:** Drücke die **Strg-Taste (Ctrl)**, um das Audio blitzschnell um 5 Sekunden zurückzuspringen, ohne die Hände von der Tastatur zu nehmen.
* **Ergebnis-Dashboard:** Am Ende der Übung wird eine Erfolgsmeldung mit der Option angezeigt, die Übung zu wiederholen oder neue Dateien hochzuladen.

---

## 🚀 Live-Demo einrichten (GitHub Pages)

Da die App in einer einzigen Datei (`index.html`) gebündelt ist, lässt sie sich in weniger als einer Minute über GitHub Pages hosten:

1. Erstelle ein neues **öffentliches (Public)** Repository auf GitHub.
2. Lade die Datei `index.html` und diese `README.md` hoch.
3. Gehe zu **Settings** -> **Pages**.
4. Wähle unter *Build and deployment* den Branch **`main`** (oder `master`) und klicke auf **Save**.
5. Deine App ist nach kurz Zeit unter `https://<dein-benutzername>.github.io/<repo-name>/` online!

---

## 🛠️ Nutzung der Anwendung

1. **Dateien laden:** Wähle im ersten Schritt mehrere Audio-Dateien gleichzeitig aus.
2. **Skript einfügen:** Trage im Textfeld den korrekten Text ein. **Wichtig:** Jede Zeile im Textfeld entspricht exakt einer Audio-Datei (Zeile 1 = Audio 1, Zeile 2 = Audio 2, usw.).
3. **Lernen:** Klicke auf "Übung starten", höre die Audio-Ausschnitte und tippe das Gehörte ein!

---

## 💻 Technologien

* **HTML5** (Struktur & Audio-API)
* **CSS3** (Modernes, responsives Design & Custom Player UI)
* **JavaScript (Vanilla)** (Echtzeit-Textabgleich & Anwendungslogik)
