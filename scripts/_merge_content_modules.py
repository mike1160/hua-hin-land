#!/usr/bin/env python3
"""Merge content-module info + legal pages into messages/*.json for all 6 locales."""
from __future__ import annotations

import copy
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MSG = ROOT / "messages"
LOCALES = ("en", "nl", "de", "sv", "da", "th")


def deep_count(obj) -> int:
    if isinstance(obj, dict):
        return sum(deep_count(v) for v in obj.values())
    if isinstance(obj, list):
        return sum(deep_count(v) for v in obj)
    return 1


# ---------------------------------------------------------------------------
# comparablePlotsPage
# ---------------------------------------------------------------------------
COMPARABLE = {
    "en": {
        "heroAlt": "Hua Hin land",
        "title": "How does our plot compare?",
        "subtitle": "We benchmarked every comparable plot currently listed on Soi 112 and surrounding area.",
        "ourPlotLabel": "Our plot",
        "marketLabel": "Market comparison",
        "statPriceLabel": "Our plot — price per rai",
        "statSizeLabel": "Plot size",
        "statTitleLabel": "Title deed",
        "headers": {
            "plot": "Plot",
            "size": "Size",
            "price": "Price",
            "perRai": "Price/rai",
            "title": "Title",
            "location": "Location",
            "note": "Note",
        },
        "rows": [
            {"plot": "Soi 112 plot A", "size": "1 rai", "price": "฿10,400,000", "perRai": "฿10.4M/rai", "title": "Chanote", "location": "Soi 112", "note": "Harmony Real Estate", "highlight": False},
            {"plot": "Soi 112 plot B", "size": "7.5 rai", "price": "฿92,000,000", "perRai": "฿12.3M/rai", "title": "Chanote", "location": "Soi 112", "note": "Properstar", "highlight": False},
            {"plot": "Hin Lek Fai plots", "size": "1 rai", "price": "฿2,500,000–3,500,000", "perRai": "฿2.5–3.5M/rai", "title": "Chanote", "location": "Hin Lek Fai (further from centre)", "note": "Hipflat", "highlight": False},
            {"plot": "Black Mountain", "size": "2 rai", "price": "฿12,000,000", "perRai": "฿6M/rai", "title": "Chanote", "location": "Black Mountain", "note": "FazWaz", "highlight": False},
            {"plot": "Near Soi 112", "size": "6 rai 2 ngan", "price": "฿9,810,000", "perRai": "฿1.5M/rai", "title": "Unknown", "location": "Hua Hin", "note": "HuaHin Property Search", "highlight": False},
            {"plot": "Our plot", "size": "4 rai 2 ngan", "price": "฿10,350,000", "perRai": "฿2.3M/rai", "title": "Chanote", "location": "Soi 112", "note": "Flat terrain, water connected", "highlight": True},
        ],
        "conclusion": "Our plot is Chanote titled, flat, water connected, and priced below comparable Soi 112 listings — in one piece at 4 rai 2 ngan, a rare size in this corridor.",
        "source": "Data based on active listings from Hipflat, FazWaz, Harmony Real Estate and Dot Property — July 2025",
    },
    "nl": {
        "heroAlt": "Grond in Hua Hin",
        "title": "Hoe verhoudt ons perceel zich?",
        "subtitle": "We hebben elk vergelijkbaar perceel dat nu te koop staat op Soi 112 en in de omgeving naast elkaar gezet.",
        "ourPlotLabel": "Ons perceel",
        "marketLabel": "Marktvergelijking",
        "statPriceLabel": "Ons perceel — prijs per rai",
        "statSizeLabel": "Perceelgrootte",
        "statTitleLabel": "Eigendomsakte",
        "headers": {"plot": "Perceel", "size": "Grootte", "price": "Prijs", "perRai": "Prijs/rai", "title": "Titel", "location": "Locatie", "note": "Opmerking"},
        "rows": [
            {"plot": "Soi 112 perceel A", "size": "1 rai", "price": "฿10,400,000", "perRai": "฿10.4M/rai", "title": "Chanote", "location": "Soi 112", "note": "Harmony Real Estate", "highlight": False},
            {"plot": "Soi 112 perceel B", "size": "7.5 rai", "price": "฿92,000,000", "perRai": "฿12.3M/rai", "title": "Chanote", "location": "Soi 112", "note": "Properstar", "highlight": False},
            {"plot": "Hin Lek Fai percelen", "size": "1 rai", "price": "฿2,500,000–3,500,000", "perRai": "฿2.5–3.5M/rai", "title": "Chanote", "location": "Hin Lek Fai (verder van centrum)", "note": "Hipflat", "highlight": False},
            {"plot": "Black Mountain", "size": "2 rai", "price": "฿12,000,000", "perRai": "฿6M/rai", "title": "Chanote", "location": "Black Mountain", "note": "FazWaz", "highlight": False},
            {"plot": "Nabij Soi 112", "size": "6 rai 2 ngan", "price": "฿9,810,000", "perRai": "฿1.5M/rai", "title": "Onbekend", "location": "Hua Hin", "note": "HuaHin Property Search", "highlight": False},
            {"plot": "Ons perceel", "size": "4 rai 2 ngan", "price": "฿10,350,000", "perRai": "฿2.3M/rai", "title": "Chanote", "location": "Soi 112", "note": "Vlak terrein, water aangesloten", "highlight": True},
        ],
        "conclusion": "Ons perceel heeft een Chanote-titel, is vlak, heeft wateraansluiting en ligt onder vergelijkbare Soi 112-aanbiedingen — in één stuk van 4 rai 2 ngan, een zeldzame maat in deze corridor.",
        "source": "Gegevens gebaseerd op actieve listings van Hipflat, FazWaz, Harmony Real Estate en Dot Property — juli 2025",
    },
    "de": {
        "heroAlt": "Grundstück in Hua Hin",
        "title": "Wie schneidet unser Grundstück ab?",
        "subtitle": "Wir haben jedes vergleichbare Grundstück, das derzeit an der Soi 112 und in der Umgebung angeboten wird, gegenübergestellt.",
        "ourPlotLabel": "Unser Grundstück",
        "marketLabel": "Marktvergleich",
        "statPriceLabel": "Unser Grundstück — Preis pro Rai",
        "statSizeLabel": "Grundstücksgröße",
        "statTitleLabel": "Eigentumstitel",
        "headers": {"plot": "Grundstück", "size": "Größe", "price": "Preis", "perRai": "Preis/Rai", "title": "Titel", "location": "Lage", "note": "Hinweis"},
        "rows": [
            {"plot": "Soi 112 Grundstück A", "size": "1 Rai", "price": "฿10,400,000", "perRai": "฿10.4M/Rai", "title": "Chanote", "location": "Soi 112", "note": "Harmony Real Estate", "highlight": False},
            {"plot": "Soi 112 Grundstück B", "size": "7.5 Rai", "price": "฿92,000,000", "perRai": "฿12.3M/Rai", "title": "Chanote", "location": "Soi 112", "note": "Properstar", "highlight": False},
            {"plot": "Hin Lek Fai Grundstücke", "size": "1 Rai", "price": "฿2,500,000–3,500,000", "perRai": "฿2.5–3.5M/Rai", "title": "Chanote", "location": "Hin Lek Fai (weiter vom Zentrum)", "note": "Hipflat", "highlight": False},
            {"plot": "Black Mountain", "size": "2 Rai", "price": "฿12,000,000", "perRai": "฿6M/Rai", "title": "Chanote", "location": "Black Mountain", "note": "FazWaz", "highlight": False},
            {"plot": "Nahe Soi 112", "size": "6 Rai 2 Ngan", "price": "฿9,810,000", "perRai": "฿1.5M/Rai", "title": "Unbekannt", "location": "Hua Hin", "note": "HuaHin Property Search", "highlight": False},
            {"plot": "Unser Grundstück", "size": "4 Rai 2 Ngan", "price": "฿10,350,000", "perRai": "฿2.3M/Rai", "title": "Chanote", "location": "Soi 112", "note": "Ebenes Gelände, Wasseranschluss", "highlight": True},
        ],
        "conclusion": "Unser Grundstück hat Chanote-Titel, ist eben, wasserangeschlossen und günstiger als vergleichbare Soi-112-Angebote — in einem Stück mit 4 Rai 2 Ngan, eine seltene Größe in diesem Korridor.",
        "source": "Daten basierend auf aktiven Angeboten von Hipflat, FazWaz, Harmony Real Estate und Dot Property — Juli 2025",
    },
    "sv": {
        "heroAlt": "Mark i Hua Hin",
        "title": "Hur står sig vår tomt?",
        "subtitle": "Vi har jämfört varje likvärdig tomt som just nu ligger ute till salu på Soi 112 och i närområdet.",
        "ourPlotLabel": "Vår tomt",
        "marketLabel": "Marknadsjämförelse",
        "statPriceLabel": "Vår tomt — pris per rai",
        "statSizeLabel": "Tomtstorlek",
        "statTitleLabel": "Äganderättsbevis",
        "headers": {"plot": "Tomt", "size": "Storlek", "price": "Pris", "perRai": "Pris/rai", "title": "Titel", "location": "Läge", "note": "Notering"},
        "rows": [
            {"plot": "Soi 112 tomt A", "size": "1 rai", "price": "฿10,400,000", "perRai": "฿10.4M/rai", "title": "Chanote", "location": "Soi 112", "note": "Harmony Real Estate", "highlight": False},
            {"plot": "Soi 112 tomt B", "size": "7.5 rai", "price": "฿92,000,000", "perRai": "฿12.3M/rai", "title": "Chanote", "location": "Soi 112", "note": "Properstar", "highlight": False},
            {"plot": "Hin Lek Fai-tomter", "size": "1 rai", "price": "฿2,500,000–3,500,000", "perRai": "฿2.5–3.5M/rai", "title": "Chanote", "location": "Hin Lek Fai (längre från centrum)", "note": "Hipflat", "highlight": False},
            {"plot": "Black Mountain", "size": "2 rai", "price": "฿12,000,000", "perRai": "฿6M/rai", "title": "Chanote", "location": "Black Mountain", "note": "FazWaz", "highlight": False},
            {"plot": "Nära Soi 112", "size": "6 rai 2 ngan", "price": "฿9,810,000", "perRai": "฿1.5M/rai", "title": "Okänd", "location": "Hua Hin", "note": "HuaHin Property Search", "highlight": False},
            {"plot": "Vår tomt", "size": "4 rai 2 ngan", "price": "฿10,350,000", "perRai": "฿2.3M/rai", "title": "Chanote", "location": "Soi 112", "note": "Platt terräng, vatten anslutet", "highlight": True},
        ],
        "conclusion": "Vår tomt har Chanote-titel, är platt, har vattenanslutning och ligger under jämförbara Soi 112-annonser — i ett stycke om 4 rai 2 ngan, en sällsynt storlek i denna korridor.",
        "source": "Data baserad på aktiva annonser från Hipflat, FazWaz, Harmony Real Estate och Dot Property — juli 2025",
    },
    "da": {
        "heroAlt": "Grund i Hua Hin",
        "title": "Hvordan klarer vores grund sig?",
        "subtitle": "Vi har sammenlignet hver sammenlignelig grund, der i øjeblikket er til salg på Soi 112 og i området omkring.",
        "ourPlotLabel": "Vores grund",
        "marketLabel": "Markedssammenligning",
        "statPriceLabel": "Vores grund — pris pr. rai",
        "statSizeLabel": "Grundstørrelse",
        "statTitleLabel": "Skøde",
        "headers": {"plot": "Grund", "size": "Størrelse", "price": "Pris", "perRai": "Pris/rai", "title": "Titel", "location": "Beliggenhed", "note": "Note"},
        "rows": [
            {"plot": "Soi 112 grund A", "size": "1 rai", "price": "฿10,400,000", "perRai": "฿10.4M/rai", "title": "Chanote", "location": "Soi 112", "note": "Harmony Real Estate", "highlight": False},
            {"plot": "Soi 112 grund B", "size": "7.5 rai", "price": "฿92,000,000", "perRai": "฿12.3M/rai", "title": "Chanote", "location": "Soi 112", "note": "Properstar", "highlight": False},
            {"plot": "Hin Lek Fai-grunde", "size": "1 rai", "price": "฿2,500,000–3,500,000", "perRai": "฿2.5–3.5M/rai", "title": "Chanote", "location": "Hin Lek Fai (længere fra centrum)", "note": "Hipflat", "highlight": False},
            {"plot": "Black Mountain", "size": "2 rai", "price": "฿12,000,000", "perRai": "฿6M/rai", "title": "Chanote", "location": "Black Mountain", "note": "FazWaz", "highlight": False},
            {"plot": "Nær Soi 112", "size": "6 rai 2 ngan", "price": "฿9,810,000", "perRai": "฿1.5M/rai", "title": "Ukendt", "location": "Hua Hin", "note": "HuaHin Property Search", "highlight": False},
            {"plot": "Vores grund", "size": "4 rai 2 ngan", "price": "฿10,350,000", "perRai": "฿2.3M/rai", "title": "Chanote", "location": "Soi 112", "note": "Fladt terræn, vand tilsluttet", "highlight": True},
        ],
        "conclusion": "Vores grund har Chanote-titel, er flad, har vandtilslutning og ligger under sammenlignelige Soi 112-annoncer — i ét stykke på 4 rai 2 ngan, en sjælden størrelse i denne korridor.",
        "source": "Data baseret på aktive annoncer fra Hipflat, FazWaz, Harmony Real Estate og Dot Property — juli 2025",
    },
    "th": {
        "heroAlt": "ที่ดินหัวหิน",
        "title": "แปลงของเราเปรียบเทียบอย่างไร?",
        "subtitle": "เราเปรียบเทียบทุกแปลงที่เทียบเคียงได้ที่ลงประกาศอยู่บนซอย 112 และพื้นที่โดยรอบ",
        "ourPlotLabel": "แปลงของเรา",
        "marketLabel": "การเปรียบเทียบตลาด",
        "statPriceLabel": "แปลงของเรา — ราคาต่อไร่",
        "statSizeLabel": "ขนาดแปลง",
        "statTitleLabel": "โฉนดที่ดิน",
        "headers": {"plot": "แปลง", "size": "ขนาด", "price": "ราคา", "perRai": "ราคาต่อไร่", "title": "โฉนด", "location": "ที่ตั้ง", "note": "หมายเหตุ"},
        "rows": [
            {"plot": "แปลงซอย 112 A", "size": "1 ไร่", "price": "฿10,400,000", "perRai": "฿10.4M/ไร่", "title": "โฉนด", "location": "ซอย 112", "note": "Harmony Real Estate", "highlight": False},
            {"plot": "แปลงซอย 112 B", "size": "7.5 ไร่", "price": "฿92,000,000", "perRai": "฿12.3M/ไร่", "title": "โฉนด", "location": "ซอย 112", "note": "Properstar", "highlight": False},
            {"plot": "แปลงหินเหล็กไฟ", "size": "1 ไร่", "price": "฿2,500,000–3,500,000", "perRai": "฿2.5–3.5M/ไร่", "title": "โฉนด", "location": "หินเหล็กไฟ (ห่างจากใจกลาง)", "note": "Hipflat", "highlight": False},
            {"plot": "Black Mountain", "size": "2 ไร่", "price": "฿12,000,000", "perRai": "฿6M/ไร่", "title": "โฉนด", "location": "Black Mountain", "note": "FazWaz", "highlight": False},
            {"plot": "ใกล้ซอย 112", "size": "6 ไร่ 2 งาน", "price": "฿9,810,000", "perRai": "฿1.5M/ไร่", "title": "ไม่ทราบ", "location": "หัวหิน", "note": "HuaHin Property Search", "highlight": False},
            {"plot": "แปลงของเรา", "size": "4 ไร่ 2 งาน", "price": "฿10,350,000", "perRai": "฿2.3M/ไร่", "title": "โฉนด", "location": "ซอย 112", "note": "พื้นที่ราบ มีน้ำประปา", "highlight": True},
        ],
        "conclusion": "แปลงของเราได้รับโฉนดที่ดิน มีพื้นที่ราบ มีการเชื่อมต่อน้ำประปา และราคาต่ำกว่ารายการซอย 112 ที่เปรียบเทียบได้ — ในพื้นที่เดียว 4 ไร่ 2 งาน ซึ่งเป็นขนาดที่หายากในแนวทางเดินนี้",
        "source": "ข้อมูลจากรายการที่ลงประกาศอยู่บน Hipflat, FazWaz, Harmony Real Estate และ Dot Property — กรกฎาคม 2025",
    },
}

