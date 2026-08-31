# Lektion 3: 26-08-31 Kommunikationsstilar och anpassning till mottagare

Saved: 2026-08-31T20:47:22.962264

## ❓ #1

Övning: Gör svaret assertivt  
  
1. "Det där går inte. Kunden förstår uppenbarligen inte hur webben fungerar"  
2. "Absolut , vi fixar det" - trots att du vet att tiden inte räcker  
3." Visst, vi kan ändra allt igen ... det är ju bara tredje gången"  
  
Identifiera styilen - skriv om repliken - välj ett exempewl att dela

---

### 🤖 #1B gpt-oss:120b-cloud

**Stilidentifiering**  
De tre ursprungliga replikerna är *icke‑assertiva* – de antingen är kritiska och nedlåtande (1), ger ett orealistiskt löfte (2) eller ger efter efter flera tidigare misslyckanden (3). Sådana svar kan leda till missförstånd, frustration och minskad trovärdighet.

---

## Så kan du säga samma sak på ett **assertivt** sätt

| # | Ursprungligt uttalande | **Assertiv omformulering** |
|---|-----------------------|-----------------------------|
| 1 | “Det där går inte. Kunden förstår uppenbarligen inte hur webben fungerar.” | “Jag ser en teknisk begränsning här som gör att den föreslagna funktionen inte går att implementera. Låt oss gå igenom vad som fungerar idag och diskutera vad vi kan göra inom de aktuella ramarna.” |
| 2 | “Absolut, vi fixar det” – trots att du vet att tiden inte räcker. | “Vi vill gärna leverera den här funktionen, men med den nuvarande tidsramen riskerar vi att kompromissa på kvaliteten. Kan vi antingen justera leveransdatumet eller prioritera de viktigaste delarna?” |
| 3 | “Visst, vi kan ändra allt igen … det är ju bara tredje gången.” | “Jag förstår att du vill ha ytterligare justeringar. För att undvika ytterligare omarbetningar föreslår jag att vi samlar alla nya krav i en tydlig specifikation och fastställer en realistisk tidsplan innan vi går vidare.” |

---

### Exempel att dela med kollegor  
**Situation 2 (tidspress):**

> *“Vi vill gärna leverera den här funktionen, men med den nuvarande tidsramen riskerar vi att kompromissa på kvaliteten. Kan vi antingen justera leveransdatumet eller prioritera de viktigaste delarna?”*

Detta exempel visar hur du:

1. **Bekräftar** önskan (vi vill leverera).  
2. **Kommunicerar** den faktiska begränsningen (tidspress → risk för kvalitet).  
3. **Föreslår** konkreta alternativ (justera datum **eller** prioritera).  

Genom att använda den här strukturen får du fram ditt budskap tydligt, utan att skuldbelägga någon eller lova något orealistiskt.  

---  

**Tips för att bli mer assertiv i kommunikationen**

1. **Fokusera på fakta, inte på personer.**  
2. **Använd ”jag‑budskap”** (t.ex. “Jag ser…”, “Jag föreslår…”).  
3. **Erbjud alternativ** snarare än ja/nej‑svar.  
4. **Var tydlig med dina gränser** och resurser, men håll en samarbetsvillig ton.  

Genom att öva på dessa formuleringar bygger du förtroende både internt och gentemot kunder.

*(⏱ 14.53s)*

## ❓ #2

🖼 Visuell modell – Samma budskap, olika mottagare  
  
Samma information kan behöva kommuniceras på olika sätt beroende på vem mottagaren är.  
  
Kunden vill förstå nyttan och affärsvärdet.  
Utvecklaren behöver tekniska detaljer och krav.  
Slutanvändaren vill veta hur lösningen fungerar i praktiken.  
Fundera gärna på hur du själv skulle formulera samma budskap till dessa tre målgrupper.

---

### 🤖 #2B gpt-oss:120b-cloud

### Samma budskap – anpassat för tre olika målgrupper  
**Budskap:** *“Vår nya webb‑funktion automatiserar fakturahantering och minskar manuella fel med 80 %.”*  

