import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN_DIR = os.path.join(ROOT, 'chapters_en')
os.makedirs(EN_DIR, exist_ok=True)

def write_ch(filename, content):
    filepath = os.path.join(EN_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f"[EXPANDED EN] Generated {filename} ({len(content.encode('utf-8'))} bytes)")

# 44_attention_training.md
write_ch('44_attention_training.md', """# Attentional Focus in Anxiety and PPPD: Breaking Compulsive Body-Scanning

*Why anxiety glues attention to the body, how hyper-focus amplifies unsteadiness and panic tenfold, and evidence-based attention training techniques (ATT, Open Focus, Exteroception) to reclaim mental sovereignty.*

---

## 1. Attention Held Hostage by Sensory Alarm

Recall your typical morning with chronic unsteadiness or vestibular distress:

Your eyes open, and before your feet even touch the floor, your central processor executes an automated diagnostic script:
*   *"Is my head heavy or clear?"*
*   *"Is there visual lag before my eyes?"*
*   *"Is my neck tense? Is my heart rate steady?"*

You step out of bed, walk to the bathroom, and your conscious awareness narrows to a microscopic focal point. You monitor every millimeter of your physiology: how your soles strike the tile, whether you swayed in the hallway, whether bending over the sink provoked dizziness.

When you step onto the street, this surveillance mode never disengages. In the grocery store, you do not browse products—you monitor how your retinas react to fluorescent lights and high-contrast packaging. In conversation with colleagues, you are half-absent because the other half of your brain is computing: *"The floor felt like it dropped. If I collapse, can I grab the desk in time?"*

In clinical psychology and psychiatry, this state is classified as **Interoceptive Hyper-Scanning (Body Checking)** and **Loss of Attentional Flexibility**.

---

## The "Just Distract Yourself!" Fallacy

Every individual with PPPD, panic disorder, or health anxiety has received this superficial advice from well-meaning friends or uninformed doctors: *"Just don't think about it! Distract yourself with a movie, read a book, focus on work."*

And you tried. You open a novel, read two paragraphs, and realize your eyes scanned the text while 100% of your cognitive bandwidth remained locked on your temples or rubber legs.

Why does voluntary distraction fail catastrophically?

Because of a fundamental law of neuropsychology discovered by Harvard Professor Daniel Wegner—**The Ironic Process Theory** (the classic *"do not think about a white bear"* paradox).

When you command your brain: *"Stop paying attention to the dizziness!"*, the brain must initiate two competing processes:
1. **Operating Process:** Searches for a neutral external target (book, work, film).
2. **Monitoring Process (The Supervisor):** Rapidly checks at high frequency: *"Are we currently NOT thinking about dizziness?"*

To perform this check, the supervisor must keep the memory and image of dizziness constantly active in working memory! Voluntary suppression **cements the symptom** into conscious awareness. You are attempting to extinguish a fire with gasoline.

---

## 2. Neurophysiology: The Hardware Architecture of Attention

Attention is not an abstract philosophical concept. It is a strictly localized physiological mechanism for routing central nervous system computational power. **It is the hardware traffic router of your brain.**

Where your attention focuses, your brain routes up to 90% of its metabolic resources, neural firing, and regional cerebral blood flow:

```
[Attention Directed Inward]  ──► [Lens Effect (Hyper-Focus)] ──► Signal amplified 10x
[Attention Directed Outward] ──► [Radar Effect (Exteroception)] ──► Internal noise fades
```

### 1. DMN vs. CEN: The Global Network Toggle
Two competing global networks govern conscious processing:
*   **Default Mode Network (DMN):** Activates during internal rumination, past regret, future dread, and somatic body-checking. The DMN is the incubator of anxiety and functional disorders.
*   **Central Executive Network (CEN / Task-Positive Network):** Activates when attention engages with external, sensory, or motor problem-solving in the real world.

**Fundamental Neurobiological Law:** DMN and CEN exist in an **anti-correlated, reciprocal relationship**. When you fully engage external sensory processing (CEN), functional MRI confirms that DMN hyperactivity drops immediately. You cannot panic while your brain is 100% occupied with complex external sensory tasks.

### 2. Thalamic Sensory Gating Breakdown
The **thalamus** is the central hardware firewall of the brain. In health, it filters out 99.9% of subcortical visceral telemetry (normal endolymph micro-currents, facial fascial tension, baseline postural sway).

Under chronic anxiety, the **amygdala** overrides the thalamus: *"System failure possible! Open all diagnostic channels!"* 

The firewall falls. The raw telemetry of normal vestibular physics floods consciousness. You begin physically feeling baseline biological noise that healthy brains discard, and your anxious mind labels this natural noise: *"I am having a stroke, I am collapsing."*

### 3. Neuro-Sensory Amplification (The Macro-Lens Effect)
Attention acts like a 10x optical zoom lens:
*   Minor trapezius stiffness, when focused upon, feels like the neck is encased in solid concrete.
*   Natural center-of-gravity micro-sway (present in all humans from birth) feels like a 9-magnitude earthquake on an open deck.

Somatosensory cortex plasticity dictates: the more hours you spend monitoring a body region, the larger its cortical representation grows and the lower its firing threshold drops. **You literally train your brain to feel dizziness with greater intensity.**

### 4. Narrow Focus vs. Panoramic Open Focus
*   **Narrow Threat Focus (Tunnel Vision):** Rigidly fixed gaze, immobilized eyes, attention clenched onto the symptom. This signals the brain: *"Predator visible! Engage sympathetic fight-or-flight!"* Norepinephrine floods the system, suboccipital arteries constrict, and unsteadiness spikes.
*   **Wide Panoramic Open Focus:** Soft peripheral vision, awareness of space between objects, 360-degree auditory perception. This is the evolutionary biomarker of safety. It immediately stimulates the **dorsal vagal nucleus**, engaging parasympathetic down-regulation, lowering heart rate, and releasing cervical tension.

---

## 3. The 3 Evidence-Based Attention Retraining Protocols

### Protocol 1: Adrian Wells' Attention Training Technique (ATT)
Developed within Metacognitive Therapy, ATT is a structured 12-minute auditory exercise that restores voluntary executive control over attention:

1. **Selective Attention (5 min):** In a room with ambient noise (or using specialized multi-track audio), isolate 5 distinct simultaneous sounds (e.g., clock ticking, traffic rumble, refrigerator hum, distant voices, your own breath). Focus on one sound exclusively for 60 seconds, actively ignoring the other four.
2. **Rapid Attentional Switching (4 min):** Rapidly shift focus from sound to sound every 10–15 seconds as prompted: clock $\rightarrow$ traffic $\rightarrow$ breath $\rightarrow$ refrigerator $\rightarrow$ clock.
3. **Divided Panoramic Attention (3 min):** Expand awareness to perceive all 5 distinct sounds simultaneously as a unified acoustic field.

*Clinical Evidence: 4 weeks of daily ATT practice significantly reduces somatic symptom severity and restores thalamic sensory gating.*

### Protocol 2: Dr. Les Fehmi's Open Focus Protocol
1. Soften your gaze and look straight ahead without staring hard at any single object.
2. Notice the empty space between your eyes and the screen in front of you.
3. Notice the space between your left ear and your right ear.
4. Notice your peripheral visual field—what is visible to your far left and far right without moving your eyeballs?
5. Allow attention to rest in the awareness of **space and emptiness**. Within 60 seconds, EEG monitors show massive synchronous alpha wave production (8–12 Hz) across occipital and parietal lobes.

### Protocol 3: External Sensory Grounding (The Exteroceptive Radar)
Whenever you walk outdoors and notice your focus drifting downward into your neck or gait:
*   **Lift your gaze to the horizon line (The Horizon Rule).**
*   Identify 3 distant architectural details: roof angles, window frames, tree branches.
*   Actively listen for the furthest audible sound (distant highway, airplane, wind).
*   Feel the cool air on the skin of your cheeks.

---

> ### Action Protocol (Homework 44):
> 
> 1. Execute the 12-minute **Attention Training Technique (ATT)** once daily for 14 consecutive days.
> 2. Practice **Panoramic Open Focus** for 60 seconds whenever you feel trapped in supermarket or transit over-stimulation.
> 3. Enforce the **Horizon Rule**: while walking outdoors, keep your chin parallel to the ground and look at distant buildings, entirely forbidding glances at your feet.""")