# ---------------------------------------------------------------------------
# partialSalePage
# ---------------------------------------------------------------------------
PARTIAL = {
    "en": {
        "heroAlt": "aerial view of plot",
        "title": "Buying part of the plot — what you need to know",
        "subtitle": "Partial sale is possible from 1 rai. Here is what the process looks like and what costs to expect as a buyer.",
        "overviewLabel": "Overview",
        "processLabel": "Process",
        "costsLabel": "Costs",
        "howTitle": "📐 How it works",
        "howItems": [
            "The plot is 4 rai 2 ngan with a single Chanote title",
            "On partial sale, the plot is officially subdivided at the Thai Land Department",
            "Each buyer receives their own Chanote title in their name — the strongest form of land ownership in Thailand",
            "Minimum purchase: 1 rai",
            "Maximum: 4–5 separate plots possible",
            "Flat terrain, water connection in place, access via Soi 112",
        ],
        "stat1Value": "1 rai",
        "stat1Label": "Minimum purchase",
        "stat2Value": "2–3 mo",
        "stat2Label": "Typical timeline",
        "stat3Value": "4–5",
        "stat3Label": "Separate plots possible",
        "stat4Value": "฿40k–100k",
        "stat4Label": "Indicative buyer costs",
        "processTitle": "📋 Process & timeline",
        "steps": [
            {"title": "Agreement on size and boundaries", "desc": "Buyer and seller agree on the exact size and boundaries of the portion being sold."},
            {"title": "Official land surveyor", "desc": "A licensed surveyor measures and maps the new plot boundaries — approximately 2–4 weeks."},
            {"title": "Subdivision application at Land Department", "desc": "Formal application to split the Chanote title — approximately 4–8 weeks."},
            {"title": "New Chanote titles issued", "desc": "Each buyer receives their own separate Chanote title deed in their name."},
        ],
        "timeline": "Total timeline: approximately 2–3 months from agreement to new title deeds.",
        "costsTitle": "💰 Costs — what the buyer pays",
        "costItem": "Cost item",
        "costAmount": "Amount",
        "costs": [
            {"item": "Transfer fee", "amount": "2% of official appraised value — often split 50/50 with seller, so buyer pays ~1%", "highlight": False},
            {"item": "Surveyor fee (subdivision)", "amount": "฿15,000 – ฿30,000", "highlight": False},
            {"item": "Lawyer / due diligence", "amount": "฿20,000 – ฿50,000 (strongly recommended)", "highlight": False},
            {"item": "Land Department subdivision costs", "amount": "฿5,000 – ฿15,000", "highlight": False},
            {"item": "Total indicative for buyer", "amount": "ca. ฿40,000 – ฿100,000 + transfer fee", "highlight": True},
        ],
        "note": "Note: Stamp duty (0.5%), Specific Business Tax (3.3%) and Withholding Tax are costs for the seller, not the buyer. The exact split of the transfer fee is negotiable and will be agreed in the Sale & Purchase Agreement. All amounts are indicative — consult a Thai property lawyer before committing.",
    },
    "nl": {
        "heroAlt": "luchtfoto van het perceel",
        "title": "Een deel van het perceel kopen — wat u moet weten",
        "subtitle": "Gedeeltelijke verkoop is mogelijk vanaf 1 rai. Dit is hoe het proces eruitziet en welke kosten u als koper kunt verwachten.",
        "overviewLabel": "Overzicht",
        "processLabel": "Proces",
        "costsLabel": "Kosten",
        "howTitle": "📐 Hoe het werkt",
        "howItems": [
            "Het perceel is 4 rai 2 ngan met één Chanote-titel",
            "Bij gedeeltelijke verkoop wordt het perceel officieel gesplitst bij het Thaise Land Department",
            "Elke koper krijgt een eigen Chanote-titel op naam — de sterkste vorm van grondeigendom in Thailand",
            "Minimale aankoop: 1 rai",
            "Maximum: 4–5 aparte percelen mogelijk",
            "Vlak terrein, wateraansluiting aanwezig, toegang via Soi 112",
        ],
        "stat1Value": "1 rai",
        "stat1Label": "Minimale aankoop",
        "stat2Value": "2–3 mnd",
        "stat2Label": "Typische doorlooptijd",
        "stat3Value": "4–5",
        "stat3Label": "Aparte percelen mogelijk",
        "stat4Value": "฿40k–100k",
        "stat4Label": "Indicatie kosten koper",
        "processTitle": "📋 Proces & tijdlijn",
        "steps": [
            {"title": "Akkoord over grootte en grenzen", "desc": "Koper en verkoper spreken de exacte grootte en grenzen af van het te verkopen deel."},
            {"title": "Officiële landmeter", "desc": "Een bevoegde landmeter meet en tekent de nieuwe perceelgrenzen — ongeveer 2–4 weken."},
            {"title": "Splitsingsaanvraag bij Land Department", "desc": "Formele aanvraag om de Chanote-titel te splitsen — ongeveer 4–8 weken."},
            {"title": "Nieuwe Chanote-titels uitgegeven", "desc": "Elke koper ontvangt een aparte Chanote-akte op eigen naam."},
        ],
        "timeline": "Totale doorlooptijd: ongeveer 2–3 maanden van akkoord tot nieuwe eigendomsaktes.",
        "costsTitle": "💰 Kosten — wat de koper betaalt",
        "costItem": "Kostenpost",
        "costAmount": "Bedrag",
        "costs": [
            {"item": "Overdrachtskosten", "amount": "2% van de officiële taxatiewaarde — vaak 50/50 met verkoper, koper betaalt ~1%", "highlight": False},
            {"item": "Landmeterskosten (splitsing)", "amount": "฿15,000 – ฿30,000", "highlight": False},
            {"item": "Advocaat / due diligence", "amount": "฿20,000 – ฿50,000 (sterk aanbevolen)", "highlight": False},
            {"item": "Splitsingskosten Land Department", "amount": "฿5,000 – ฿15,000", "highlight": False},
            {"item": "Totaal indicatief voor koper", "amount": "ca. ฿40,000 – ฿100,000 + overdrachtskosten", "highlight": True},
        ],
        "note": "Let op: zegelrecht (0,5%), Specific Business Tax (3,3%) en bronbelasting zijn kosten voor de verkoper, niet de koper. De exacte verdeling van de overdrachtskosten is onderhandelbaar en wordt vastgelegd in de koopovereenkomst. Alle bedragen zijn indicatief — raadpleeg een Thaise vastgoedadvocaat voordat u zich vastlegt.",
    },
    "de": {
        "heroAlt": "Luftaufnahme des Grundstücks",
        "title": "Einen Teil des Grundstücks kaufen — was Sie wissen müssen",
        "subtitle": "Teilverkauf ist ab 1 Rai möglich. So sieht der Prozess aus und mit welchen Kosten Käufer rechnen sollten.",
        "overviewLabel": "Überblick",
        "processLabel": "Ablauf",
        "costsLabel": "Kosten",
        "howTitle": "📐 So funktioniert es",
        "howItems": [
            "Das Grundstück umfasst 4 Rai 2 Ngan mit einem einzigen Chanote-Titel",
            "Beim Teilverkauf wird das Grundstück offiziell beim thailändischen Land Department geteilt",
            "Jeder Käufer erhält einen eigenen Chanote-Titel auf seinen Namen — die stärkste Form des Grundeigentums in Thailand",
            "Mindestkauf: 1 Rai",
            "Maximum: 4–5 separate Grundstücke möglich",
            "Ebenes Gelände, Wasseranschluss vorhanden, Zugang über Soi 112",
        ],
        "stat1Value": "1 Rai",
        "stat1Label": "Mindestkauf",
        "stat2Value": "2–3 Mon.",
        "stat2Label": "Typische Dauer",
        "stat3Value": "4–5",
        "stat3Label": "Separate Grundstücke möglich",
        "stat4Value": "฿40k–100k",
        "stat4Label": "Indikative Käuferkosten",
        "processTitle": "📋 Ablauf & Zeitplan",
        "steps": [
            {"title": "Einigung über Größe und Grenzen", "desc": "Käufer und Verkäufer einigen sich auf die genaue Größe und Grenzen des zu verkaufenden Teils."},
            {"title": "Offizielle Landvermessung", "desc": "Ein zugelassener Vermesser misst und kartiert die neuen Grundstücksgrenzen — etwa 2–4 Wochen."},
            {"title": "Teilungsantrag beim Land Department", "desc": "Formeller Antrag zur Teilung des Chanote-Titels — etwa 4–8 Wochen."},
            {"title": "Neue Chanote-Titel ausgestellt", "desc": "Jeder Käufer erhält einen eigenen Chanote-Titel auf seinen Namen."},
        ],
        "timeline": "Gesamtdauer: etwa 2–3 Monate von der Einigung bis zu den neuen Eigentumstiteln.",
        "costsTitle": "💰 Kosten — was der Käufer zahlt",
        "costItem": "Kostenpunkt",
        "costAmount": "Betrag",
        "costs": [
            {"item": "Übertragungsgebühr", "amount": "2% des offiziellen Schätzwerts — oft 50/50 mit Verkäufer, Käufer zahlt ~1%", "highlight": False},
            {"item": "Vermessungsgebühr (Teilung)", "amount": "฿15,000 – ฿30,000", "highlight": False},
            {"item": "Anwalt / Due Diligence", "amount": "฿20,000 – ฿50,000 (dringend empfohlen)", "highlight": False},
            {"item": "Teilungskosten Land Department", "amount": "฿5,000 – ฿15,000", "highlight": False},
            {"item": "Gesamt indikativ für Käufer", "amount": "ca. ฿40,000 – ฿100,000 + Übertragungsgebühr", "highlight": True},
        ],
        "note": "Hinweis: Stempelsteuer (0,5%), Specific Business Tax (3,3%) und Quellensteuer sind Kosten des Verkäufers, nicht des Käufers. Die genaue Aufteilung der Übertragungsgebühr ist verhandelbar und wird im Kaufvertrag vereinbart. Alle Beträge sind indikativ — konsultieren Sie einen thailändischen Immobilienanwalt vor einer Verpflichtung.",
    },
    "sv": {
        "heroAlt": "flygbild av tomten",
        "title": "Köpa en del av tomten — vad du behöver veta",
        "subtitle": "Delvis försäljning är möjlig från 1 rai. Här är hur processen ser ut och vilka kostnader du som köpare kan förvänta dig.",
        "overviewLabel": "Översikt",
        "processLabel": "Process",
        "costsLabel": "Kostnader",
        "howTitle": "📐 Så fungerar det",
        "howItems": [
            "Tomten är 4 rai 2 ngan med en enda Chanote-titel",
            "Vid delvis försäljning delas tomten officiellt upp hos thailändska Land Department",
            "Varje köpare får en egen Chanote-titel i sitt namn — den starkaste formen av markägande i Thailand",
            "Minsta köp: 1 rai",
            "Maximum: 4–5 separata tomter möjliga",
            "Platt terräng, vattenanslutning på plats, tillträde via Soi 112",
        ],
        "stat1Value": "1 rai",
        "stat1Label": "Minsta köp",
        "stat2Value": "2–3 mån",
        "stat2Label": "Typisk tidsram",
        "stat3Value": "4–5",
        "stat3Label": "Separata tomter möjliga",
        "stat4Value": "฿40k–100k",
        "stat4Label": "Indikativa köparkostnader",
        "processTitle": "📋 Process & tidslinje",
        "steps": [
            {"title": "Överenskommelse om storlek och gränser", "desc": "Köpare och säljare kommer överens om exakt storlek och gränser för den del som säljs."},
            {"title": "Officiell lantmätare", "desc": "En auktoriserad lantmätare mäter och kartlägger de nya tomtgränserna — cirka 2–4 veckor."},
            {"title": "Ansökan om styckning hos Land Department", "desc": "Formell ansökan om att dela Chanote-titeln — cirka 4–8 veckor."},
            {"title": "Nya Chanote-titlar utfärdas", "desc": "Varje köpare får en egen separat Chanote-titel i sitt namn."},
        ],
        "timeline": "Total tidsram: cirka 2–3 månader från överenskommelse till nya äganderättsbevis.",
        "costsTitle": "💰 Kostnader — vad köparen betalar",
        "costItem": "Kostnadspost",
        "costAmount": "Belopp",
        "costs": [
            {"item": "Överlåtelseavgift", "amount": "2% av officiellt taxeringsvärde — ofta delat 50/50 med säljare, köpare betalar ~1%", "highlight": False},
            {"item": "Lantmäteriavgift (styckning)", "amount": "฿15,000 – ฿30,000", "highlight": False},
            {"item": "Advokat / due diligence", "amount": "฿20,000 – ฿50,000 (starkt rekommenderat)", "highlight": False},
            {"item": "Styckningskostnader Land Department", "amount": "฿5,000 – ฿15,000", "highlight": False},
            {"item": "Totalt indikativt för köpare", "amount": "ca. ฿40,000 – ฿100,000 + överlåtelseavgift", "highlight": True},
        ],
        "note": "Obs: stämpelskatt (0,5%), Specific Business Tax (3,3%) och källskatt är kostnader för säljaren, inte köparen. Exakt fördelning av överlåtelseavgiften är förhandlingsbar och avtalas i köpeavtalet. Alla belopp är indikativa — rådfråga en thailändsk fastighetsjurist innan du förbinder dig.",
    },
    "da": {
        "heroAlt": "luftfoto af grunden",
        "title": "Køb af en del af grunden — det du skal vide",
        "subtitle": "Delvist salg er muligt fra 1 rai. Her er processen, og hvilke omkostninger du som køber kan forvente.",
        "overviewLabel": "Overblik",
        "processLabel": "Proces",
        "costsLabel": "Omkostninger",
        "howTitle": "📐 Sådan fungerer det",
        "howItems": [
            "Grunden er 4 rai 2 ngan med én Chanote-titel",
            "Ved delvist salg opdeles grunden officielt hos det thailandske Land Department",
            "Hver køber får sin egen Chanote-titel i eget navn — den stærkeste form for jordbesiddelse i Thailand",
            "Minimumskøb: 1 rai",
            "Maksimum: 4–5 separate grunde mulige",
            "Fladt terræn, vandtilslutning på plads, adgang via Soi 112",
        ],
        "stat1Value": "1 rai",
        "stat1Label": "Minimumskøb",
        "stat2Value": "2–3 mdr",
        "stat2Label": "Typisk tidsramme",
        "stat3Value": "4–5",
        "stat3Label": "Separate grunde mulige",
        "stat4Value": "฿40k–100k",
        "stat4Label": "Vejledende køberomkostninger",
        "processTitle": "📋 Proces & tidslinje",
        "steps": [
            {"title": "Aftale om størrelse og grænser", "desc": "Køber og sælger aftaler den præcise størrelse og grænser for den del, der sælges."},
            {"title": "Officiel landmåler", "desc": "En autoriseret landmåler måler og kortlægger de nye grundgrænser — ca. 2–4 uger."},
            {"title": "Ansøgning om opdeling hos Land Department", "desc": "Formel ansøgning om at splitte Chanote-titlen — ca. 4–8 uger."},
            {"title": "Nye Chanote-titler udstedt", "desc": "Hver køber modtager sin egen separate Chanote-titel i eget navn."},
        ],
        "timeline": "Samlet tidsramme: ca. 2–3 måneder fra aftale til nye skøder.",
        "costsTitle": "💰 Omkostninger — hvad køberen betaler",
        "costItem": "Omkostningspost",
        "costAmount": "Beløb",
        "costs": [
            {"item": "Overførselsgebyr", "amount": "2% af officiel vurderingsværdi — ofte delt 50/50 med sælger, køber betaler ~1%", "highlight": False},
            {"item": "Landmålergebyr (opdeling)", "amount": "฿15,000 – ฿30,000", "highlight": False},
            {"item": "Advokat / due diligence", "amount": "฿20,000 – ฿50,000 (stærkt anbefalet)", "highlight": False},
            {"item": "Opdelingsomkostninger Land Department", "amount": "฿5,000 – ฿15,000", "highlight": False},
            {"item": "Samlet vejledende for køber", "amount": "ca. ฿40,000 – ฿100,000 + overførselsgebyr", "highlight": True},
        ],
        "note": "Bemærk: stempelafgift (0,5%), Specific Business Tax (3,3%) og kildeskat er omkostninger for sælgeren, ikke køberen. Den præcise fordeling af overførselsgebyret er forhandlingsbart og aftales i købsaftalen. Alle beløb er vejledende — konsulter en thailandsk ejendomsadvokat, før du forpligter dig.",
    },
    "th": {
        "heroAlt": "ภาพมุมสูงของแปลงที่ดิน",
        "title": "การซื้อบางส่วนของแปลง — สิ่งที่คุณต้องรู้",
        "subtitle": "สามารถขายบางส่วนได้ตั้งแต่ 1 ไร่ นี่คือขั้นตอนและค่าใช้จ่ายที่ผู้ซื้อควรคาดหวัง",
        "overviewLabel": "ภาพรวม",
        "processLabel": "ขั้นตอน",
        "costsLabel": "ค่าใช้จ่าย",
        "howTitle": "📐 วิธีการทำงาน",
        "howItems": [
            "แปลงที่ดินมีขนาด 4 ไร่ 2 งาน พร้อมโฉนดที่ดิน (Chanote) ฉบับเดียว",
            "เมื่อขายบางส่วน แปลงจะถูกแบ่งอย่างเป็นทางการที่กรมที่ดิน",
            "ผู้ซื้อแต่ละรายจะได้รับโฉนดที่ดินเป็นชื่อของตนเอง — รูปแบบกรรมสิทธิ์ที่ดินที่แข็งแกร่งที่สุดในประเทศไทย",
            "การซื้อขั้นต่ำ: 1 ไร่",
            "สูงสุด: แบ่งได้ 4–5 แปลง",
            "พื้นที่ราบ มีการเชื่อมต่อน้ำประปา เข้าถึงได้ทางซอย 112",
        ],
        "stat1Value": "1 ไร่",
        "stat1Label": "การซื้อขั้นต่ำ",
        "stat2Value": "2–3 เดือน",
        "stat2Label": "ระยะเวลาโดยทั่วไป",
        "stat3Value": "4–5",
        "stat3Label": "แบ่งเป็นแปลงแยกได้",
        "stat4Value": "฿40k–100k",
        "stat4Label": "ค่าใช้จ่ายผู้ซื้อโดยประมาณ",
        "processTitle": "📋 ขั้นตอนและระยะเวลา",
        "steps": [
            {"title": "ตกลงขนาดและขอบเขต", "desc": "ผู้ซื้อและผู้ขายตกลงขนาดและขอบเขตที่แน่นอนของส่วนที่ขาย"},
            {"title": "ช่างรังวัดอย่างเป็นทางการ", "desc": "ช่างรังวัดที่ได้รับใบอนุญาตวัดและทำแผนที่ขอบเขตแปลงใหม่ — ประมาณ 2–4 สัปดาห์"},
            {"title": "ยื่นคำขอแบ่งแปลงที่กรมที่ดิน", "desc": "ยื่นคำขอแบ่งโฉนดที่ดินอย่างเป็นทางการ — ประมาณ 4–8 สัปดาห์"},
            {"title": "ออกโฉนดที่ดินใหม่", "desc": "ผู้ซื้อแต่ละรายได้รับโฉนดที่ดิน (Chanote) แยกเป็นชื่อของตนเอง"},
        ],
        "timeline": "ระยะเวลารวม: ประมาณ 2–3 เดือน ตั้งแต่ตกลงจนถึงออกโฉนดใหม่",
        "costsTitle": "💰 ค่าใช้จ่าย — สิ่งที่ผู้ซื้อต้องจ่าย",
        "costItem": "รายการ",
        "costAmount": "จำนวน",
        "costs": [
            {"item": "ค่าธรรมเนียมการโอน", "amount": "2% ของราคาประเมินอย่างเป็นทางการ — มักแบ่ง 50/50 กับผู้ขาย ผู้ซื้อจ่าย ~1%", "highlight": False},
            {"item": "ค่าช่างรังวัด (แบ่งแปลง)", "amount": "฿15,000 – ฿30,000", "highlight": False},
            {"item": "ทนายความ / ตรวจสอบเอกสาร", "amount": "฿20,000 – ฿50,000 (แนะนำอย่างยิ่ง)", "highlight": False},
            {"item": "ค่าใช้จ่ายแบ่งแปลงที่กรมที่ดิน", "amount": "฿5,000 – ฿15,000", "highlight": False},
            {"item": "รวมโดยประมาณสำหรับผู้ซื้อ", "amount": "ประมาณ ฿40,000 – ฿100,000 + ค่าธรรมเนียมการโอน", "highlight": True},
        ],
        "note": "หมายเหตุ: อากรแสตมป์ (0.5%) ภาษีธุรกิจเฉพาะ (3.3%) และภาษีหัก ณ ที่จ่าย เป็นค่าใช้จ่ายของผู้ขาย ไม่ใช่ผู้ซื้อ การแบ่งค่าธรรมเนียมการโอนสามารถเจรจาได้และจะตกลงในสัญญาซื้อขาย ตัวเลขทั้งหมดเป็นเพียงการประมาณการ — ปรึกษาทนายความด้านอสังหาริมทรัพย์ไทยก่อนตัดสินใจ",
    },
}

