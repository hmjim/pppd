const fs = require('fs');
const path = require('path');

const EN_DIR = path.join(__dirname, '..', 'chapters_en');
if (!fs.existsSync(EN_DIR)) fs.mkdirSync(EN_DIR, { recursive: true });

function writeCh(filename, content) {
    fs.writeFileSync(path.join(EN_DIR, filename), content.trim() + '\n', 'utf8');
    console.log(`[EN Mod 4] Written ${filename}`);
}

// 20_setback_anatomy.md
writeCh('20_setback_anatomy.md', `# Anatomy of a Setback: The "Storm" Protocol

*Why flare-ups happen, why they are NOT a return to square one, and how to navigate temporary flare-ups.*

---

## The Non-Linear Trajectory of Recovery

One of the most dangerous moments in PPPD recovery is the **first major setback**.

You have had three fantastic weeks: dizziness dropped by 70%, confidence soared, you walked in crowded stores. Then suddenly—perhaps triggered by a viral cold, poor sleep, travel, or an argument—you wake up severely dizzy and ungrounded.

The catastrophic thought hits immediately: *"I'm back at square one! All my progress was an illusion!"*

---

## The True Biology of a Setback

A setback is **not** structural regression. It is an **extinction burst**—a temporary spike in sympathetic reactivity as the brain tests its new safety boundaries under physiological fatigue.

Your neural pathways of recovery are already physically built; they do not disappear overnight. Think of a setback as an echo fading in a canyon: the sound returns temporarily, but the source has already ceased.

---

## Action Protocol: The 4-Step Setback Response

1. **Zero Catastrophizing:** Immediately state out loud: *"This is a temporary flare-up, not a reset. My brain is tired, not broken."*
2. **Reduce Sensory Stimulation:** Decrease screen time, postpone non-essential high-stress tasks.
3. **Gentle Somatic Practice:** Perform 20 minutes of Jacobson PMR and slow walking. Do not aggressively over-exercise to "prove you're fine."
4. **Continue the Routine:** Within 24–48 hours, resume standard VRT drills. The flare will subside faster than previous episodes.
`);

// 21_storm_strategy.md
writeCh('21_storm_strategy.md', `# The "Storm" Strategy: Weathering Acute Symptom Surges

*Paradoxical intention, surrender, and transforming acute panic into neutral observation.*

---

## Viktor Frankl's Paradoxical Intention

When a sudden "storm" of dizziness, derealization, or panic hits in public, fighting it or trying to "control" your balance instantly spikes adrenaline, making you feel twice as unsteady.

Psychiatrist Viktor Frankl discovered **Paradoxical Intention**: instead of fleeing or resisting the symptom, you mentally invite it to maximize its intensity.

---

## The Surrender Dialogue

When the swaying surges fiercely:
- Plant your feet firmly on the ground.
- Drop your shoulders and smile slightly.
- Mentally command your nervous system:
  - *"Go ahead. Spin me even more. Make the room rock harder. Show me your absolute worst. I am standing right here, and I am not leaving."*

By paradoxically demanding more dizziness, you completely destroy the underlying fear that fuels it. The amygdala cannot sustain an emergency alarm when the conscious mind welcomes the sensation.

---

## Action Protocol

1. Practice the "Storm" protocol the next time an unexpected surge of unsteadiness strikes.
2. Observe how the sensation peaks and collapses when it meets zero psychological resistance.
`);

// 22_new_identity.md
writeCh('22_new_identity.md', `# The New Identity: Life After Neuro-Vestibular Recovery

*Living beyond PPPD: Building physical resilience, emotional freedom, and unbreakable internal stability.*

---

## The Gift of the Crisis

No one asks for PPPD. It is an agonizing, terrifying trial. 

Yet, virtually everyone who fully recovers from this journey will tell you the same unexpected truth: **"PPPD was the most transformative experience of my life."**

Why? Because PPPD forced you to:
- Master your own autonomic nervous system and neurophysiology.
- Dismantle chronic people-pleasing, perfectionism, and unhealthy lifestyle habits.
- Reconnect deeply with somatic awareness and emotional truth.
- Develop mental resilience and courage that ordinary life could never teach you.

---

## The Fully Recalibrated Human

You do not simply return to the fragile, overwhelmed person you were before the dizziness started. 

You emerge as a new, upgraded version of yourself: grounded, sovereign, emotionally attuned, and possessing absolute confidence in your body's capacity to heal.

---

## Action Protocol

1. Write a letter to your future, fully healed self. Describe the life, career, and adventures you are stepping into.
2. Keep this letter in your journal as your guiding north star.
`);

