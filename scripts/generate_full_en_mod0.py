import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN_DIR = os.path.join(ROOT, 'chapters_en')
os.makedirs(EN_DIR, exist_ok=True)

def write_ch(filename, content):
    filepath = os.path.join(EN_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f"[FULL EN Mod 0] Generated {filename} ({len(content.encode('utf-8'))} bytes)")

# 00_introduction.md
write_ch('00_introduction.md', """# Introduction

*This book is not just another article from the internet. It is a navigational map. A map I drafted while climbing out of personal hell.*

---

Hello. My name is Maxim.

If you are reading this, your world has lost its physical stability. I know this feeling down to the marrow of my bones. When the ground undulates beneath your feet. When every trip to the grocery store feels like an endurance survival marathon. When physicians scrutinize clean MRI scans, shrug their shoulders, and dismiss you with: *"Well, take some mild sedatives and relax."*

You are not going insane. You are not dying of an undiagnosed disease. And you are certainly not the first human being to endure this neuro-vestibular breakdown.

I navigated this entire journey myself. **Since January 2021, I have been 100% fully healthy.** Prior to that, I touched absolute rock bottom: endless cranial MRIs, a paralyzing dread before every single footstep, and total bewilderment as to why my own body was betraying me. I consulted dozens of medical specialists. I was handed empty umbrella labels—"vegetative-vascular dystonia (VAD)", "cervical osteochondrosis causing dizziness", "dyscirculatory encephalopathy"—meaningless placeholder diagnoses that explain nothing and cure nothing.

I was in deep despair. But I engineered my way out.

---

## My Story — Raw and Unfiltered

In January 2020, I suffered an acute onset of **BPPV** (Benign Paroxysmal Positional Vertigo). A classic scenario: I lay down in bed, turned my head to the side, and the room violently spun like an off-axis centrifuge. The acute canalith repositioning maneuvers cleared the spinning within weeks. 

However, the internal sensations remained: chronic unsteadiness, floating sensations, "cotton-wool" legs, and the constant feeling that the floor was moving like an elevator beneath my feet. I was formally diagnosed with **PPPD** (Persistent Postural-Perceptual Dizziness) accompanied by severe generalized anxiety disorder.

Physicians offered the standard prescription: a course of SSRI antidepressants for 12 to 18 months. I even voluntarily checked into a specialized psychiatric research institute to titrate medication under continuous clinical observation. Unfortunately, the side-effect profile proved worse than the dizziness itself. We tried another compound—the exact same story. Pharmacology alone was not my path to recovery.

That forced me into deep independent research. In localized Russian resources, evidence-based rehabilitation protocols for PPPD practically did not exist. I immersed myself in international English sources—peer-reviewed clinical studies, neuro-otology textbooks on Vestibular Rehabilitation Therapy (VRT), and neurophysiology. I consulted vestibular neurologists and neurotologists in Germany and Israel who specialize specifically in functional balance disorders. It required substantial financial resources, but it allowed me to assemble a complete, unified neuro-engineering model: **what was happening, why it was happening, and how to systematically recalibrate the brain.**

In July 2020, I began rehabilitation in earnest. My symptoms at that point: head started spinning after 20–30 minutes of ordinary walking, accompanied by sharp sudden "drop" sensations—as if losing consciousness for a split second, like a lag spike in a video game. In crowded public places, everything escalated dramatically.

From July to January—six months of rigorous daily execution. Vestibular gymnastics, CBT, graded exposure, physical activity. Relentless, disciplined routine every single day without breaks or weekends.

**The outcome: I am 100% healthy.** Not 90%, not "mostly managing"—100% full recovery. The dizziness vanished. The fear vanished. I live a completely normal life and no longer think about a single step.

---

## The Hard Numbers

If you feel completely isolated in this condition, examine the clinical epidemiological data:

*   PPPD is the **second most common cause** of neuro-otology consultations worldwide (second only to BPPV).
*   According to Staab et al. (2017), PPPD is diagnosed in **15% to 20%** of all patients evaluated in specialized dizziness clinics.
*   Onset typically peaks between **30 and 50 years of age**, though it affects individuals from age 18 to 65+.
*   Women are diagnosed **2 to 3 times more frequently** than men (though among our community members it is nearly equal).
*   Up to **70% of individuals with PPPD** suffer from co-occurring health anxiety or sensory over-arousal.
*   The average duration from symptom onset to accurate diagnosis ranges from **6 months to 3 years**—three years of running in circles from neurologists to ENTs and back.

You are not an anomalous broken specimen. You are part of a vast global cohort whose nervous system entered a high-gain maladaptive loop. The definitive truth is that **evidence-based rehabilitation exists, it is scientifically validated, and it is structured step-by-step in this manual.**

---

## Operating Rules for This Guide

This is not a fictional novel to be read in a single evening. This is an **applied clinical workbook**. Adhere strictly to these principles:

### Rule 1: Do Not Gulp Everything at Once
Read **one chapter per day**, maximum two. After each chapter, you need consolidation time to process the neuro-cognitive models and execute the homework. If you read everything in one sitting, you will gain passive knowledge, but not neurological skills. And skills are the only thing that will rewire your brain.

### Rule 2: Execute the Action Protocol (Homework)
Every single chapter concludes with a concrete homework protocol. **Never skip it.** I understand you are exhausted, unsteady, and tempted to say "I'll do it later." But "later" means never. Those who execute the protocols emerge from PPPD within 2 to 4 months. Those who merely read remain stuck for years.

### Rule 3: Maintain a Dedicated Tracking Log
Keep a notebook or digital log:
*   Record monthly HADS (Hospital Anxiety & Depression Scale) and DHI (Dizziness Handicap Inventory) scores.
*   Document observations after vestibular exercises.
*   Log cognitive traps you identify in daily life.
*   Track morning unsteadiness/anxiety levels on a 1–10 scale.

Your log is your objective mirror. After one month, you will re-read your earliest entries and hardly believe that you wrote them.

### Rule 4: Do Not Skip Ahead
Chapters follow a strict neuro-biological sequence: Module 0 (Foundation) → Module 1 (The Body) → Module 2 (The Battery / Panic) → Module 3 (Mindset) → Module 4 (Recovery). Do not jump into "Mindset" before working through "The Body." You cannot recalibrate central software while the physical hardware is locked in smoke.

### Rule 5: It Will Feel Worse Before It Gets Better
When you initiate vestibular gymnastics—unsteadiness may **temporarily increase** in the first few days. When you begin graded in-vivo exposure—panic may temporarily **flare**. This is completely normal. It indicates the brain is breaking its old maladaptive equilibrium and remodeling neural pathways. Do not abandon practice at this stage. When you renovate an apartment, there is temporary construction dust and mess. That does not mean the renovation is flawed.

---

## Who This Book Is For

Let us be completely transparent. This manual is not for everyone. It is written for people like me.

For individuals experiencing PPPD—persistent postural-perceptual dizziness. Whether you have received this diagnosis officially or not. If you feel chronic unsteadiness, floating sensations, moving floor, and doctors find zero structural pathology—you are in the right place.

It is for individuals who are **ready to work**. Not searching for a magical pill. Not endlessly doom-scrolling medical forums. Not waiting for an external savior to fix them passively.

People come to me and say: *"I am ready to crawl through fire if that is what it takes to get my life back."* Those are the exact people I work with. The rest will make excuses and stay where they are.

## What You Will Receive Here

This book is not theoretical abstraction for its own sake. It is an **applied step-by-step system** synthesized piece by piece:
*   Peer-reviewed international clinical neuroscience that is rarely translated or integrated.
*   Real-world empirical data from dozens of individuals who successfully reclaimed their health.
*   My personal lived journey, tested directly on my own physiology and nervous system.

Here is the structural blueprint:

*   **Module 0 — Foundation:** We decode what is happening inside your nervous system. Zero panic, zero doom-laden medical jargon. You will grasp the mechanics as an engineer, not a helpless patient.
*   **Module 1 — The Body:** You cannot rewire the central mind while the muscular apparatus is frozen in concrete. Suboccipital muscle armor, sensory mismatches, "brain fog"—we dismantle these physical blocks first.
*   **Module 2 — The Battery:** Deconstructing the adrenaline feedback loop, hypochondriacal body-scanning, and panic spirals. You will understand why your nervous system spikes—and why it is physically harmless.
*   **Module 3 — Mindset:** The deep cognitive layer. Applied neuroplasticity, Cognitive Attentional Syndrome (CAS), Ego defenses, the Inner Child, and emotional suppression. We resolve the root psychological tension that primed your system for breakdown.
*   **Module 4 — Recovery:** Managing setbacks, eliminating the fear of relapse, constructing a resilient post-recovery identity, and stepping back into full social and professional life.

---

> ### Action Protocol (Homework 0):
> 
> 1. Set up a dedicated physical notebook or private digital document named **"Point of Support: Recovery Log"**.
> 2. Write down today's date, your current primary symptoms, and the single most important activity PPPD has stolen from you that you are determined to reclaim.
> 3. Make a firm internal commitment to read only one chapter per day and execute the corresponding protocol daily without skipping.""")