# ---------------------------------------------------------------------------
# liveAndProfitPage
# ---------------------------------------------------------------------------
LIVE = {
    "en": {
        "heroAlt": "villa development",
        "title": "Live & profit — build your villa, sell the rest",
        "strategyLabel": "Strategy",
        "numbersLabel": "Numbers",
        "conceptTitle": "🏡 The concept",
        "concept": "Buy 4 rai 2 ngan in one piece. Build your own villa on 1 rai. Subdivide the remaining land into 3–4 plots of approximately 1 rai each and sell them individually — keeping your home while recovering most or all of your land investment.",
        "calcTitle": "🧮 Example calculation",
        "calcRows": [
            {"label": "Total land purchase (4 rai 2 ngan)", "value": "฿10,350,000", "highlight": False},
            {"label": "Land cost per 1-rai plot (÷3.5)", "value": "Under ฿2.5M", "highlight": True},
            {"label": "Pool villas on Soi 112 start at", "value": "฿15M+", "highlight": False},
            {"label": "Potential margin per villa sold", "value": "฿12M+", "highlight": True},
        ],
        "calcNote": "Illustrative example — actual returns depend on build costs, subdivision permits and market conditions.",
    },
    "nl": {
        "heroAlt": "villa-ontwikkeling",
        "title": "Wonen & verdienen — bouw uw villa, verkoop de rest",
        "strategyLabel": "Strategie",
        "numbersLabel": "Cijfers",
        "conceptTitle": "🏡 Het concept",
        "concept": "Koop 4 rai 2 ngan in één stuk. Bouw uw eigen villa op 1 rai. Splits de rest in 3–4 percelen van ongeveer 1 rai en verkoop ze apart — u houdt uw woning terwijl u het grootste deel of de volledige grondinvestering terugverdient.",
        "calcTitle": "🧮 Voorbeeldberekening",
        "calcRows": [
            {"label": "Totale grondaankoop (4 rai 2 ngan)", "value": "฿10,350,000", "highlight": False},
            {"label": "Grondkosten per 1-rai-perceel (÷3.5)", "value": "Onder ฿2.5M", "highlight": True},
            {"label": "Poolvilla’s op Soi 112 vanaf", "value": "฿15M+", "highlight": False},
            {"label": "Potentiële marge per verkochte villa", "value": "฿12M+", "highlight": True},
        ],
        "calcNote": "Illustratief voorbeeld — werkelijke rendementen hangen af van bouwkosten, splitsingsvergunningen en marktomstandigheden.",
    },
    "de": {
        "heroAlt": "Villa-Entwicklung",
        "title": "Wohnen & profitieren — Villa bauen, Rest verkaufen",
        "strategyLabel": "Strategie",
        "numbersLabel": "Zahlen",
        "conceptTitle": "🏡 Das Konzept",
        "concept": "Kaufen Sie 4 Rai 2 Ngan in einem Stück. Bauen Sie Ihre eigene Villa auf 1 Rai. Teilen Sie das restliche Land in 3–4 Grundstücke von etwa 1 Rai und verkaufen Sie sie einzeln — Sie behalten Ihr Zuhause und holen den Großteil oder die gesamte Grundstücksinvestition zurück.",
        "calcTitle": "🧮 Beispielrechnung",
        "calcRows": [
            {"label": "Gesamter Grundstückskauf (4 Rai 2 Ngan)", "value": "฿10,350,000", "highlight": False},
            {"label": "Grundstückskosten je 1-Rai-Parzelle (÷3.5)", "value": "Unter ฿2.5M", "highlight": True},
            {"label": "Poolvillen an der Soi 112 ab", "value": "฿15M+", "highlight": False},
            {"label": "Potenzielle Marge je verkaufter Villa", "value": "฿12M+", "highlight": True},
        ],
        "calcNote": "Illustratives Beispiel — tatsächliche Renditen hängen von Baukosten, Teilungsgenehmigungen und Marktbedingungen ab.",
    },
    "sv": {
        "heroAlt": "villautveckling",
        "title": "Bo & tjäna — bygg din villa, sälj resten",
        "strategyLabel": "Strategi",
        "numbersLabel": "Siffror",
        "conceptTitle": "🏡 Konceptet",
        "concept": "Köp 4 rai 2 ngan i ett stycke. Bygg din egen villa på 1 rai. Stycka resterande mark i 3–4 tomter om cirka 1 rai vardera och sälj dem separat — behåll ditt hem samtidigt som du återvinner merparten eller hela markinvesteringen.",
        "calcTitle": "🧮 Exempelberäkning",
        "calcRows": [
            {"label": "Totalt markköp (4 rai 2 ngan)", "value": "฿10,350,000", "highlight": False},
            {"label": "Markkostnad per 1-rai-tomt (÷3.5)", "value": "Under ฿2.5M", "highlight": True},
            {"label": "Poolvillor på Soi 112 från", "value": "฿15M+", "highlight": False},
            {"label": "Potentiell marginal per såld villa", "value": "฿12M+", "highlight": True},
        ],
        "calcNote": "Illustrativt exempel — faktisk avkastning beror på byggkostnader, styckningstillstånd och marknadsförhållanden.",
    },
    "da": {
        "heroAlt": "villaudvikling",
        "title": "Bo & tjen — byg din villa, sælg resten",
        "strategyLabel": "Strategi",
        "numbersLabel": "Tal",
        "conceptTitle": "🏡 Konceptet",
        "concept": "Køb 4 rai 2 ngan i ét stykke. Byg din egen villa på 1 rai. Opdel den resterende jord i 3–4 grunde à ca. 1 rai og sælg dem enkeltvis — behold dit hjem, mens du genvinder det meste eller hele investeringen.",
        "calcTitle": "🧮 Eksempelberegning",
        "calcRows": [
            {"label": "Samlet jordkøb (4 rai 2 ngan)", "value": "฿10,350,000", "highlight": False},
            {"label": "Jordomkostning pr. 1-rai-grund (÷3.5)", "value": "Under ฿2.5M", "highlight": True},
            {"label": "Poolvillaer på Soi 112 fra", "value": "฿15M+", "highlight": False},
            {"label": "Potentiel margin pr. solgt villa", "value": "฿12M+", "highlight": True},
        ],
        "calcNote": "Illustrativt eksempel — faktiske afkast afhænger af byggeomkostninger, opdelingstilladelser og markedsforhold.",
    },
    "th": {
        "heroAlt": "การพัฒนาวิลล่า",
        "title": "อยู่เองและทำกำไร — สร้างวิลล่าของคุณ ขายส่วนที่เหลือ",
        "strategyLabel": "กลยุทธ์",
        "numbersLabel": "ตัวเลข",
        "conceptTitle": "🏡 แนวคิด",
        "concept": "ซื้อที่ดิน 4 ไร่ 2 งานในชิ้นเดียว สร้างวิลล่าของคุณบน 1 ไร่ แบ่งที่ดินที่เหลือเป็น 3–4 แปลง แปลงละประมาณ 1 ไร่ แล้วขายทีละแปลง — เก็บบ้านของคุณไว้ พร้อมคืนทุนที่ดินส่วนใหญ่หรือทั้งหมด",
        "calcTitle": "🧮 ตัวอย่างการคำนวณ",
        "calcRows": [
            {"label": "ราคาซื้อที่ดินทั้งหมด (4 ไร่ 2 งาน)", "value": "฿10,350,000", "highlight": False},
            {"label": "ต้นทุนที่ดินต่อแปลง 1 ไร่ (÷3.5)", "value": "ต่ำกว่า ฿2.5M", "highlight": True},
            {"label": "วิลล่าพร้อมสระว่ายน้ำบนซอย 112 เริ่มต้นที่", "value": "฿15M+", "highlight": False},
            {"label": "กำไรที่เป็นไปได้ต่อวิลล่าที่ขาย", "value": "฿12M+", "highlight": True},
        ],
        "calcNote": "ตัวอย่างเพื่อประกอบความเข้าใจ — ผลตอบแทนจริงขึ้นอยู่กับต้นทุนก่อสร้าง ใบอนุญาตแบ่งแปลง และสภาวะตลาด",
    },
}

