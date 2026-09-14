import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EN_DIR = os.path.join(ROOT, 'chapters_en')
os.makedirs(EN_DIR, exist_ok=True)

def write_ch(filename, content):
    filepath = os.path.join(EN_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f"[FULL EN Mod 1] Generated {filename} ({len(content.encode('utf-8'))} bytes)")

# 04_muscle_armor.md
write_ch('04_muscle_armor.md', """# Muscle Armor in PPPD: How Chronic Tension Induces Dizziness

*Why you feel dizzy upon getting out of bed—and how a clenched muscular fist distorts your spatial navigation.*

---

## The Frozen Animal Posture

When any animal is startled, its immediate physiological reaction is instinctual: retract the head into the shoulders to shield the jugular vein and cervical spine from predatory bites.

Think of when you were startled by a sudden loud bang: your shoulders instantly shot toward your ears, your jaw clamped shut, your diaphragm froze. It happened within milliseconds beneath conscious control.

Now imagine living in that state not for one second, but for **months on end**.

Chronic distress traps the physical body in continuous micro-spasm. You stop noticing it, just as you stop noticing the weight of a heavy bag in your hand until the arm goes completely numb. You adapted to the strain; the spasm became your baseline.

In somatic psychology, there is a brutal but precise maxim: **"When the voice cannot scream through the mouth, the body begins screaming through somatic symptoms."** 

Suppressed emotional tension does not dissipate into the ether. Unprocessed stress burrows deep into myofascial structures and manifests as physical illness, striking the weakest biological link:
*   **Globus Pharyngeus (Lump in the Throat):** A literal muscular conflict in the laryngeal muscles—straining to open for vocal release while simultaneously contracting to suppress expression.
*   **Gastrointestinal Distress:** The gut's inability to "digest" chronic psychological crisis.
*   **Back & Lumbar Pain:** Carrying the physical burden of hyper-responsibility.
*   **Chronic Disequilibrium in PPPD:** A high-frequency alarm from an overloaded nervous system incapable of resolving internal conflict.

In the 1930s, psychoanalyst Wilhelm Reich described this physiological phenomenon as **"Muscle Armor"**. He categorized seven somatic segments where the human body traps defensive tension:

1. **Ocular Segment:** Rigid brow, immobilized staring eyes.
2. **Oral Segment:** Clenched teeth, masseter hyper-tonus, locked jaw.
3. **Cervical Segment:** Suboccipital and trapezius muscles rigid as stone.
4. **Thoracic Segment:** Constricted ribcage, shallow apical breathing.
5. **Diaphragmatic Segment:** Locked diaphragm preventing deep abdominal expansion.
6. **Abdominal Segment:** Chronic gut spasms, Irritable Bowel Syndrome.
7. **Pelvic Segment:** Subconscious pelvic floor hyper-tonicity.

Every suppressed emotion crystallizes within one of these muscular segments. Suppress tears, and the throat locks; suppress anger, and the jaw clamps; endure endless pressure, and the shoulders petrify.

---

## Why Neck Tension Equals Dizziness

Here is the central neuro-physiological mechanism:

The suboccipital muscles at the base of your skull are not merely structural supports. They contain the highest concentration of **muscle spindles (proprioceptive mechanoreceptors)** in the entire human anatomy. They are your primary biological tilt-and-position sensors.

When your cervical region is locked in chronic spasm, these proprioceptive sensors are physically compressed. The electrical signal transmitted to the vestibular nuclei arrives with a **micro-second delay**.

You rise from bed in the morning. Here is the sensory clash:
*   **Eyes:** *We are standing upright.*
*   **Inner Ear (Vestibular Otoliths):** *We are accelerating vertically.*
*   **Compressed Suboccipital Receptors:** Report with a 30-millisecond lag: *We are still lying flat!*

The brainstem interprets this millisecond mismatch as catastrophic loss of balance: unsteadiness, floating sensations, cotton-wool head, and floor drop.

Furthermore, anxiety turns you into **an iron bucket with an alarm clock ringing inside**. A healthy person experiences minor physiological sway when turning their head—it is basic physics—and ignores it. But in an anxiety state, you hyper-monitor every micro-sensation. You turn your head 10 degrees: *"I felt off-balance!"* Turn 60 degrees: *"I am going to collapse!"* Fear amplifies the symptom; the symptom fuels fear. A dog chasing its own tail.

You rush in terror to get a cranial MRI, and the scan is completely clean. Because there is no structural lesion. **The fault lies entirely in sensory desynchronization and hyper-vigilant cognitive interpretation.**

---

## Trapezius Trigger Points

In 90% of individuals with PPPD, bilateral trigger points reside within the upper trapezius fibers. Press your thumb firmly into the muscle halfway between your neck and shoulder blade. Painful? 

These active trigger points project **referred pain into the suboccipital and temporal regions**, which clinicians frequently misdiagnose as "cerebral circulatory failure." They prescribe obsolete vasodilators or nootropics that accomplish nothing—because they treat the wrong problem.

The problem is muscular spasm. And the spasm is maintained because the amygdala is running a continuous emergency protocol.

---

## Temporary Relief: Massage & Dry Needling

You visit a manual therapist or dry-needling specialist. They work through your cervical knots or insert needles into myofascial trigger points. Temporarily, a miracle occurs:

1. **Localized Reset:** Mechanical stimulation physically disrupts the stagnant contraction knot, restoring microcirculation and clearing accumulated lactic acid and inflammatory cytokines.
2. **Gate Control Theory (Melzack & Wall):** Intense tactile and needle input travels up the spinal cord faster than chronic background cervical ache, temporarily closing the neural gate.
3. **Endorphin Surge:** Mechanical stimulation triggers localized endogenous opioid release, producing immediate lightness and relaxation.

You leave the clinic feeling reborn: head is clear, floating sensation is gone. You rejoice: *"The cure is found!"*

Yet 48 hours later, the unsteadiness returns in full force.

Why? Because **the command to contract muscles continues broadcasting from your hyper-vigilant brain**. You cleared the local port, but the background anxiety software continues streaming high-voltage spasm commands. It is mopping the floor without turning off the broken faucet.

Manual therapy and dry needling are valuable adjuncts to relieve acute distress, but **only as preparation for Jacobson Progressive Relaxation and central neuroplastic retraining**. Without reprogramming the central threat generator, manual therapy becomes an endless subscription to temporary relief.

---

## Why Muscle Armor Returns After Sleep

You have likely noticed: morning unsteadiness and cervical stiffness are often worse than in the evening. You rested for 8 hours—muscles should be relaxed. Why the opposite?

1. **Sleep Under High Cortisol is Not Recovery:** When falling asleep under sympathetic hyper-arousal, the brain fails to sustain deep Slow-Wave Sleep (N3/SWS). The amygdala maintains background sentinel monitoring: *"We are in danger, maintain perimeter defense."* You wake with a petrified neck because your muscles braced for combat all night.
2. **Cortisol Awakening Response (CAR):** In the first 30 to 45 minutes post-waking, serum cortisol surges physiologically by 50% to 75%. In a healthy individual, this is a clean wake-up switch. In a sensitized nervous system, this hormonal surge lands on a hyper-excitable limbic system, triggering immediate body-scanning and muscular contraction.

**Counter-Protocol:** Never lie in bed post-waking "listening to bodily sensations." Within the first 60 seconds: stand up, splash cold water on your face, execute 5 diaphragmatic breaths. Transition immediately from internal somatic monitoring to external sensory awareness. Follow with a 3-minute morning Jacobson session.

---

## Real-Time Somatic Audit

Sit comfortably right now. Close your eyes for 30 seconds and run a rapid internal audit:
*   **Jaw:** Are your teeth clenched? Part them. Tongue pressed against the palate? Drop it.
*   **Shoulders:** Are they hunched toward your ears? Drop them down. Down further.
*   **Forehead:** Are your brows furrowed? Smooth the forehead.
*   **Abdomen:** Are you holding your belly tight? Allow the abdominal wall to go soft.
*   **Breathing:** Is it shallow in the upper chest? Take one slow, expansive diaphragmatic breath. Exhale completely.

Open your eyes.

You just relaxed your somatic armor. Your brain received a bottom-up neuro-chemical signal: *"Muscles relaxed → Threat absent → Downregulate sympathetic drive."* This bottom-up signaling is our most powerful somatic tool.

---

## Self-Massage Protocol for Myofascial Trigger Points

1. **Upper Trapezius Trigger Point:** Located midway between the cervical spine and acromion. Apply firm ischemic compression with your thumb (intensity 5–6/10) for 45–60 seconds until referred pain dissipates. Repeat bilaterally 3 times.
2. **Suboccipital Release (Tennis Ball Technique):** Lie supine on the floor. Place two tennis balls (or a specialized suboccipital release tool) directly beneath the base of your skull on either side of the cervical spine. Allow gravity to apply gentle pressure for 3 to 5 minutes.
3. **Sternocleidomastoid (SCM) Mobilization:** Turn your head slightly to the left; grasp the prominent rope-like SCM muscle on the right side between your thumb and forefinger. Gently roll the muscle belly from the clavicle upward toward the mastoid process for 30 seconds per side. Avoid pressing deep into carotid arterial structures.

---

## Anatomy Trains: The Superficial Back Line

Why do your legs feel like lead when your neck is tight? 

Muscles do not function in isolation; they are interconnected via continuous fascial sheaths (Thomas Myers' *Anatomy Trains*). The **Superficial Back Line** connects:
$$\text{Plantar Fascia} \longrightarrow \text{Gastrocnemius} \longrightarrow \text{Hamstrings} \longrightarrow \text{Sacrotuberous Ligament} \longrightarrow \text{Erector Spinae} \longrightarrow \text{Cervical Suboccipitals} \longrightarrow \text{Galea Aponeurotica}$$

When the top anchor of the cable (the suboccipital junction) is clamped in permanent spasm, mechanical tension propagates down the entire fascial chain. You experience heavy, leaden legs and lower back aching **directly originating from cervical hyper-tonus**.

**Myofascial Foam Rolling Routine (5 Minutes Daily):**
*   Plantar fascia roll (lacrosse ball under foot): 1 min per side.
*   Calf and hamstring roll on foam roller: 1 min per group.
*   Thoracic and lumbar spine extension over roller: 2 minutes.

---

## Diaphragmatic Block & Hyperventilation-Induced Dizziness

The 5th Reichian segment is the **diaphragm**. Under chronic anxiety, the diaphragm locks in an elevated position, forcing apical chest breathing.

**Pathophysiological Chain:**
$$\text{Shallow Rapid Breathing} \longrightarrow \text{Excess CO}_2 \text{ Exhalation} \longrightarrow \text{Respiratory Alkalosis} \longrightarrow \text{Cerebral Vasoconstriction} \longrightarrow \text{Sensory Brain Fog \& Paresthesias}$$

### The Diaphragmatic Test:
Place your right hand on your chest, left hand on your belly. Breathe normally:
*   If the right hand moves: You are hyperventilating apically, starving cerebral microcirculation.
*   If the left hand moves: Your diaphragm is operating correctly.

### "Book on the Abdomen" Protocol:
Lie flat on your back. Place a heavy book on your lower abdomen. Inhale through the nose for 4 seconds, elevating the book while keeping the chest motionless. Exhale slowly through pursed lips for 8 seconds as the book descends. Execute 5 minutes twice daily.

---

## Temporomandibular Joint (TMJ) & Bruxism

Chronic nocturnal bruxism (clenching) strains the masseter and temporalis muscles. Because the TMJ capsule sits millimeters from the inner ear labyrinth, masseter hyper-tonus generates referred otalgic pain, ear fullness, and secondary vestibular instability.

**Self-Release ("The Fish" Drill):**
1. Part your lips, relax the lower jaw completely, letting it hang slack under gravity.
2. Rest the tongue tip gently behind the upper front teeth.
3. Exhale slowly through the mouth, keeping the jaw completely limp.
4. Maintain for 30 seconds; repeat 5 times throughout the day.

---

## Ergonomic Posture: The 5kg Forward Head Multiplier

Every 2.5 cm (1 inch) of forward head posture adds approximately **5 kg (11 lbs)** of extra mechanical leverage onto suboccipital and upper trapezius muscles. An office worker slumping forward 5 cm subjects their cervical spine to **10–15 kg of continuous compressive load** for 8 hours daily.

**45-Minute Micro-Break Routine:**
1. **Chin Tucks:** Retract the chin straight backward (creating a double chin) without tilting the head. Hold 5 seconds; repeat 5 times.
2. **Shoulder Rolls:** 5 slow, expansive backward rotations.
3. **Diaphragmatic Reset:** One 4-second inhale, 8-second exhale.

---

> ### Action Protocol (Homework 4):
> 
> 1. Set a repeating reminder every 2 hours on your phone: **"Where are my shoulders? Is my jaw clenched?"**
> 2. On every alert, exhale and immediately drop shoulder and facial tension for 3 seconds.
> 3. Perform 5 minutes of abdominal breathing with a book tonight before bed.
> 4. Execute the suboccipital tennis ball release for 3 minutes before starting Chapter 5.""")