# 47_meditation.md
write_ch('47_meditation.md', """# Meditation & Vagal Regulation in PPPD: Calming the Sensitized Autonomic Core

*Why classical mindfulness frequently triggers panic in vestibular disorders, the neurobiology of alpha rhythms, and 4 safe somatic down-regulation protocols.*

---

## Why Traditional Mindfulness Can Backfire in PPPD

Standard mindfulness instructions tell you to *"close your eyes, sit still, and focus intently on your breath and internal body sensations."*

For an individual with PPPD, health anxiety, or central sensitization, this is a recipe for an immediate panic flare:
*   Closing your eyes removes the primary visual crutch, immediately unmasking raw vestibular micro-sway.
*   Directing focus to the chest or throat triggers interoceptive hyper-vigilance: every heartbeat feels like an arrhythmia; every breath feels restricted.
*   Sitting rigidly still prevents physical kinetic discharge of circulating adrenaline.

**We do not use internal hyper-focus meditation. We use Neuro-Somatic Vagal Down-Regulation.**

---

## The 4 Safe Protocols for Sensitive Nervous Systems

### 1. Non-Sleep Deep Rest (NSDR) / Yoga Nidra (Lying Supine)
Developed by Dr. Andrew Huberman and rooted in classical Yoga Nidra:
*   Lie comfortably flat on your back on a firm mattress or floor mat.
*   Listen to an external guided audio voice.
*   The protocol systematically sweeps attention through external sensory awareness and structured long-exhalation breathing (inhale 4s, exhale 8s).
*   *Outcome:* Drops heart rate variability into deep parasympathetic restoration without triggering interoceptive panic.

### 2. The Oculocardiac Reflex & Vagus Nerve Reset
The eyes are a direct physical extension of the brain. Moving the eyes alters autonomic tone:
1. Lie supine, interlock your fingers behind the base of your skull, supporting your head.
2. Keeping your head completely stationary pointing at the ceiling, shift only your eyeballs to the far right as far as comfortable.
3. Hold this gaze for 30 to 60 seconds without moving your neck.
4. Wait for an involuntary somatic sigh, swallow, or yawn—this is the physical biomarker of **vagal parasympathetic engagement**.
5. Return eyes to center for 10 seconds, then repeat looking to the far left.

### 3. Panoramic Alpha Wave Induction
1. Sit comfortably facing a room or outdoor landscape.
2. Without moving your head, expand your visual awareness to take in the ceiling, floor, left wall, and right wall simultaneously.
3. Notice the ambient sounds on both sides of your head.
4. Maintain this broad, diffuse open awareness for 3 to 5 minutes.
5. This physical posture inhibits sympathetic fight-or-flight signaling in the locus coeruleus.

### 4. Physiological Extended Exhale Breathing
$$\text{Inhale (Nose, 4s)} \longrightarrow \text{Exhale (Pursed Lips, 8s)} \longrightarrow \text{Pause (2s)}$$
The extended exhalation increases intra-thoracic pressure, slowing blood return to the right atrium. The sinoatrial node responds by immediately lowering the heart rate via vagal acetylcholine release.

---

> ### Action Protocol (Homework 47):
> 
> 1. Perform the **Oculocardiac Vagus Reset** tonight before sleep (1 minute per side).
> 2. Practice 10 minutes of guided **NSDR / Yoga Nidra** lying down in the afternoon.
> 3. Never force eyes-closed silent sitting if it spikes anxiety; always use external audio guidance or panoramic open-focus.""")