# ---------------------------------------------------------------------------
# boutiquePage
# ---------------------------------------------------------------------------
BOUTIQUE = {
    "en": {
        "heroAlt": "boutique villas",
        "title": "Boutique development — 4 to 5 luxury pool villas",
        "conceptLabel": "Concept",
        "marketLabel": "Market",
        "feasibilityLabel": "Feasibility",
        "conceptTitle": "🏗️ The concept",
        "concept": "Develop the entire 4 rai 2 ngan plot as a small-scale luxury villa project — 4 to 5 pool villas designed for sale or holiday rental. Soi 112's prestige corridor supports premium pricing and strong demand from both Thai and international buyers.",
        "marketTitle": "📊 Market data",
        "marketItems": [
            "Rental yields in Hua Hin average 6–10% per year",
            "Pool villas on Soi 112 start at ฿15M+",
            "Strong demand from retirees, second-home buyers and holiday rental market",
            "Chanote title allows subdivision and individual sale per villa plot",
        ],
        "statYieldValue": "6–10%",
        "statVillaValue": "฿15M+",
        "calcTitle": "🧮 Example calculation",
        "calcRows": [
            {"label": "Land purchase", "value": "฿10,350,000", "highlight": False},
            {"label": "4 villas × ฿15M sale price", "value": "฿60M revenue", "highlight": True},
            {"label": "Build cost (est. ฿8–12M per villa)", "value": "Deduct from gross", "highlight": False},
        ],
        "calcNote": "Illustrative example — consult a local developer and lawyer for accurate feasibility studies.",
    },
    "nl": {
        "heroAlt": "boutique villa’s",
        "title": "Boutique-ontwikkeling — 4 tot 5 luxe poolvilla’s",
        "conceptLabel": "Concept",
        "marketLabel": "Markt",
        "feasibilityLabel": "Haalbaarheid",
        "conceptTitle": "🏗️ Het concept",
        "concept": "Ontwikkel het volledige perceel van 4 rai 2 ngan als kleinschalig luxe-villaproject — 4 tot 5 poolvilla’s voor verkoop of vakantieverhuur. De prestigieuze corridor van Soi 112 ondersteunt premiumprijzen en sterke vraag van Thaise én internationale kopers.",
        "marketTitle": "📊 Marktgegevens",
        "marketItems": [
            "Huuurrendementen in Hua Hin liggen gemiddeld op 6–10% per jaar",
            "Poolvilla’s op Soi 112 starten vanaf ฿15M+",
            "Sterke vraag van gepensioneerden, tweede-woningkopers en de vakantieverhuurmarkt",
            "Chanote-titel maakt splitsing en individuele verkoop per villapercel mogelijk",
        ],
        "statYieldValue": "6–10%",
        "statVillaValue": "฿15M+",
        "calcTitle": "🧮 Voorbeeldberekening",
        "calcRows": [
            {"label": "Grondaankoop", "value": "฿10,350,000", "highlight": False},
            {"label": "4 villa’s × verkoopprijs ฿15M", "value": "฿60M omzet", "highlight": True},
            {"label": "Bouwkosten (ca. ฿8–12M per villa)", "value": "Aftrekken van bruto", "highlight": False},
        ],
        "calcNote": "Illustratief voorbeeld — raadpleeg een lokale ontwikkelaar en advocaat voor accurate haalbaarheidsstudies.",
    },
    "de": {
        "heroAlt": "Boutique-Villen",
        "title": "Boutique-Entwicklung — 4 bis 5 Luxus-Poolvillen",
        "conceptLabel": "Konzept",
        "marketLabel": "Markt",
        "feasibilityLabel": "Machbarkeit",
        "conceptTitle": "🏗️ Das Konzept",
        "concept": "Entwickeln Sie das gesamte Grundstück von 4 Rai 2 Ngan als kleines Luxus-Villaprojekt — 4 bis 5 Poolvillen zum Verkauf oder zur Ferienvermietung. Der Prestige-Korridor der Soi 112 trägt Premiumpreise und starke Nachfrage von thailändischen und internationalen Käufern.",
        "marketTitle": "📊 Marktdaten",
        "marketItems": [
            "Mietrenditen in Hua Hin liegen durchschnittlich bei 6–10% pro Jahr",
            "Poolvillen an der Soi 112 starten ab ฿15M+",
            "Starke Nachfrage von Ruheständlern, Zweitwohnungskäufern und dem Ferienvermietungsmarkt",
            "Chanote-Titel ermöglicht Teilung und Einzelverkauf je Villengrundstück",
        ],
        "statYieldValue": "6–10%",
        "statVillaValue": "฿15M+",
        "calcTitle": "🧮 Beispielrechnung",
        "calcRows": [
            {"label": "Grundstückskauf", "value": "฿10,350,000", "highlight": False},
            {"label": "4 Villen × Verkaufspreis ฿15M", "value": "฿60M Umsatz", "highlight": True},
            {"label": "Baukosten (ca. ฿8–12M pro Villa)", "value": "Vom Brutto abziehen", "highlight": False},
        ],
        "calcNote": "Illustratives Beispiel — konsultieren Sie einen lokalen Entwickler und Anwalt für belastbare Machbarkeitsstudien.",
    },
    "sv": {
        "heroAlt": "boutiquevillor",
        "title": "Boutiqueutveckling — 4 till 5 lyxiga poolvillor",
        "conceptLabel": "Koncept",
        "marketLabel": "Marknad",
        "feasibilityLabel": "Genomförbarhet",
        "conceptTitle": "🏗️ Konceptet",
        "concept": "Utveckla hela tomten på 4 rai 2 ngan som ett småskaligt lyxvillaprojekt — 4 till 5 poolvillor för försäljning eller semesteruthyrning. Soi 112:s prestigekorridor stödjer premiumpriser och stark efterfrågan från både thailändska och internationella köpare.",
        "marketTitle": "📊 Marknadsdata",
        "marketItems": [
            "Hyresavkastning i Hua Hin ligger i snitt på 6–10% per år",
            "Poolvillor på Soi 112 från ฿15M+",
            "Stark efterfrågan från pensionärer, andrabostadsköpare och semesteruthyrningsmarknaden",
            "Chanote-titel möjliggör styckning och individuell försäljning per villatomt",
        ],
        "statYieldValue": "6–10%",
        "statVillaValue": "฿15M+",
        "calcTitle": "🧮 Exempelberäkning",
        "calcRows": [
            {"label": "Markköp", "value": "฿10,350,000", "highlight": False},
            {"label": "4 villor × försäljningspris ฿15M", "value": "฿60M intäkt", "highlight": True},
            {"label": "Byggkostnad (ca. ฿8–12M per villa)", "value": "Dra av från brutto", "highlight": False},
        ],
        "calcNote": "Illustrativt exempel — rådfråga en lokal utvecklare och jurist för korrekta genomförbarhetsstudier.",
    },
    "da": {
        "heroAlt": "boutiquevillaer",
        "title": "Boutiqueudvikling — 4 til 5 luksus-poolvillaer",
        "conceptLabel": "Koncept",
        "marketLabel": "Marked",
        "feasibilityLabel": "Gennemførlighed",
        "conceptTitle": "🏗️ Konceptet",
        "concept": "Udvikl hele grunden på 4 rai 2 ngan som et småskala luksusvillaprojekt — 4 til 5 poolvillaer til salg eller ferieudlejning. Soi 112’s prestigekorridor understøtter premiumpriser og stærk efterspørgsel fra både thailandske og internationale købere.",
        "marketTitle": "📊 Markedsdata",
        "marketItems": [
            "Lejeafkast i Hua Hin ligger i gennemsnit på 6–10% om året",
            "Poolvillaer på Soi 112 fra ฿15M+",
            "Stærk efterspørgsel fra pensionister, købere af fritidsboliger og ferieudlejningsmarkedet",
            "Chanote-titel muliggør opdeling og individuelt salg pr. villagrund",
        ],
        "statYieldValue": "6–10%",
        "statVillaValue": "฿15M+",
        "calcTitle": "🧮 Eksempelberegning",
        "calcRows": [
            {"label": "Jordkøb", "value": "฿10,350,000", "highlight": False},
            {"label": "4 villaer × salgspris ฿15M", "value": "฿60M omsætning", "highlight": True},
            {"label": "Byggeomkostning (ca. ฿8–12M pr. villa)", "value": "Træk fra brutto", "highlight": False},
        ],
        "calcNote": "Illustrativt eksempel — konsulter en lokal udvikler og advokat for præcise gennemførlighedsstudier.",
    },
    "th": {
        "heroAlt": "วิลล่าบูติก",
        "title": "โครงการพัฒนาขนาดเล็ก — วิลล่าหรูพร้อมสระว่ายน้ำ 4–5 หลัง",
        "conceptLabel": "แนวคิด",
        "marketLabel": "ตลาด",
        "feasibilityLabel": "ความเป็นไปได้",
        "conceptTitle": "🏗️ แนวคิด",
        "concept": "พัฒนาแปลง 4 ไร่ 2 งานทั้งหมดเป็นโครงการวิลล่าหรูขนาดเล็ก — วิลล่าพร้อมสระว่ายน้ำ 4–5 หลัง ออกแบบเพื่อขายหรือปล่อยเช่าเพื่อพักผ่อน ทำเลซอย 112 รองรับราคาระดับพรีเมียมและความต้องการสูงจากทั้งผู้ซื้อไทยและต่างชาติ",
        "marketTitle": "📊 ข้อมูลตลาด",
        "marketItems": [
            "ผลตอบแทนจากการเช่าในหัวหินเฉลี่ย 6–10% ต่อปี",
            "วิลล่าพร้อมสระว่ายน้ำบนซอย 112 เริ่มต้นที่ ฿15M+",
            "ความต้องการสูงจากผู้เกษียณ ผู้ซื้อบ้านที่สอง และตลาดการเช่าเพื่อพักผ่อน",
            "โฉนดที่ดิน (Chanote) อนุญาตให้แบ่งแปลงและขายแยกต่อแปลงวิลล่า",
        ],
        "statYieldValue": "6–10%",
        "statVillaValue": "฿15M+",
        "calcTitle": "🧮 ตัวอย่างการคำนวณ",
        "calcRows": [
            {"label": "ราคาซื้อที่ดิน", "value": "฿10,350,000", "highlight": False},
            {"label": "4 วิลล่า × ราคาขาย ฿15M", "value": "รายได้ ฿60M", "highlight": True},
            {"label": "ต้นทุนก่อสร้าง (ประมาณ ฿8–12M ต่อหลัง)", "value": "หักจากรายได้รวม", "highlight": False},
        ],
        "calcNote": "ตัวอย่างเพื่อประกอบความเข้าใจ — ปรึกษาผู้พัฒนาและทนายความในพื้นที่เพื่อการศึกษาความเป็นไปได้ที่แม่นยำ",
    },
}