# 05_relaxation.md
write_ch('05_relaxation.md', """# Jacobson Progressive Muscle Relaxation (PMR): The Somatic Down-Regulation Protocol

*You cannot be physically relaxed and emotionally panicked at the exact same millisecond. Physiological laws make them mutually exclusive.*

---

## The Physiology of Neuromuscular Feedback

In the 1920s, Harvard physician Edmund Jacobson established a fundamental neurological principle: **muscle tension and autonomic sympathetic arousal form an unbreakable bidirectional loop.**

When your brain registers anxiety, it fires efferent motor impulses to contract skeletal muscles. Conversely, when skeletal muscles contract, muscle spindle afferents send signals back to the amygdala confirming: *"Danger is present, maintain high alert."*

Jacobson discovered that **it is physiologically impossible to experience anxiety while your peripheral musculature is deeply relaxed.**

If you consciously strip tension from skeletal muscles, the afferent feedback loop breaks. The amygdala is forced to downregulate sympathetic drive. Progressive Muscle Relaxation (PMR) is not "meditation"—it is an applied physical tool to force the autonomic nervous system into parasympathetic dominance.

---

## The Principle of Contrast: Tension vs. Release

Why do we intentionally tense muscles before relaxing them?

Under chronic stress, muscle spindles adapt to hyper-tonus. Your brain loses the sensory baseline of what "zero tension" feels like.

By inducing **maximum voluntary isometric contraction (70–80%) for 5 to 7 seconds**, you overload the Golgi tendon organs. When you suddenly release the contraction, a neurophysiological rebound occurs: the muscle drops into a state of flaccidity significantly deeper than before the contraction.

---

## The 16-Muscle Group Clinical Protocol

Perform this sequence lying supine in a quiet environment with dim lighting. Do not strain to 100% force (which risks cramping); aim for a solid 75% contraction.

```
┌────────────────────────────────────────────────────────┐
│              Jacobson Cycle: 7s Tension / 15s Rest     │
└────────────────────────────────────────────────────────┘
```

1. **Dominant Hand & Forearm:** Clench the right fist tightly. Feel the strain in the knuckles and forearm. Hold 7s... Release. Feel the rush of warm blood for 15s.
2. **Dominant Biceps:** Flex the right elbow, curling the wrist toward the shoulder. Hold 7s... Release.
3. **Non-Dominant Hand & Forearm:** Clench the left fist tightly. Hold 7s... Release.
4. **Non-Dominant Biceps:** Flex the left biceps. Hold 7s... Release.
5. **Forehead & Scalp:** Raise eyebrows toward the hairline as high as possible. Hold 7s... Release.
6. **Eyes & Nose:** Squeeze eyes shut tightly, wrinkle the nose. Hold 7s... Release.
7. **Jaw & Mouth:** Clench the teeth firmly, pull mouth corners back. Hold 7s... Release.
8. **Neck & Suboccipitals:** Press the back of the head firmly down into the mattress/pillow. Hold 7s... Release.
9. **Shoulders & Trapezius:** Shrug both shoulders up toward the ears as high as possible. Hold 7s... Release completely.
10. **Chest & Upper Back:** Inhale deeply, pull shoulder blades backward together. Hold 7s... Release with a long exhale.
11. **Abdomen:** Tighten the abdominal wall as if bracing for an impact. Hold 7s... Release.
12. **Gluteals:** Squeeze the buttock muscles together firmly. Hold 7s... Release.
13. **Dominant Thigh:** Tighten the right quadriceps, straightening the leg. Hold 7s... Release.
14. **Dominant Calf & Foot:** Point right toes toward the face (dorsiflexion). Hold 7s... Release.
15. **Non-Dominant Thigh:** Tighten the left quadriceps. Hold 7s... Release.
16. **Non-Dominant Calf & Foot:** Point left toes toward the face. Hold 7s... Release.

---

## The Rapid 4-Zone Abbreviated Protocol

Once you have mastered the 16-muscle sequence across 14 consecutive days, transition during work hours to the **4-Zone Rapid Protocol (3 Minutes)**:

1. **Zone 1 (Hands & Arms):** Clench both fists and biceps simultaneously (7s) $\rightarrow$ Release (15s).
2. **Zone 2 (Face & Neck):** Furrow brow, squeeze eyes, clench jaw, press head back (7s) $\rightarrow$ Release (15s).
3. **Zone 3 (Torso & Diaphragm):** Shrug shoulders, tighten chest and abdominal wall (7s) $\rightarrow$ Release (15s).
4. **Zone 4 (Lower Limbs):** Squeeze glutes, thighs, and pull both feet upward (7s) $\rightarrow$ Release (15s).

---

> ### Action Protocol (Homework 5):
> 
> 1. Execute the full 16-muscle Jacobson protocol tonight in bed before sleeping.
> 2. Observe the heavy, warm, tingling sensation in your limbs post-release—that is peripheral vasodilation taking over.
> 3. Perform this protocol every evening for the next 14 days without skipping a single session.""")

