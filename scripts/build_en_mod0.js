const fs = require('fs');
const path = require('path');

const EN_DIR = path.join(__dirname, '..', 'chapters_en');
if (!fs.existsSync(EN_DIR)) fs.mkdirSync(EN_DIR, { recursive: true });

function writeCh(filename, content) {
    fs.writeFileSync(path.join(EN_DIR, filename), content.trim() + '\n', 'utf8');
    console.log(`[EN Mod 0] Written ${filename}`);
}

// 00_introduction.md
writeCh('00_introduction.md', `# Introduction

*This book is not just another article on the internet. It is a navigational map. A map I drafted while climbing out of personal hell.*

---

Hello. My name is Maxim.

If you are reading this, your world has lost its physical stability. I know this feeling down to the marrow of my bones. When the ground undulates beneath your feet like a suspension bridge in a gale. When a routine trip to the supermarket feels like an endurance survival marathon. When physicians scrutinize normal MRI scans, shrug their shoulders, and dismiss you with: *"It's just stress, try to relax."*

You are not going insane. You are not dying of a hidden pathology. And you are certainly not the first human being to experience this neuro-vestibular breakdown.

I navigated this exact journey. **Since January 2021, I have been 100% recovered.** Prior to that, I touched absolute rock bottom: relentless cranial MRIs, a paralyzing dread before every single step, and total bewilderment as to why my own nervous system was sabotaging me. I consulted dozens of specialists. I was handed empty umbrella diagnoses—"vegetative vascular dystonia," "cervical spine osteochondrosis causing dizziness," "encephalopathy." These are non-functional labels that offer zero therapeutic answers and explain nothing.

I was in absolute despair. But I engineered my way out.

---

## My Story — Raw and Unfiltered

In January 2020, I suffered an acute onset of **BPPV** (Benign Paroxysmal Positional Vertigo). A textbook episode: I lay down in bed, turned my head to the side, and the room violently spun like an off-axis centrifuge. The canalith repositioning maneuvers cleared the acute spinning within weeks. 

However, the internal sensations remained: chronic unsteadiness, floating sensations, "cotton-wool" legs, and the feeling that the floor was moving like an elevator under my feet. I was formally diagnosed with **PPPD** (Persistent Postural-Perceptual Dizziness) accompanied by severe generalized anxiety.

Physicians offered conventional SSRI prescriptions for 12–18 months. I even checked into a specialized mental health clinic to titrate medication under clinical observation. Unfortunately, the side-effect profile was unbearable and exacerbated my dizziness. Pharmacology alone was not my answer.

That forced me into deep research. Back then, localized evidence-based recovery roadmaps were practically non-existent. I immersed myself in international peer-reviewed literature, clinical neurology textbooks on vestibular rehabilitation therapy (VRT), and neurophysiology. I consulted vestibular neurologists and neurotologists in Germany and Israel who specialize in functional balance disorders. It cost substantial resources, but it allowed me to assemble a complete, unified neuro-engineering model: **what was happening, why it was happening, and how to systematically recalibrate the brain.**

In July 2020, I began structured rehabilitation:
- High-intensity vestibular habituation exercises
- Metacognitive & Cognitive Behavioral protocols (MCT/CBT)
- Systematic graded exposure to visual and sensory triggers
- Somatic down-regulation and progressive muscle recalibration

From July to January—six months of rigorous daily execution without missing a single day.

**The outcome: Total, unconditional recovery.** Not 85%, not "managing symptoms"—100% remission. Dizziness evaporated. Hyper-vigilance ceased. I reclaimed full vitality and no longer dedicate a single conscious thought to maintaining my balance.

---

## The Hard Numbers

If you feel completely isolated in this condition, examine the clinical epidemiological data:

*   PPPD is the **second most common cause** of neuro-otology consultations worldwide (second only to BPPV).
*   According to Staab et al. (2017), PPPD accounts for **15% to 20%** of all patients evaluated in specialized dizziness clinics.
*   Onset typically peaks between **30 and 50 years of age**, though it affects individuals from age 18 to 70+.
*   Women are diagnosed **2 to 3 times more frequently** than men.
*   Up to **70% of individuals with PPPD** suffer from co-occurring health anxiety or sensory over-arousal.
*   The average duration from symptom onset to accurate diagnosis ranges from **6 months to 3 years** due to fragmented medical evaluations.

You are not an anomalous broken specimen. You are part of a vast global cohort whose nervous system entered a high-gain maladaptive loop. The definitive truth is that **evidence-based rehabilitation exists, it is scientifically validated, and it is structured step-by-step in this manual.**

---

## Operating Rules for This Guide

This is an **applied clinical workbook**, not passive reading. Adhere strictly to these principles:

### Rule 1: One Chapter Per Day
Do not consume the entire manual in one sitting. Read **one chapter per day**, maximum two. Your neural circuitry requires sleep cycles and consolidation time to integrate neuroplastic protocols.

### Rule 2: Execute the Action Protocol
Every single chapter concludes with a mandatory homework protocol (somatic exercise, cognitive tracking, or exposure drill). **Never skip the protocol.** Knowledge without neurological implementation produces zero neuroplastic remodeling.

### Rule 3: Maintain a Dedicated Tracking Log
Keep a notebook or digital log:
*   Track monthly HADS (Hospital Anxiety & Depression Scale) and DHI (Dizziness Handicap Inventory) scores.
*   Document exposure metrics and somatic recalibration milestones.

---

## Action Protocol

1. Take a physical notebook and title it **"My Neuro-Vestibular Recalibration Log."**
2. Write down today's date, your current primary symptoms, and the exact date you commit to completing this roadmap.
3. Accept the foundational truth: **Your hardware is structurally intact. We are reprogramming the central balance software starting today.**
`);