# 42_vestibular_migraine.md
write_ch('42_vestibular_migraine.md', """# Vestibular Migraine & PPPD: The Interconnected Twin

*When chronic unsteadiness is amplified by trigeminal-vestibular neuro-inflammation—and the dual clinical protocol to resolve both.*

---

## The Common Misconception: "I Don't Have a Headache"

Many individuals with chronic disequilibrium are shocked when a neurotologist diagnoses **Vestibular Migraine (VM)** alongside PPPD:
*   *"I don't have pounding head pain! How can I have a migraine?"*

In modern neuro-otology, **headache is an optional symptom of migraine**. 

Vestibular Migraine is primarily a **central neuro-vascular processing disorder** involving hypersensitivity of the trigeminovascular system and brainstem vestibular nuclei. It manifests as episodic or persistent rocking, motion sensitivity, light glare intolerance (photophobia), visual motion sickness, and brain fog.

Up to **40% of patients with PPPD have concurrent Vestibular Migraine**. The two conditions cross-sensitize each other:
*   The migraine brainstem irritability lowers the threshold for vestibular mismatch.
*   The PPPD anxiety loop provides continuous sympathetic fuel to ignite migraine neural pathways.

---

## Clinical Diagnostic Criteria for Vestibular Migraine (Barany Society & IHS)

1. At least 5 episodes of vestibular symptoms of moderate or severe intensity, lasting between 5 minutes and 72 hours.
2. Current or previous history of migraine (with or without aura).
3. One or more migraine features with at least 50% of the vestibular episodes:
   *   Throbbing headache, unilateral location, aggravation by physical activity.
   *   Photophobia (light sensitivity) and phonophobia (sound sensitivity).
   *   Visual aura (scintillating scotomas, zigzag lights, visual snow).
4. Symptoms not better accounted for by another vestibular diagnosis.

---

## The Triple-Target Treatment Protocol

### 1. Dietary & Lifestyle Stabilization (The "Heal Your Headache" Protocol)
Migraine brains despise variability. Stabilize neurological baselines:
*   **Sleep Schedule:** Wake and sleep at the exact same hour 7 days a week (including weekends).
*   **Hydration & Meals:** Never skip meals; maintain steady blood glucose. Drink 2.5 liters of water daily.
*   **Dietary Triggers:** Temporarily eliminate the top neuro-inflammatory triggers for 60 days: aged cheeses, MSG, artificial sweeteners (aspartame), excess red wine, and cured meats containing nitrates.

### 2. Evidence-Based Nutraceutical Neuromodulation
Under physician supervision, targeted supplements stabilize mitochondrial neural energy:
*   **Magnesium Glycinate / Malate / Threonate:** 400–600 mg elemental daily (calms NMDA receptor excitability).
*   **Riboflavin (Vitamin B2):** 400 mg daily (optimizes mitochondrial brain metabolism).
*   **Coenzyme Q10:** 150–300 mg daily.

### 3. Integrated Vestibular Desensitization
Combine migraine stabilization with daily gentle VOR gaze stabilization gymnastics. Never push through acute migraine aura; resume VRT immediately once the acute episode resolves.""")