# 06_vestibular.md
write_ch('06_vestibular.md', """# Vestibular Rehabilitation Therapy (VRT): Recalibrating the Central Gyroscope

*Why you sway on solid ground and how to train your brain to trust its internal sensors rather than relying solely on visual hyper-control.*

---

## Living in "Sea-Sickness" Mode

The most debilitating aspect of PPPD is the constant sensation that the floor is unstable. You stand on a concrete surface, yet feel internal rocking as if standing on a boat deck. In supermarkets with endless rows of products or in crowded pedestrian areas, the world starts drifting, head pressure surges, and you desperately seek a handrail or shopping cart.

You stare downward at your feet while walking. You manually calculate every single stride. You avoid turning your head quickly. 

Your central nervous system has entered **Visual Hyper-Dependence**: it attempts to manually stabilize balance exclusively using visual focus because it no longer trusts inner ear and neck proprioceptive telemetry.

---

## The Neuro-Sensory Mechanism

Balance is maintained by three distinct sensory streams:
1. **Vestibular Labyrinth:** Inner ear angular and linear acceleration gyroscopes.
2. **Visual Cortex:** Optical horizon tracking.
3. **Proprioception:** Joint mechanoreceptors and plantar pressure sensors.

Following acute distress or vertigo, central calibration failed. The brain panicked, flagged vestibular signals as unreliable, and dialed visual sensitivity up to 100%. 

Whenever you enter a visually chaotic environment (supermarkets, visual scrolling) or close your eyes, the visual crutch fails, and intense unsteadiness surges.

The vestibular apparatus is physically healthy—it is simply functionally suppressed. Our mission is to reactivate central integration through **Graded Vestibular Challenge**.

---

## The Principle of "Mild Provocation"

**The brain only learns and recalibrates when it makes small, manageable errors.**

If you freeze your head and stare fixedly at one point, you confirm the amygdala's belief: *"Motion is lethal; keep everything locked."* 

Every exercise must be performed at a level of **"mild, controlled discomfort" (3 to 4 on a 10-point scale)**. If symptoms spike to a 7/10 or nausea occurs, reduce speed or amplitude. We need constructive neuroplastic stimulation, not a panic flare.

---

## The Core VRT Protocol (Execute 2x Daily)

### Level 1: Static Balance (Activating Proprioception)
1. **Romberg Stance:** Stand with feet together (toes and heels touching), arms relaxed at your sides. Maintain for 30 seconds with eyes open. Then close your eyes for 30 seconds. Notice the micro-sway in your ankles—that is your proprioceptive system relearning fine motor control. Do not resist it.
2. **Single-Leg Stance:** Stand near a wall corner (for safety). Lift one foot and balance for 30 seconds with eyes open. Repeat on the opposite leg. Progress gradually toward 10 seconds with eyes closed.

### Level 2: Gaze Stabilization (VOR x1 Drills)
1. **Horizontal VOR x1 (Gaze Fixation):** Extend your arm, raising your thumb at eye level (or focus on a clear letter target on the wall). Stare fixedly at the thumb target. Without breaking eye focus, rotate your head smoothly left and right (saying "no-no"). The target must remain razor-sharp while the background blurs. Perform for 60 seconds.
2. **Vertical VOR x1:** Same drill, but nod your head smoothly up and down (saying "yes-yes") while keeping the target in crisp focus. Perform for 60 seconds.

### Level 3: Dynamic Gait Integration
1. **Tandem Walking (Heel-to-Toe):** Walk along a straight floor seam, placing the heel of one foot directly against the toes of the other. Keep head upright and gaze fixed forward on the horizon, not down at your feet. Take 15 steps forward and backward.
2. **Gait with Dynamic Head Turns:** Walk at normal pace down a corridor. Every two steps, turn your head smoothly left; two steps later, turn right. This trains the cerebellum to filter out optical flow noise during locomotion.

---

## Weekly Progression Blueprint

| Stage | Focus Area | Benchmark Goal |
| :---: | :--- | :--- |
| **Weeks 1–2** | Level 1: Static Romberg & Single-Leg | 30s eyes-closed Romberg without panic |
| **Weeks 3–4** | Level 2: VOR x1 Horizontal & Vertical | 60s smooth VOR without image slip |
| **Weeks 5–6** | Level 3: Tandem Gait & Head-Turn Walking | 15 continuous tandem steps |
| **Weeks 7–8** | Advanced: Unstable Surfaces (Pillow/Foam) | 30s eyes-closed stance on foam cushion |

---

> ### Action Protocol (Homework 6):
> 
> 1. Execute Level 1 and Level 2 drills twice daily (morning and late afternoon, 5 minutes each).
> 2. When walking outdoors, deliberately lift your chin and focus on distant buildings rather than scanning the pavement.
> 3. Log your daily Romberg time in your Recovery Log.""")

