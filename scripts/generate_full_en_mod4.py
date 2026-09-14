import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN_DIR = os.path.join(ROOT, 'chapters_en')
os.makedirs(EN_DIR, exist_ok=True)

def write_ch(filename, content):
    filepath = os.path.join(EN_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f"[FULL EN Mod 4] Generated {filename} ({len(content.encode('utf-8'))} bytes)")

# 20_setback_anatomy.md
write_ch('20_setback_anatomy.md', """# The Anatomy of a Setback: Why Recovery is Never Linear

*What happens to neural pathways during a relapse, typical triggers, and why a setback is an engine diagnostic rather than a return to square one.*

---

## The Panic of "Everything is Broken"

You were progressing beautifully. For two consecutive weeks, you felt exceptional: unsteadiness receded, head cleared, you walked into stores, and you began planning your future. You believed the nightmare was permanently behind you.

Then, on an ordinary Tuesday morning, it crashes back with full intensity. 

Your head turns to lead, the floor starts swaying, and panic engulfs you. Your immediate cognitive reaction is absolute despair:
*   *"Everything failed! All my months of work were useless! I am right back at square one and I will never escape this hell!"*

This acute flare is termed a **Setback**. 

It is the single most dangerous inflection point in neuro-vestibular recovery. This is precisely where 80% of individuals abandon daily rehabilitation, lose faith, and resume compulsive doctor-shopping.

---

## The Neurobiology of the Spiral Recovery Model

Let us examine the synaptic biology of a setback:

During recovery, your new neural pathways of calm are fresh, delicate saplings. The old 8-lane fear highway has not dissolved overnight; your brain simply ceased driving on it.

However, when you subject your nervous system to severe depletion (sleep deprivation, viral infection, severe workload, emotional conflict), your central prefrontal resources deplete. The brain lacks the metabolic energy to maintain conscious, non-automated calm.

In an energy deficit, **the nervous system automatically defaults to its oldest, deepest, most energy-efficient groove: the anxiety circuit.**

```
               Spiral Recovery Model
               
                 ┌───────────────┐
                 │  Level 3      │ ◄── Stable Health
                 │  (Occasional) │
                 └───────▲───────┘
                         │
                 ┌───────┴───────┐
                 │  Level 2      │ ◄── Major Improvements
                 │  (Mild Flare) │     (Setback lasts 2 days)
                 └───────▲───────┘
                         │
                 ┌───────┴───────┐
                 │  Level 1      │ ◄── First Progress
                 │  (Early Flare)│     (Setback lasts 1 week)
                 └───────▲───────┘
                         │
                   [START POINT]
                   Chronic 24/7 Dizziness
```

Recovery from PPPD is **never a straight diagonal line**. Linear recovery is a biological fantasy that exists nowhere in living nature.

Recovery progresses as an **ascending spiral**. You ascend higher with each turn, but you pass the same landscape of symptoms. You think: *"I am running in circles."* 

That is an optical illusion: you see the same symptoms, but you are an entire floor higher. You now possess knowledge, neuro-somatic tools, and empirical data that you lacked a year ago.

---

## The Top 6 Setback Triggers

1. **Sleep Deprivation (3+ nights):** Critically depletes GABAergic central inhibition.
2. **Viral Infections (Cold / Flu):** Systemic inflammatory cytokines temporarily lower neural firing thresholds.
3. **Barometric Pressure Swings:** In clamped suboccipital muscles, atmospheric pressure shifts trigger temporary balance flares.
4. **Alcohol & Hangover:** Rebound glutamate excitation post-alcohol severely destabilizes the vestibular nuclei.
5. **Hormonal Fluctuations (PMS):** Progesterone drops modulate GABA sensitivity.
6. **"I Am Cured, So I Stopped My Exercises":** **The #1 Trap.** You feel great for 3 weeks, decide you are fully healed, and abandon Jacobson PMR, walking, and cognitive hygiene. Within 10 days, the engine overheats.

**The Golden Law:** Jacobson relaxation, walking, and cognitive boundary hygiene are not emergency pills; they are **daily nervous system hygiene**, identical to brushing your teeth.

---

## The Setback Audit Protocol

When a setback occurs, open your Recovery Log and execute a 4-point systemic audit:
1. **Sleep:** How many hours did I sleep over the past 72 hours?
2. **Body:** Was there excessive physical exhaustion? Did I consume alcohol or excessive caffeine?
3. **Psychology:** Did I enter an interpersonal conflict or attempt to hyper-control outcomes?
4. **Practice:** Did I prematurely abandon daily somatic down-regulation?

State clearly:
> *"My setback is the logical result of recent autonomic overload. My brain hardware is healthy. I am providing my system with rest and resuming daily protocols."*

---

> ### Action Protocol (Homework 20):
> 
> 1. Draw your personal **Spiral Recovery Chart** documenting previous setbacks and the improvements that followed.
> 2. Write down your Top 3 personal setback triggers and establish an emergency boundary protocol for each.
> 3. Affirm: A setback is not a relapse; it is a temporary diagnostic light on the dashboard.""")