# ---------------------------------------------------------------------------
# privateEstatePage
# ---------------------------------------------------------------------------
PRIVATE = {
    "en": {
        "heroAlt": "private estate",
        "title": "Private estate — your own tropical compound",
        "visionLabel": "Vision",
        "conceptTitle": "🌴 The concept",
        "concept": "Keep the full 4 rai 2 ngan plot for yourself. Build a main villa, guest house, large swimming pool and tropical gardens — all on one private compound with no neighbours overlooking your land. This is the option for buyers who want space, privacy and a legacy property rather than a development project.",
        "whyTitle": "✅ Why this plot suits a private estate",
        "whyItems": [
            "Unobstructed mountain views — protected national park backdrop",
            "4 rai 2 ngan of privacy — rare size for a single-owner compound on Soi 112",
            "Soi 112 luxury corridor — Botanica, La Felice, Mali Prestige as neighbours",
            "Flat terrain — flexible layout for main house, pool and gardens",
            "Water connected — infrastructure ready for construction",
        ],
        "statSizeValue": "4 rai 2 ngan",
        "statProtectedValue": "Protected",
        "statFlatValue": "Flat",
        "statConnectedValue": "Connected",
        "statProtectedLabel": "Unobstructed mountain views — protected national park backdrop",
        "statFlatLabel": "Flat terrain — flexible layout for main house, pool and gardens",
        "statConnectedLabel": "Water connected — infrastructure ready for construction",
    },
    "nl": {
        "heroAlt": "privé-landgoed",
        "title": "Privé-landgoed — uw eigen tropische compound",
        "visionLabel": "Visie",
        "conceptTitle": "🌴 Het concept",
        "concept": "Houd het volledige perceel van 4 rai 2 ngan voor uzelf. Bouw een hoofdvilla, gastenverblijf, groot zwembad en tropische tuinen — alles op één privécompound zonder inkijk van buren. Dit is de optie voor kopers die ruimte, privacy en een erfgoedobject willen, geen ontwikkelingsproject.",
        "whyTitle": "✅ Waarom dit perceel past bij een privé-landgoed",
        "whyItems": [
            "Onbelemmerd bergzicht — beschermd nationaal park als achtergrond",
            "4 rai 2 ngan privacy — zeldzame maat voor een compound van één eigenaar op Soi 112",
            "Luxe corridor Soi 112 — Botanica, La Felice, Mali Prestige als buren",
            "Vlak terrein — flexibele indeling voor hoofdhuis, zwembad en tuinen",
            "Water aangesloten — infrastructuur klaar voor bouw",
        ],
        "statSizeValue": "4 rai 2 ngan",
        "statProtectedValue": "Beschermd",
        "statFlatValue": "Vlak",
        "statConnectedValue": "Aangesloten",
        "statProtectedLabel": "Onbelemmerd bergzicht — beschermd nationaal park als achtergrond",
        "statFlatLabel": "Vlak terrein — flexibele indeling voor hoofdhuis, zwembad en tuinen",
        "statConnectedLabel": "Water aangesloten — infrastructuur klaar voor bouw",
    },
    "de": {
        "heroAlt": "privates Anwesen",
        "title": "Privates Anwesen — Ihre eigene tropische Anlage",
        "visionLabel": "Vision",
        "conceptTitle": "🌴 Das Konzept",
        "concept": "Behalten Sie das gesamte Grundstück von 4 Rai 2 Ngan für sich. Bauen Sie eine Hauptvilla, Gästehaus, großen Pool und tropische Gärten — alles auf einer privaten Anlage ohne Einblick von Nachbarn. Die Option für Käufer, die Raum, Privatsphäre und ein Legacy-Objekt wollen statt eines Entwicklungsprojekts.",
        "whyTitle": "✅ Warum dieses Grundstück für ein privates Anwesen passt",
        "whyItems": [
            "Unverbauter Bergblick — geschützter Nationalpark als Kulisse",
            "4 Rai 2 Ngan Privatsphäre — seltene Größe für eine Einzelbesitzer-Anlage an der Soi 112",
            "Luxuskorridor Soi 112 — Botanica, La Felice, Mali Prestige als Nachbarn",
            "Ebenes Gelände — flexible Aufteilung für Haupthaus, Pool und Gärten",
            "Wasser angeschlossen — Infrastruktur bereit für den Bau",
        ],
        "statSizeValue": "4 Rai 2 Ngan",
        "statProtectedValue": "Geschützt",
        "statFlatValue": "Eben",
        "statConnectedValue": "Angeschlossen",
        "statProtectedLabel": "Unverbauter Bergblick — geschützter Nationalpark als Kulisse",
        "statFlatLabel": "Ebenes Gelände — flexible Aufteilung für Haupthaus, Pool und Gärten",
        "statConnectedLabel": "Wasser angeschlossen — Infrastruktur bereit für den Bau",
    },
    "sv": {
        "heroAlt": "privat egendom",
        "title": "Privat egendom — din egen tropiska anläggning",
        "visionLabel": "Vision",
        "conceptTitle": "🌴 Konceptet",
        "concept": "Behåll hela tomten på 4 rai 2 ngan för dig själv. Bygg en huvudvilla, gästhus, stor pool och tropiska trädgårdar — allt på en privat anläggning utan grannar som ser in. Alternativet för köpare som vill ha yta, avskildhet och en generationsfastighet snarare än ett utvecklingsprojekt.",
        "whyTitle": "✅ Varför denna tomt passar en privat egendom",
        "whyItems": [
            "Obegränsad bergutsikt — skyddad nationalpark som bakgrund",
            "4 rai 2 ngan avskildhet — sällsynt storlek för en anläggning med en ägare på Soi 112",
            "Lyxkorridor Soi 112 — Botanica, La Felice, Mali Prestige som grannar",
            "Platt terräng — flexibel planlösning för huvudhus, pool och trädgårdar",
            "Vatten anslutet — infrastruktur klar för byggande",
        ],
        "statSizeValue": "4 rai 2 ngan",
        "statProtectedValue": "Skyddad",
        "statFlatValue": "Platt",
        "statConnectedValue": "Ansluten",
        "statProtectedLabel": "Obegränsad bergutsikt — skyddad nationalpark som bakgrund",
        "statFlatLabel": "Platt terräng — flexibel planlösning för huvudhus, pool och trädgårdar",
        "statConnectedLabel": "Vatten anslutet — infrastruktur klar för byggande",
    },
    "da": {
        "heroAlt": "privat ejendom",
        "title": "Privat ejendom — din egen tropiske compound",
        "visionLabel": "Vision",
        "conceptTitle": "🌴 Konceptet",
        "concept": "Behold hele grunden på 4 rai 2 ngan til dig selv. Byg en hovedvilla, gæstehus, stor swimmingpool og tropiske haver — alt på én privat compound uden naboer, der kigger ind. Valget for købere, der ønsker plads, privatliv og en generationsbolig frem for et udviklingsprojekt.",
        "whyTitle": "✅ Hvorfor denne grund egner sig til en privat ejendom",
        "whyItems": [
            "Uhindret bjergudsigt — beskyttet nationalpark som baggrund",
            "4 rai 2 ngan privatliv — sjælden størrelse til en enkelt-ejer-compound på Soi 112",
            "Luksuskorridor Soi 112 — Botanica, La Felice, Mali Prestige som naboer",
            "Fladt terræn — fleksibel plan for hovedhus, pool og haver",
            "Vand tilsluttet — infrastruktur klar til byggeri",
        ],
        "statSizeValue": "4 rai 2 ngan",
        "statProtectedValue": "Beskyttet",
        "statFlatValue": "Fladt",
        "statConnectedValue": "Tilsluttet",
        "statProtectedLabel": "Uhindret bjergudsigt — beskyttet nationalpark som baggrund",
        "statFlatLabel": "Fladt terræn — fleksibel plan for hovedhus, pool og haver",
        "statConnectedLabel": "Vand tilsluttet — infrastruktur klar til byggeri",
    },
    "th": {
        "heroAlt": "ที่ดินส่วนตัว",
        "title": "ที่ดินส่วนตัว — บ้านพักเขตร้อนของคุณเอง",
        "visionLabel": "วิสัยทัศน์",
        "conceptTitle": "🌴 แนวคิด",
        "concept": "เก็บแปลง 4 ไร่ 2 งานทั้งหมดไว้เป็นของคุณ สร้างวิลล่าหลัก บ้านพักแขก สระว่ายน้ำขนาดใหญ่ และสวนเขตร้อน — ทั้งหมดในบริเวณส่วนตัวโดยไม่มีเพื่อนบ้านมองเห็นที่ดินของคุณ ตัวเลือกนี้เหมาะสำหรับผู้ซื้อที่ต้องการพื้นที่ ความเป็นส่วนตัว และทรัพย์สินที่สืบทอดได้ มากกว่าโครงการพัฒนา",
        "whyTitle": "✅ ทำไมแปลงนี้เหมาะกับที่ดินส่วนตัว",
        "whyItems": [
            "วิวภูเขาโล่งไม่มีสิ่งกีดขวาง — พื้นหลังอุทยานแห่งชาติที่ได้รับการคุ้มครอง",
            "ความเป็นส่วนตัว 4 ไร่ 2 งาน — ขนาดที่หายากสำหรับบ้านเดี่ยวบนซอย 112",
            "ทำเลหรูซอย 112 — Botanica, La Felice, Mali Prestige เป็นเพื่อนบ้าน",
            "พื้นที่ราบ — จัดวางบ้านหลัก สระว่ายน้ำ และสวนได้อย่างยืดหยุ่น",
            "มีน้ำประปา — โครงสร้างพื้นฐานพร้อมสำหรับการก่อสร้าง",
        ],
        "statSizeValue": "4 ไร่ 2 งาน",
        "statProtectedValue": "คุ้มครอง",
        "statFlatValue": "ราบ",
        "statConnectedValue": "เชื่อมต่อแล้ว",
        "statProtectedLabel": "วิวภูเขาโล่งไม่มีสิ่งกีดขวาง — พื้นหลังอุทยานแห่งชาติที่ได้รับการคุ้มครอง",
        "statFlatLabel": "พื้นที่ราบ — จัดวางบ้านหลัก สระว่ายน้ำ และสวนได้อย่างยืดหยุ่น",
        "statConnectedLabel": "มีน้ำประปา — โครงสร้างพื้นฐานพร้อมสำหรับการก่อสร้าง",
    },
}