// 41_psychosomatics.md
writeCh('41_psychosomatics.md', `# Psychosomatics & Central Sensitization: The Unified Key

*Why dizziness, globus sensation in the throat, neck spasms, IBS, tremors, and tachycardia are all manifestations of a single overloaded nervous system.*

---

## The Fragmentation Illusion

When chronic unsteadiness strikes, patients usually visit an ENT specialist. When their heart races unexpectedly, they rush to a cardiologist. When their stomach knots into painful cramps, they see a gastroenterologist. When tension headaches and cervical spasms lock their neck, they visit an orthopedic surgeon.

Each physician examines their respective organ system, runs localized tests (ultrasounds, endoscopies, EKGs, MRIs), and declares: *"Your organ is completely healthy."*

Yet the suffering is undeniably real. Why?

Because the human body is not a disjointed collection of independent mechanical parts. It is governed by a centralized command console: the **Autonomic Nervous System (ANS)**.

---

## What is Central Sensitization?

Under sustained psychological distress, acute panic, or prolonged health hyper-vigilance, the brain transitions into **Central Sensitization**—a state of pathological neuro-amplification.

1. **Volume Knob Turned to Maximum:** The sensory filtering system in the thalamus lowers its threshold. Normal physiological background noise (blood pulse, natural body sway, peristalsis) is amplified into alarms.
2. **Sympathetic Dominance:** The sympathetic branch ("Fight-or-Flight") remains locked in overdrive, bathing tissues in cortisol and epinephrine.
3. **Somatic Manifestations:**
   - **Vestibular:** Maladaptive balance weighting, perceived swaying, visual vertigo.
   - **Musculoskeletal:** "Muscle armor" in suboccipital and trapezius muscles distorting proprioceptive signals.
   - **Gastrointestinal:** Irritable bowel syndrome (IBS) due to brain-gut axis hypersensitivity.
   - **Cardiovascular:** Sinus tachycardia and postural palpitations.
   - **Throat:** Globus pharyngeus (cricopharyngeal muscle spasm creating a sensation of a lump in the throat).

---

## The Neuro-Biological Mechanism

Central sensitization is not "imagined." It is measurable neuro-electric hypersensitivity. 

The amygdala constantly signals an imminent threat. The brainstem responds by contracting protective muscle groups (cervical and postural stabilizers) and demanding hyper-focused visual balance control. Because conscious balance control is computationally inefficient compared to automatic cerebellum processing, the brain experiences rapid fatigue, brain fog, and chronic perceived unsteadiness.

Treating each symptom separately is futile. **When you regulate the central nervous system and eliminate autonomic threat appraisal, every secondary somatic manifestation dissolves concurrently.**

---

## Action Protocol

1. **Map Your Somatic Ecosystem:** On a clean page, list every chronic physical symptom you experience alongside your dizziness (neck tightness, digestion changes, visual fatigue, heart palpitations).
2. **Label the Master Cause:** Draw a circle connecting all of them to the center: **"Autonomic Hyper-Arousal & Central Sensitization."**
3. **Stop Organ Shopping:** Cease booking redundant diagnostic tests for individual symptoms. Focus 100% of your energy on central autonomic regulation.
`);