// 23_farewell.md
writeCh('23_farewell.md', `# Stepping Out Into the World: The Final Chapter

*A personal message from the author, final commitments, and reclaiming your life.*

---

## You Are Ready

You have traversed the complete roadmap:
- You know the neurophysiology of your condition.
- You have dissolved the muscle armor and retrained your Vestibulo-Ocular Reflex.
- You have conquered visual dependence and eliminated avoidance behaviors.
- You have broken the adrenaline loop and integrated your emotional boundaries.

The tools in this book are not temporary fixes; they are lifelong principles of biological resilience.

---

## The Final Promise

From this day forward:
- When balance fluctuates, you will smile and know it is just a passing wave.
- You will walk into crowded streets with your head held high and shoulders dropped.
- You will live boldly, without measuring every step.

Thank you for trusting this roadmap and walking this path with me. Your world has found its stability. **Go live your life.**

---

*With profound respect,*  
**Maxim**
`);

// 29_loved_ones.md
writeCh('29_loved_ones.md', `# Loved Ones and PPPD: A Guide for Family and Friends

*How to explain your invisible illness to partners, parents, and friends without conflict.*

---

## The Curse of the Invisible Illness

PPPD is an invisible condition. You look completely normal on the outside—no casts, no bandages, no abnormal blood test flags. 

Yet on the inside, you feel like you are walking on the deck of a storm-tossed ship. 

Family members often react with well-meaning but hurtful phrases:
- *"You just need some fresh air."*
- *"It's all in your head, stop obsessing."*
- *"You were fine yesterday, why can't you go to the party today?"*

---

## How to Explain PPPD to Family

Share this simple analogy with your loved ones:
- *"Imagine having severe sea-sickness and jet-lag simultaneously, 24 hours a day, while your inner ear and brain are trying to recalibrate their balance sensors. It is a real, physical neurological condition. I will fully recover, but I need patience, quiet support, and consistency."*

---

## Action Protocol

1. Share this chapter or the introduction with your partner or close family member.
2. Establish a clear, simple cue word when you need sensory downtime without needing to explain or apologize.
`);

// 24_case_studies.md
writeCh('24_case_studies.md', `# Clinical Case Studies & Recovery Stories

*Real-world journeys of individuals who fully conquered severe PPPD, visual vertigo, and health anxiety.*

---

## Case Study 1: Elena (Age 34, Marketing Director)
- **Onset:** Acute panic attack in a shopping mall followed by chronic 24/7 unsteadiness for 14 months.
- **Key Interventions:** Elimination of symptom Googling, daily Jacobson PMR, and progressive supermarket in-vivo exposure.
- **Outcome:** Full resolution of symptoms in 4 months. Returned to international business travel.

## Case Study 2: Alex (Age 42, Software Engineer)
- **Onset:** Post-vestibular neuritis with intense visual vertigo and brain fog.
- **Key Interventions:** Daily VOR x1/x2 exercises, optokinetic stripe training, and eliminating indoor sunglasses.
- **Outcome:** 100% vestibular compensation achieved at 12 weeks.

## Case Study 3: Dmitry (Age 29, Athlete)
- **Onset:** Post-concussion syndrome evolving into severe PPPD and agoraphobia.
- **Key Interventions:** Metacognitive detachment (MCT), gradual re-introduction of running, and processing medical PTSD.
- **Outcome:** Complete recovery. Resumed competitive triathlon training.
`);

// 25_appendix.md
writeCh('25_appendix.md', `# Appendices, Worksheets & Diagnostic Scales

*Complete printable worksheets, DHI & HADS scoring forms, and quick-reference emergency cards.*

---

## 1. DHI Quick-Reference Scoring Sheet
- Physical Subscale (7 items)
- Emotional Subscale (9 items)
- Functional Subscale (9 items)

## 2. Daily Neuro-Vestibular Habit Tracker
- [ ] Morning Sunlight & Gentle Neck Mobility (10 min)
- [ ] VRT Gaze Stabilization Drills (VOR x1 / Saccades) (10 min)
- [ ] Daily Outdoor Walk with Horizon Gaze (30 min)
- [ ] Evening Jacobson PMR / Somatic Grounding (15 min)
- [ ] Zero Medical Googling / Zero Symptom Scanning

## 3. Emergency Wallet Card
> *"I am experiencing a temporary sensory surge. My balance system is structurally intact. I will pause, drop my shoulders, exhale slowly, and allow my nervous system to recalibrate."*
`);

console.log('✅ Module 4 English chapters generated successfully.');