# 01_what_is_pppg.md
write_ch('01_what_is_pppg.md', """# What is PPPD: Symptoms, Causes, and Why You Are Here

*Spoiler: Nothing catastrophic is happening inside your body. Your physical hardware is intact. Your operating software is miscalibrated.*

---

## The Short Answer

PPPD is when you feel unsteady, floating, swaying, your legs feel like cotton wool, your head feels heavy, the ground feels unstable—yet all clinical diagnostic tests return completely normal. 

Your cranial MRI is pristine. Your blood work is flawless. Your inner ear vestibular scans show no permanent lesions. Your visual acuity is intact.

Physicians throw up their hands. But that offers zero relief—because the sensation of motion and disequilibrium is 100% real and terrifying.

PPPD stands for **Persistent Postural-Perceptual Dizziness**. In the International Classification of Diseases (ICD-11), it is officially classified under code **AB32.0**. This is not a psychological fantasy or imaginary hypochondria. It is a recognized, validated medical diagnosis.

However, here is the paramount truth you must internalize right now: **PPPD is a functional disorder, not an organic disease.** 

There is no structural destruction in your brain, brainstem, or inner ear. What has changed is the **processing algorithm** of sensory integration. The software has encountered an error loop, but the physical hardware remains undamaged.

---

## Symptoms of PPPD: The Full Checklist

Individuals with PPPD describe their sensations in dozens of creative ways. If you recognize yourself in even 3 to 4 of the following items, you are in the exact right place.

### Primary Vestibular & Postural Symptoms:
*   Persistent unsteadiness and floating sensations while walking or standing.
*   "Cotton-wool" or "rubber" legs—feeling like your limbs lack solid grounding.
*   Sensory illusion that the floor is swaying, dropping, or moving like an elevator.
*   Persistent brain fog, heavy head pressure, or cognitive sluggishness.
*   Sensations of internal rocking or micro-swaying even when sitting or lying flat.
*   Visual motion hypersensitivity: visual lag, objects seeming to "swim" before your eyes.
*   Dramatic escalation of symptoms in supermarkets, malls, transit hubs, and crowded areas.
*   Discomfort triggered by complex patterned floors, high-contrast grids, or rapid smartphone scrolling.

### Secondary Neuro-Autonomic Symptoms:
*   Background health anxiety and sudden panic surges.
*   **Derealization:** the external world feels artificial, foggy, or viewed through a pane of glass.
*   **Depersonalization:** feeling strangely detached from your own voice or physical body.
*   Insomnia, fragmented sleep architecture, and intense morning unsteadiness upon waking.
*   Severe chronic tension and soreness in the suboccipital neck muscles, trapezius, and jaw (clenching/bruxism).
*   Tinnitus (ear ringing or hissing) that spikes during heightened anxiety.
*   Photophobia (light sensitivity) and intolerance to flickering fluorescent lighting.
*   Compulsive, hyper-vigilant "body scanning" for balance sensations 24/7.

### What is NOT a Symptom of PPPD:
*   True syncope (fainting or losing consciousness).
*   Sudden, violent rotational room-spinning lasting 5 to 60 seconds (this indicates acute BPPV).
*   Unilateral acute hearing loss.
*   True diplopia (double vision from cranial nerve palsy).
*   Neurological speech slurring (dysarthria) or difficulty swallowing (dysphagia).

*If you experience symptoms from the latter list, you must be evaluated by a neurologist to rule out acute structural events. PPPD is a functional diagnosis established after organic pathology is excluded.*

---

## A Brief Clinical History (Without Boring Jargon)

For decades, patients suffering from chronic disequilibrium were medically invisible. You would visit a doctor complaining of constant unsteadiness, and they would dismiss you with: *"It's just nerves, go home."*

Through the 1980s and 1990s, German neurologists named it **Phobic Postural Vertigo (PPV)**. Later, American clinicians termed it **Space-Motion Discomfort (SMD)** and **Chronic Subjective Dizziness (CSD)**.

Finally, in **2014**, the Barany Society (the global authority in neuro-otology) and the World Health Organization synthesized all these fragmented concepts into one definitive consensus definition. In **2017**, Staab et al. published the 5 standardized diagnostic criteria.

Since then, PPPD has been an internationally legitimized neuro-otological condition with official diagnostic coding. It is not "in your imagination." It is a measurable neuro-sensory computational error.

---

## Etiology: How the Glitch Develops (IT Perspective)

Let us explain this using a system architecture analogy.

Your physical body is the **hardware**: brain tissue, inner ear labyrinths, ocular muscles, peripheral nerves, and skeletal joints. Your neuro-cognitive algorithms and reflex pathways are the **software**.

PPPD is not broken hardware. It is a **software feedback deadlock**.

Imagine your computer's background security scanner (the threat detection system in your amygdala) suddenly gets stuck running at 100% CPU utilization. It frantically inspects every minor file access (normal balance micro-adjustments) as a potential catastrophic threat. The CPU overheats. The fans scream. The operating system begins stuttering and lagging.

Instead of terminating the hung security process, you panic and take the computer to repair shops, demanding they replace the hard drive, then the RAM, then the motherboard. None of it helps, because the silicon chips are completely healthy.

**The issue is a runaway software loop triggered by stress and hyper-monitoring. Our entire job in this manual is to terminate the loop and recalibrate the system.**

---

## The Three Balance Sensors

To maintain spatial equilibrium, your central nervous system continuously integrates telemetry from three sensory streams:

1. **Visual System:** Optical inputs confirming whether your environment or your body is in motion.
2. **Vestibular System:** The inner ear semi-circular canals and otolith organs sensing head rotations and gravity.
3. **Proprioceptive System:** Mechanoreceptors in your suboccipital neck muscles, spinal column, and soles of your feet communicating body posture.

Under normal conditions, the cerebellum automatically fuses these inputs beneath conscious awareness. You never think about balancing, just as you never think about regulating your diaphragm during sleep.

However, following an acute vestibular insult (BPPV, neuritis, panic attack) or severe chronic distress, the brain switches into an emergency high-threat state. Adrenaline floods the bloodstream. Postural muscles clamp shut. And that initiates the primary sensory mismatch.

---

## The Clamped Neck Metaphor

Internalize this mechanism—it is central to your symptoms:

The suboccipital muscles at the base of your skull contain the highest density of muscle spindles (proprioceptive sensors) in the entire human body. They inform your brain of the exact spatial orientation of your head relative to your torso.

When you endure chronic emotional or vestibular stress, your suboccipital muscles contract into a rigid spasm. **The proprioceptive sensors are physically squeezed—like an ethernet cable pinched in a heavy doorway.**

The positional signal travels to the vestibular nuclei with a micro-delay:

*   Your eyes report: *We are moving forward.*
*   Your inner ear gyros report: *Head is accelerating forward.*
*   Your clamped neck receptors report with a 30-millisecond lag: *Head has not moved yet!*

The brain receives conflicting sensor telemetry and registers a critical navigation fault. It interprets this millisecond mismatch as unsteadiness, floor drop, or motion illusion.

**You rush to an emergency cranial MRI in terror, and the scan shows nothing. Because there is no structural lesion. The error is purely signal desynchronization.**

---

## Why Massage Alone Provides Only Temporary Relief

Many individuals visit a massage therapist. The therapist works out the suboccipital tension. You experience relief for 24 to 48 hours. Then the unsteadiness returns in full force.

Why? Because manual therapy relaxes the muscle tissue, **while the hyper-vigilant amygdala continues firing high-voltage tension commands down the motor pathways**. It is identical to mopping up water on the kitchen floor while leaving the faucet running at full blast.

Manual work is useful, but only when paired with cognitive reframing and vestibular sensory recalibration.

---

## PPPD is 100% Reversible

Let us state this with utmost certainty so you can release the fear of physical catastrophe:

Across years of managing clinical balance cohorts and thousands of cases: **nobody has ever died of PPPD.** Nobody has suffered a ruptured cerebral aneurysm, stroke, or heart attack from PPPD. Nobody has lost their sanity.

PPPD is **completely reversible**. There are individuals who have been stuck in it for 3 months, 2 years, 5 years, or even two decades. But the brain remains neuroplastic at every age. Recovery is not a matter of lottery luck; it is a direct consequence of systematic neurological rehabilitation.

---

## Derealization: The Autonomic Fuse

If, alongside unsteadiness, your surroundings feel dream-like, artificial, or viewed through dirty glass—you are experiencing **derealization**. If your own hands or voice feel foreign, that is **depersonalization**.

Do not panic. This is an **autonomic surge protector**.

When sensory and emotional overload breaches safe operational thresholds, the brain dials down perceptual gain to protect central circuitry from exhaustion. It functions exactly like an electrical circuit breaker tripping in your home panel. It is not psychosis; it is physiological defense. As systemic anxiety recedes, derealization dissolves naturally.

---

## The Core Diagnostic Subtypes

PPPD is not uniform. Clinical presentation generally falls into three subtypes:

1. **Posturally Induced:** Unsteadiness flares upon standing and walking; sitting or lying flat brings significant relief. The brain distrusts lower-limb proprioception and artificially over-activates postural muscles.
2. **Visually Induced (Visual Vertigo):** Triggers are complex visual environments: supermarket aisles, moving traffic, scrolling feeds, patterned rugs. The visual system is over-weighted while vestibular integration is suppressed.
3. **Mixed Type:** A combination of postural unsteadiness and visual motion sensitivity. This represents approximately 60% of all PPPD cases.

---

## Differential Diagnosis Table

| Feature | PPPD | BPPV | Meniere's Disease | Vestibular Migraine |
| :--- | :--- | :--- | :--- | :--- |
| **Dizziness Nature** | Unsteadiness, floating, rock | Violent rotational spin | Violent spin + ear fullness | Rotational or rocking vertigo |
| **Episode Duration** | Constant (months/years) | 5–60 seconds per turn | 20 min – 12 hours | Minutes to 72 hours |
| **Positional Link** | Worse standing/walking | Triggered by head turns in bed | Independent of posture | May worsen with motion |
| **Visual Trigger** | Strong (supermarkets) | Absent | Absent | Frequent (photophobia) |
| **Anxiety Link** | Always present, amplifies | Absent | Reactive during attacks | Can trigger episodes |
| **Hearing Loss** | Absent | Absent | Fluctuating low-frequency | Absent (tinnitus possible) |
| **Diagnostic Scans** | Completely normal | Normal (positive Dix-Hallpike) | Endolymphatic hydrops | Normal (clinical history) |
| **Primary Therapy** | VRT + CBT + Somatics | Epley / Semont Maneuver | Low-salt, betahistine, diuretics | Migraine prophylaxis, diet |

---

> ### Action Protocol (Homework 1):
> 
> 1. Review the diagnostic criteria and firmly remind yourself: this is a software calibration mismatch, not terminal organic decay.
> 2. Open your Recovery Log and write down your **Top 3 Primary Symptoms**. Note which single symptom causes the greatest emotional fear.
> 3. If you have the compulsive urge to Google symptoms, set your phone lock screen wallpaper to this text: **"My brain hardware is healthy. This is PPPD. It is 100% reversible."**""")