# 45_shadow_work.md
write_ch('45_shadow_work.md', """# Shadow Work & Healthy Boundaries: The Final Psychological Shield

*Integrating repressed parts of the psyche, eliminating people-pleasing, and setting impenetrable boundaries against autonomic burnout.*

---

## The "Good Boy / Good Girl" Neurological Profile

In clinical practice, the demographic profile of individuals who develop PPPD and severe somatic functional disorders is remarkably consistent:
*   High conscientiousness and perfectionism.
*   Hyper-responsibility for the emotions and wellbeing of others.
*   Deep fear of interpersonal conflict or being perceived as "difficult."
*   Chronic suppression of authentic anger, frustration, and personal boundaries.

Carl Jung called the suppressed, forbidden aspects of our personality the **Shadow**.

When you spend decades suppressing healthy anger (*"I must always be kind, helpful, reliable, and never complain"*), your nervous system absorbs the emotional compression. You swallow rage; your suboccipital muscles and jaw clamp shut to hold it in.

**PPPD is often the physical boundary your body created when you refused to set verbal boundaries with your mouth.**

---

## Reclaiming Healthy Aggression and the Power of "No"

Healthy anger is not violence; it is biological fuel designed to protect your physical and energetic perimeter.

When you restore your ability to say:
*   *"No, I cannot take on this extra workload."*
*   *"No, this behavior is unacceptable to me."*
*   *"No, I need to rest today and I will not attend this event."*

The chronic internal emotional tension dissolves. When you no longer need the symptom to protect you from overwhelm, the nervous system safely releases the physical alarm.""")