| Målgrupp | Vad de bryr sig om | Anpassad formulering |
|----------|-------------------|----------------------|
| **Kunden (affärsansvarig)** | **Nytta & affärsvärde** – kostnadsbesparingar, ROI, konkurrensfördel | **“Den nya funktionen automatiserar hela fakturaprocessen, vilket reducerar manuella fel med 80 % och ger er en årlig kostnadsbesparing på ca 1 M SEK. Det innebär snabbare betalningscykler, bättre likviditet och en tydlig konkurrensfördel.”** |
| **Utvecklaren** | **Tekniska detaljer & krav** – arkitektur, integrationer, prestanda | **“Funktionen byggs som en micro‑service i Node.js, kommunicerar via REST‑API mot er ERP (SAP) och använder RabbitMQ för asynkron köhantering. Vi har designat den för att hantera 10 000 fakturor per timme med < 200 ms svarstid och en SLA‑nivå på 99,9 %.”** |
| **Slutanvändaren** | **Praktisk användning** – hur det påverkar deras dagliga arbete | **“När du öppnar fakturaflödet ser du en ny knapp “Automatisera”. Ett tryck på den laddar automatiskt in fakturainformationen, validerar den och sparar den utan att du manuellt fyller i fält. Du får en tydlig grön bock när allt är korrekt – inga fler fel eller dubbelklick.”** |

---

## Visuell modell (ASCII‑skiss)

```
+----------------------+      +----------------------+      +----------------------+
|  Kund (affär)        |      |  Utvecklare (tech)   |      |  Slutanvändare (UX)   |
|----------------------|      |----------------------|      |----------------------|
| - ROI                |      | - Micro‑service      |      | - En‑klick‑automation |
| - Kostnadsbesparingar| ---> | - REST‑API           | ---> | - Direkt feedback     |
| - Konkurrensfördel   |      | - Skalbarhet 10k/h   |      | - Mindre fel           |
+----------------------+      +----------------------+      +----------------------+

         \                       |                       /
          \______________________|______________________/
                                 |
                     Samma kärnbudskap:
   “Automatiserar fakturahantering, minskar fel 80 %”
```

### Så använder du modellen

1. **Identifiera målgruppen** innan du formulerar budskapet.  
2. **Välj rätt fokus** (affärsvärde → ROI, teknik → arkitektur, UX → användarflöde).  
3. **Behåll kärnan** (automatisering + 80 % färre fel) så att alla får samma grundläggande information.  
4. **Anpassa språk och detaljer** efter mottagarens kunskapsnivå och intresse.

Genom att följa detta mönster kan du leverera ett enhetligt, men målgruppsanpassat, budskap som både skapar affärsförståelse, teknisk klarhet och användarvänlighet.

*(⏱ 14.90s)*

## ❓ #3

Övning: Samma budskap - tre versionen.  
  
Projektet blir tre dagar försenat.  
Skriv 2-3 meningar till: utvecklare * projektledare * kund

---

### 🤖 #3B gpt-oss:120b-cloud

**Utvecklare**  
Projektet blir tre dagar försenat på grund av oförutsedda integrationstester. Jag har uppdaterat sprint‑backloggen och markerat de berörda uppgifterna som blockerade. Vi fokuserar nu på att slutföra de kritiska buggarna så att vi kan återgå till tidsplanen så snart som möjligt.

**Projektledare**  
Vi har identifierat en tre‑dagars fördröjning i leveransen efter att en teknisk risk materialiserades under testfasen. Jag har justerat tidplanen i vårt projektdashboard och informerat berörda resurser om den nya milstolpen. Vi kommer att hålla ett kort avstämningsmöte imorgon för att säkerställa att alla är alignade.

**Kund**  
Vi har stött på en liten teknisk komplikation som innebär att leveransen blir tre dagar senare än planerat. Detta ger oss möjlighet att säkerställa att funktionen fungerar felfritt och lever upp till era krav. Vi uppskattar ert tålamod och kommer att hålla er löpande informerade under den korta förlängningen.

*(⏱ 5.60s)*

## ❓ #4

Det perfekta "ja:et"  
  