# 02_medical_checkup.md
write_ch('02_medical_checkup.md', """# Closing the Clinic Door

*As long as you entertain the thought "what if the doctors missed something fatal"—your amygdala will continue flooding your system with adrenaline. We terminate that doubt right now.*

---

## Why This Step is Non-Negotiable

To successfully recalibrate neuro-vestibular software, your conscious mind must know with 100% certainty that your physical hardware is sound. 

Any lingering diagnostic ambiguity is rocket fuel for health anxiety. A tiny subconscious whisper—*"what if this is a brainstem tumor or rare demyelinating disease?"*—keeps your autonomic nervous system locked in combat readiness. Adrenaline surges, muscles freeze, signals desynchronize, and the unsteadiness roars back.

Therefore, step one is **excluding organic pathology once and for all**. Not "probably." Not "mostly." But definitively, with objective clinical records in hand, closing this door and locking it permanently.

---

## The Essential Medical Checklist

Here is the definitive diagnostic battery. If you have completed these evaluations and specialists found no structural organic lesions—**you are physically intact. Full stop.**

### 1. Central Nervous System & Brain
*   **Brain & Brainstem MRI (with and without contrast):**
    *   *What we exclude:* Demyelinating disease (Multiple Sclerosis), intracranial neoplasms (tumors, acoustic neuromas/vestibular schwannomas), Chiari malformations, vascular malformations, ischemic stroke sequelae.
    *   *Clinical Reality:* If your cranial MRI is clean, your neural hardware is structurally intact. Your disequilibrium is functional—an execution bug in running code, not damaged microchips.

### 2. Peripheral Vestibular System
*   **Neurotologist / Vestibular Specialist Evaluation:**
    *   *What we exclude:* Acute BPPV (canalithiasis), Meniere's disease (endolymphatic hydrops), acute labyrinthitis, unilateral vestibular hypofunction (vHIT/VNG testing).
    *   *Clinical Reality:* If BPPV is detected, an Epley maneuver resolves the canalith displacement immediately. If vestibular function is symmetric or centrally compensated, the lingering unsteadiness is PPPD.

### 3. Vascular Hemodynamics
*   **Duplex Ultrasonography of Carotid & Vertebral Arteries:**
    *   *What we exclude:* Critical hemodynamic arterial stenosis (narrowing >70%), vascular dissections.
    *   *Clinical Reality:* The ubiquitous report of "cervical osteochondrosis" or "mild S-shaped vertebral artery tortuosity" is present in over 40% of healthy humans. It is an anatomical variant, not the cause of chronic unsteadiness. Vertebral arteries are encased in bony canals; compressing them without vertebral fracture is biomechanically impossible.

### 4. Comprehensive Biochemical Panel
*   **Complete Blood Count (CBC):** Rules out occult infection and severe systemic anemia.
*   **Serum Ferritin:** Detects latent tissue iron deficiency. Ferritin levels below 30 ng/mL can cause fatigue, orthostatic instability, and brain fog despite normal hemoglobin.
*   **Thyroid Stimulating Hormone (TSH) & Free T4:** Rules out hypothyroidism or thyrotoxicosis, which mimic anxiety and balance drag.
*   **25-Hydroxy Vitamin D:** Severe deficiency (<20 ng/mL) impairs muscle spindle sensitivity and amplifies autonomic nervous irritability.
*   **Vitamin B12 (Cobalamin) & Folate:** Deficiency induces peripheral neuropathy, paresthesias, and sensory ataxia.

### 5. Cardiovascular Status
*   **Standard 12-Lead EKG & 24-Hour Holter (if palpitations occur):** Rules out hemodynamically significant cardiac arrhythmias. Occasional benign premature ventricular contractions (PVCs) under adrenaline surges are harmless.

---

## The Trap of Doctor Shopping

Let us address the psychological trap that ensnares 90% of individuals with PPPD: **compulsive medical over-investigation**.

When you feel constant disequilibrium, the instinctive reaction is to seek more tests: another cervical spine MRI, another CT angiogram, a consultation with a sixth neurologist, a chiropractor, a kinesiologist, a naturopath.

This behavior is called **reassurance seeking**. 

Every "clean" diagnostic report provides a temporary emotional dopamine hit that lasts 48 hours. Then the unsteadiness returns, the doubt resurfaces (*"what if their scanner was outdated?"*), and you schedule an appointment with a new practitioner.

**Why this fails:** You are searching for an answer in the physical hardware when the issue is in the software algorithms. It is identical to replacing your computer monitor because you have a bug in your browser.

**The Single-Pass Rule:** Consult each relevant specialist **once**. Complete each baseline diagnostic scan **once**. If three independent physicians confirm that you have no organic disease—you are healthy. Period.

---

## Placeholder & Umbrella Diagnoses

Be aware of archaic placeholder labels commonly assigned when clinicians are unfamiliar with functional vestibular medicine:

| Placeholder Label | Why It Is Clinically Meaningless |
| :--- | :--- |
| **"Vegetative-Vascular Dystonia (VAD)"** | Non-existent in modern evidence-based ICD-11 medicine. An obsolete umbrella term used as a diagnostic wastebasket for somatic anxiety. |
| **"Cervical Osteochondrosis Dizziness"** | Natural spinal age-related remodeling present in 85% of adults over 30. Does not produce systemic non-spinning unsteadiness. |
| **"Venous Outflow Obstruction"** | Benign anatomical asymmetry frequently misattributed as the root cause of functional anxiety. |
| **"Early Dyscirculatory Encephalopathy"** | Unsubstantiated catch-all label applied to young, neurologically intact patients. |

---

## The "Closing the Door" Clinical Ritual

Once your objective medical scans are completed and organic pathology is ruled out, execute this cognitive boundary ritual:

1. **Physical Consolidation:** Gather every medical chart, scan report, MRI disc, and lab panel into a single physical folder.
2. **Spoken Declaration:** Place your hand on the folder and state out loud with conviction:
   > *"I have been comprehensively evaluated. My physical organs are intact. My brain tissue is healthy. My symptoms are the result of software miscalibration and autonomic hyper-arousal. I am no longer a patient searching for a hidden diagnosis. I am an individual systematically retraining my nervous system."*
3. **Physical Archival:** Place that folder in the most inaccessible storage location in your home (high shelf, basement, bottom storage bin).
4. **Absolute Prohibition:** From this second onward, re-reading old medical reports, inspecting MRI images, or searching medical forums for rare illnesses is **strictly prohibited**. Every search is an adrenaline injection into your amygdala.

---

> ### Action Protocol (Homework 2):
> 
> 1. If any primary test from the checklist is incomplete, schedule it immediately to resolve remaining ambiguity.
> 2. If all organic tests are normal, execute the physical **Closing the Door Ritual** today.
> 3. Delete all bookmarks to medical forums, symptom checker websites, and diagnostic groups from your phone and browser right now.""")

