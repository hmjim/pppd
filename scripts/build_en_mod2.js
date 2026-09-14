const fs = require('fs');
const path = require('path');

const EN_DIR = path.join(__dirname, '..', 'chapters_en');
if (!fs.existsSync(EN_DIR)) fs.mkdirSync(EN_DIR, { recursive: true });

function writeCh(filename, content) {
    fs.writeFileSync(path.join(EN_DIR, filename), content.trim() + '\n', 'utf8');
    console.log(`[EN Mod 2] Written ${filename}`);
}

// 09_adrenaline_loop.md
writeCh('09_adrenaline_loop.md', `# The Adrenaline Loop: The Engine of Chronification

*The cyclic mechanism of "Sensation -> Catastrophic Thought -> Epinephrine Surge -> Symptom Intensification."*

---

## Anatomy of the Feedback Loop

PPPD does not persist because of physical tissue damage; it persists because it is continuously fueled by a self-sustaining neuro-chemical loop:

\`\`\`
       ┌────────────────────────────────────────────────────────┐
       ▼                                                        │
[ Normal Body Sway / ] ──▶ [ Catastrophic Thought ] ──▶ [ Adrenaline/Cortisol ] ──▶ [ Muscle Clamping & ]
[ Sensory Fluctuation]     ("I am collapsing!")           [ Epinephrine Surge  ]     [ Visual Over-focus ]
\`\`\`

1. **Step 1: Micro-Sway:** A benign vestibular or postural fluctuation occurs (natural physiological body sway).
2. **Step 2: Threat Appraisal:** The conscious mind panics: *"It's starting again. What if I faint? What if I never recover?"*
3. **Step 3: Neuroendocrine Cascade:** The amygdala commands the adrenal glands to discharge adrenaline and noradrenaline.
4. **Step 4: Somatic Exacerbation:** Blood vessels constrict, heart rate accelerates, suboccipital muscles contract, and pupils dilate (increasing visual sensitivity).
5. **Step 5: Confirmation Bias:** The brain perceives the intensified dizziness: *"See? I told you something was horribly wrong!"*

---

## Breaking the Circuit: The Power of Neutral Appraisal

You cannot forcibly stop the autonomic discharge in the first 3 seconds, but you have 100% control over **Step 2 (The Appraisal).**

When the sensation arises, if you replace panic with **radical physiological neutrality**:
- *"My brain is sending an adrenaline wave. It is harmless. I do not need to fight it."*

Without the fuel of catastrophic interpretation, the adrenaline surge metabolizes within **90 seconds**, and the nervous system begins down-regulating.

---

## Action Protocol

1. Memorize the 90-Second Rule: An unprovoked adrenaline wave biologically clears in 90 seconds if not renewed by scary thoughts.
2. When dizziness spikes, drop your shoulders, exhale slowly, and state: **"Adrenaline wave received. Zero threat. Letting it pass."**
3. Track how quickly your baseline returns when you stop fighting the sensation.
`);

// 10_cas_trap.md
writeCh('10_cas_trap.md', `# The CAS Trap: Cognitive Attentional Syndrome in PPPD

*Rumination, worry, symptom scanning, and maladaptive coping: How thinking about dizziness keeps it alive.*

---

## What is Cognitive Attentional Syndrome (CAS)?

Discovered by Professor Adrian Wells in Metacognitive Therapy, CAS consists of three destructive mental habits:
1. **Worry and Rumination:** *"Why me? What if I remain dizzy forever? What did I do wrong today?"*
2. **Threat Monitoring:** Hyper-vigilant scanning of bodily balance.
3. **Maladaptive Coping Behaviors:** Constant Googling of symptoms, avoiding social outings, holding onto walls, wearing dark sunglasses indoors.

CAS acts as a continuous neuro-electric amplifier. As long as you maintain active CAS, the brain receives the instruction that balance is under severe threat.

---

## Dismantling the Three Pillars

| Maladaptive Behavior | Metacognitive Replacement |
|---|---|
| Endless Rumination ("Why am I dizzy?") | Set a daily 15-minute "Worry Postponement" window. If worry appears at 2 PM, defer it until 6 PM. |
| Constant Body Scanning | Anchor attention externally onto sounds, tasks, and surroundings. |
| Safety Behaviors (wall-walking, grip-clutching) | Deliberately walk in the center of hallways with arms swinging naturally. |

---

## Action Protocol

1. Identify your top 3 safety behaviors (e.g., clutching a water bottle, touching walls, wearing sunglasses indoors).
2. Deliberately eliminate ONE safety behavior today.
3. Notice that your balance maintains itself even without the artificial safety crutch.
`);