* Du presenterar en ny lösning i ett digitalt kundmöte.  
* Efter varje del frågar du: " är det tydligt? - Kunden svarar "JA"  
* Ingen ställer frågor. Mötet avslutas 20 min. tidigt.  
* Nästa morgon kommer ett lång mejl: kunden har missförstååt både funktion, pris, och tidsplan.

---

### 🤖 #4B gpt-oss:120b-cloud

## Varför “JA” ofta är ett falskt ja  

| Symptom | Vad det egentligen betyder |
|--------|----------------------------|
| Kundens svar är alltid **”Ja”** på frågan *„är det tydligt?”* | Kunden vill vara artig, är rädd för att verka ointresserad eller tror att ”ja” betyder att mötet är klart. |
| Inga frågor ställs under mötet | Kunden har kanske missat något men vet inte hur han/​hon ska formulera det. |
| Mötet avslutas tidigt | Alla tror att de är på samma sida och går därifrån utan att kontrollera förståelsen. |
| Ett långt e‑postmeddelande följer dagen efter | Missförstånden har nu konkreta konsekvenser (funktion, pris, tidplan). |

### 1. Byt fråge‑formulering – gå från **ja/nej** till **återkoppling**

| Dålig fråga | Bättre alternativ |
|-------------|-------------------|
| *Är det tydligt?* | *Kan du beskriva med egna ord hur du ser att funktionen ska fungera?* |
| *Förstår du priset?* | *Vilken del av prismodellen känns mest relevant för er, och vad är den största frågan du har just nu?* |
| *Är tidsplanen okej?* | *Vilken milstolpe vill du prioritera först, och finns det några datum som du redan vet kan vara svåra för er?* |

### 2. Använd **“Check‑back”‑tekniken** (återge och be om bekräftelse)

1. **Presentera** en del av lösningen.  
2. **Sammanfatta kort** (verbalt + skriftligt i chatten).  
3. **Be kunden återge** sin förståelse:  
   > *“Om jag har förstått dig rätt, så ser du att …?”*  
4. **Korrigera** eventuella fel direkt.

### 3. Inkludera **visuella hjälpmedel** och **skriv‑ned**  

* **Skärmdumpar / flow‑diagram** – pekar på specifika områden och säger:  
  > *“Här ser du prisuppdelningen. Vad tänker du kring den delen?”*  
* **Live‑dokument** (Google Doc, Miro‑board) där du **skriv‑in** vad du just sagt. Kunden kan då **lägga till kommentarer** på stället.  

### 4. Avsluta med en **skriven återkoppling** innan mötet är över  

```markdown
**Sammanfattning av idag (30 min)**  
1️⃣ **Funktion** – so‑and‑so …  
2️⃣ **Pris** – baspaket X kr/månad + Y‑tillägg …  
3️⃣ **Tidplan** – leverans 15 sep, testning 16‑20 sep, go‑live 21 sep  

🟢 **Bekräfta/kommentera** om någon av punkterna är fel eller behöver förtydligas.  
```

Be kunden **svara på samma mejl** med “Jag bekräftar” eller “Jag har en fråga om …”. Det skapar ett **skriftligt spår** innan nästa steg.

### 5. Förebyggande checklist‑ för digitala kundmöten  

| Steg | Vad du gör | Exempel på formulering |
|------|------------|------------------------|
| **Förbered** | Skicka agenda + kort beskrivning i förväg. | “Vi kommer gå igenom funktion, pris och tidplan. Lägg gärna till frågor du vill ha svar på redan nu.” |
| **Presentera** | Dela skärm, håll varje del ≤ 5 min. | – |
| **Check‑back** | Efter varje del: “Hur ser du att den här delen passar in i er verksamhet?” | – |
| **Öppna för frågor** | Använd tystnad + “Jag väntar gärna på era funderingar.” | – |
| **Sammanfatta skriftligt** | Skicka kort mötesprotokoll *före* du avslutar mötet. | – |
| **Få skriftligt svar** | Be om bekräftelse på “Jag har läst och är överens”. | – |