# 03_baseline_tests.md
write_ch('03_baseline_tests.md', """# Quantifying Metrics: HADS & DHI Inventories

*You cannot optimize what you do not measure. We replace subjective panic ("I am feeling terrible today") with objective engineering data.*

---

## Why Objective Metrics are Vital

In the depths of PPPD, human perception is deeply distorted by emotional recency bias. 

If you have a minor unsteadiness flare on a Tuesday morning, your brain catastrophizes: *"Nothing is working! I am right back where I started six months ago!"*

To protect yourself from these cognitive distortions, you must establish an **objective numerical baseline**. You need standardized, validated scales to measure your functional state month over month. When your brain attempts to convince you that no progress has occurred, your data log will prove the opposite.

We utilize the two gold-standard clinical instruments in vestibular and anxiety medicine:
1. **DHI (Dizziness Handicap Inventory)**
2. **HADS (Hospital Anxiety and Depression Scale)**

---

## 1. Dizziness Handicap Inventory (DHI)

The **DHI** is a 25-item self-report questionnaire validated worldwide (Jacobson & Newman, 1990) to quantify the self-perceived impact of balance disorders across three domains: **Physical (P)**, **Emotional (E)**, and **Functional (F)**.

### Scoring Method:
For each statement, choose one answer:
*   **Yes:** 4 points
*   **Sometimes:** 2 points
*   **No:** 0 points

### The 25 Diagnostic Questions:

1. *(P)* Does looking up increase your dizziness?
2. *(E)* Because of your dizziness, do you feel frustrated?
3. *(F)* Because of your dizziness, do you restrict your travel for business or recreation?
4. *(P)* Does walking down the aisle of a supermarket increase your dizziness?
5. *(F)* Because of your dizziness, do you have difficulty getting into or out of bed?
6. *(F)* Does your dizziness significantly restrict your participation for social activities such as going out to dinner, going to movies, dancing, or to parties?
7. *(F)* Because of your dizziness, do you have difficulty reading?
8. *(P)* Does performing more ambitious activities like sports, dancing, household chores increase your dizziness?
9. *(E)* Because of your dizziness, are you afraid to leave your home without having someone accompany you?
10. *(E)* Because of your dizziness, have you been embarrassed in front of others?
11. *(P)* Do quick movements of your head increase your dizziness?
12. *(F)* Because of your dizziness, do you avoid heights?
13. *(P)* Does turning over in bed increase your dizziness?
14. *(F)* Because of your dizziness, is it difficult for you to do strenuous housework or yard work?
15. *(E)* Because of your dizziness, are you afraid people may think you are intoxicated?
16. *(F)* Because of your dizziness, is it difficult for you to go for a walk by yourself?
17. *(P)* Does walking down a sidewalk increase your dizziness?
18. *(E)* Because of your dizziness, is it difficult for you to concentrate?
19. *(F)* Because of your dizziness, is it difficult for you to walk around your house in the dark?
20. *(E)* Because of your dizziness, are you afraid to stay home alone?
21. *(E)* Because of your dizziness, do you feel handicapped?
22. *(E)* Has your dizziness placed stress on your relationships with members of your family or friends?
23. *(E)* Because of your dizziness, are you depressed?
24. *(F)* Does your dizziness interfere with your job or household responsibilities?
25. *(P)* Does bending over increase your dizziness?

### DHI Severity Grading Scale:
*   **0 – 30 points:** Mild handicap (Manageable functional impact).
*   **31 – 60 points:** Moderate handicap (Significant restriction in lifestyle and emotional reserve).
*   **61 – 100 points:** Severe handicap (Severe functional limitation and daily distress).

*Clinical Note: A drop of **18 points or more** represents a statistically significant, objectively verified neuro-vestibular recovery milestone.*

---

## 2. Hospital Anxiety and Depression Scale (HADS)

The **HADS** is a 14-item inventory designed specifically to detect anxiety and depressive states in non-psychiatric medical outpatients. It consists of two subscales: **HADS-A (Anxiety)** and **HADS-D (Depression)**.

### Subscale Scoring:
Each item is scored from **0 to 3**. Sum the odd items for Anxiety (A) and even items for Depression (D):
*   **0 – 7 points:** Normal (Healthy emotional baseline).
*   **8 – 10 points:** Subclinical / Borderline state.
*   **11 – 21 points:** Clinically significant anxiety or depressive state.

In early PPPD, HADS-A scores frequently sit between 14 and 19. As physical down-regulation and cognitive techniques take hold, HADS-A reliably drops below 7.

---

## Tracking Cadence: How to Log

Do not take these tests daily or weekly. Daily testing fuels hyper-monitoring.

*   **Cadence:** Exactly **once every 30 days**.
*   **Protocol:** Calculate your total DHI score, your HADS-A score, and your HADS-D score.
*   **Entry Format:**
    > `[Date: YYYY-MM-DD] — DHI: 64/100 (P:22, E:24, F:18) | HADS-A: 15/21 | HADS-D: 8/21`

Store this data in your Recovery Log. This table will be your objective proof of neurological reorganization over the next 3 to 6 months.

---

> ### Action Protocol (Homework 3):
> 
> 1. Complete the 25 DHI questions right now and calculate your baseline score.
> 2. Complete the HADS questionnaire and calculate your baseline Anxiety (A) and Depression (D) scores.
> 3. Record these baseline numbers on the first page of your Recovery Log with today's date. Set a calendar reminder 30 days from today for your next evaluation.""")