# 46_victim_state.md
write_ch('46_victim_state.md', """# Exiting the Victim State: Radical Ownership of Your Rehabilitation

*Moving from passive sufferer ("Why did this happen to me?") to active neuro-architect.*

---

## The Karpman Drama Triangle in Chronic Illness

In long-term chronic dizziness, patients frequently become trapped inside the **Karpman Drama Triangle**:
*   **The Victim:** *"I am helpless. My body betrayed me. Why did fate do this to me?"*
*   **The Persecutor:** Blaming doctors, family members, or employers for failing to understand.
*   **The Rescuer:** Endlessly searching for a magical guru, a secret pill, or an external savior to cure them overnight.

This triangle is an energy-drain trap. As long as you remain in the Victim posture, you outsource your agency to external forces.

---

## The Shift to Radical Neuro-Architect Ownership

True 100% recovery begins the exact moment you declare:
> *"Nobody is coming to save me. No doctor can rewire my synapses for me. They can provide clinical maps and tools, but I am the only human being who can execute the daily VRT drills, the PMR relaxation, the graded exposure, and the cognitive restructuring. I am taking 100% radical responsibility for my recovery."*

When you adopt radical ownership, setbacks stop being devastating punishments; they become neutral data points in your ongoing engineering recalibration.""")

# 26_sleep.md
write_ch('26_sleep.md', """# Sleep Architecture & PPPD: Conquering Morning Disequilibrium

*Why insomnia tortures the nervous system, why morning unsteadiness feels intense, and how to repair sleep physiology.*

---

## The Neurobiology of Sleep in Functional Balance Disorders

Sleep is not passive inactivity; it is the vital metabolic window when the brain's **glymphatic system** clears neurotoxic metabolic debris and the cerebellum consolidates daytime neuroplastic motor learning (including VRT adaptations).

In PPPD, chronic sympathetic hyper-arousal fragments sleep architecture:
*   Suppresses Slow-Wave Deep Sleep (N3/SWS), leaving suboccipital muscles contracted all night.
*   Induces micro-arousals, leading to unrefreshing sleep.
*   Primes the **Cortisol Awakening Response (CAR)** to spike violently upon waking.

---

## The 5 Pillars of Vestibular Sleep Hygiene

1. **Light Timing:** View 10–15 minutes of natural morning sunlight within 30 minutes of waking to anchor the suprachiasmatic nucleus circadian clock.
2. **Thermal Drop:** Sleep in a cool room (18–19°C / 65–68°F); the core body temperature must drop 1°C to initiate deep slow-wave sleep.
3. **The 3-2-1 Rule:** Stop eating 3 hours before bed, stop fluid overload 2 hours before bed, stop all blue-light screen exposure 1 hour before bed.
4. **Magnesium Glycinate:** 400mg taken 45 minutes before sleep enhances central GABAergic inhibitory neurotransmission.
5. **Stimulus Control (The 20-Minute Rule):** If you are awake in bed for more than 20 minutes, get out of bed. Go to a dimly lit room, read a physical book in a comfortable chair, and return to bed only when sleepy. Never associate the bed with tossing, turning, and panic.""")

