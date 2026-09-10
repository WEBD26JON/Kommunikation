
## Content
1. Gruppdynamik / FIRO
2. Kommunikationsstilar och kundmöten
3. Anpassning av kommunikation
4. Retorik och presentationsteknik
5. Skriftlig kommunikation
6. Reflektion

## Uppdrag och lärandemål

Den skriftliga rapporten examinerar följande lärandemål:

- **1**..Beskriv grunderna i de olika faserna och processerna i en grupp, och hur de kan användas för att utveckla en grupp, exempelvis enligt FIRO-modellen.
- **2**..Beskriv olika kommunikationsstilar och identifiera hur olika stilar påverkar utfallet vid kundmöten.
- **3.**..Redogör för hur kommunikationen kan anpassas utifrån situation, målgrupp, kulturer och kommunikationskanaler.
- **4.**..Beskriv olika tekniker för retorik och presentationer och vilken effekt de har vid användning.
- **5**..Använd skriftlig kommunikation med anpassat budskap utifrån situation och mottagare.
- **OBS! 8**..Reflektera kring kommunikationens betydelse för kundbemötande på ett affärsmannamässigt sätt. 


# Kommunikation i ett webbprojekt. Analys av caset "Lanseringen närmar sig"

---
 
## 1. Inledning. Kommunikationsproblemen i caset
 
Caset beskriver ett litet, tvärfunktionellt webbteam några veckor före lansering. Under ett digitalt kundmöte ger kunden en feedback som är positiv men vag, och efter mötet visar det sig att teamet har tolkat samma budskap på minst tre olika sätt. Kort därefter uppstår dubbelarbete när två personer börjar arbeta med startsidan efter ett meddelande i Teams.
 
Jag har valt att analysera tre kommunikationsproblem:
 
1. **Kundens budskap är otydligt och kvitteras aldrig.** Orden "för teknisk", "modern, enkel och mer premium" är värderande men saknar innehåll som går att omsätta i arbete. Ingen i teamet ställer följdfrågor under mötet, och ingen sammanfattar vad man kommit överens om. Också tidsangivelsen "helst till fredag" lämnas obehandlad. Det framgår inte om fredag är ett krav eller en önskan.
2. **Ansvaret i teamets interna kommunikation är oklart.** Projektledarens meddelande "Vi behöver lösa kundens feedback idag. Kan någon fixa startsidan?" saknar mottagare, avgränsning och definition av vad "löst" innebär. Konsekvensen blir konkret: två personer arbetar parallellt med samma sida.
3. **Återkopplingen till kunden riskerar att anpassas fel.** Kunden har begränsad teknisk kunskap och vill veta *vad*, *varför* och *när*. Ett team som är vant vid teknisk vokabulär tenderar att svara i termer av komponenter, typografi och sprintar – vilket inte besvarar kundens faktiska frågor.
Konsekvenserna är inte enbart interna. Dubbelarbete kostar timmar som teamet inte har så nära lansering, feltolkade önskemål riskerar att leda till en leverans kunden inte känner igen sig i, och otydlig kommunikation om tidsplanen skadar förtroendet – vilket i förlängningen påverkar affären och möjligheten till fortsatt uppdrag.
 
---
 
## 2. Analys
 
### 2.1 Brus och uteblivet feedbackloop (Shannon & Weaver)
 
Enligt Shannon & Weavers kommunikationsmodell förmedlas ett budskap från sändare till mottagare via en kanal, och kan störas av brus. Bruset är här inte tekniskt utan **semantiskt**: ordet "premium" har inget gemensamt referensinnehåll. För kunden kan det betyda luftig layout och färre element; för utvecklaren kan det betyda animationer; för UX-designern typografi och bildspråk. Modellen visar också varför problemet inte upptäcks – **återkopplingen saknas**. Ingen omformulerar kundens budskap tillbaka till kunden ("Om jag förstår dig rätt menar du att…"), och därmed finns ingen mekanism som avslöjar att avkodningen skiljer sig från kodningen.
 
Den transaktionella modell som TED-Ed använder (Hampsten) skärper bilden ytterligare: mening skapas inte av sändaren ensam utan förhandlas mellan parterna, utifrån var och ens erfarenheter och referensram. Teamets tre olika tolkningar är alltså inte ett tecken på slarv, utan ett normalt utfall när ett värdeladdat ord inte förhandlas. Att en person faktiskt föreslår att teamet ska fråga kunden vad "premium" betyder är den enda repliken i caset som återupprättar feedbackloopen.
 