# ---------------------------------------------------------------------------
# privacyPage
# ---------------------------------------------------------------------------
PRIVACY = {
    "en": {
        "title": "Privacy Policy",
        "intro": "This website is operated by Mike Kleinjans in connection with the sale of land at Thap Tai, Soi 112, Hua Hin, Thailand.",
        "sections": [
            {"title": "Data we collect", "body": "When you submit the contact form, we collect your name, email address, phone number and message. This information is used solely to respond to your enquiry about the property."},
            {"title": "How we use your data", "body": "Your data is used only to respond to your enquiry. We do not sell, share or use your data for marketing purposes. Your details are stored securely and are not shared with third parties."},
            {"title": "Data retention", "body": "Enquiry data is retained for a maximum of 12 months after the property is sold, after which it is permanently deleted."},
            {"title": "Your rights (GDPR)", "body": "Under GDPR you have the right to access, correct or delete your personal data. To exercise these rights, contact us by phone on 065-901-2984 or via LINE."},
            {"title": "Cookies", "body": "This website uses Vercel Analytics, a privacy-friendly analytics tool that does not use cookies. No personal data is collected through cookies."},
            {"title": "Contact", "body": "Contact us by phone on 065-901-2984 or via LINE (Good land YAI)."},
        ],
    },
    "nl": {
        "title": "Privacybeleid",
        "intro": "Deze website wordt beheerd door Mike Kleinjans in verband met de verkoop van grond in Thap Tai, Soi 112, Hua Hin, Thailand.",
        "sections": [
            {"title": "Gegevens die we verzamelen", "body": "Wanneer u het contactformulier indient, verzamelen we uw naam, e-mailadres, telefoonnummer en bericht. Deze informatie wordt uitsluitend gebruikt om uw vraag over het perceel te beantwoorden."},
            {"title": "Hoe we uw gegevens gebruiken", "body": "Uw gegevens worden alleen gebruikt om uw vraag te beantwoorden. We verkopen, delen of gebruiken uw gegevens niet voor marketing. Uw gegevens worden veilig opgeslagen en niet gedeeld met derden."},
            {"title": "Bewaartermijn", "body": "Aanvraaggegevens worden maximaal 12 maanden bewaard nadat het perceel is verkocht, waarna ze permanent worden verwijderd."},
            {"title": "Uw rechten (AVG/GDPR)", "body": "Op grond van de AVG/GDPR heeft u het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Neem contact op via telefoon 065-901-2984 of via LINE."},
            {"title": "Cookies", "body": "Deze website gebruikt Vercel Analytics — een privacyvriendelijke analysetool zonder cookies. Er worden geen persoonsgegevens via cookies verzameld."},
            {"title": "Contact", "body": "Neem contact op via telefoon 065-901-2984 of via LINE (Good land YAI)."},
        ],
    },
    "de": {
        "title": "Datenschutzerklärung",
        "intro": "Diese Website wird von Mike Kleinjans im Zusammenhang mit dem Verkauf von Land in Thap Tai, Soi 112, Hua Hin, Thailand betrieben.",
        "sections": [
            {"title": "Daten, die wir erheben", "body": "Wenn Sie das Kontaktformular absenden, erheben wir Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer und Nachricht. Diese Informationen werden ausschließlich zur Beantwortung Ihrer Anfrage zum Grundstück verwendet."},
            {"title": "Wie wir Ihre Daten verwenden", "body": "Ihre Daten werden nur zur Beantwortung Ihrer Anfrage verwendet. Wir verkaufen, teilen oder nutzen Ihre Daten nicht für Marketingzwecke. Ihre Angaben werden sicher gespeichert und nicht an Dritte weitergegeben."},
            {"title": "Datenspeicherung", "body": "Anfragedaten werden maximal 12 Monate nach dem Verkauf des Grundstücks aufbewahrt und danach dauerhaft gelöscht."},
            {"title": "Ihre Rechte (DSGVO/GDPR)", "body": "Unter der DSGVO/GDPR haben Sie das Recht, Ihre personenbezogenen Daten einzusehen, zu berichtigen oder löschen zu lassen. Kontaktieren Sie uns telefonisch unter 065-901-2984 oder über LINE."},
            {"title": "Cookies", "body": "Diese Website nutzt Vercel Analytics — ein datenschutzfreundliches Analysetool ohne Cookies. Es werden keine personenbezogenen Daten über Cookies erfasst."},
            {"title": "Kontakt", "body": "Kontaktieren Sie uns telefonisch unter 065-901-2984 oder über LINE (Good land YAI)."},
        ],
    },
    "sv": {
        "title": "Integritetspolicy",
        "intro": "Denna webbplats drivs av Mike Kleinjans i samband med försäljning av mark i Thap Tai, Soi 112, Hua Hin, Thailand.",
        "sections": [
            {"title": "Uppgifter vi samlar in", "body": "När du skickar kontaktformuläret samlar vi in ditt namn, e-postadress, telefonnummer och meddelande. Informationen används endast för att besvara din förfrågan om fastigheten."},
            {"title": "Hur vi använder dina uppgifter", "body": "Dina uppgifter används endast för att besvara din förfrågan. Vi säljer, delar eller använder inte dina uppgifter för marknadsföring. Dina uppgifter lagras säkert och delas inte med tredje part."},
            {"title": "Lagringstid", "body": "Förfrågningsuppgifter sparas i högst 12 månader efter att fastigheten sålts, därefter raderas de permanent."},
            {"title": "Dina rättigheter (GDPR)", "body": "Enligt GDPR har du rätt att få tillgång till, korrigera eller radera dina personuppgifter. Kontakta oss på telefon 065-901-2984 eller via LINE."},
            {"title": "Cookies", "body": "Denna webbplats använder Vercel Analytics — ett integritetsvänligt analysverktyg utan cookies. Inga personuppgifter samlas in via cookies."},
            {"title": "Kontakt", "body": "Kontakta oss på telefon 065-901-2984 eller via LINE (Good land YAI)."},
        ],
    },
    "da": {
        "title": "Privatlivspolitik",
        "intro": "Denne hjemmeside drives af Mike Kleinjans i forbindelse med salg af jord i Thap Tai, Soi 112, Hua Hin, Thailand.",
        "sections": [
            {"title": "Data, vi indsamler", "body": "Når du indsender kontaktformularen, indsamler vi dit navn, e-mailadresse, telefonnummer og besked. Oplysningerne bruges kun til at besvare din forespørgsel om ejendommen."},
            {"title": "Hvordan vi bruger dine data", "body": "Dine data bruges kun til at besvare din forespørgsel. Vi sælger, deler eller bruger ikke dine data til markedsføring. Dine oplysninger opbevares sikkert og deles ikke med tredjeparter."},
            {"title": "Opbevaring", "body": "Forespørgselsdata opbevares i højst 12 måneder efter, at ejendommen er solgt, hvorefter de slettes permanent."},
            {"title": "Dine rettigheder (GDPR)", "body": "Efter GDPR har du ret til at få adgang til, rette eller slette dine personoplysninger. Kontakt os på telefon 065-901-2984 eller via LINE."},
            {"title": "Cookies", "body": "Denne hjemmeside bruger Vercel Analytics — et privatlivsvenligt analyseværktøj uden cookies. Der indsamles ingen personoplysninger via cookies."},
            {"title": "Kontakt", "body": "Kontakt os på telefon 065-901-2984 eller via LINE (Good land YAI)."},
        ],
    },
    "th": {
        "title": "นโยบายความเป็นส่วนตัว",
        "intro": "เว็บไซต์นี้ดำเนินการโดย Mike Kleinjans เกี่ยวกับการขายที่ดินที่ทับใต ซอย 112 หัวหิน ประเทศไทย",
        "sections": [
            {"title": "ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม", "body": "เมื่อคุณส่งแบบฟอร์มติดต่อ เราจะเก็บรวบรวมชื่อ ที่อยู่อีเมล หมายเลขโทรศัพท์ และข้อความของคุณ ข้อมูลนี้ใช้เพื่อตอบคำถามเกี่ยวกับทรัพย์สินเท่านั้น"},
            {"title": "การใช้ข้อมูลส่วนบุคคลของคุณ", "body": "ข้อมูลของคุณใช้เพื่อตอบคำถามเท่านั้น เราไม่ขาย แชร์ หรือใช้ข้อมูลของคุณเพื่อการตลาด รายละเอียดของคุณจัดเก็บอย่างปลอดภัยและไม่แชร์กับบุคคลที่สาม"},
            {"title": "การเก็บรักษาข้อมูล", "body": "ข้อมูลการสอบถามจะเก็บรักษาไว้สูงสุด 12 เดือนหลังจากขายทรัพย์สินแล้ว จากนั้นจะถูกลบอย่างถาวร"},
            {"title": "สิทธิของคุณ (กฎระเบียบคุ้มครองข้อมูลทั่วไป / GDPR)", "body": "ภายใต้กฎระเบียบคุ้มครองข้อมูลทั่วไป (GDPR) คุณมีสิทธิ์เข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณ หากต้องการใช้สิทธิเหล่านี้ ติดต่อเราทางโทรศัพท์ 065-901-2984 หรือผ่าน LINE"},
            {"title": "คุกกี้", "body": "เว็บไซต์นี้ใช้ Vercel Analytics ซึ่งเป็นเครื่องมือวิเคราะห์ที่ปกป้องความเป็นส่วนตัวและไม่ใช้คุกกี้ ไม่มีการเก็บข้อมูลส่วนบุคคลผ่านคุกกี้"},
            {"title": "ติดต่อ", "body": "ติดต่อเราทางโทรศัพท์ 065-901-2984 หรือผ่าน LINE (Good land YAI)"},
        ],
    },
}