# 28_suppressed_emotions.md
write_ch('28_suppressed_emotions.md', """# Suppressed Emotions & TMS: Dr. John Sarno's Framework for Dizziness

*How unexpressed rage and grief generate physical muscular tension—and how emotional journaling breaks the somatic spasm.*

---

## Tension Myositis Syndrome (TMS) Applied to PPPD

Dr. John Sarno, Professor of Rehabilitation Medicine at NYU, discovered that the human autonomic nervous system frequently creates somatic physical symptoms (pain, spasms, autonomic dysfunction) as an unconscious defense mechanism to distract the conscious mind from overwhelming, forbidden emotional rage, grief, or vulnerability.

PPPD is the neuro-vestibular manifestation of TMS.

When unconscious emotional pressure reaches boiling point, the brain generates physical unsteadiness and brain fog. Your conscious mind becomes 100% consumed with balance tests, doctors, and symptoms, effectively burying the forbidden emotional conflict beneath somatic terror.

---

## The 15-Minute Unfiltered Emotional Journaling Protocol

1. Set a private 15-minute timer once daily.
2. Write raw, unfiltered, completely uncensored thoughts about forbidden feelings:
   *   Rage at family members or partners.
   *   Resentment toward work or financial burdens.
   *   Grief and terror you refuse to acknowledge in public.
3. Do not worry about grammar, ethics, or logic. Let the raw emotional shadow speak without judgment.
4. **Immediately destroy the paper** (burn or shred it) once the timer ends.

*Neurobiological Result:* By consciously acknowledging emotional truth, the amygdala no longer needs to generate somatic physical dizziness as a protective distraction.""")

# 29_loved_ones.md
write_ch('29_loved_ones.md', """# Loved Ones & PPPD: A Guide for Families, Spouses & Friends

*A chapter to hand directly to your partner, parents, or friends so they can truly understand what you are experiencing.*

---

## A Direct Letter to Loved Ones

Dear Reader,

The person who handed you this book looks completely normal on the outside. Their cranial MRI is clear. Their blood tests are normal. They have no visible casts, bandages, or physical wounds.

Because of this, you may be tempted to believe:
*   *"They are exaggerating."*
*   *"It is just stress; they need to snap out of it."*
*   *"If they just exercised more or thought positive thoughts, it would go away."*

Please understand this clinical reality: **their suffering is 100% physically real.**

Internally, their brain's balance integration system is navigating a continuous sensory storm. Living with PPPD is physiologically equivalent to standing on the deck of a ship tossing in heavy seas—24 hours a day, 7 days a week, for months without relief.

---

## How You Can Truly Help

### What to DO:
1. **Validate Their Experience:** Say: *"I know this is exhausting and terrifying, and I believe you. You are safe, and we will get through this."*
2. **Support Daily Rehabilitation:** Encourage their daily 30-minute walk, their VRT exercises, and their quiet relaxation time without guilt.
3. **Offer Grounded Calm:** Be the stable anchor in the storm. When they feel unsteady, your calm, unpanicked presence physically down-regulates their nervous system.

### What NOT to Do:
1. Do not dismiss their symptoms as "just in your imagination."
2. Do not offer random unproven internet cures or encourage endless new doctor consultations.
3. Do not demand instant recovery. Healing a miscalibrated nervous system takes months of steady practice.

Your patient, steady understanding is one of the most powerful biological catalysts for their full recovery.""")

print("[EXPANDED EN] Successfully expanded all deep clinical chapters.")