Det digitala mötesformatet förstärker effekten. I ett fysiskt möte fångas tveksamhet ofta upp genom kroppsspråk; på skärm faller mycket av den icke-verbala informationen bort, och tystnad tolkas lätt som samtycke.
 
### 2.2 Kanalval och otydligt ansvar
 
Både Atlassian och Slack betonar att kanalvalet ska styras av budskapets komplexitet och av behovet av ett tydligt ägarskap. Projektledarens meddelande bryter mot båda principerna. Chatt är en **asynkron kanal med låg förpliktelse** – ett meddelande till en hel kanal riktar sig formellt till alla och reellt till ingen. Formuleringen "Kan någon fixa startsidan?" är dessutom en indirekt uppmaning: grammatiskt en fråga, funktionellt en order, utan namngiven mottagare.
 
Resultatet är förutsägbart. När ansvar är underspecificerat fyller mottagarna själva i luckan utifrån sin egen rolluppfattning, och två personer kan rimligt dra slutsatsen att uppgiften gäller dem. Kombinationen "otydligt uppdrag" + "kanal utan kvittens" + "tidspress" är den direkta orsaken till dubbelarbetet – inte bristande vilja hos någon enskild.
 
### 2.3 Gruppens utvecklingsfas (FIRO)
 
Will Schutz FIRO-modell beskriver tre faser: **tillhöra**, **rollsökning** och **samhörighet**. Teamet har arbetat ihop några veckor, alla är med i projektet och ingen ifrågasätter sin plats – tillhörafasen är passerad. Beteendena i caset är däremot typiska för **rollsökningsfasen**: olika personer hävdar olika tolkningar av samma uppdrag, ingen tar tydligt ledningen i frågan om vad kunden menar, och arbetsfördelningen är oklar. I samhörighetsfasen hade teamet i stället haft ett inarbetat mönster för hur ett vagt kundönskemål hanteras och vem som äger vilken yta.
 
Det är också värt att notera att grupper inte utvecklas linjärt. Nära en lansering ökar pressen och osäkerheten, och ett team som tidigare fungerat väl kan tillfälligt falla tillbaka i rollsökning. Kundens plötsliga och luddiga ändringsönskemål fungerar här som just en sådan störning.
 
FIRO förklarar därmed varför problemet är strukturellt snarare än individuellt: så länge roller och beslutsmandat är oklara kommer varje otydligt meddelande att producera samma typ av friktion. Amy Edmondsons resonemang om psykologisk trygghet kompletterar bilden – i ett klimat där det är lätt att säga "jag förstod inte kunden" upptäcks tolkningsskillnader i mötet i stället för flera timmar senare.
 
### 2.4 Kommunikationsstil och mottagaranpassning
 
Kursmaterialet skiljer mellan hur samma budskap behöver formuleras för kund, utvecklare och slutanvändare: kunden vill förstå nytta och affärsvärde, utvecklaren behöver krav och detaljer, slutanvändaren vill veta hur det fungerar i praktiken. I caset ska teamet kommunicera samma förändring till en part som saknar teknisk förförståelse.
 
Här är **the curse of knowledge** den centrala risken. När man behärskar ett område är det svårt att minnas hur det är att inte göra det, och man förutsätter kunskap hos mottagaren som inte finns. En återkoppling som "vi refaktorerar hero-sektionen och byter till ett luftigare typsnittsskal" är korrekt men obegriplig, och tvingar kunden att antingen ställa frågor som kan kännas okunniga eller att nicka utan att förstå. Båda utfallen försämrar relationen.
 
Stilen spelar också roll för affären. En **passiv** stil ("vi ska försöka hinna till fredag") skapar en förväntan teamet inte kan infria. En **aggressiv eller avfärdande** stil ("det går inte på tre dagar") stänger dialogen. En **assertiv** stil – tydlig om vad som är möjligt, respektfull mot kundens behov, och konkret om alternativ – är den enda som samtidigt skyddar tidsplanen och relationen. Det som avgör om ett kundmöte leder till en lönsam affär är sällan om man säger ja, utan om kunden upplever att man är förutsägbar och ärlig.
 
Slutligen är aktivt lyssnande underskattat. Julian Treasure och Celeste Headlee lyfter båda samma poäng: att lyssna för att förstå snarare än för att svara. I caset börjar teamet formulera lösningar innan man har förstått problemet – man hoppar från kundens ord direkt till åtgärd.
 
---
 
## 3. Förbättringsförslag
 
