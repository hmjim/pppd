import os

def write_ch(filename, content):
    p = os.path.join('chapters_en', filename)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f"[MOD3 FULL] Written {filename} ({len(content.encode('utf-8'))} bytes)")

# 14_neuroplasticity.md
write_ch('14_neuroplasticity.md', """# Applied Neuroplasticity: Rewiring the Balance Cortex

*The biological mechanisms of synaptic remodeling, Hebbian learning, long-term potentiation, and how deliberate behavioral practice reconstructs the balance map.*

---

## 1. The Core Principle: "Neurons That Fire Together, Wire Together"

The central dogma of modern neuroscience (Hebbian theory) dictates that neural circuits are dynamic, living architectures that physically remodel themselves in response to repeated experience, attention, and sensory inputs:

* **Long-Term Potentiation (LTP)**: Repeated simultaneous activation of synaptic junctions strengthens the connection, lowering the resistance and making future signal transmission effortless.
* **Synaptic Pruning & Long-Term Depression (LTD)**: Inactive neural pathways are systematically dismantled by microglia and astrocytes over time.

In **PPPD**, you have spent weeks or months inadvertently executing a high-frequency neuroplastic training regimen:
* **The Negative Circuit**: *Sway sensation ➔ Catastrophic thought ➔ Adrenaline surge ➔ Suboccipital clamping ➔ Re-checking balance*.
* By repeating this sequence thousands of times, you constructed a high-bandwidth, superconducting neural superhighway for dizziness.

```
                      ┌──────────────────────────────────────────────┐
                      │          HEBBIAN REWIRING IN PPPD            │
                      └──────────────────────────────────────────────┘
                                             │
                   ┌─────────────────────────┴─────────────────────────┐
                   ▼                                                   ▼
      ┌─────────────────────────┐                         ┌─────────────────────────┐
      │ OLD PATHWAY (DIZZINESS) │                         │ NEW PATHWAY (STABILITY) │
      │ • Body scanning         │                         │ • Somatic relaxation    │
      │ • Fear & avoidance      │                         │ • Sensory habituation   │
      │ • High synaptic gain    │                         │ • Panoramic exterocept. │
      └─────────────────────────┘                         └─────────────────────────┘
                   │                                                   │
                   ▼ (Starve with disuse / LTD)                        ▼ (Feed with practice / LTP)
      ┌─────────────────────────┐                         ┌─────────────────────────┐
      │   Circuit Atrophies     │                         │   Circuit Dominates     │
      └─────────────────────────┘                         └─────────────────────────┘
```

---

## 2. Neuroplasticity Requires Friction and Effort

Many patients expect neuroplasticity to occur passively while resting. However, neurobiological research (Dr. Michael Merzenich, Dr. Eric Kandel) shows that the adult brain releases the neuromodulators required for neuroplastic remodeling (**Acetylcholine** for focus and **Dopamine** for reinforcement) only under two specific conditions:

1. **High Attentional Focus**: You must actively engage the prefrontal cortex during the task.
2. **Prediction Error & Struggle**: The brain alters its synaptic maps only when it encounters computational friction (e.g., during [VRT exercises](06_vestibular.html) or [in-vivo exposure](12_exposure.html) where balance feels challenged).

> **The Struggle Principle**: When you feel dizzy during a vestibular exercise and choose to breathe through it without fleeing, your brain is actively laying down new synaptic connections. That unpleasant sensation is the physical feeling of neuroplastic rewiring.

---

## 3. The 3 Laws of Neuroplastic Recovery

1. **Law of Specificity**: The brain adapts precisely to the demands placed upon it. If you practice walking on uneven grass, you get better at walking on grass. If you practice lying in bed scanning your neck, you get better at feeling dizzy in bed.
2. **Law of Repetition & Consistency**: 15 minutes of daily practice every single day produces 10x more cortical remodeling than a 2-hour marathon once a week.
3. **Law of Emotional Charge**: Fear accelerates negative neuroplasticity. By neutralizing fear through metacognitive reframing, you stop reinforcing the dizziness highway.
""")

