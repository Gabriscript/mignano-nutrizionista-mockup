# Dott. Pietro Mignano, mockup sito (v2)

Anteprima locale:

```bash
npx --yes http-server . -p 5200 -c-1
```

Direzione: camiceria e farmacia, Bricolage Grotesque + Literata, carta / pervinca / blu notte + giallo copertina.

- La palette viene dal suo ritratto: camice (carta), righe della camicia (pervinca, colore del marchio), pantaloni (blu notte). Il giallo viene dalla copertina di "Dieta chetogenica per pigri" e vale solo per l'azione principale.
- Un solo tema chiaro. La v1 alternava sezioni scure e chiare.
- Firma 1: la riga Oxford come texture (campo del ritratto, orlo del footer).
- Firma 2: la fascia "Nel piano non entrano", con la penna che cancella le quattro voci quando entra in vista (solo `transform`, rispetta `prefers-reduced-motion`, senza JS resta già cancellata).
- Firma 3: il "foglietto illustrativo" nella sezione chetogenica. Fuori dal piatto = voci barrate, come nella fascia.

La v1 (Bodoni + pervinca e carbone) è in `docs/v1-bodoni-pervinca/`.

## Fonti dei contenuti (controllate il 19/10/2026)

- Brief: nome, titoli, docenza Chinesis IFOP, Studio Medical Prime, indirizzo, telefoni, siti.
- mignanopietro.it: bio e date, principi del metodo, prima visita, studio Medical Prime (metro EUR Fermi a 6 minuti), P.IVA, n. Albo, email, social, testate di "Parlano di me", tutte le foto.
- lowcarbitalia.org: le 3 recensioni Google (widget Trustindex), fondazione di Low Carb Italia.
- amazon.it: titoli e anni dei 5 libri.

## Da completare con il cliente

- `[TARIFFA PRIMA VISITA QUI]`: lowcarbitalia.org indica "Visita nutrizionale da 130€", da confermare per lo studio.
- `[ORARI DI RICEVIMENTO QUI]`
- `[TESTO PRIVACY DA FORNIRE QUI]`
- Ok a pubblicare le 3 recensioni (nome e iniziale del cognome).
- Conferma che le 2 foto dei piatti sono sue.
- Studi di Milano e Poggio Mirteto: il sito attuale li cita, il brief no. Per ora non ci sono.
- Al deploy: `og:image` con URL assoluto.

## Scelte della v2 da far approvare

- Giallo come unico accento (non è nel marchio attuale).
- Tono del foglietto illustrativo ("Foglietto illustrativo", "Leggere attentamente", "Avvertenze"): è un gioco sul farmacista, non un testo suo.
- Voci della fascia ("Calorie contate", "Grammi pesati", "Calcoli assurdi", "Pasti sostitutivi"): riprese dai suoi testi, ma la forma è nostra.
- Titolo del metodo cambiato in "Nessuna formula magica, tre punti fermi.".

## Prima del deploy

- Escludere `backup/`, `docs/` e `_shot.html` (copia di test dell'index, da cancellare).