**Under kundmötet.** Avsluta varje möte med en muntlig sammanfattning och kvittens: "Vi uppfattar att ni vill ha en enklare startsida med mindre teknisk text, tydligare bilder och lugnare färgsättning – stämmer det?" Konkretisera värdeord genom referenser i stället för adjektiv: be kunden peka ut två-tre webbplatser de upplever som "premium", och en de tycker är för teknisk. Det förvandlar en subjektiv känsla till ett jämförbart underlag. Skilj också alltid på önskemål och krav när det gäller tid: "Är fredag en fast deadline kopplad till något externt, eller ett önskemål?"
 
**Internt i teamet.** Ersätt öppna uppmaningar med namngivet ansvar, avgränsning och definition av klart: "Sara äger startsidan till kl. 15 i dag. Omfattning: text ovanför sidbrytningen och bildval. Kim rör den inte." Skriv beslut och arbetsfördelning i en kanal som är avsedd för beslut – ett ärende, en task eller ett mötesprotokoll – och använd chatt för snabba frågor, inte för uppdrag. Ett kort avstämningsmöte direkt efter kundmötet, där var och en får säga hur de uppfattade önskemålet, hade i caset avslöjat de tre tolkningarna på fem minuter.
 
**I fråga om roller.** Rollsökningsfasen kortas av att mandat görs uttryckliga: vem beslutar om design, vem äger kundkontakten, vem prioriterar när tiden inte räcker. Detta behöver inte vara hierarkiskt – det räcker att det är sagt högt.
 
**Mot kunden.** Anpassa språket till mottagaren, håll ihop *vad – varför – när* och var öppen med vad som ryms i tidsplanen. Nedan är ett förslag på skriftlig återkoppling.
 
### 3.1 Exempel på skriftlig återkoppling till kunden
 
> **Ämne: Sammanfattning efter dagens möte och förslag på nästa steg**
>
> Hej Anna,
>
> Tack för dagens genomgång. Jag vill sammanfatta hur vi uppfattade era önskemål, så att vi säkert arbetar åt rätt håll.
>
> Vi uppfattade att startsidan i dag känns för teknisk och att ni vill att den ska upplevas som enklare, modernare och mer exklusiv. Så här tänker vi omsätta det:
>
> - **Vi förenklar texten på startsidan** så att den beskriver vad ni erbjuder och vilken nytta besökaren får, i stället för hur lösningen är byggd.
> - **Vi ger sidan mer luft** – färre element per skärm, större bilder och tydligare rubriker. Det är den förändring som brukar ge störst effekt på upplevelsen av kvalitet.
> - **Vi lyfter fram era referenser och kundcase** högre upp på sidan, eftersom trovärdighet är en stor del av ett premiumintryck.
>
> Anledningen till att vi föreslår just detta är att "premium" i praktiken oftast handlar om enkelhet och tydlighet snarare än om fler funktioner. För att vi ska träffa rätt skulle det hjälpa oss mycket om ni kan skicka två eller tre webbplatser som ni tycker har den känsla ni är ute efter. Då blir det konkret för oss och vi slipper gissa.
>
> När det gäller tidsplanen: textändringar och den nya strukturen på startsidan hinner vi ha klara till fredag, och vi kan visa er ett förslag redan på torsdag förmiddag. En genomarbetad förändring av bildmaterial och färgsättning på hela webbplatsen behöver däremot ungefär en vecka till, om resultatet ska hålla den kvalitet ni vill ha. Vårt förslag är därför att vi lanserar den förenklade startsidan på fredag enligt plan och gör den bredare uppdateringen som ett nästa steg. Säg gärna till om ni hellre vill prioritera annorlunda.
>
> Hör av dig om något är oklart, så tar vi det på telefon.
>
> Vänliga hälsningar
> Alexander Gabrielsten, webbutvecklare
 
**Motivering av utformningen.** Meddelandet inleds med en kvittens av kundens budskap, vilket sluter den feedbackloop som saknades under mötet och gör eventuella feltolkningar synliga innan arbetet påbörjas. Språket är avskalat från fackuttryck – jag skriver "mer luft" och "färre element", inte "whitespace" eller "hero-sektion" – eftersom mottagaren saknar teknisk förkunskap och risken för the curse of knowledge är hög. Strukturen följer kundens tre frågor i den ordning kunden själv ställde dem: vad, varför och när. Punktlistan gör innehållet skanningsbart, vilket passar e-post som kanal. Tonen är assertiv snarare än undfallande: jag lovar inte hela leveransen till fredag, men jag säger inte heller nej, utan presenterar ett realistiskt alternativ och lämnar beslutet till kunden. Retoriskt bygger jag **ethos** genom att motivera förslagen fackmässigt, **logos** genom att koppla tidsangivelser till konkret innehåll, och en försiktig **pathos** genom att formulera värdet ur kundens perspektiv. Avslutningen erbjuder en rikare kanal – telefon – för det som inte lämpar sig i skrift.
 