# 06b_biofeedback.md
write_ch('06b_biofeedback.md', """# Simulators & Biofeedback: High-Tech Recalibration

*Utilizing optokinetic stimulation, visual flow desensitization, and HRV biofeedback to accelerate vestibular neuroplasticity.*

---

## Optokinetic Stimulation (OKN)

Visual vertigo in PPPD is driven by central visual over-weighting. The brain has forgotten how to suppress irrelevant background visual motion.

**Optokinetic Desensitization:**
By exposing the visual cortex to controlled, moving visual stripes, optical flow videos, or supermarket simulation footage on a monitor screen for 3 to 5 minutes daily, the visual motion filter recalibrates.

### Protocol:
*   Sit 50 cm from a computer screen displaying an optokinetic moving stripe video or walking point-of-view footage.
*   Focus on the center of the screen while the background visual field flows.
*   Begin with 60 seconds daily; advance gradually to 3–5 minutes as visual tolerance improves.

---

## Heart Rate Variability (HRV) Biofeedback

Vagal tone and autonomic balance can be measured via **Heart Rate Variability (HRV)**. 

Resonance frequency breathing at **0.1 Hz (6 breaths per minute: 4s inhale, 6s exhale)** synchronizes respiratory sinus arrhythmia with baroreceptor reflexes, directly shifting the autonomic nervous system out of sympathetic fight-or-flight into parasympathetic restoration.

Using smartphone camera HRV sensors or wearable chest straps, 10 minutes of daily resonance breathing accelerates neurological down-regulation.""")

