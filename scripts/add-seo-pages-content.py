#!/usr/bin/env python3
"""Inject SEO page translations into all message files."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MESSAGES = ROOT / "messages"
LOCALES = ["en", "nl", "de", "sv", "da", "th"]

# English source content — copied to all locales for launch (translate later)
CONTENT = {
    "soi102Page": {
        "metaTitle": "Land for Sale Soi 102 Hua Hin | Soi 112 vs Soi 102 Compared",
        "metaDescription": "Looking for land on Soi 102 Hua Hin? Discover why Soi 112 offers better value, stronger title deeds and more development potential just minutes away.",
        "heroLabel": "Thap Tai · Hua Hin",
        "heroTitle": "Land for Sale near Soi 102, Hua Hin",
        "intro": "Soi 102 is one of Hua Hin's most searched residential corridors — a quiet road running through Thap Tai that connects the Petchkasem highway to the hillside areas west of town. Buyers searching for land on Soi 102 are typically looking for the same qualities that define the broader Thap Tai zone: flat terrain, mountain views, Chanote title deeds, and easy access to Hua Hin's amenities. The adjacent Soi 112 corridor — home to Botanica, La Felice and Mali Prestige villa developments — offers comparable land at similar pricing with arguably stronger development credentials. Both corridors sit in the same sub-district and share the same infrastructure and lifestyle advantages.",
        "compareTitle": "Soi 102 vs Soi 112 — what's the difference?",
        "compare1": "Distance from beach: both 12–15 min",
        "compare2": "Distance from Bluport Mall: both 10 min",
        "compare3": "Title deed quality: Chanote available in both",
        "compare4": "Development benchmark: Soi 112 has Botanica, La Felice, Mali Prestige — proven luxury corridor",
        "compare5": "Price per rai: similar range ฿2–3.5M per rai",
        "compare6": "Terrain: both predominantly flat, build-ready",
        "compare7": "Access: both concrete road from Route 2004",
        "plotTitle": "Our plot — Soi 112, Thap Tai",
        "plotBody": "Buyers searching for land on Soi 102 often find our Soi 112 plot is the natural choice in the same Thap Tai sub-district. We offer 4 Rai 2 Ngan of flat Chanote land at ฿2,300,000 per rai — below market for this corridor. Partial sale from 1 rai is available and the title is ready to transfer. Same mountain views, same infrastructure, stronger development benchmark with Botanica and La Felice as neighbours.",
        "ctaTitle": "Contact our agent",
        "faqTitle": "Frequently asked questions",
        "faq1q": "Where is Soi 102 in Hua Hin?",
        "faq1a": "Soi 102 is located in the Thap Tai sub-district of Hua Hin, running west from the Petchkasem Road (Route 4) toward the hillside areas. It is approximately 10–15 minutes from Hua Hin beach and Bluport Mall.",
        "faq2q": "Is there land for sale on Soi 102 Hua Hin?",
        "faq2a": "Land does come up for sale on and near Soi 102. The adjacent Soi 112 corridor — in the same Thap Tai sub-district — has our featured plot of 4 Rai 2 Ngan with Chanote title deed at ฿2,300,000 per rai. Partial sale from 1 rai.",
        "faq3q": "What title deed should I look for on Soi 102?",
        "faq3a": "Always insist on Chanote (NS.4J) — the strongest title deed in Thailand. GPS-surveyed and registered at the Land Office. Avoid Nor Sor 3 and Sor Kor 1 for investment purchases.",
        "link1": "Our plot on Soi 112",
        "link2": "Why Soi 112",
        "link3": "Chanote title deed explained",
        "link4": "Back to homepage",
    },
    "huaHinVillasPage": {
        "metaTitle": "Villas for Sale Hua Hin | Build Your Own on Soi 112",
        "metaDescription": "Searching for villas for sale in Hua Hin? Discover why buying land and building your own villa on Soi 112 delivers better value than buying finished.",
        "heroLabel": "Soi 112 · Hua Hin",
        "heroTitle": "Villas for Sale in Hua Hin — or Build Your Own?",
        "intro": "The Hua Hin villa market offers finished pool villas from ฿2.7M for a basic 2-bedroom to ฿65M+ for a large luxury estate. The average 3-bedroom villa sells for approximately ฿10.4M. But savvy buyers are increasingly choosing a different route — buying raw land with Chanote title and building their own villa to specification. On Soi 112, land costs ฿2.3M per rai. A well-built 3-bedroom pool villa costs ฿4–6M to construct. Total cost: ฿6.3–8.3M for a brand-new villa built exactly to your taste — compared to ฿10M+ for an existing villa of similar size in a comparable location.",
        "numbersTitle": "Buy finished vs build your own — the numbers",
        "finishedTitle": "Finished villa Soi 112 area",
        "finished1": "3 bed pool villa: ฿10–15M",
        "finished2": "Fixed layout and specification",
        "finished3": "Immediate occupation",
        "finished4": "Hidden maintenance issues possible",
        "finished5": "Leasehold often used by developer",
        "buildTitle": "Build your own on our Soi 112 land",
        "build1": "Land 1 rai: ฿2,300,000",
        "build2": "Construction 3 bed pool villa: ฿4–6M",
        "build3": "Total: ฿6.3–8.3M",
        "build4": "Built to your exact specification",
        "build5": "Chanote freehold title",
        "build6": "New build — no hidden issues",
        "build7": "Choose your own architect and contractor",
        "sellTitle": "What pool villas on Soi 112 sell for",
        "sellBody": "Completed pool villas in the Botanica development on Soi 112 start at ฿15M+. La Felice and Mali Prestige villas in the same corridor trade at similar levels. Buying our land at ฿2.3M/rai and building gives you a new villa in the same prestigious corridor for significantly less — with the added benefit of Chanote freehold title and a build designed exactly for your lifestyle.",
        "faqTitle": "Frequently asked questions",
        "faq1q": "How much does it cost to build a villa in Hua Hin?",
        "faq1a": "Construction costs for a standard pool villa in Hua Hin range from ฿25,000–40,000 per sqm depending on specification and finishes. A 150 sqm 3-bedroom villa with pool costs approximately ฿4–6M to build. Add land cost of ฿2.3M/rai on Soi 112 for total of ฿6.3–8.3M.",
        "faq2q": "Is it better to buy or build a villa in Hua Hin?",
        "faq2a": "Building on raw land with Chanote title typically delivers better value and a villa built to your exact specification. Buying finished is faster but often more expensive and may involve leasehold rather than freehold title. Always compare total cost and title deed type carefully.",
        "faq3q": "Can I get a Chanote title deed when building a villa?",
        "faq3a": "Yes — if you purchase land with Chanote title deed, the title remains Chanote after construction. Our Soi 112 plot carries a full Chanote NS.4J — the strongest form of land ownership in Thailand.",
        "link1": "View the land",
        "link2": "Build on Soi 112",
        "link3": "Boutique development option",
        "link4": "Private estate option",
        "link5": "Foreign buyers guide",
    },
    "farmForSalePage": {
        "metaTitle": "Farm & Resort Land for Sale Hua Hin | Large Plots Thailand",
        "metaDescription": "Looking for farm or resort land for sale near Hua Hin? Our 4 Rai 2 Ngan Chanote plot on Soi 112 is ideal for organic farm, retreat or boutique resort.",
        "heroLabel": "Soi 112 · Thap Tai",
        "heroTitle": "Farm & Resort Land for Sale near Hua Hin",
        "intro": "Searches for farm land and resort plots for sale near Hua Hin are growing — driven by buyers seeking larger plots for organic farming, agritourism, boutique resorts and wellness retreats. The Prachuap Khiri Khan province offers some of Thailand's most affordable large-plot land with Chanote title deeds, strong year-round tourism and easy access from Bangkok (200 km, 2.5 hours). Our Soi 112 plot of 4 Rai 2 Ngan (7,200 sqm) with completely flat terrain, water connection, and panoramic mountain views is well suited for a range of farm and resort concepts — from an organic cafe farm to a 5–8 room boutique retreat.",
        "buildTitle": "What could you build on 4 Rai 2 Ngan?",
        "use1Title": "Organic farm and cafe",
        "use1Body": "Flat terrain ideal for growing, mountain backdrop for atmosphere. Parrotdise Organic Farm nearby proves the concept, with growing Thai domestic tourist demand for farm experiences.",
        "use2Title": "Boutique wellness retreat",
        "use2Body": "4 rai fits 5–8 rooms comfortably with pool and garden. Hua Hin has a strong wellness tourism market, with Buddha-Metta Meditation Center nearby.",
        "use3Title": "Glamping and eco-resort",
        "use3Body": "Flat land, mountain views, national park doorstep. Growing trend for high-end outdoor accommodation in the Hua Hin area.",
        "use4Title": "Private estate with fruit orchard",
        "use4Body": "Keep 1 rai for villa, plant the rest with mango, longan, coconut common in the area. A relaxed lifestyle investment.",
        "whyTitle": "Why this plot works for farm or resort use",
        "whyBody": "Completely flat — no earthmoving costs. Water connection already in place. Direct concrete road access. Chanote title deed — bankable and transferable. Mountain views on all sides — no ugly neighbours. National park on the doorstep — protected views that cannot be built out. 4 rai in one piece — rare at this size. ฿2.3M per rai — below market for Soi 112.",
        "faqTitle": "Frequently asked questions",
        "faq1q": "Can a foreigner run a farm or resort in Thailand?",
        "faq1a": "Yes — foreigners can operate hospitality and agricultural businesses in Thailand through a registered Thai company or with a Foreign Business Licence. The land is typically held by the Thai company or on long-term leasehold. Always consult an independent Thai lawyer and accountant.",
        "faq2q": "How much land do I need for a boutique resort?",
        "faq2a": "A 5–8 room boutique resort with pool, garden and parking typically requires 2–4 rai minimum. Our plot of 4 Rai 2 Ngan gives comfortable space for a small resort with room to expand or keep part as private residence.",
        "faq3q": "Is there demand for boutique resorts near Hua Hin?",
        "faq3a": "Yes — Hua Hin has year-round tourism from Bangkok weekenders and international visitors. Well-managed boutique resorts achieve 8–12% annual yield. The Thap Tai / Soi 112 area is 15 minutes from the beach and near golf courses, floating markets and national park.",
        "link1": "Boutique development plan",
        "link2": "Live and profit option",
        "link3": "Private estate option",
        "link4": "Why Hua Hin",
        "link5": "Contact agent",
    },
    "retiringHuaHinPage": {
        "metaTitle": "Retiring in Hua Hin Thailand | The Complete Guide 2026",
        "metaDescription": "Complete guide to retiring in Hua Hin Thailand. Visa options, cost of living, healthcare, property, expat community. Updated 2026.",
        "heroLabel": "Retirement guide · 2026",
        "heroTitle": "Retiring in Hua Hin, Thailand — Complete Guide 2026",
        "intro": "Hua Hin is consistently ranked among Asia's top retirement destinations — and for good reason. The town combines a warm climate, world-class golf, JCI-accredited hospitals with English-speaking doctors, excellent seafood and a genuinely international expat community of 71+ nationalities. Cost of living is 60–70% lower than Western Europe or the US. The town is safe, clean and well-organised. Bangkok is 200 km away — 2.5 hours by car or 3.5 hours by train. This guide covers everything you need to know about retiring in Hua Hin in 2026.",
        "visaTitle": "Visa options for retirees in Thailand",
        "visaBody": "Non-Immigrant O-A (Retirement Visa): age 50+, ฿800,000 in Thai bank or ฿65,000/month income, annual renewal, 1 year stay, no work permitted. Non-Immigrant O-X (Long Stay Visa): age 50+, ฿3M in Thai bank, 5 year stay with 2 year renewal. Thailand LTR Visa (Long Term Resident): introduced 2022, for wealthy pensioners with $80,000+ annual income or $250,000 assets, 10 year visa, tax benefits. 30 day tourist visa: possible but requires border runs — not recommended for retirees.",
        "costTitle": "Cost of living in Hua Hin 2026",
        "cost1": "Rent (2 bed furnished condo): ฿15,000–25,000/month",
        "cost2": "Utilities (electric, water, internet): ฿3,000–5,000",
        "cost3": "Food (mix local and western): ฿15,000–25,000",
        "cost4": "Transport (car or motorbike): ฿5,000–10,000",
        "cost5": "Healthcare (insurance + out of pocket): ฿5,000–15,000",
        "cost6": "Entertainment (golf, dining, travel): ฿10,000–20,000",
        "cost7": "Total comfortable lifestyle: ฿53,000–100,000/month (approx €1,400–2,700 or $1,500–2,800)",
        "healthTitle": "Healthcare in Hua Hin",
        "healthBody": "Bangkok Hospital Hua Hin: JCI-accredited, English-speaking doctors, 15 min from Soi 112. San Paolo Hospital: 17 min, full services. Dental clinics: multiple international standard clinics in town centre. Chiva-Som Health Resort: world-class wellness. Medical evacuation to Bangkok: 2.5 hours by car, helicopter available for emergencies. Health insurance: international policies from $1,500–4,000/year for age 50–65.",
        "communityTitle": "The expat community in Hua Hin",
        "communityBody": "71 nationalities represented. Large communities of British, Dutch, German, Scandinavian, American and Australian retirees. Active expat clubs, golf societies, hash house harriers, yoga groups, language classes. Live jazz and blues nightly at multiple venues. International supermarkets (Makro, Lotus's, Villa Market). English widely spoken in restaurants, hospitals and shops. Facebook groups with 10,000+ members for local advice.",
        "faqTitle": "Frequently asked questions",
        "faq1q": "What is the minimum income to retire in Hua Hin?",
        "faq1a": "A comfortable retirement lifestyle in Hua Hin costs approximately ฿53,000–100,000 per month (€1,400–2,700 or $1,500–2,800). The Thai retirement visa requires ฿800,000 in a Thai bank account OR ฿65,000/month provable income.",
        "faq2q": "Is Hua Hin safe for retirees?",
        "faq2a": "Hua Hin is considered one of Thailand's safest towns for foreign residents. Low crime rate, well-maintained infrastructure, strong expat community, and excellent hospitals make it a top choice for retirees from Europe and America.",
        "faq3q": "Can I buy a house in Hua Hin when I retire?",
        "faq3a": "Foreigners cannot own land or houses directly in Thailand. Common options are long-term leasehold (30 years, renewable), purchasing via Thai spouse, or buying land and building via a Thai company. Our Soi 112 Chanote plot is available from 1 rai — ideal for building your retirement home.",
        "faq4q": "What visa do I need to retire in Thailand?",
        "faq4a": "The most common visa is the Non-Immigrant O-A (Retirement Visa) for age 50+. Requires ฿800,000 in a Thai bank account or ฿65,000/month income. Valid for 1 year, renewable annually. The new LTR Visa offers 10 years for wealthier retirees with $80,000+ annual income.",
        "link1": "Retiring here — Americans",
        "link2": "Retiring here — Europeans",
        "link3": "Voor Nederlanders",
        "link4": "Foreign buyers guide",
        "link5": "Why Hua Hin",
        "link6": "Healthcare",
        "link7": "Contact agent",
    },
}

BREADCRUMB = {
    "soi-102": "pages.soi102",
    "hua-hin-villas": "pages.huaHinVillas",
    "farm-for-sale": "pages.farmForSale",
    "retiring-hua-hin": "pages.retiringHuaHin",
}

BREADCRUMB_LABELS = {
    "pages.soi102": "Soi 102",
    "pages.huaHinVillas": "Hua Hin Villas",
    "pages.farmForSale": "Farm & Resort Land",
    "pages.retiringHuaHin": "Retiring in Hua Hin",
}


def merge_messages():
    for loc in LOCALES:
        path = MESSAGES / f"{loc}.json"
        doc = json.loads(path.read_text(encoding="utf-8"))
        for ns, keys in CONTENT.items():
            doc[ns] = keys
        bc = doc.setdefault("breadcrumb", {})
        pages = bc.setdefault("pages", {})
        for _, key in BREADCRUMB.items():
            label_key = key.split(".")[-1]
            pages[label_key.replace("pages.", "") if False else key.split(".")[1]] = BREADCRUMB_LABELS[key]
        # fix pages nested keys
        if "pages" not in bc or not isinstance(bc.get("pages"), dict):
            bc["pages"] = {}
        bc["pages"]["soi102"] = BREADCRUMB_LABELS["pages.soi102"]
        bc["pages"]["huaHinVillas"] = BREADCRUMB_LABELS["pages.huaHinVillas"]
        bc["pages"]["farmForSale"] = BREADCRUMB_LABELS["pages.farmForSale"]
        bc["pages"]["retiringHuaHin"] = BREADCRUMB_LABELS["pages.retiringHuaHin"]
        path.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print("updated", path)


def sitemap_block(path: str) -> str:
    base = f"https://www.hua-hin-land.com{path}"
    locales = [
        ("en", base),
        ("nl", f"https://www.hua-hin-land.com/nl{path}"),
        ("de", f"https://www.hua-hin-land.com/de{path}"),
        ("sv", f"https://www.hua-hin-land.com/sv{path}"),
        ("da", f"https://www.hua-hin-land.com/da{path}"),
        ("th", f"https://www.hua-hin-land.com/th{path}"),
    ]
    lines = []
    for loc_code, url in locales:
        lines.append("  <url>")
        lines.append(f"    <loc>{url}</loc>")
        lines.append("    <lastmod>2026-07-28</lastmod>")
        for alt_code, alt_url in locales:
            lines.append(f'    <xhtml:link rel="alternate" hreflang="{alt_code}" href="{alt_url}" />')
        lines.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{base}" />')
        lines.append("  </url>")
    return "\n".join(lines)


def append_sitemap():
    paths = [
        "/info/soi-102",
        "/info/hua-hin-villas",
        "/info/farm-for-sale",
        "/life/retiring-hua-hin",
    ]
    sm = ROOT / "public" / "sitemap.xml"
    text = sm.read_text(encoding="utf-8")
    insert = "\n".join(sitemap_block(p) for p in paths)
    if "/info/soi-102" in text:
        print("sitemap already has new pages")
        return
    text = text.replace("</urlset>", insert + "\n</urlset>")
    sm.write_text(text, encoding="utf-8")
    print("sitemap updated")


if __name__ == "__main__":
    merge_messages()
    append_sitemap()