def build_disclaimer_pages() -> dict[str, dict]:
    """Build disclaimerPage for all locales from extracted EN/TH + full NL/DE/SV/DA."""
    en_raw = json.loads((ROOT / "scripts/i18n_data/disclaimer_en.json").read_text())
    th_raw = json.loads((ROOT / "scripts/i18n_data/disclaimer_th.json").read_text())
    en = en_raw["enContent"]
    th = th_raw["thContent"]
    nl_ui = en_raw["nlUi"]
    de_ui = en_raw["deUi"]

    # Full body translations live in separate JSON (generated below if missing).
    translations_path = ROOT / "scripts/i18n_data/disclaimer_translations.json"
    if not translations_path.exists():
        raise SystemExit(f"Missing {translations_path} — run disclaimer translation builder first")
    tr = json.loads(translations_path.read_text())

    def page(meta: dict, sections: list) -> dict:
        out = {
            "backLink": meta["backLink"],
            "title": meta["title"],
            "subtitle": meta["subtitle"],
            "lastUpdated": meta["lastUpdated"],
            "contactLinkText": meta["contactLinkText"],
            "backFooter": meta["backFooter"],
            "sections": sections,
        }
        if meta.get("headerNotice"):
            out["headerNotice"] = meta["headerNotice"]
        return out

    return {
        "en": page(
            {
                "backLink": en["backLink"],
                "title": en["title"],
                "subtitle": en["subtitle"],
                "lastUpdated": en["lastUpdated"],
                "contactLinkText": en["contactLinkText"],
                "backFooter": en["backFooter"],
            },
            en["sections"],
        ),
        "th": page(
            {
                "backLink": th["backLink"],
                "title": th["title"],
                "subtitle": th["subtitle"],
                "lastUpdated": th["lastUpdated"],
                "contactLinkText": th["contactLinkText"],
                "backFooter": th["backFooter"],
                "headerNotice": th.get("headerNotice"),
            },
            th["sections"],
        ),
        "nl": page({**nl_ui, "backFooter": nl_ui["backFooter"], "contactLinkText": nl_ui["contactLinkText"]}, tr["nl"]["sections"]),
        "de": page({**de_ui, "backFooter": de_ui["backFooter"], "contactLinkText": de_ui["contactLinkText"]}, tr["de"]["sections"]),
        "sv": page(tr["sv"]["meta"], tr["sv"]["sections"]),
        "da": page(tr["da"]["meta"], tr["da"]["sections"]),
    }