# 07_neurophysiology_basics.md
write_ch('07_neurophysiology_basics.md', """# Neurophysiology: Factory Settings of the Balance System

*How the vestibular nuclei, cerebellum, and limbic system process spatial equilibrium—and why software miscalibration produces physical sensations.*

---

## The Central Balance Processing Hub

Spatial equilibrium is not computed in one single organ. It is computed in the **Vestibular Nuclei Complex** in the brainstem and fine-tuned by the **Vestibulocerebellum**.

```
Sensory Inputs:
[Eyes: Optical Flow]      ──┐
[Inner Ear: VOR/Otoliths] ──┼──► [Vestibular Nuclei] ──► [Cerebellum: Error Correction]
[Spine/Neck: Proprioception]──┘         │
                                        ▼
                            [Thalamus & Insular Cortex]
                            (Conscious Spatial Awareness)
```

In health, the cerebellum maintains an internal predictive model of physics. When you step forward, it anticipates the expected sensory feedback and cancels it out (sensory gating).

In PPPD, this predictive cancellation fails. The brain treats self-generated normal body sway as unexpected environmental movement.""")

# 08_visual_dependence.md
write_ch('08_visual_dependence.md', """# Visual Dependence: Breaking Supermarket Vertigo

*Why shopping malls, patterned carpets, and computer scrolling trigger dizziness—and how to desensitize your visual cortex.*

---

## The Over-Weighted Visual Channel

When vestibular and neck proprioceptive signals are flagged as "noisy," the brain over-relies on vision for posture.

In a supermarket:
*   Thousands of high-contrast items move past your peripheral vision.
*   Fluorescent lights flicker at 50–60 Hz.
*   The floor has high-gloss reflective patterns.

Your visual cortex is flooded with visual flow. Because the brain uses vision for balance, it misinterprets shelf movement as your body falling.

**The Desensitization Protocol:**
1. **Graded Supermarket Exposure:** Begin by visiting during quiet hours for 3 minutes without buying anything. Focus on items on your list, keeping gaze steady.
2. **Optokinetic Habituation:** 2 minutes of visual flow videos daily at home.
3. **Eliminate Sunglasses Indoors:** Sunglasses reinforce visual avoidance; allow ambient lighting to habituate natural retinal sensitivity.""")