// 01_what_is_pppg.md
writeCh('01_what_is_pppg.md', `# What is PPPD: Diagnostic Criteria, Mechanisms, and Etiology

*Spoiler: Nothing catastrophic is occurring inside your brain. Your biological hardware is intact; your neuro-sensory software is experiencing an operating system loop.*

---

## The Core Reality

PPPD (Persistent Postural-Perceptual Dizziness) is characterized by chronic unsteadiness, rocking sensations, visual hypersensitivity, heavy head, and "cotton-wool" legs—while all diagnostic investigations (cranial MRI, CT scans, audiometry, vestibular testing) return within normal parameters.

Physicians are frequently baffled, leaving patients in profound isolation.

In the International Classification of Diseases (ICD-11), PPPD is formally indexed under code **AB32.0**. It is neither a psychosomatic fiction nor an imaginary neurosis. It is a legitimate **functional neuro-vestibular disorder**.

**Functional vs. Structural:**
- *Structural (Hardware):* A stroke, tumor, or mechanical vestibular nerve transection.
- *Functional (Software):* The hardware is completely preserved, but the signal integration and filtering algorithm between the eyes, inner ears, and proprioceptors has become corrupted by sustained threat alarms.

---

## Comprehensive Symptom Checklist

If you recognize 3 or more criteria from this list, you are dealing with classic PPPD:

### Core Vestibular Symptoms:
- Persistent non-spinning unsteadiness or floating sensation present most days for >3 months.
- Feeling that the ground is shifting, dropping, or swaying beneath your feet.
- "Heavy head," brain fog, or cognitive drag during upright posture.
- Visual vertigo: exacerbation in supermarkets, busy streets, moving traffic, or while scrolling screens.
- Symptom aggravation during standing or walking, with partial relief when lying down flat.

### Secondary Neuro-Vegetative Symptoms:
- Health anxiety, internal restlessness, panic spikes.
- Derealization (feeling detached from reality or observing surroundings through a glass wall).
- Severe tension in the suboccipital cervical spine and upper shoulders.
- Hypersensitivity to bright fluorescent lights and high-contrast geometric floor patterns.
- Relentless conscious monitoring ("scanning") of internal balance signals.

### What PPPD is NOT (Red Flags Requiring Immediate Neurological Workup):
- True loss of consciousness (syncope).
- Acute rotational spinning lasting 5–60 seconds triggered purely by head repositioning (classic BPPV).
- Acute unilateral hearing loss or profound motor paralysis.
- Diplopia (double vision) or swallowing dysfunctions.

---

## The Barany Society Diagnostic Criteria (2017)

To be formally classified with PPPD according to the international consensus:
1. One or more symptoms of dizziness, unsteadiness, or non-spinning vertigo present on most days for **3 months or more**.
2. Symptoms are present without specific provocation, but exacerbated by:
   - Upright posture (standing/walking)
   - Active or passive motion
   - Exposure to complex visual environments
3. The disorder is precipitated by an acute vestibular, medical, or psychological event (e.g., BPPV, vestibular neuritis, vestibular migraine, panic attack, severe viral infection).
4. Symptoms cause significant clinical distress or functional impairment.
5. Symptoms are not better accounted for by another ongoing structural disease.

---

## The IT Metaphor: Overloaded CPU

Your body is the **hardware**. Your neural processing algorithms are the **software**.

During an initial trigger (such as a BPPV episode or acute panic attack), the brain instinctively activates an emergency high-gain postural stabilization program: stiffening neck muscles, locking ankles, and prioritizing visual gaze over vestibular input.

Once the acute event resolves, a healthy brain resets to automatic background balance. In PPPD, the "antivirus" alarm remains running at **100% CPU capacity**. It continuously scans every micro-sway as a threat, preventing the balance software from returning to default automatic mode.

Our goal is not to fix broken hardware, but to **recalibrate the software back to zero.**

---

## Action Protocol

1. Review the Barany Society criteria and confirm your symptom match.
2. Formulate your foundational cognitive anchor: **"My balance system is not damaged; it is merely hyper-sensitized."**
3. Cease searching internet medical forums for obscure diseases. Commit to the single path of neuroplastic rehabilitation.
`);