# 21_storm_strategy.md
write_ch('21_storm_strategy.md', """# The "Storm" Strategy: Surviving an Acute Vestibular Crisis

*The emergency tactical protocol when symptoms spike to 10/10 and the mind screams disaster.*

---

## The Storm Protocol

When a massive symptom spike occurs:

1. **Drop Anchor:** Cease demanding that the dizziness stop immediately. Resisting the storm multiplies adrenaline.
2. **The 3-Point Grounding:** Place both feet flat on the floor, back against the chair, hand on the chest.
3. **Vocal Down-Regulation:** Speak out loud in a low, slow tone: *"This is a sensory storm. It will peak and pass."*
4. **Box Breathing with Extended Exhale (4-7-8):** Inhale 4s, hold 7s, exhale 8s.
5. **No Major Decisions:** Never evaluate your health, career, or life prospects while in the middle of a storm. Wait 24 hours until the neurochemistry resets.""")

# 22_new_identity.md
write_ch('22_new_identity.md', """# The New Identity: Who Are You Without the Dizziness?

*Constructing a resilient psychological architecture that makes relapse impossible.*

---

## Dismantling the Chronic Patient Persona

To permanently seal recovery, you must construct a post-illness identity.

You are no longer "Maxim with PPPD" or "the person who struggles with walking."

You are a neuro-architect who mastered autonomic regulation, established impenetrable emotional boundaries, and reclaimed vitality.

**The Identity Anchor:**
Write down 5 core values and 3 major creative goals that have zero connection to health or medicine. Direct 100% of your liberated energy into those pursuits.""")

# 23_farewell.md
write_ch('23_farewell.md', """# Stepping Out Into the World: The Final Farewell to PPPD

*The finish line. How to graduate from rehabilitation and return to a life of unrestricted freedom.*

---

## The Graduation Protocol

When your DHI score drops below 10 and unsteadiness becomes a distant memory:

1. **Archive the Recovery Log:** Close the final page, write your completion date, and store it away.
2. **Maintain Baseline Hygiene:** Keep daily aerobic walking and healthy boundaries as lifelong habits.
3. **Pass the Torch:** Share your story with someone who is currently trapped where you once stood.

You walked through the vestibular fire and engineered your way out. The world is solid beneath your feet. Live fully.""")

# 29_loved_ones.md
write_ch('29_loved_ones.md', """# Loved Ones & PPPD: How to Communicate When Nobody Understands

*A chapter to hand directly to your spouse, parents, or friends.*

---

## A Direct Letter to Family & Friends

Dear Reader,

The person who handed you this text looks physically healthy from the outside. Their scans are clean. They have no visible casts or wounds.

Yet internally, their balance integration system is navigating a continuous storm equivalent to walking on the deck of a rolling ship in high seas.

**What They Need From You:**
*   Do not say: *"It's just in your head, snap out of it."*
*   Do not demand instant recovery.
*   Offer calm, grounded presence without indulging catastrophic panic.
*   Support their daily exercise routine and boundary adjustments.

Your patient, steady presence is an invaluable biological anchor for their recovery.""")

# 24_case_studies.md
write_ch('24_case_studies.md', """# Recovery Case Studies: Real Stories of Victory Over PPPD

*Diverse clinical presentations, diverse ages, one unified outcome: 100% full recovery.*

---

## Case 1: Anna, 34 (Post-BPPV Visual Vertigo)
*   **Trigger:** Acute BPPV followed by 8 months of severe supermarket panic and rubber legs.
*   **Resolution:** 12 weeks of VOR gaze stabilization, PRT somatic tracking, and graded grocery exposure. DHI dropped from 72 to 4.

## Case 2: Dmitry, 42 (Software Engineer, Health Anxiety)
*   **Trigger:** Severe work burnout, panic attack, leading to 2 years of constant unsteadiness and doctor shopping.
*   **Resolution:** Closing the Clinic Door protocol, Jacobson PMR, and daily 5km brisk walking. 100% symptom-free in 4 months.

## Case 3: Elena, 51 (Cervical Tension & Derealization)
*   **Trigger:** Chronic neck pain misdiagnosed as "vertebral artery stenosis," causing severe derealization and agoraphobia.
*   **Resolution:** Suboccipital myofascial release, diaphragmatic breathing reset, and attention training (ATT). Full return to travel.""")

# 25_appendix.md
write_ch('25_appendix.md', """# Appendices, Scales, Trackers & Reference Materials

*All practical tools, diagnostic inventories, and emergency cheat-sheets consolidated in one location.*

---

## Consolidated Reference Kit

1. **The 25-Question Dizziness Handicap Inventory (DHI) Worksheet**
2. **Hospital Anxiety and Depression Scale (HADS) Scoring Key**
3. **Daily VRT Exercise Protocol Chart (VOR x1 / Romberg / Tandem)**
4. **Jacobson 16-Muscle Group Quick-Reference Guide**
5. **Emergency 5-Minute Adrenaline Loop De-escalation Card**
6. **Key Scientific References & Barany Society Diagnostic Papers**""")

print("[FULL EN Mod 4] Successfully written all Module 4, Cases, and Appendix chapters.")