# 41_psychosomatics.md
write_ch('41_psychosomatics.md', """# Psychosomatics: The Universal Key to Functional Disorders

*PPPD is not an isolated disease. It is one of dozens of sensory languages through which an overloaded nervous system screams "STOP!". Every tool in this guide targets the core alarm engine, not just the dashboard warning light.*

---

## One Overheated Engine — Many Dashboard Lights

Let us begin with an uncomfortable clinical truth that you may not yet have heard:

PPPD is **not a unique standalone illness**. It is a symptom. One among many. 

Your central nervous system selected chronic unsteadiness as the primary channel to broadcast: *"I am overwhelmed, I cannot sustain this load, slow down!"* 

Meanwhile, your neighbor in distress had the exact same overloaded nervous system select a gastrointestinal channel—and they have spent three years consulting gastroenterologists for Irritable Bowel Syndrome (IBS). Their partner suffers from chronic lower back pain that no orthopedist can structuralize. Their friend cannot swallow solid food due to a "lump in the throat" (*globus pharyngeus*), despite clean ENT laryngoscopies.

Different warning lights flashing on the vehicle dashboard. **One and the same overheated engine.**

Psychosomatics is not "imaginary." It is not "all in your head." It is a **functional neuro-somatic disorder**, where genuine, measurable physical symptoms are generated not by organ breakdown, but by a software miscalibration in central sensory processing.

**Every single technique you learn in this guide operates for ANY psychosomatic symptom—because they target the central engine, not the indicator bulb.**

---

## The Neurobiology of Central Sensitization

The term "psychosomatic" stems from Greek *psyche* (soul/mind) and *soma* (body). Behind it lies hard, empirical neurobiology:

### Central Sensitization
The master mechanism linking all functional disorders is **Central Sensitization** (Woolf, 2011).

Under normal baseline conditions, your central nervous system acts as a high-efficiency noise filter. Out of millions of sensory signals arriving every second, the thalamus only routes critical threats into conscious awareness: acute lacerations, sudden loud alarms, catastrophic loss of footing. Benign noise—visceral gut motility, muscle micro-twitches, subtle head sway during walking—is filtered out.

However, when the nervous system endures **months of chronic distress**, the sensory filter degrades. **The neural activation threshold drops.** The brain begins classifying benign internal telemetry as lethal threats:
*   Normal gut peristalsis becomes perceived as "excruciating spasms."
*   Healthy sinus tachycardia from climbing stairs becomes "an impending heart attack."
*   Subtle head tilt becomes "violent vestibular disequilibrium."

In his landmark 2011 paper, Woolf demonstrated that in central sensitization, spinal cord and brainstem neurons undergo physical electrophysiological changes (synaptic long-term potentiation). They fire in response to sub-threshold inputs. The system screams from a whisper.

### The Hypothalamic-Pituitary-Adrenal (HPA) Axis & The Vagus Nerve
The second pillar is the **HPA Axis**—the master hormonal stress controller. When anxiety is triggered, the hypothalamus stimulates the pituitary gland, which instructs the adrenal glands to release adrenaline and cortisol.

When the HPA axis runs **24/7 without recovery**:
*   Cortisol suppresses mucosal immunity (frequent infections).
*   Cortisol dysregulates gastrointestinal motility (IBS, nausea).
*   Sustained motor drive locks skeletal muscles in rigid spasm (back, neck, jaw pain).
*   Serotonin receptor sensitivity is downregulated (depressive exhaustion).
*   Sleep architecture fragments (intense morning unsteadiness).

The **Vagus Nerve** is the high-bandwidth bidirectional cable through which the brain regulates visceral organs (heart, lungs, stomach, intestines). When autonomic balance is disrupted, aberrant vagal tone produces organic-mimicking sensations across multiple systems.

---

## Comprehensive Catalog of Psychosomatic Symptoms

| System | Symptom | Neuro-Biological Mechanism | Why Scans Are Normal |
| :--- | :--- | :--- | :--- |
| **Head & Nerves** | **Unsteadiness / PPPD** | Sensory mismatch (VOR/proprioception) + hyper-vigilance | MRI, CT, audiograms clean |
| | **Brain Fog** | Prefrontal cortex cortisol saturation & cognitive drag | Cognitive testing normal |
| | **Tremor / Internal Shaking** | Adrenaline motor unit recruitment without physical discharge | Neurological exam normal |
| | **Eyelid Twitches / Fasciculations** | Motor neuron sensitization + localized magnesium depletion | EMG clean |
| | **Paresthesias (Numbness/Tingling)** | Hyperventilation → respiratory alkalosis → vasoconstriction | Nerve conduction normal |
| **Muscles & Pain** | **Neck, Back & Trapezius Pain** | Chronic Reichian muscle armor + suboccipital trigger points | Spine X-ray shows normal aging |
| | **Tension Headache** | Sustained frontal/temporalis/suboccipital muscular contraction | Cranial CT/MRI clean |
| | **Vestibular Migraine** | Trigeminal-vestibular sensitization + autonomic priming | Neurotology tests normal |
| | **TMJ Pain / Bruxism** | Suppressed anger, nocturnal jaw clenching | Dental structure healthy |
| | **Fibromyalgia** | Central sensitization of central ascending pain pathways | No inflammatory markers |
| **Cardiovascular** | **Tachycardia / PVC Extrasystoles** | Adrenaline surge + sympathetic cardiac overdrive | EKG & Holter within normal variance |
| | **Blood Pressure Spikes** | Autonomic sympathetic vasoconstriction | Cardiac ultrasound normal |
| | **"Heart Sinking" Sensations** | Reactive parasympathetic rebound post-adrenaline spike | Holter shows benign ectopic beats |
| **Respiratory & Throat** | **Globus Sensation (Lump in Throat)** | Crico-pharyngeal muscle hyper-tonus (swallow conflict) | ENT & endoscopy clean |
| | **Air Hunger ("Cannot get deep breath")** | Diaphragmatic hyper-tonicity + subclinical hyperventilation | Spirometry normal, SaO2 98-99% |
| | **Chronic Non-Productive Cough** | Laryngeal hyper-responsiveness + stress acid reflux | Laryngoscopy normal |
| **Gastrointestinal** | **Irritable Bowel Syndrome (IBS)** | Vagal dysregulation altering colonic transit & microbiome | Colonoscopy & labs normal |
| | **Stress Nausea / Loss of Appetite** | Sympathetic shunt: digestion halts in "fight-or-flight" | Gastroscopy normal |
| | **Bloating & Abdominal Cramps** | Smooth muscle hyper-tonicity in intestinal walls | Abdominal ultrasound normal |
| **Dermatological & Other** | **Psychogenic Pruritus (Itching)** | Central histaminergic & neurogenic skin activation | Dermatologist finds no rash |
| | **Hot Flashes / Chills** | Hypothalamic thermoregulatory vasomotor instability | Endocrine panel normal |
| | **Frequent Urination** | Pelvic floor hyper-tonus + adrenaline bladder stimulation | Urological culture sterile |
| | **Transient Blurred Vision** | Ciliary muscle accommodative spasm under sympathetic drive | Optometry exam normal |

---

## Why Every Tool in This Book Treats All Functional Symptoms

1. **Jacobson Progressive Muscle Relaxation:** Releases the master motor clamp. Bernstein & Borkovec (1973) showed PMR drops systemic serum cortisol by 25–30% in a single session. Whether your spasm is in your neck (PPPD) or your diaphragm (air hunger), the cortisol reduction is systemic.
2. **Adrenaline Loop Deconstruction:** The formula `Symptom → Panic → Adrenaline → Amplified Symptom` is identical whether the trigger is unsteadiness, chest tightness, or stomach cramps. De-escalating the alarm resets the autonomic cascade.
3. **Metacognitive Detached Mindfulness:** Treating intrusive thoughts (*"what if my heart stops?"* or *"what if I collapse?"*) as passing trains decouples emotional threat from sensory signals.
4. **Graded In-Vivo Exposure:** The neurobiological principle of **extinction learning** rewires amygdala threat appraisals whether you are habituating to a supermarket (PPPD), an elevator (claustrophobia), or a restaurant (IBS).
5. **Applied Neuroplasticity:** The brain learns pain, dizziness, or tremor through hyper-attention; it unlearns them through **synaptic pruning** and sensory re-weighting.
6. **Resolving Root Emotional Tensions:** Resolving toxic boundaries, unexpressed grief, or perfectionist burnout terminates the chronic fuel supply powering the central engine.

---

## Evidence-Based Clinical Science

*   **The Lancet (Henningsen et al., 2018):** Functional Somatic Disorders account for **30% to 50% of all primary care medical visits worldwide**. One in every three patients walking into a doctor's clinic has real symptoms driven by functional neural dysregulation.
*   **Cochrane Systematic Review (van Dessel et al., 2014):** Cognitive Behavioral Therapy is the single most effective evidence-based modality for functional somatic disorders—outperforming pharmacotherapy and passive modalities.
*   **Goldstein et al. (2020):** Structured CBT protocols reduce functional neurological symptom severity by **40% to 60%** across 12 weeks of structured application.
*   **fMRI Neuroimaging (Lakhan & Schofield, 2013):** Patients with functional balance and somatic syndromes exhibit identical hyperactivity in the **anterior insula and anterior cingulate cortex (ACC)**—the brain's central salience and threat-monitoring network.

---

## "My Pain is Real, Not Imagined!"

Let us be completely clear: **psychosomatic symptoms are 100% physically real.** 

The dizziness is real. The pain is real. The tachycardia is real. The nausea is real.

Imagine a building's fire alarm screaming at 120 decibels. The fire department arrives, searches every floor, and finds zero flames, zero smoke, and zero structural burn marks. The alarm sound is completely real. Your ears physically vibrate. But there is no fire.

The smoke detector has a short-circuit. It is misinterpreting room-temperature air as an inferno.

You have two choices:
1. Spend years dismantling walls searching for an invisible fire (endless doctor-shopping).
2. **Recalibrate the faulty sensor** (retrain the central nervous system).

---

## Symptom Migration (Symptom Shifting)

As your PPPD resolves, you may encounter **symptom shifting**. Your unsteadiness vanishes, but two weeks later you develop throat tightness, an eye twitch, or lower back soreness.

Do not panic. **This is proof of recovery.** 

The central engine is still warm, but because you dismantled the dizziness pathway, the brain is testing an alternative channel to grab your conscious attention. 

**The Migration Protocol:**
1. Exclude acute organic pathology once.
2. Label the event: *"This is symptom migration. Same engine, different bulb."*
3. Apply the exact same tools: Jacobson PMR, Metacognitive Defusion, 5-Minute Rule.
4. Investigate remaining life stressors that require boundary adjustment.

---

> ### Action Protocol (Homework 41):
> 
> 1. List **all** your current bodily symptoms—major and minor. Observe the unified pattern across the systems table.
> 2. Next to each symptom, write its neuro-biological mechanism (central sensitization, muscle armor, vagal dysregulation).
> 3. Choose one secondary symptom (e.g., jaw clenching or eye twitch) and apply the **5-Minute Rule** whenever it surfaces over the next 3 days.
> 4. Identify one major unresolved emotional or interpersonal stressor in your life and write down a single concrete boundary step to reduce systemic engine load.""")