// 11_hypochondria.md
writeCh('11_hypochondria.md', `# Health Anxiety & Hypochondria: The Phantom Diseases

*Why clean MRI scans fail to soothe you and how to extinguish the obsession with seeking medical reassurance.*

---

## The Reassurance Addiction

Health anxiety operates like a chemical addiction. When a new weird sensation appears (e.g., temple tingling, eyelid twitch, floating step), panic peaks.

To relieve the terror, you seek reassurance:
- You Google symptoms on medical forums.
- You schedule another urgent neurological appointment.
- You demand another MRI or Doppler ultrasound.

When the physician says *"Everything is completely clean,"* you feel intense relief—for about 48 hours. Then a new sensation appears, and the agonizing cycle restarts.

---

## Why Reassurance Seeking Feeds the Anxiety Fire

Seeking medical reassurance sends a toxic meta-signal to your subconscious: **"The only reason I am safe is because a doctor verified I am not dying today."**

This reinforces the belief that your body is inherently fragile and dangerous. The only permanent cure for health anxiety is **radical tolerance of physiological uncertainty.**

---

## Action Protocol: The Medical Information Fast

1. **Absolute Ban on Symptom Googling:** Delete medical bookmark folders, unjoin medical Reddit/Facebook doom-scroll groups.
2. **Stop Asking for Family Reassurance:** Request that friends and family refuse to answer questions like *"Do I look pale?"* or *"Do you think I'm swaying?"*
3. **The 72-Hour Rule:** If a benign non-emergency sensation appears, wait 72 hours before deciding if it requires medical attention. 99% of psychosomatic sensations dissolve within that window.
`);

// 12_exposure.md
writeCh('12_exposure.md', `# Graded Exposure Therapy: Reclaiming Lost Territory

*Systematically eliminating agoraphobia, supermarket panic, driving phobia, and open-space avoidance.*

---

## The Principle of In-Vivo Exposure

Avoidance is the primary maintainer of vestibular fear. When you avoid the supermarket because it made you dizzy, your brain records: *"Supermarkets are life-threatening zones. Escaping saved our life."*

To rewire this fear association, we utilize **Graded In-Vivo Exposure**: entering trigger environments in a structured, progressive manner while maintaining autonomic regulation until habituation occurs.

---

## Designing Your Hierarchy of Feared Situations (SUDS Scale)

Rate your trigger environments from 0 to 100 on the Subjective Units of Distress Scale (SUDS):

\`\`\`
Level 1 (SUDS 20–30): Walking around the block on a quiet street.
Level 2 (SUDS 40–50): Visiting a small local convenience store for 5 minutes.
Level 3 (SUDS 60–70): Visiting a large supermarket during a moderately busy hour.
Level 4 (SUDS 80–90): Walking through a bustling subway station or shopping mall at peak hours.
Level 5 (SUDS 100): Attending a crowded concert or high-stimulation public venue.
\`\`\`

---

## The Golden Rules of Exposure

1. **Stay Until Distress Drops:** Never flee an environment during a peak wave of dizziness or anxiety. Stand still, breathe, and remain until your anxiety drops by at least 50%.
2. **No Safety Props:** Do not clutch shopping carts with white knuckles or wear earplugs. Experience the environment directly.
3. **Frequency Over Intensity:** 10 minutes of exposure daily is 10 times more effective than 1 hour once a week.

---

## Action Protocol

1. Create your 5-tier exposure hierarchy.
2. Execute Level 1 today. Remain in the situation until your initial anxiety subsides.
3. Log your SUDS score before, at peak, and after the drill.
`);

// 13_sport.md
writeCh('13_sport.md', `# Somatic Exercise & Cardiovascular Reset

*Rebuilding heart-rate tolerance, proprioception, and endorphin pathways without provoking vestibular crises.*

---

## The Trap of Total Sedentariness

When unsteadiness strikes, patients frequently adopt a sedentary lifestyle, terrified that exertion will induce fainting.

This leads to:
- Cardiovascular deconditioning
- Postural Orthostatic Tachycardia symptoms
- Muscle atrophy in postural stabilizers
- Further degradation of proprioceptive acuity

Movement is biological medicine. We need to introduce the **right type of movement** at the right dosage.

---

## The Neuro-Vestibular Exercise Pyramid

\`\`\`
      ▲
     / \\     Level 3: Aerobic Jogging & Dynamic Team Sports (Tennis, Dance)
    /   \\
   /     \\   Level 2: Low-Impact Resistance Training & Bodyweight Strength
  /       \\
 /         \\ Level 1: Brisk Walking, Stationary Cycling & Gentle Swimming
/───────────\\
\`\`\`

- **Level 1 (Foundation):** Brisk walking 30–45 minutes daily. The natural rhythmic oscillation of walking provides continuous proprioceptive and vestibular habituation.
- **Level 2 (Strength):** Squats, lunges, and core exercises. Building lower extremity and gluteal strength provides solid mechanical anchors for balance.
- **Level 3 (Agility):** Rotational and multi-directional movement to fully restore dynamic equilibrium.

---

## Action Protocol

1. Commit to a mandatory 30-minute outdoor walk today at a steady, rhythmic pace.
2. Swing your arms freely; do not stare at your shoes—keep your chin parallel to the horizon.
3. If unsteadiness surfaces, keep walking: your legs are strong, and your cerebellum will adjust.
`);