// 02_medical_checkup.md
writeCh('02_medical_checkup.md', `# Closing the Clinic Door: Essential Diagnostic Checklist

*How to verify your diagnosis, eliminate dangerous pathologies once and for all, and permanently exit the exhausting loop of doctor shopping.*

---

## The Doctor Shopping Trap

A standard trajectory for a PPPD patient involves consulting 10 to 15 different physicians over 12 months: neurologists, otolaryngologists, cardiologists, manual therapists, and osteopaths.

Each consultation produces new unverified hypotheses: "pinched vertebral artery," "cervical instability," "chronic cerebral ischemia." These diagnoses lead to expensive, useless IV infusions of nootropics or traumatic manual adjustments that only heighten nervous system anxiety.

To recover from PPPD, you must **close the diagnostic phase permanently.**

---

## The Gold Standard Medical Checklist

To rule out organic pathologies with 100% clinical certainty, complete this targeted protocol:

1. **Neuro-Otology / Vestibular Assessment:**
   - Videonystagmography (VNG) or Video Head Impulse Test (vHIT) to confirm inner ear vestibular symmetry.
   - Positional Dix-Hallpike testing to rule out active canalithiasis (BPPV).
2. **Cranial & Cervical Imaging:**
   - Brain MRI (with angiography if indicated) to rule out demyelinating lesions, acoustic neuromas, or vascular malformations.
3. **Basic Laboratory Panel:**
   - Complete blood count, ferritin, serum electrolytes.
   - Thyroid panel (TSH, Free T4) and Vitamin B12 / Vitamin D levels.
4. **Cardiovascular Screen:**
   - Resting EKG and 24-hour Holter monitoring if palpitations or orthostatic syncope are present.

Once these specific tests confirm no structural disease, **your medical investigation is complete.**

---

## Why "Cervical Dizziness" is Usually a Myth

Patients are routinely told that minor cervical disc protrusions (C5-C6) are compressing their arteries and causing continuous dizziness. 

Anatomically and hemodynamically, this is virtually impossible. True vertebrobasilar insufficiency produces profound focal neurological deficits (ataxia, drop attacks, diplopia, dysarthria), not chronic 24/7 unsteadiness in a grocery store.

The chronic neck pain you feel is the **result** of protective muscle armor generated by high anxiety and hyper-vigilant posture—not the primary cause of your balance dysfunction.

---

## Action Protocol

1. Collect all your normal MRI scans and lab reports into a single physical folder.
2. Write across the front cover: **"Structural Integrity Confirmed: All Hardware Intact."**
3. Make a conscious commitment: **No more speculative physician visits, no more repetitive MRIs.** Your path is now neuro-vestibular re-education.
`);