# Satellite Articles 30..40
write_ch('30_treatment_overview.md', """# Comprehensive PPPD Treatment Guide: The 5 Evidence-Based Pillars

*Persistent Postural-Perceptual Dizziness (PPPD) is completely treatable. International clinical consensus (Barany Society, 2024) mandates a multi-modal protocol.*

---

## The 5 Pillars of Recovery

1. **Vestibular Rehabilitation Therapy (VRT):** Gaze stabilization (VOR x1 and x2), Romberg balance retraining, and optokinetic desensitization to recalibrate sensory weighting.
2. **Cognitive Behavioral & Metacognitive Therapy (CBT/MCT):** Dismantling catastrophic appraisals, health anxiety hyper-scanning, and safety-seeking behaviors.
3. **Graded In-Vivo Exposure:** Systematic desensitization to trigger environments (supermarkets, driving, visual flow) using extinction learning.
4. **Physical Down-Regulation & Aerobic Exercise:** 30 minutes of daily aerobic walking to upregulate Brain-Derived Neurotrophic Factor (BDNF) and Jacobson Progressive Muscle Relaxation.
5. **Targeted Pharmacotherapy (When Indicated):** SSRIs/SNRIs (sertraline, escitalopram, venlafaxine) as central neuromodulators. *Benzodiazepines are contraindicated as they inhibit central vestibular compensation.*

---

## Expected Recovery Timeline

*   **Weeks 1–4:** Neuro-education, baseline quantification (DHI/HADS), initiation of VOR gymnastics and PMR.
*   **Weeks 4–8:** Noticeable reduction in background sensory sensitivity; initiation of graded exposure.
*   **Weeks 8–16:** Substantial functional restoration, return to driving and public spaces.
*   **Months 4–6:** 100% full recovery, elimination of symptom hyper-vigilance, and long-term relapse prevention.""")