# 15_metacognition.md
write_ch('15_metacognition.md', """# Metacognitive Therapy (MCT): Thinking About Thinking

*How metacognitive beliefs control the duration of suffering, dismantling positive and negative metacognitions, and the practice of Detached Mindfulness.*

---

## 1. The Architecture of Metacognition

Traditional Cognitive Behavioral Therapy (CBT) focuses on the **content** of thoughts: evaluating whether the thought *"I might fall"* is realistic or rational.

**Metacognitive Therapy (MCT)**, pioneered by Prof. Adrian Wells, operates at a higher executive level. It examines your **metacognitions** — your beliefs *about* your thoughts and internal cognitive processes.

```
       LEVEL 1: COGNITIVE (CBT)       ──► "I feel dizzy, what if I collapse in the store?"
       LEVEL 2: METACOGNITIVE (MCT)   ──► "Is it useful to analyze this thought for the next 2 hours?"
```

In PPPD, the suffering is not caused by the initial micro-sensation of unsteadiness. It is generated entirely by the **metacognitive decision to launch Cognitive Attentional Syndrome (CAS)**: analyzing, worrying, ruminating, and monitoring.

---

## 2. Dismantling the Metacognitive Architecture

| Type of Belief | The Flawed Metacognitive Belief | The Metacognitive Reality |
| :--- | :--- | :--- |
| **Positive Meta-Belief** | *"Analyzing every sensation in my head protects me from sudden collapse."* | Constant monitoring degrades natural cerebellar balance reflexes and spikes anxiety. |
| **Positive Meta-Belief** | *"I need to figure out why I'm dizzier today than yesterday."* | Daily symptom analysis changes nothing about recovery and keeps the DMN fired up. |
| **Negative Meta-Belief** | *"My worrying and dizziness are uncontrollable forces."* | Worry is a voluntary, conscious cognitive activity that you can choose to initiate or postpone. |
| **Negative Meta-Belief** | *"This constant brain fog will permanently damage my intelligence."* | Brain fog is a reversible autonomic state (dorsal vagal freeze), zero structural harm. |

---

## 3. The Practice of Detached Mindfulness (DM)

Detached Mindfulness is the clinical core of MCT:
* **Detached**: You do not engage with, elaborate on, dispute, or try to solve the thought.
* **Mindful**: You are fully aware of the presence of the thought without reacting.

### The Passing Train Analogy:
Imagine you are standing on a train station platform. Intrusive thoughts and sensations of dizziness are freight trains rolling past.
* **The CAS Mistake**: You jump onto the train, enter every freight car, examine the cargo, and let it take you to Panic Town.
* **Detached Mindfulness**: You stand firmly on the platform. You watch the train rumble past. You do not board it. You let it roll out of the station.
""")

# 16_cognitive_distortions.md
write_ch('16_cognitive_distortions.md', """# Cognitive Distortions in PPPD: The Mind's Hall of Mirrors

*Cataloging the systematic cognitive errors that amplify vestibular distress (Catastrophizing, All-or-Nothing thinking, Emotional Reasoning) and their clinical corrections.*

---

## 1. How Distorted Cognitions Fuel Vestibular Symptoms

When a person lives with chronic disequilibrium, the cognitive filter becomes warped by chronic limbic activation. The prefrontal cortex generates **cognitive distortions** — automated logical fallacies that misinterpret benign sensory noise as catastrophic medical emergencies.

```
   BENIGN TRANSIENT SWAY ──► COGNITIVE DISTORTION ──► ADRENALINE SPIKE ──► SEVERE DIZZINESS
```

---

## 2. The 7 Primary Cognitive Distortions in PPPD

### 1. Catastrophizing (Magnification)
* **The Thought**: *"My head feels heavy right now. This means I'm going to collapse in front of everyone, an ambulance will be called, and I will be permanently disabled."*
* **The Reality Check**: In all the hundreds of times your head felt heavy, **you have never collapsed**. Catastrophizing takes a 2/10 physical sensation and fabricates a 10/10 Hollywood disaster movie.

### 2. All-or-Nothing Thinking (Black-and-White)
* **The Thought**: *"I had a dizzy spell today during week 6 of rehabilitation. This means the exercises don't work, all my progress is erased, and I am back to square one."*
* **The Reality Check**: Recovery is non-linear. An isolated spike is not an erasure of neural plasticity; it is a normal, expected [anatomy of a setback](20_setback_anatomy.html).

### 3. Emotional Reasoning
* **The Thought**: *"I feel terrifyingly unsteady, therefore I must be in imminent biological danger."*
* **The Reality Check**: Feelings are autonomic neurochemistry, not diagnostic medical facts. A roller coaster creates intense feelings of danger, yet you are completely safe.

### 4. Overgeneralization
* **The Thought**: *"I got dizzy in this supermarket, which means I can never enter any store or public space again."*
* **The Reality Check**: A single sensory overload event in one specific visual setting does not dictate your permanent future capability.

### 5. Mental Filter (Selective Abstraction)
* **The Thought**: Forgetting the 5 hours of clean, steady walking you achieved yesterday, and hyper-focusing exclusively on the 10 minutes of morning unsteadiness.

---

## 3. The 3-Column Thought Record Protocol

When you catch a distorted cognitive spiral, write it down immediately:

| Situation & Trigger | Automated Distorted Thought | Cognitive Distortion Identified | Rational Evidence-Based Reframe |
| :--- | :--- | :--- | :--- |
| Walking across an open parking lot | *"I'm floating. If I don't grab a cart, I'll pass out."* | Catastrophizing & Emotional Reasoning | *"My blood pressure is stable. My vestibular system is adapting. Floating is just sensory noise; I am physically safe."* |
""")