// 42_vestibular_migraine.md
writeCh('42_vestibular_migraine.md', `# Vestibular Migraine & PPPD: The Overlapping Continuum

*How cortical spreading depression triggers balance instability without headache, and how to manage the combo.*

---

## Migraine Without Headache: The "Silent" Vestibular Migraine

Many individuals with PPPD also suffer from underlying **Vestibular Migraine (VM)**. 

Crucially, up to **50% of vestibular migraine episodes occur without any headache pain.** Instead, they present as:
- Episodic surges of motion intolerance and rocking.
- Photophobia (extreme sensitivity to bright screens and fluorescent lights).
- Phonophobia (sound sensitivity) and motion sickness.
- Transient spatial disorientation.

---

## The Synergistic Relationship: VM as the Spark, PPPD as the Forest Fire

Vestibular Migraine frequently acts as the **biological trigger** that destabilizes the balance system. PPPD then acts as the **maladaptive psychological and behavioral response** that keeps the dizziness alive between migraine attacks.

### Managing the Migraine Component:
1. **The SEEDS Lifestyle Protocol:** Sleep, Exercise, Early meals, Dehydration prevention, Stress management.
2. **Magnesium & Riboflavin:** Supplementation with Magnesium (400–600mg) and Vitamin B2 (Riboflavin 400mg) under medical guidance.
3. **Trigger Identification:** Tracking dietary triggers (aged cheeses, red wine, artificial sweeteners, erratic sleep schedules).

---

## Action Protocol

1. Differentiate between your steady PPPD background unsteadiness and acute VM flare spikes.
2. Maintain rigorous hydration (2+ liters of water daily) and regular meal intervals to stabilize cortical thresholds.
`);

// 27_depersonalization.md
writeCh('27_depersonalization.md', `# Derealization & Depersonalization: The Brain's Emergency Brake

*Understanding the neurobiology of dissociation and how to ground back into reality.*

---

## The Biological Function of Dissociation

When an animal is caught by a predator and escape is impossible, the nervous system activates the **Dorsal Vagal Shutdown** reflex. Endogenous opioids and endorphins flood the brain to numb physical pain and psychological terror.

In humans suffering from severe panic or chronic balance alarm, this exact circuit activates as **Derealization (DR)** or **Depersonalization (DP)**:
- Feeling like you are looking at your life through a movie screen.
- Hands and limbs feel alien or detached.
- Surroundings look two-dimensional, foggy, or artificial.

---

## It is Not Psychosis

Patients terrified of DP/DR often believe they are slipping into schizophrenia or dementia. 

**The Golden Rule of Dissociation:** If you are worried that you are losing touch with reality, you have 100% intact reality testing. A psychotic person does not analyze their derealization; an anxious person obsesses over it.

DP/DR is 100% reversible. The moment autonomic arousal subsides and you stop fearing the numbness, the brain releases the emergency brake and color returns to reality.

---

## 5-4-3-2-1 Somatosensory Grounding Protocol

When acute derealization hits:
1. **5 Things You See:** Describe 5 specific objects in high detail (color, shape, shadow).
2. **4 Things You Feel:** Touch your jeans texture, cool metal desk, soles pressing into the floor.
3. **3 Things You Hear:** Identify 3 distant ambient sounds.
4. **2 Things You Smell:** Scent of coffee, hand cream, or fresh air.
5. **1 Thing You Taste:** Sip cool water or taste a strong mint.

---

## Action Protocol

1. Execute the 5-4-3-2-1 Grounding protocol immediately whenever detachment surfaces.
2. Tell yourself calmly: **"My brain has engaged its protective fuse. I am completely safe. It will clear naturally."**
`);

// 43_ptsd_emdr.md
writeCh('43_ptsd_emdr.md', `# Somatic PTSD & Bilateral Stimulation (EMDR Techniques)

*Processing the acute trauma of the initial vertigo attack and releasing stored autonomic memory.*

---

## The Initial Vertigo Attack as Acute Trauma

Many PPPD journeys begin with a terrifying medical emergency: waking up to a violently spinning room, an ambulance ride, a sudden panic attack in a supermarket, or a traumatic hospital admission.

This event often becomes encoded in the amygdala as **Medical PTSD**:
- Flashbacks or dread associated with lying down or specific head positions.
- Chronic hyper-vigilance.
- Somatic re-experiencing whenever minor dizziness occurs.

---

## Bilateral Eye Movement & Somatic Reprocessing

Eye Movement Desensitization and Reprocessing (EMDR) utilizes bilateral stimulation (horizontal eye movements or alternate tapping) to facilitate neural consolidation of stuck traumatic memories in the hippocampus.

### Self-EMDR Butterfly Hug Technique:
1. Cross your hands over your chest so your fingers rest just below your collarbones.
2. Recall the memory of your first acute vertigo episode without resisting the fear.
3. Rhythmically tap your left hand, then right hand, in a gentle alternating cadence (Left-Right-Left-Right, approx. 1 tap per second) for 60–90 seconds.
4. Take a deep diaphragmatic breath and exhale completely.
5. Notice how the emotional intensity and physical panic attached to that memory diminish.

---

## Action Protocol

1. Practice the Butterfly Hug technique with your primary initial trauma memory for 3 rounds.
2. Reframe that initial event: **"That acute episode happened in the past. It ended. My body survived. Today is a new day."**
`);

console.log('✅ Module 2 English chapters generated successfully.');