NAMESPACES = {
    "comparablePlotsPage": COMPARABLE,
    "partialSalePage": PARTIAL,
    "liveAndProfitPage": LIVE,
    "boutiquePage": BOUTIQUE,
    "privateEstatePage": PRIVATE,
    "privacyPage": PRIVACY,
}


def main() -> None:
    disclaimer = build_disclaimer_pages()
    NAMESPACES["disclaimerPage"] = disclaimer

    counts = {}
    for loc in LOCALES:
        path = MSG / f"{loc}.json"
        data = json.loads(path.read_text())
        for ns, by_loc in NAMESPACES.items():
            if loc not in by_loc:
                raise SystemExit(f"Missing {ns} for {loc}")
            data[ns] = by_loc[loc]
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n")
        counts[loc] = {ns: deep_count(by_loc[loc]) for ns in NAMESPACES}

    # Key parity check (leaf counts)
    en_counts = counts["en"]
    print("Leaf-string counts per namespace (en):")
    for ns, n in en_counts.items():
        print(f"  {ns}: {n}")
    for loc in LOCALES:
        if loc == "en":
            continue
        for ns in NAMESPACES:
            if counts[loc][ns] != en_counts[ns]:
                print(f"WARN parity {loc}.{ns}: {counts[loc][ns]} vs en {en_counts[ns]}")
            else:
                pass
    print("Merged namespaces into", ", ".join(LOCALES))
    print("Total leaf strings per locale:", {loc: sum(counts[loc].values()) for loc in LOCALES})


if __name__ == "__main__":
    main()