# 17_root_causes.md
write_ch('17_root_causes.md', """# Where Did We Go Wrong? Root Causes and Personality Architecture

*The premorbid psychological profile of PPPD: perfectionism, hyper-responsibility, high neuroticism, and the somatic breaking point.*

---

## 1. The Premorbid Personality Profile

PPPD rarely strikes randomly. In over 80% of clinical cases, patients share a distinct, highly consistent psychological and behavioral profile that existed long before their first vestibular episode:

```
                    ┌──────────────────────────────────────────────────┐
                    │      THE PREMORBID PPPD PERSONALITY MATRIX       │
                    └──────────────────────────────────────────────────┘
                                             │
         ┌───────────────────────────┬───────┴───────────────────┬───────────────────────────┐
         ▼                           ▼                           ▼                           ▼
┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│ Perfectionism    │        │ Hyper-Responsib. │        │ Conflict Avoid.  │        │ High Sensory     │
│ & Over-Control   │        │ & Over-Work      │        │ & Repression     │        │ Processing Sens. │
└──────────────────┘        └──────────────────┘        └──────────────────┘        └──────────────────┘
```

1. **Type-A Perfectionism and Hyper-Control**: A deep-seated psychological need to predict, manage, and control all external variables; extreme intolerance of uncertainty or error.
2. **Hyper-Responsibility and "Super-Parent/Employee" Syndrome**: Inability to say "no," chronic over-functioning, carrying the emotional and logistical burdens of others at the expense of oneself.
3. **Chronic Conflict Avoidance & Emotional Repression**: Inability to express healthy anger, setting weak personal boundaries, prioritizing external approval over authentic needs.
4. **High Sensory Processing Sensitivity**: A genetically sensitive, highly observant nervous system that registers environmental nuances deeply.

---

## 2. The Somatic Breaking Point

For years or decades, your nervous system functioned in a state of **latent autonomic compensation**:
* Operating at 85% battery capacity while pumping cortisol to maintain the facade of total control.
* Then, an acute physiological trigger occurs: an episode of BPPV, a severe viral infection, a panic attack, or intense workplace burnout.
* The system reaches the **tipping point**. The autonomic reserve collapses, and the brain locks into PPPD as a somatic emergency brake to force the individual to stop the unsustainable overdrive.

---

## 3. The Path of Root Realignment

To permanently recover from PPPD, physical exercises alone are insufficient if you return to the exact same lifestyle of hyper-control and emotional neglect:
* **Relinquish the Myth of Total Control**: Life is inherently uncertain. Safety comes not from controlling every variable, but from knowing you can handle discomfort.
* **Establish Firm Boundaries**: Say no to demands that deplete your autonomic battery.
* **Integrate the Shadow**: Allow yourself to experience and express anger, grief, and vulnerability without self-judgment.
""")