write_ch('31_chronic_dizziness.md', """# Chronic Non-Spinning Dizziness: Why You Feel Off-Balance

*When rotational room-spinning stops, why does constant unsteadiness remain? Understanding functional disequilibrium.*

---

## The Difference Between Vertigo and PPPD

*   **True Vertigo:** A false illusion of rotational spinning or tilting caused by acute peripheral labyrinthine pathology (BPPV, vestibular neuritis).
*   **Chronic Disequilibrium (PPPD):** A persistent sensation of swaying, rocking, floating, or "walking on a boat deck" driven by central sensorimotor mismatch and autonomic hyper-arousal.

When an acute vestibular event resolves, the brain must recalibrate its internal balance models. If health anxiety interrupts this process, the brain remains locked in a high-gain emergency state, interpreting normal micro-sway as dangerous motion.""")

write_ch('32_unsteadiness.md', """# Unsteadiness and "Rubber Legs" While Walking

*Why your legs feel like cotton wool, why the ground feels like a trampoline, and why you will not fall.*

---

## The Neuro-Muscular Mechanism

When the brain perceives balance as unstable, it triggers a protective reflex called **high-stiffness postural control**. It over-contracts the quadriceps, calves, and suboccipital muscles to artificially rigidify your stance.

Paradoxically, stiffened muscles reduce smooth joint articulation, making your gait feel robotic, jerky, and disconnected. The sensation of "rubber legs" is muscle fatigue resulting from constant isometric contraction, not neurological weakness.

**Clinical Fact:** In PPPD, dynamic posturography confirms that despite severe subjective unsteadiness, objective balance reflexes remain intact. You will not collapse.""")