// 03_baseline_tests.md
writeCh('03_baseline_tests.md', `# Quantifying Baseline Metrics: HADS and DHI

*If you cannot measure it, you cannot systematically manage it. Establishing objective neurological and psychological baselines.*

---

## Why Objective Metrics Matter

PPPD recovery is rarely linear. It unfolds in micro-improvements across weeks. Because the brain possesses a strong negativity bias during high-stress states, you will frequently feel *"nothing is changing"* even when your balance system has improved by 40%.

To eliminate subjective distortion, we utilize the two globally accepted clinical inventories:
1. **DHI (Dizziness Handicap Inventory)**
2. **HADS (Hospital Anxiety and Depression Scale)**

---

## 1. Dizziness Handicap Inventory (DHI)

Developed by Jacobson & Newman (1990), the DHI is a 25-question inventory quantifying the physical, emotional, and functional impact of dizziness.

**Scoring System:**
- Yes = 4 points
- Sometimes = 2 points
- No = 0 points

**Severity Stratification:**
- **0–30 points:** Mild handicap
- **31–60 points:** Moderate handicap
- **61–100 points:** Severe handicap

A reduction of **18 points or more** represents clinically significant objective rehabilitation progress.

---

## 2. Hospital Anxiety and Depression Scale (HADS)

A 14-item inventory divided into two subscales (7 questions for Anxiety - HADS-A, 7 questions for Depression - HADS-D).

**Subscale Scoring:**
- **0–7 points:** Normal range
- **8–10 points:** Subclinical / borderline
- **11–21 points:** Clinically significant anxiety/depression

In PPPD, HADS-A scores almost always correlate directly with DHI scores: as central autonomic anxiety is down-regulated, vestibular handicap scores drop proportionally.

---

## Action Protocol

1. Complete both the DHI and HADS inventories today.
2. Record your baseline scores in your tracking log:
   - \`Date: [Today]\`
   - \`DHI Total: [Score/100]\`
   - \`HADS-A (Anxiety): [Score/21]\`
   - \`HADS-D (Depression): [Score/21]\`
3. Set a recurring reminder to retake both tests exactly once every 30 days. Never test daily.
`);

// SEO landing articles (30-40)
writeCh('30_treatment_overview.md', `# Evidence-Based PPPD Treatment: The 5-Pillar Recovery Protocol

*A comprehensive clinical overview of proven therapeutic modalities that permanently reverse persistent postural-perceptual dizziness.*

---

PPPD is fully reversible. The gold standard international protocol combines five synergistic interventions:

1. **Vestibular Rehabilitation Therapy (VRT):** Tailored desensitization exercises to recalibrate the Vestibulo-Ocular Reflex (VOR) and re-weight sensory inputs away from visual reliance.
2. **Cognitive Behavioral Therapy (CBT) & Metacognitive Therapy (MCT):** Eliminating the Cognitive Attentional Syndrome (CAS), threat monitoring, and avoidance behaviors.
3. **Graded Exposure:** Systematically dismantling sensory phobias associated with supermarkets, driving, wide open spaces, and crowded environments.
4. **Somatic Recalibration & Physical Activity:** Dissolving cervical muscle armor via Jacobson Progressive Muscle Relaxation and re-engaging aerobic exercise.
5. **Pharmacotherapy (SSRIs/SNRIs):** Selective serotonin reuptake inhibitors acting as central neuromodulators to dampen hyperactive sensory amplification when needed.

Full recovery requires 2 to 6 months of disciplined, structured execution.
`);