### 6. Ett färdigt mini‑script du kan klistra in i ditt videomöte

> **Del 1 – Funktion**  
> “Här ser ni flödet för hur fakturan automatiskt byggs upp.  
> **Check‑back:** *“Kan du beskriva med egna ord hur detta steg skulle se ut i er vardag?”*  
>  
> **Del 2 – Pris**  
> “Vi har valt paket A (X kr) + tillägg B (Y kr).”  
> **Check‑back:** *“Vad är ditt intryck av den här kostnadsuppdelningen – finns något som känns oklart?”*  
>  
> **Del 3 – Tidplan**  
> “Leverans är planerad till …”  
> **Check‑back:** *“Är datumet realistiskt för er med tanke på era interna godkännanden?”*  
>  
> **Avslut**  
> “Jag samlar nu våra punkter i ett kort dokument och skickar det till er. När ni har gått igenom det, svara gärna med ‘Jag bekräftar’ eller med frågor så vi kan justera innan vi går vidare.”  

---

### Snabbt‑action‑plan (för nästa möte)

| Vad du gör | När | Resultat |
|------------|------|----------|
| Skicka agenda + “förbered dina frågor” | 24 h före | Kunden kommer med förberedda funderingar. |
| Använd “Check‑back” efter varje del | Under mötet | Du ser direkt om någon missförstår. |
| Skicka mötesprotokoll *innan* mötet avslutas | Direkt efter mötet | Skriftlig bekräftelse på samma dag. |
| Begär “Jag bekräftar”-svar | Same‑day | Undviker överraskningar nästa morgon. |

Genom att gå från ett ytligt **„JA”** till en **konkret återkoppling** och en **skriftlig bekräftelse** minskar du risken för missförstånd och sparar både din och kundens tid – och du slipper de långa förklarings‑mejlen dagen efter.

*(⏱ 19.68s)*

## ❓ #5

Det perfekta "ja:et"  
  
* Du presenterar en ny lösning i ett digitalt kundmöte.  
* Efter varje del frågar du: " är det tydligt? - Kunden svarar "JA"  
* Ingen ställer frågor. Mötet avslutas 20 min. tidigt.  
* Nästa morgon kommer ett lång mejl: kunden har missförståt både funktion, pris, och tidsplan.  
  
1) Hitta vad som gick fel?  
2) Välj exakt 3 saker ni skulle ändra  
3) Förbered en kort motivering

---

### 🤖 #5B gpt-oss:120b-cloud

### 1) Vad som gick fel  

| Orsak | Beskrivning |
|-------|-------------|
| **Ytlig kontrollfråga** | “Är det tydligt?” får ofta bara ett artigt *ja* och ger ingen insikt i hur kunden faktiskt har förstått. |
| **Ingen aktiv återkoppling** | Kunden fick ingen möjlighet att formulera sin egen tolkning (t.ex. “Kan du beskriva hur du ser att funktionen fungerar?”). |
| **Avsaknad av skriftlig bekräftelse** | Efter mötet fanns ingen återkoppling i dokument- eller chattform som kunde fungera som bevis på gemensam förståelse. |
| **Tidigt mötesavslut** | Att avsluta 20 min innan planerad tid signalerade för kunden att allt var avklarat, vilket minskade tid för frågor och förtydliganden. |
| **Ingen risk‑/oklarhets‑check** | Pris‑ och tidsplan‑aspekterna behandlades utan att be kunden bekräfta sina förväntningar eller eventuella begränsningar. |

---

### 2) Tre konkreta förändringar att införa  

1. **Byt frågeformat från ja/nej till återberättelse**  
   *Fråga:* “Kan du i egna ord beskriva hur du ser att funktionen löser ert problem?”  

2. **Använd real‑time “check‑back”‑sammanfattning + skriftlig bekräftelse**  
   *Efter varje avsnitt:*  
   - Sammanfatta kort på skärmen (ex. 1‑2 punkter).  
   - Be kunden bekräfta i chatten eller i ett kort dokument: “Jag förstår så här …”.  