# 26_sleep.md
write_ch('26_sleep.md', """# Sleep Architecture and PPPD: Conquering Morning Disequilibrium

*Why insomnia tortures the nervous system, why morning unsteadiness feels intense, and how to repair sleep physiology.*

---

## The Cortisol Awakening Response (CAR)

Between 6:00 AM and 8:00 AM, the human body experiences a surge of cortisol (CAR) to mobilize glucose and awaken the brain.

In healthy physiology, this feels like natural vitality. In PPPD, this surge triggers limbic alarm:
*   Heart rate elevates slightly.
*   Neck muscles involuntarily brace.
*   Upon taking the first steps, unsteadiness feels magnified.

**The Morning Protocol:**
*   Do not lie in bed catastrophizing.
*   Get up immediately upon waking.
*   Drink 500ml of room-temperature water.
*   Splash cool water on your face.
*   Perform 3 minutes of diaphragmatic breathing and light neck mobility before checking your phone.""")

# 44_attention_training.md
write_ch('44_attention_training.md', """# Attentional Focus Training: Wells' ATT and Open Focus

*Why your attention is glued to internal bodily sensations—and how evidence-based metacognitive techniques decouple hyper-focus.*

---

## Cognitive Attentional Syndrome (CAS)

In chronic dizziness, attention becomes locked in **compulsive internal monitoring**. You scan your feet, your head, your balance every 10 seconds.

Adrian Wells developed the **Attention Training Technique (ATT)** in Metacognitive Therapy to restore executive attentional flexibility.

### The 3-Phase ATT Protocol (12 Minutes):
1. **Selective Attention (5 min):** Listen to 5 distinct simultaneous sounds (e.g., ticking clock, distant traffic, refrigerator hum, birds, your breath). Focus intensely on one sound at a time, ignoring the others for 45 seconds each.
2. **Rapid Attentional Switching (4 min):** Rapidly shift attention from sound to sound as prompted (clock $\rightarrow$ traffic $\rightarrow$ breath $\rightarrow$ refrigerator).
3. **Divided Attention (3 min):** Expand attentional awareness to perceive all 5 distinct sounds simultaneously in an open acoustic field.

ATT trains the prefrontal cortex to disengage voluntary focus from internal somatic noise.""")

# 47_meditation.md
write_ch('47_meditation.md', """# Meditation & Vagal Protocols: Safe Calming for Sensitive Nervous Systems

*Why traditional mindfulness sometimes triggers panic in vestibular disorders—and how to practice Open-Focus and NSDR safely.*

---

## Why "Focus on Your Breath" Can Trigger Panic

Traditional meditation instructs students to close their eyes and focus intently on internal body sensations or breathing.

For an individual with health anxiety and PPPD, focusing on the body intensifies internal somatic scanning, triggering panic.

**Safe Somatic Alternatives:**
1. **Non-Sleep Deep Rest (NSDR) / Yoga Nidra:** Structured external audio guidance that walks through somatic relaxation without hyper-fixation.
2. **Open-Focus Meditation (Dr. Les Fehmi):** Focusing on the *space between objects* rather than objects themselves. This immediately induces synchronous alpha brain waves (8–12 Hz) across parietal and occipital lobes, quieting amygdala alarm.""")

print("[FULL EN Mod 1] Successfully written all 9 Module 1 chapters.")