writeCh('31_chronic_dizziness.md', `# Chronic Dizziness: Differential Diagnosis & When It Is PPPD

*Understanding the root causes of constant unsteadiness, floating sensations, and non-vertiginous dizziness.*

---

Chronic non-spinning dizziness lasting longer than three months is most frequently caused by functional neuro-vestibular dysregulation rather than structural damage.

**Key Characteristics of PPPD Dizziness:**
- Non-rotational (rocking, floating, swaying like on a boat).
- Continuous background presence that waxes and wanes depending on sensory load and stress.
- Worsened by upright posture and complex visual environments (visual vertigo).
- Preserved motor strength and normal cranial imaging.

Understanding that chronic dizziness is an acquired software miscalibration removes the paralyzing fear that fuels symptom chronification.
`);

writeCh('32_unsteadiness.md', `# Unsteadiness and "Cotton-Wool" Legs: Neurological Mechanism

*Why your legs feel like rubber, the ground feels unstable, and why you will not collapse.*

---

The sensation of "cotton-wool legs" and unsteadiness while walking is one of the most distressing symptoms of PPPD.

**The Physiology Behind the Sensation:**
When the brain's autonomic alarm is active, postural muscle groups undergo chronic micro-spasms. Antagonist and agonist muscle groups contract simultaneously in a "high-stiffness" protective strategy. 

This simultaneous contraction exhausts muscular energy reserves rapidly and alters proprioceptive feedback signals traveling up the spinal cord to the cerebellum. The brain interprets this altered sensory stream as "instability," generating the false perception of swaying.

You have not lost motor control. Your reflexes and muscular strength are intact. As autonomic hyper-vigilance drops and muscle tone normalizes, stability returns.
`);

writeCh('33_brain_fog.md', `# Brain Fog and Cognitive Fatigue in Vestibular Disorders

*Why thinking feels sluggish, memory lapses occur, and your head feels filled with heavy cotton.*

---

Cognitive sluggishness, heavy head pressure, and brain fog in PPPD stem directly from **computational resource allocation**.

Under healthy conditions, balance integration occurs automatically in subcortical structures (cerebellum and vestibular nuclei), consuming almost zero conscious cortical bandwidth.

In PPPD, the brain shifts balance into conscious, cortical control. The prefrontal cortex is forced to micro-manage every footstep, posture adjustment, and visual glance. This high-load processing monopolizes working memory and executive function, resulting in intense cognitive fatigue and brain fog.

Once balance is returned to automatic subconscious processing via vestibular rehabilitation, full cognitive clarity returns.
`);

writeCh('34_cbt_for_dizziness.md', `# Cognitive Behavioral Therapy & MCT for PPPD

*How cognitive restructuring and metacognitive detachment dismantle the vicious anxiety-dizziness loop.*

---

Psychotherapy for PPPD is not about "pretending symptoms don't exist." It is targeted neuro-cognitive retraining.

**The CBT/MCT Framework:**
- **Symptom Interpretation:** Transforming catastrophic appraisals (*"I am collapsing," "My brain is damaged"*) into neutral biological observations (*"This is temporary sympathetic arousal"*).
- **Elimination of Hyper-Scanning:** Training attentional focus away from internal balance sensations back to external reality.
- **De-escalation of Safety Behaviors:** Stopping unnecessary grip-holding, wall-touching, and sunglasses usage in indoor environments.

Metacognitive therapy teaches the nervous system to process balance signals without generating secondary fear responses.
`);

writeCh('35_psychosomatic_dizziness.md', `# Psychosomatic & Psychogenic Dizziness: Breaking the Stigma

*Why functional dizziness is physical, measurable, and fundamentally treatable.*

---

Calling dizziness "psychosomatic" does not mean it is fabricated or "in your head." 

It means that psychological stress, prolonged nervous system exhaustion, and autonomic dysregulation have produced tangible, physical alterations in vestibular sensory weighting.

The brain actively down-regulates vestibular canal signals and over-weights visual and proprioceptive inputs. By addressing the nervous system holistically through somatic regulation and desensitization, normal sensory equilibrium is restored.
`);