3. **Avsluta mötet med en strukturerad handlingsplan**  
   - Skicka en **mötesanteckning** *innan* du hänger upp: funktion, pris, tidsplan, öppna frågor.  
   - Begär ett svar (“Jag bekräftar” eller “Jag har frågor”) innan mötet anses avslutat.  

---

### 3) Kort motivering för varje förändring  

1. **Återberättelse ger faktisk förståelse**  
   - Ett eget sammanfattande svar tvingar kunden att bearbeta informationen och avslöjar om något är oklart – något ett enkelt “ja” aldrig gör.  

2. **Realtime‑sammanfattning + skriftlig bekräftelse skapar ett spår**  
   - Det gör det omöjligt att säga ”jag hörde det men missförstod” i efterhand; både du och kunden har en gemensam referenspunkt som kan kontrolleras direkt.  

3. **Strukturerad avslutning hindrar för tidig stängning**  
   - Genom att explicit lista öppna punkter och be om bekräftelse förlängs mötet endast med relevant dialog, och risken för dolda missförstånd minskar kraftigt.  

Implementerar du dessa tre åtgärder får du en **kvalitativ förändring** i kommunikationen: varje ”ja” blir ett **verifierat ja**, och missförstånd som i fallet ovan blir fångade i realtid istället för att dyka upp i ett långt mejl dagen efter.

*(⏱ 11.89s)*

## ❓ #6

Vilken kanal (skriv-prata-kombinera)? Ge en anledning till valet.  
* En kritisk bugg två timmar före lansering  
* Ett känsligt missförstånd med kunden  
* En tekniskt instruktion teamet ska hitta om tre månader  
* En större förändring som påverkar bäde pris och deadline

---

### 🤖 #6B gpt-oss:120b-cloud

## Kommunikationskanal per scenario  
*(skriv = e‑mail/Chat/Docs, prata = röst‑/videomöte, kombination = skriftlig sammandrag **+** samtal)*  

| Scenario | Rekommenderad kanal | Varför den är optimal |
|---------|-------------------|------------------------|
| **1. En kritisk bugg två timmar före lansering** | **Prata (snabbt video‑/röst­call)** | Tiden är akut – du får omedelbar återkoppling, kan dela skärm, koordinera åtgärder i realtid och undvika missförstånd som kan uppstå i en lång e‑post. |
| **2. Ett känsligt missförstånd med kunden** | **Kombinera**: först **skriva** en kort, neutral sammanfattning (e‑post eller meddelande) → schemalägg **prat** (videomöte) för att reda ut detaljer | Den skrivna delen ger en spårbar referens och visar att du tar problemet seriöst utan att anklaga. Mötet ger möjlighet att återuppbygga förtroende, läsa av tonfall och snabbt svara på frågor. |
| **3. En teknisk instruktion teamet ska hitta om tre månader** | **Skriv (dokument/Confluence/Wiki)** | Instruktionen behövs för framtida referens och bör vara strukturerad, sökbar och versionerad. En skriftlig källa är lätt att återvända till, utan risk att någon glömmer vad som sagts i ett möte. |
| **4. En större förändring som påverkar både pris och deadline** | **Kombinera**: **skriva** ett detaljerat beslutspaket (e‑post, PDF, eller projekt‑wiki) → följt av ett **prat** (videomöte) med alla berörda parter | Ändringen är komplex och har affärsmässiga konsekvenser. Den skriftliga delen säkerställer att alla får exakt fakta (pris, ny deadline, villkor). Mötet ger möjlighet att diskutera konsekvenser, svara på frågor och samla en gemensam överenskommelse. |

### Sammanfattning av principen
| Kanal | När den fungerar bäst |
|-------|----------------------|
| **Prata** | Högt tidskritiskt, behov av omedelbar återkoppling, känslomässiga / komplexa samtal. |
| **Skriva** | Information som ska sparas, återanvändas eller granskas senare; lågt brådskande, tydlig dokumentation. |
| **Kombinera** | När både en spårbar skriftlig referens och en personlig dialog behövs för att undvika missförstånd och skapa enighet. |

Genom att matcha varje situation med rätt kanal får du både snabbhet och tydlighet i kommunikationen.

