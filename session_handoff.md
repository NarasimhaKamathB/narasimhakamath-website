# Session Handoff — narasimhakamath.org Website
*Last updated: June 2026 | Prepared for next Claude session*

---

## Quick Context

**Owner:** Dr. Narasimha Kamath — EVP R&D, o9 Solutions  
**Live site:** https://www.narasimhakamath.org  
**GitHub repo:** https://github.com/NarasimhaKamathB/narasimhakamath-website  
**Local path:** `C:\Users\narasimha.kamath\Documents\git\NK\website`  
**Deployment:** Vercel — auto-deploys on every push to `main`

---

## Tech Stack

| Layer | Detail |
|---|---|
| Framework | Next.js 16 |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Hosting | Vercel (auto-deploy from GitHub main) |
| Shell path | `/sessions/.../mnt/website/` |

---

## Site Structure

```
app/
  page.tsx         ← assembles all sections in order
  layout.tsx
  globals.css
components/
  Nav.tsx
  Hero.tsx
  About.tsx
  Pillars.tsx
  Patents.tsx
  Publications.tsx  ← tabbed section (see below)
  Speaking.tsx
  SimulationGames.tsx  ← standalone section, added June 2026
  Contact.tsx
public/
  photo.png
```

### Section order on the page
Nav → Hero → About → Pillars → Patents → Publications → Speaking → **Simulation Games** → Contact

---

## Publications Section — Tab Structure

`components/Publications.tsx` contains all academic output in a tabbed UI.

| Tab | Key | Notes |
|---|---|---|
| Journal Articles | `journals` | 5 entries |
| Books | `books` | 1 entry (IGI Global, 2016) |
| Book Chapters | `chapters` | 5 entries (2006–2026) |
| Conference Papers | `conferences` | 13 entries (2004–2024) |
| Cases | `cases` | 1 entry — Switz Foods Calcutta, ECCH 907-016-1, 2007 |
| Teaching Notes | `teachingNotes` | 1 entry — SKB Healthcare, Decision Vol.31(1), 2004 |

**Formatting conventions:**
- Co-author names are NOT shown (removed for consistency)
- Editor names ARE shown in book chapters (in the `note` field)
- Best Paper Award entries use `award: true` — renders an amber badge
- Links open in new tab

---

## Simulation Games Section

`components/SimulationGames.tsx` — standalone section between Speaking and Contact.

| Game | Link |
|---|---|
| Cake Game | https://cake-game-6o4q.vercel.app/ |
| Beer Game | https://beer-game-blond-one.vercel.app/ |

**Cake Game description:** An interactive simulation game for comprehending perishability in supply chains. Players experience the dynamics of ordering, spoilage, and demand uncertainty first-hand.

**Beer Game description:** An interactive simulation of the classic Beer Distribution Game, illustrating the bullwhip effect in multi-echelon supply chains. Players take on roles across the supply chain — retailer, wholesaler, distributor, and manufacturer — to experience how local ordering decisions cascade into system-wide instability.

---

## Changes Made — June 2026 Session

1. **Publications — Cases tab added:** Switz Foods Calcutta (ECCH, 2007)
2. **Publications — Teaching Notes tab added:** SKB Healthcare case note (Decision, 2004)
3. **Publications — Book Chapters expanded:** 3 new entries (Switz Foods/McGraw-Hill 2009, Intrusion Detection/ISR 2008, Intrusion Detection/Idea Group 2006)
4. **Publications — Conference Papers expanded:** 8 new entries added (2004–2012)
5. **Publications — Co-author names removed** from all tabs for consistency
6. **Simulation Games — new standalone section** created between Speaking and Contact
7. **Simulation Games — Cake Game** added (https://cake-game-6o4q.vercel.app/)
8. **Simulation Games — Beer Game** added (https://beer-game-blond-one.vercel.app/)

---

## How to Push Changes

```powershell
cd "C:\Users\narasimha.kamath\Documents\git\NK\website"
git add <file(s)>
git commit -m "your message"
git push
```

> Note: Claude's sandbox cannot push to git directly (no .git write access). Always push from your local PowerShell terminal. Vercel auto-deploys within ~1–2 minutes of push to main.

---

## How to Start Next Session

Tell Claude:
> "Read `C:\Users\narasimha.kamath\Documents\git\NK\website\session_handoff.md` and then let's work on the website."

Claude will have full context on the site structure, what's been done, and conventions to follow.

---

*Handoff prepared: June 2026*