---
 
## 4. Reflektion – min framtida yrkesroll
 
*(Denna del väger tyngst för VG – utveckla med egna erfarenheter från t.ex. grupparbeten i WEBD26, tidigare arbetsliv eller egna projekt.)*
 
Det jag framför allt tar med mig är att de flesta problem som ser ut som tekniska problem i ett webbprojekt är kommunikationsproblem i ett tidigare skede. Ingen i caset gör något fel rent hantverksmässigt; ändå går timmar förlorade och kundrelationen sätts på prov. Som utvecklare är det lätt att betrakta kravinsamling och kunddialog som någon annans ansvar – projektledarens – men caset visar att den som utför arbetet också bär ett ansvar för att förstå uppdraget innan hen börjar.
 
Konkret vill jag ta med mig tre saker in i yrkesrollen. Det första är vanan att **kvittera innan jag börjar bygga**. En omformulering på trettio sekunder – "så du menar att…" – kostar nästan ingenting och är den billigaste försäkringen mot att bygga fel sak. Det andra är att **översätta i stället för att förenkla nedlåtande**. Att tala med en kund utan fackspråk handlar inte om att förenkla innehållet, utan om att välja de begrepp som beskriver värdet för mottagaren; kunden är expert på sin verksamhet även om hen inte är expert på HTML. Det tredje är att **vara tydlig med tid**. Ett vagt "vi försöker" är bekvämt i stunden och dyrt senare – professionell kommunikation innebär att våga säga vad som ryms och erbjuda ett alternativ för resten.
 
När det gäller samarbete i team har FIRO gett mig ett språk för något jag känt igen men inte kunnat sätta ord på: att friktion kring arbetsfördelning oftast handlar om oklara roller, inte om personkemi. Det gör det lättare att ta upp saken sakligt – frågan "vem äger det här?" är inte en anklagelse utan ett verktyg. Jag vill också bidra till ett klimat där det är okej att säga att man inte förstod, eftersom det är där tolkningsfel fångas medan de fortfarande är billiga att rätta.
 
Affärsmässigt bemötande handlar, som jag ser det efter kursen, mindre om artighet och mer om **förutsägbarhet**. Kunden köper inte bara en webbplats, utan en relation där hen kan lita på att beskeden håller. Den som säger ja till allt uppfattas som tillmötesgående i ett möte och som opålitlig efter tre. Den som i stället är öppen med begränsningar, motiverar sina förslag och håller det hen lovar bygger den sortens förtroende som leder till nästa uppdrag. Det är den kommunikativa hållning jag vill ta med mig från kursen in i arbetet som webbutvecklare.
 
---
 
## Referenslista
 
- Shannon, C. & Weaver, W. Kommunikationsmodellen. Kursmaterial, *shannon-weavers-kommunikationsmodell.pdf*, Kommunikation 15 YHp.
- Schutz, W. FIRO-modellen. Kursmaterial samt video *FIRO-teorin – Will Schutz*. https://youtu.be/-sfcofZcBmI
- Hampsten, K. *How to avoid miscommunication*. TED-Ed. https://ed.ted.com/lessons/how-to-avoid-miscommunication-katherine-hampsten
- Treasure, J. *5 Ways to Listen Better*. TED. https://www.juliantreasure.com/ted-talk/5-ways-to-listen-better
- Headlee, C. *10 Ways to Have a Better Conversation*. TED. https://www.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation
- *The Curse of Knowledge*. Video, kursmaterial. https://www.youtube.com/watch?v=XQivffNIjQo
- UX Magazine. *Cognitive Bias in UX Research and Design*. https://uxmag.com/articles/10-types-of-cognitive-bias-to-watch-out-for-in-ux-research-design
- Atlassian. *How You Can Improve Communication in the Workplace*. https://www.atlassian.com/blog/teamwork/how-you-can-improve-communication-in-the-workplace
- Slack. *Choosing the Right Communication Channel at Work*. https://slack.com/blog/collaboration/pick-communication-channels-at-work
- Harvard DCE. *8 Ways You Can Improve Your Communication Skills*. https://professional.dce.harvard.edu/blog/8-ways-you-can-improve-your-communication-skills/
- Duarte, N. *The Secret Structure of Great Talks*. TED. https://www.ted.com/talks/nancy_duarte_the_secret_structure_of_great_talks
- Edmondson, A. *How to Turn a Group of Strangers into a Team*. TED. https://thinkers50.com/blog/how-to-turn-a-group-of-strangers-into-a-team/
 