# 18_ego.md
write_ch('18_ego.md', """# The Ego: The False Identity and the "Sick Role"

*How chronic illness becomes an identity, secondary gain in neurosis, and dismantling the "I am a sick person" narrative.*

---

## 1. The Formation of the "Patient Identity"

When PPPD persists for months, a profound psychological transformation occurs: the condition transitions from a *temporary medical challenge* into a **core identity**.

The Ego adopts the narrative:
* *"I am a vestibular invalid."*
* *"I am the person who cannot go to restaurants, cannot travel, and must be protected."*
* All daily schedules, relationships, and conversations begin revolving exclusively around symptoms, medical appointments, and physical limitations.

```
  TEMPORARY SYMPTOM (PPPD) ──► PROLONGED FOCUS ──► EGO IDENTIFICATION ("I am broken") ──► CHRONIC ILLNESS
```

---

## 2. Secondary Gain: The Unconscious Defense

In psychoanalysis and somatic medicine, **Secondary Gain** refers to the unconscious psychological benefits derived from being sick:
* Exemption from stressful responsibilities (career pressures, social obligations).
* Guaranteed attention, care, and sympathy from family and partners.
* A universal, socially acceptable excuse for not taking risks or facing fears.

> **Crucial Clarification**: Acknowledging secondary gain does NOT mean you are faking your symptoms or that you "want" to be dizzy. The physical suffering is 100% genuine. However, the unconscious mind may weaponize the symptoms as a shield against life's demands.

---

## 3. Dismantling the Sick Identity

1. **Stop Talking About Dizziness**: Cease giving daily medical updates to friends and family. When asked how you are, respond: *"I am working through my rehabilitation and focusing on my life."*
2. **Re-engage Your True Identity**: You are an engineer, an artist, a parent, an athlete — you are NOT your Vestibulo-Ocular Reflex.
3. **Plan for Health**: Stop structuring your calendar around what dizziness allows. Schedule meaningful life events and bring the dizziness along as an irrelevant passenger until it fades.
""")

# 19_inner_child.md
write_ch('19_inner_child.md', """# The Inner Child & Somatic Safety: Healing the Root Fear

*The neurobiology of childhood attachment trauma, how the inner child uses dizziness as a cry for safety, and self-reparenting somatic protocols.*

---

## 1. Dizziness as a Somatic Alarm from the Inner Child

Beneath the complex neurophysiology of PPPD lies a fundamental emotional reality: **the nervous system is in a state of infantile terror**.

In transactional analysis and IFS (Internal Family Systems), when the adult Ego is hyper-critical, demanding, and perfectionistic, the **Inner Child** feels abandoned, overwhelmed, and unsafe.

When you force your exhausted body through intense work while berating yourself for being weak, the emotional core of your brain (the limbic system) sounds the emergency alarm. Dizziness, unsteadiness, and weakness are somatic cries for rest, protection, and unconditional safety.

```
       ADULT EGO: "You must be perfect! Don't show weakness!" 
                                 │
                                 ▼
       INNER CHILD: "I am exhausted and terrified! I can't hold this up!"
                                 │
                                 ▼
       SOMATIC BRAIN: Activates PPPD & Disequilibrium to Force Rest
```

---

## 2. The Reparenting Somatic Dialogue

To deactivate the limbic alarm, the adult conscious mind must step in as a compassionate, protective parent:

### The Daily Somatic Safety Protocol (5 minutes):
1. Place your right hand over your heart and your left hand over your lower abdomen. Feel the physical warmth of your palms.
2. Inhale deeply into your belly and speak mentally or softly aloud to your body:
   > *"I hear you. I know you are scared and overwhelmed. I am here now. You do not have to hold up the entire world. I will protect you. You are completely safe with me."*
3. Allow any pent-up grief, tears, or trembling to release without judgment. Tears activate the lacrimal parasympathetic pathway, flushing cortisol and lowering autonomic tone.
""")

# 28_suppressed_emotions.md
write_ch('28_suppressed_emotions.md', """# Suppressed Emotions and Tension Myositis Syndrome (TMS)

*Dr. John Sarno's TMS framework applied to chronic dizziness, how repressed rage and grief manifest as vestibular symptoms, and emotional somatic processing.*

---

## 1. Dr. John Sarno's TMS Revolution

In the late 20th century, Dr. John Sarno of NYU Medical Center revolutionized somatic medicine with his discovery of **Tension Myositis Syndrome (TMS)** / Mind-Body Syndrome.

Dr. Sarno demonstrated that the brain often creates physical symptoms (back pain, neck stiffness, dizziness, gastrointestinal distress) through mild autonomic oxygen deprivation to **distract the conscious mind from intolerable, repressed emotional pain** (unconscious rage, deep grief, overwhelming vulnerability).

```
   UNCONSCIOUS REPRESSED RAGE/GRIEF ──► AMYGDALA THREAT ──► CREATES DIZZINESS (TMS) ──► MIND DISTRACTED BY BODY
```

In PPPD, when a person is hyper-focused on their balance and neck, the conscious mind is 100% occupied with physical survival. This perfectly shields the psyche from confronting difficult marital conflicts, career misery, or unresolved childhood grief.

---

## 2. The Emotional Somatic Journaling Protocol

To dismantle TMS dizziness, you must bring the repressed emotional material into conscious awareness:

1. **Daily Unsent Letter (20 minutes)**:
   * Take a private notebook or document.
   * Write without any censorship or moral judgment about everything and everyone that infuriates you, hurts you, or frightens you. Express raw, unfiltered emotion.
   * **Crucial Step**: Once finished, immediately destroy, shred, or delete the page. This signals to your brain that the exercise is purely a neurological release, not an external confrontation.
2. **Shift Focus from Physical to Emotional**:
   * The moment you feel a spike in unsteadiness, immediately ask: *"What emotional boundary was just violated? What emotion was I feeling right before my head got heavy?"*
   * By shifting inquiry from structural (*"Why is my neck tight?"*) to emotional (*"What am I feeling?"*), the symptom loses its utility as a distraction and evaporates.
""")