writeCh('36_pppg_symptoms.md', `# Comprehensive Guide to PPPD Symptoms & Manifestations

*A complete clinical review of primary, secondary, and autonomic features of Persistent Postural-Perceptual Dizziness.*

---

PPPD presents with a rich spectrum of neuro-sensory manifestations:
- Rocking, swaying, and tilting sensations while upright.
- Hypersensitivity to visual motion (grocery aisles, crowds, action movies).
- Spatial disorientation and derealization.
- Suboccipital neck stiffness and tension headaches.
- Autonomic palpitations, tremors, and temperature dysregulation.

Recognizing this unified symptom cluster prevents unnecessary diagnostic procedures and focuses treatment on effective rehabilitation.
`);

writeCh('37_pppg_dizziness.md', `# PPPD Dizziness vs. Vestibular Neuritis and BPPV

*Understanding how acute vestibular triggers evolve into chronic functional disorders.*

---

Many cases of PPPD originate from an acute vestibular event:
1. **BPPV:** Mechanical displacement of otoconia into semicircular canals causing brief, violent spinning.
2. **Vestibular Neuritis:** Acute viral inflammation of the vestibular nerve causing severe rotatory vertigo for 24–72 hours.
3. **Vestibular Migraine:** Episodic neuro-vascular balance disturbance.

While the original structural condition resolves within days or weeks, the brain can fail to deactivate its emergency postural compensation protocol. This persistent high-stiffness state is PPPD.
`);

writeCh('38_pppg_mkb.md', `# PPPD in ICD-11: Official Diagnostic Classification

*International recognition, clinical taxonomy under code AB32.0, and clinical legitimacy.*

---

For decades, functional balance disorders were categorized under ambiguous terms such as Phobic Postural Vertigo, Space-Motion Discomfort, or Chronic Subjective Dizziness.

In 2017, the World Health Organization (WHO) formally integrated **PPPD** into the 11th Revision of the International Classification of Diseases (**ICD-11: AB32.0**).

This inclusion cemented PPPD as an officially validated, non-psychotic functional neuro-vestibular disorder, opening the door for standardized, evidence-based clinical protocols worldwide.
`);

writeCh('39_pppg_what_is.md', `# Understanding PPPD in Simple Terms: The Complete Guide

*A straightforward, non-technical explanation of how balance works and how the brain can be recalibrated.*

---

Imagine your brain balance center as a three-legged stool supported by:
1. Your inner ears (vestibular system)
2. Your eyes (visual system)
3. Your joints and muscles (proprioception)

When your nervous system is overwhelmed by prolonged stress or an acute vertigo episode, it stops trusting the inner ears and tries to balance exclusively using the eyes and stiffened muscles.

This causes extreme fatigue, visual vertigo in stores, and rocking sensations. Recovery consists of teaching the brain to trust the inner ears again and relax the over-stiffened muscles.
`);

writeCh('40_derealization_pppg.md', `# Derealization & Depersonalization in Vestibular Disorders

*Why the world feels surreal, flat, or behind glass—and why it is a protective neurological reflex.*

---

Derealization (feeling detached from surroundings) and depersonalization (feeling disconnected from one's own body) are among the most frightening co-symptoms of PPPD.

**The Neurological Fuse:**
When sensory input (conflicting balance signals) and autonomic anxiety reach an overwhelming threshold, the temporoparietal junction and limbic system activate an involuntary "circuit breaker."

This blunts emotional perception and sensory sharpness to prevent neural overload. It is **not psychosis, schizophrenia, or cognitive damage.** It is a protective reflex that automatically switches off once autonomic safety is re-established.
`);

console.log('✅ Module 0 English chapters generated successfully.');
