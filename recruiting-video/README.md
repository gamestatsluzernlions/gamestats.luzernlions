# Luzern Lions – Rekrutierungsvideo

Werbevideo (ca. 26 Sekunden, Hochformat 1080×1920 für Instagram Reels, TikTok und WhatsApp-Status), mit dem die Luzern Lions neue Spieler ab 19 Jahren suchen. Gebaut mit [Remotion](https://www.remotion.dev) (Videos mit React).

## Ablauf

| Szene     | Inhalt                                                              |
| --------- | ------------------------------------------------------------------- |
| Hook      | „Bist du bereit?“                                                   |
| Team      | American Football · Luzern Lions suchen Verstärkung                |
| Age       | Wir suchen neue Spieler · 19+                                       |
| Positions | Keine Erfahrung? Kein Problem. Für jeden Typ gibt es eine Position |
| Stats     | Saison in Zahlen (aus `../index.html`)                              |
| Offer     | Was dich erwartet                                                   |
| CTA       | Komm ins Probetraining · Zeit, Ort, Kontakt                         |

## Loslegen

```bash
npm i
npm run dev        # Remotion Studio öffnen (Vorschau & Bearbeitung)
```

## Trainingszeit, Ort und Kontakt anpassen

Diese drei Angaben sind noch Platzhalter. Entweder im Studio rechts im Props-Editor der Komposition `RecruitingVideo` ändern, oder direkt in `src/Root.tsx` bei `defaultProps`:

```tsx
trainingWhen: "Training: [Wochentage & Zeit]",
trainingWhere: "[Trainingsort], Luzern",
contact: "@luzernlions",
```

Alle anderen Texte stehen direkt in den Szenen unter `src/scenes/`.

## Video exportieren

```bash
npx remotion render RecruitingVideo out/luzern-lions-recruiting.mp4
```

## Design & Ton

- Farben: Blau (`#05367A`, aus dem Logo) und Weiss, Hervorhebungen in Hellblau (`#8FB8FF`).
- Logo: `public/logo/lion-white.png` und `lion-blue.png` (freigestellt und hochskaliert aus dem Vereinslogo).
- Voiceover: `public/audio/voiceover.mp3`, generiert mit ElevenLabs (Stimme „Turbo Tim – High-Energy Ad Voice“). Jeder Satz ist in `src/RecruitingVideo.tsx` auf seine Szene gelegt.
- Soundeffekte: `public/audio/stadium-intro.mp3` und `stadium-hit.mp3`, ebenfalls ElevenLabs.

Text des Voiceovers:

> Bist du bereit? Die Luzern Lions suchen Verstärkung! Wir suchen neue Spieler – ab neunzehn Jahren. Keine Erfahrung? Kein Problem. Bei uns gibt es für jeden die richtige Position. Unsere Saison: fast zweitausendvierhundert Yards und achtundzwanzig Touchdowns. Dich erwarten Coaching, Athletik und ein Team, das zusammenhält. Komm ins Probetraining – und werde ein Lion!

Wird ein neues Voiceover eingesetzt, müssen die Schnittpunkte (`trimBefore`/`trimAfter`) in `src/RecruitingVideo.tsx` angepasst werden.

## Ideen zum Ausbauen

- Musik: Audiodatei nach `public/` legen und mit `<Audio>` aus `@remotion/media` in `RecruitingVideo.tsx` einfügen (nur lizenzfreie Musik verwenden).
- Eigene Spielszenen: Videoclips nach `public/` legen und als Hintergrund in den Szenen verwenden.