write_ch('33_brain_fog.md', """# Brain Fog and Cognitive Drag in Vestibular Disorders

*Why thinking feels sluggish, memory feels foggy, and head pressure feels overwhelming during chronic dizziness.*

---

## Cerebellar Computational Load

Balancing is normally an unconscious, automated cerebellar process requiring <1% of conscious cognitive bandwidth.

In PPPD, because the brain distrusts automated balance signals, it shifts postural control into the **prefrontal cortex**. Your conscious mind is forced to manually calculate every step, head turn, and eye movement.

This creates severe **computational cognitive drag**. Your working memory, processing speed, and executive function are starved of resources because your prefrontal cortex is exhausted from manually managing balance.""")

write_ch('34_cbt_for_dizziness.md', """# CBT for Chronic Dizziness: How Psychotherapy Cures Balance

*Cognitive Behavioral Therapy for PPPD is not about "talking about feelings"—it is applied neuro-sensory re-education.*

---

## Core CBT Targets in PPPD

1. **Catastrophic Appraisals:** Replacing *"I am about to pass out"* with *"My vestibular nuclei are experiencing sensory mismatch; this is physically harmless."*
2. **Attentional Hyper-Focus:** Breaking compulsive somatic body-scanning using Attention Training Techniques (ATT).
3. **Safety Behaviors:** Eliminating crutches (holding walls, wearing sunglasses indoors, avoiding head movements) that reinforce threat memory in the amygdala.
4. **Graded Desensitization:** Systematically extinguishing conditioned vestibular fear responses.""")

write_ch('35_psychosomatic_dizziness.md', """# Psychogenic & Functional Dizziness Explained

*How stress and autonomic nervous system dysregulation create physical vestibular symptoms.*

---

## The Autonomic-Vestibular Axis

Direct neural pathways link the **vestibular nuclei** in the brainstem to the **locus coeruleus** (the brain's norepinephrine alarm center) and the **paraventricular nucleus of the hypothalamus**.

When psychological stress or panic activates the sympathetic nervous system, norepinephrine directly alters the firing rates of vestibular neurons. This produces genuine spatial disorientation and floating sensations in the absence of any inner ear disease.""")

write_ch('36_pppg_symptoms.md', """# Full Diagnostic Checklist of PPPD Symptoms

*Standardized diagnostic criteria established by the Barany Society (ICD-11: AB32.0).*

---

## The 5 Diagnostic Criteria (Staab et al., 2017)

1. One or more symptoms of dizziness, unsteadiness, or non-spinning vertigo present on most days for 3 months or more.
2. Symptoms are persistent without provocation, but are exacerbated by: upright posture, active/passive motion, and moving or complex visual environments.
3. The disorder is precipitated by an acute vestibular event, medical illness, or psychological distress.
4. Symptoms cause clinically significant distress or functional impairment.
5. Symptoms are not better accounted for by another organic disease or structural vestibular lesion.""")

write_ch('37_pppg_dizziness.md', """# PPPD vs BPPV vs Vestibular Neuritis

*How acute vestibular triggers transition into chronic functional dizziness.*

---

## The Transition Timeline

```
Acute Event (Day 1)         Subacute Phase (Weeks 2–6)     Chronic Phase (>3 Months)
───────────────────         ──────────────────────────     ─────────────────────────
BPPV Crystal Dislodged  ──► Canalith Cleared by Maneuver ─► 70% Fully Compensate
        OR                                                       OR
Vestibular Neuritis     ──► Viral Inflammation Resolves  ─► 30% Develop PPPD (If
        OR                                                  High Anxiety & Visual
Severe Panic Episode    ──► Adrenaline Surge Clears         Dependence Intervene)
```

If high neuroticism, autonomic anxiety, or excessive physical resting occurs during the subacute window, the brain fails to recalibrate sensory weighting, locking the vestibular system into permanent hyper-vigilance.""")

write_ch('38_pppg_mkb.md', """# PPPD in ICD-11 (Code AB32.0)

*The World Health Organization's official medical classification of Persistent Postural-Perceptual Dizziness.*

---

## Medical Legitimacy

Under the World Health Organization's ICD-11 framework, PPPD is officially coded under **AB32.0** within the section on *Vestibular System Disorders*.

This classification definitively establishes PPPD as a recognized functional neuro-otological disorder, moving away from outdated psychosomatic dismissals and providing patients with a validated clinical diagnosis backed by global neuro-otology standards.""")

write_ch('39_pppg_what_is.md', """# What is PPPD in Plain English: A Guide for Patients & Families

*How to understand—and explain to loved ones—what is happening in your head without medical jargon.*

---

## The Drone Navigation Metaphor

Imagine a high-tech camera drone with three stabilization sensors: GPS (eyes), internal gyroscopes (inner ear), and ground sonar (feet).

One day the drone flies through a minor storm (BPPV or high stress). The drone lands safely, but the navigation software registers an error flag and switches into emergency manual mode. 

From that moment on, whenever the drone takes off, the software ignores automatic stabilization and panics at every minor breeze. The drone shakes and drifts.

The drone's carbon fiber frame and motors (your body) are in perfect condition. But the flight control software needs a factory calibration. That calibration is what this book provides.""")

write_ch('40_derealization_pppg.md', """# Derealization and Brain Fog in PPPD: The Autonomic Shield

*Why everything looks dream-like, unreal, or viewed through dirty glass—and why you are not losing your mind.*

---

## The Dissociative Defense Mechanism

Derealization and depersonalization are autonomic dissociative mechanisms triggered by the brain when sympathetic nervous arousal exceeds sustainable thresholds.

By attenuating perceptual vividness, the brain reduces sensory input processing demands, preventing central neurotransmitter depletion. It is a protective metabolic shield.

As autonomic down-regulation (Jacobson PMR, diaphragmatic breathing) lowers systemic cortisol, perceptual clarity returns automatically.""")

print("[FULL EN Mod 0] Successfully written all 16 Module 0 and satellite chapters.")