# 46_victim_state.md
write_ch('46_victim_state.md', """# Exiting the Victim State: Reclaiming Full Sovereign Agency

*Dismantling learned helplessness in chronic illness, the Karpman Drama Triangle, and shifting from passive patient to the active captain of your nervous system.*

---

## 1. The Trap of Learned Helplessness

When vestibular symptoms persist for months despite consulting numerous medical specialists, patients frequently fall into **Learned Helplessness** (Dr. Martin Seligman):
* *"Nothing works."*
* *"Doctors are useless."*
* *"I am cursed with an incurable, mysterious illness."*

This mindset places the individual at the bottom of the **Karpman Drama Triangle** as the perpetual **Victim**, viewing PPPD as the **Persecutor** and desperately searching for a miracle doctor or medication as the **Rescuer**.

```
                           PERSECUTOR (PPPD / Symptoms)
                                    ▲        ▲
                                   /          \
                                  /            \
                                 ▼              ▼
           VICTIM (Learned Helplessness) ◄────► RESCUER (Doctors / Magic Pills)
```

As long as you remain in the Victim role, recovery is biologically impossible because the Victim mindset is fundamentally an **autonomic state of defeat and low dopamine**.

---

## 2. The Sovereign Shift: Taking 100% Ownership

Recovery begins the exact millisecond you declare:
> *"No doctor, no therapist, and no magic pill is going to cure me. This is MY nervous system. I created the hyper-sensitized loops through fear, and I have the biological power to rewire them through systematic neuroplastic training."*

* **Stop Complaining**: Eliminate symptom-focused venting on social media and to relatives.
* **Execute Daily Protocols**: Treat your VRT, exposure, and somatic relaxation not as annoying chores, but as non-negotiable athletic training for your brain.
* **Celebrate Micro-Victories**: Acknowledge every extra block walked, every supermarket visited, and every calm breath taken.
""")

# 45_shadow_work.md
write_ch('45_shadow_work.md', """# Shadow Work & Integration: Unmasking the Authentic Self

*Carl Jung's Shadow archetype in psychosomatic illness, integrating denied anger and boundaries, and living an authentic, grounded life.*

---

## 1. Carl Jung and the Shadow in Somatic Disease

Carl Gustav Jung defined the **Shadow** as the collection of all aspects of our authentic personality that we split off, deny, and repress in order to remain acceptable, polite, and loved by our parents, partners, and society:
* Our healthy aggression, competitiveness, and power.
* Our capacity to say a definitive *"NO!"*.
* Our dark, non-compliant, unconventional impulses.

When a person spends decades acting as the "good boy" or "perfect girl," smiling while seething internally, the Shadow does not disappear. It is pushed into the unconscious somatic body, where it manifests as **muscular armor, chronic tension, and autonomic dysregulation**.

```
  REPRESSED AUTHENTIC SHADOW ──► SOMATIC SPLIT ──► SUB-OCCIPITAL CLAMPING ──► CHRONIC PPPD
```

---

## 2. Integrating the Shadow for Physical Stability

Physical balance in space is a direct biological reflection of **psychological groundedness**:
* If you cannot stand up for yourself emotionally in your relationships, your brainstem cannot maintain stable upright posture in the world.
* When you reclaim your Shadow:
  1. You stop pleasing people at the expense of your health.
  2. You express anger cleanly and directly without passive-aggressive somatization.
  3. You occupy your full physical space in the room with grounded, unapologetic presence.

When the internal emotional split heals, the nervous system achieves true homeostasis, and the need for somatic symptoms vanishes permanently.
""")