*(⏱ 13.58s)*

## ❓ #7

"En liten ändring"  
Kunden vill göra en ändring som ser liten ut men kräver stora tekniska förändringar.  
  
Vi skrev ett svar till kunden:  
Hej, kund. Vi har mottagit din fråga om ändring och vi vill tydliggöra ditt krav i ett digitalt möte som planeras till nästa vecka. Ändringen du begär kräver diskussion för att säkerställa att vi förstår varandra och vad det innebär för projektet.

---

### 🤖 #7B gpt-oss:120b-cloud

### Förbättrat svar till kunden  
*(kort, tydligt och assertivt – visar förståelse men också vilka konsekvenser ändringen innebär)*

---

**Ämne:** Angående er önskade ändring – behov av fördjupad diskussion  

Hej **[Kundnamn]**,

Tack för er förfrågan om den lilla ändringen i [funktion/​modul‑namn].  

Efter en första teknisk genomgång ser vi att implementeringen kräver en **väsentlig omarbetning** av [relevant systemdel] (ex. databasschema, API‑flöde och UI‑logik). Detta innebär:

| Påverkan | Beskrivning |
|----------|-------------|
| **Arbetsinsats** | ca [XX] timmar (istället för den ”lilla” förändring ni tänkte er). |
| **Tidplan** | Förlängning med **[Y] dagar/veckor** jämfört med den nuvarande milstolpen. |
| **Kostnad** | Extra **[belopp] kr** (baserat på vår standardtimtax). |

För att vi ska kunna gå vidare utan överraskningar vill vi gärna **klargöra** följande under ett digitalt möte:

1. **Precis vilka funktioner** ska förändringen omfatta?  
2. **Vilka affärsmål** hoppas ni uppnå med den?  
3. **Prioritering** – är detta en kritisk funktion eller kan den skjutas upp till ett senare sprint?

**Förslag på mötestid:** [Datum] kl. [Tid] (ca 30 min). Bekräfta gärna om tiden fungerar eller föreslå ett annat alternativ.

När vi har en gemensam bild kan vi ge er ett **uppdaterat estimat** på både tid och kostnad samt diskutera eventuella alternativ (t.ex. förenklad version eller fasad‑lösning) som kan minska påverkan.

Ser fram emot att höras och att tillsammans hitta den bästa vägen framåt.

Med vänlig hälsning,  
[‑ Ditt namn]  
[Roll] – [Företag]  
[Telefon] | [E‑post]

---

## Varför detta fungerar bättre  

| Element | Syfte |
|--------|-------|
| **Konkreta konsekvenser** (tid, kostnad, arbetsinsats) | Gör kunden medveten om att “liten” ändring faktiskt är stor i teknisk mening. |
| **Strukturerad frågelista** | Tvingar kunden att specificera krav och affärsmotiv, vilket minskar missförstånd. |
| **Mötesförslag med tydlig agenda** | Visar proaktivitet och sparar tid – kunden vet exakt vad som ska diskuteras. |
| **Alternativ/kompromisser** | Ger kunden möjlighet att välja en mindre resurskrävande lösning och visar att du är lösningsorienterad. |
| **Kort, fokuserat e‑postformat** | Lätt att läsa, sparar tid och ger en spårbar referens att återkomma till. |

---

### Så här kan du gå vidare  

1. **Skicka e‑posten** (ovan) så snart som möjligt – helst innan dagen är slut.  
2. **Boka mötet** i kalendern och bifoga en kort agenda (de tre punkterna ovan).  
3. **Förbered** en teknisk översikt (t.ex. diagram eller estimat‑blad) som du kan dela i mötet.  
4. **Efter mötet**: skicka ett mötesprotokoll med beslutade åtgärder, uppdaterade tids‑ och kostnadsuppskattningar samt nästa steg.  

Genom att kommunicera på det här sättet får du både **klargjort kundens förväntningar** och **skapat ett tydligt ramverk** för vidare arbete – vilket minskar risken för överraskningar och onödiga fördröjningar.

*(⏱ 18.16s)*
