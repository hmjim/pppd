const fs = require('fs');
const path = require('path');

const EN_DIR = path.join(__dirname, '..', 'chapters_en');
if (!fs.existsSync(EN_DIR)) fs.mkdirSync(EN_DIR, { recursive: true });

function writeCh(filename, content) {
    fs.writeFileSync(path.join(EN_DIR, filename), content.trim() + '\n', 'utf8');
    console.log(`[EN Mod 1] Written ${filename}`);
}

// 04_muscle_armor.md
writeCh('04_muscle_armor.md', `# Muscle Armor: Somatic Tension and Balance Distortion

*How chronic micro-spasms in the neck, shoulders, and jaw distort proprioceptive feedback signals and amplify dizziness.*

---

## Wilhelm Reich's Concept Applied to Neuro-Otology

In somatic psychology, "muscle armor" refers to chronic, involuntary muscular rigidity developed as a defense mechanism against overwhelming anxiety or emotional stress.

In vestibular disorders, this armor concentrates in three critical zones:
1. **Suboccipital neck muscles:** The dense cluster of small muscles at the base of the skull (rectus capitis and obliquus capitis).
2. **Upper trapezius and levator scapulae:** Elevating the shoulders in a constant protective startle reflex.
3. **Masseter and temporomandibular joint (TMJ):** Jaw clenching and teeth grinding during sleep and concentrated tasks.

---

## The Proprioceptive Feedback Distortion

The suboccipital cervical region contains one of the highest densities of muscle spindles (proprioceptive sensors) in the entire human body—up to 200–250 spindles per gram of muscle tissue (compared to only 16 in the thumb).

These sensors transmit real-time data to the vestibular nuclei in the brainstem regarding the exact position of the head relative to the torso (**Cervico-Ocular Reflex - COR**).

When these muscles are locked in chronic spasm:
1. They fire erratic, noisy proprioceptive signals.
2. The brainstem receives conflicting information: the inner ears report stillness, but the clamped neck muscles signal movement or tension.
3. This **sensory mismatch** generates the exact sensation of floating, swaying, or head pressure.

---

## The Fallacy of Aggressive Manual Therapy

Many patients visit aggressive chiropractors or manual therapists who perform violent cervical manipulations. In severe PPPD, this often triggers major symptom exacerbation because the sensitized nervous system interprets aggressive manipulation as physical trauma.

The only safe, lasting way to dissolve muscle armor is **autonomic down-regulation combined with gentle, active somatic release.**

---

## Action Protocol: Suboccipital Somatic Release

1. **The Tennis Ball Release:** Place two tennis balls (or a peanut massage ball) beneath the base of your skull while lying on a yoga mat. Allow the weight of your head to naturally compress the suboccipital muscles for 3–5 minutes without active movement.
2. **Diaphragmatic Sigh:** Take a deep nasal inhalation for 4 seconds, followed by an extended, unforced oral sigh for 8 seconds. Perform 6 cycles to stimulate the vagus nerve.
3. **Daily Body Scanning:** Notice when your shoulders rise toward your ears during desk work. Consciously drop them 10 times throughout the day.
`);

// 05_relaxation.md
writeCh('05_relaxation.md', `# Jacobson Progressive Muscle Relaxation (PMR)

*A step-by-step evidence-based somatic protocol to systematically discharge neuromuscular tension.*

---

## The Physiology of PMR

Developed by Dr. Edmund Jacobson at Harvard University, Progressive Muscle Relaxation is grounded in a fundamental neurophysiological principle: **a muscle that is deliberately contracted to maximal tension enters a deeper physiological state of refractory relaxation immediately afterward.**

In PPPD, the autonomic nervous system loses its baseline reference point for "zero tension." PMR recalibrates the neuromuscular threshold.

---

## The 16-Muscle Group Daily Protocol (20 Minutes)

Perform this protocol lying down in a quiet environment with dim lighting. For each muscle group:
- **Tense** firmly for 5–7 seconds (do not cause cramping or pain).
- **Release** instantly on an exhalation.
- **Observe** the sensation of warmth, heaviness, and blood flow for 15–20 seconds.

### Sequence:
1. **Right hand and forearm:** Clench fist tight -> Release.
2. **Right biceps:** Flex arm toward shoulder -> Release.
3. **Left hand and forearm:** Clench fist tight -> Release.
4. **Left biceps:** Flex arm toward shoulder -> Release.
5. **Forehead:** Raise eyebrows high -> Release.
6. **Eyes and nose:** Squeeze eyes shut and wrinkle nose -> Release.
7. **Jaw and mouth:** Clench teeth gently and press tongue to roof of mouth -> Release.
8. **Neck:** Gently press back of head into pillow/floor -> Release.
9. **Shoulders:** Shrug shoulders up toward ears -> Release.
10. **Upper back:** Pull shoulder blades firmly together -> Release.
11. **Chest and diaphragm:** Take a deep breath and hold tension -> Release.
12. **Abdomen:** Tighten stomach muscles as if bracing for impact -> Release.
13. **Right thigh:** Tighten quadriceps -> Release.
14. **Right calf and foot:** Point toes toward face -> Release.
15. **Left thigh:** Tighten quadriceps -> Release.
16. **Left calf and foot:** Point toes toward face -> Release.

---

## Action Protocol

1. Practice PMR daily for 14 consecutive days (preferably before sleep or in the late afternoon).
2. Rate your baseline muscular tension from 1 to 10 before and after each session.
3. As tension drops, notice the immediate reduction in background head pressure and dizziness.
`);

// 06_vestibular.md
writeCh('06_vestibular.md', `# Vestibular Rehabilitation Therapy (VRT): Exercise Complex

*Recalibrating the Vestibulo-Ocular Reflex (VOR), gaze stabilization, and balance integration.*

---

## The Scientific Basis of VRT

Vestibular Rehabilitation Therapy is an exercise-based program designed to promote central neurological compensation. It relies on three primary neuroplastic mechanisms:

1. **Habituation:** Repeated exposure to dizziness-provoking movements reduces the nervous system's hypersensitivity over time.
2. **Adaptation:** Restoring the gain of the **Vestibulo-Ocular Reflex (VOR)** so the visual field remains rock-steady during head motion.
3. **Substitution:** Retraining sensory weighting so the brain balances inputs between the vestibular, visual, and somatosensory systems appropriately.

---

## The Core Daily VRT Protocol (10–15 Minutes)

*Perform these exercises twice daily. Mild provocation of symptoms (up to 3–4 on a 10-point scale) is desirable; it is the signal that stimulates neuroplasticity.*

### Exercise 1: VOR x1 (Gaze Stabilization Horizontal)
- Hold a business card or target with a single clear letter (e.g., "A") at eye level, arm's length away.
- Keep your eyes locked firmly on the letter.
- Turn your head smoothly left and right (approx. 30 degrees each side) at a moderate rhythm (approx. 1 beat per second) for 60 seconds.
- The letter must remain in sharp focus at all times.

### Exercise 2: VOR x1 (Gaze Stabilization Vertical)
- Keep your gaze locked on the target.
- Move your head smoothly up and down (nodding motion) for 60 seconds.

### Exercise 3: Saccadic Retraining
- Hold two targets at eye level, separated by about 12 inches (30 cm).
- Without moving your head, flick your eyes quickly from the left target to the right target and back.
- Perform for 30–45 seconds.

### Exercise 4: Smooth Pursuit Tracking
- Hold a single pen or finger at eye level.
- Keeping your head stationary, follow the moving target smoothly with your eyes across horizontal, vertical, and diagonal paths for 60 seconds.

### Exercise 5: Tandem Standing with Head Motion
- Stand in a corner for safety (heels touching toes in tandem stance).
- Turn your head left and right while maintaining balance for 30 seconds. Switch foot positions and repeat.

---

## Action Protocol

1. Perform the 5-exercise VRT sequence twice daily (morning and late afternoon).
2. If dizziness flares temporarily, sit quietly for 2 minutes and allow it to subside.
3. Record completion in your daily log. Consistency over 8–12 weeks is what rewires the brain.
`);

// 06b_biofeedback.md
writeCh('06b_biofeedback.md', `# Biofeedback & Visual Simulators: Brain Recalibration

*Utilizing optokinetic stimulation, virtual environments, and biofeedback tools to conquer visual vertigo.*

---

## The Visual Vertigo Dilemma

Up to 80% of individuals with PPPD suffer from **visual vertigo** (visual motion hypersensitivity). Busy supermarket aisles, rotating carousel fans, moving traffic, action video games, or high-contrast carpet patterns trigger acute disequilibrium.

This occurs because the brain has become **visually dependent**—it over-relies on visual cues for balance while ignoring reliable vestibular and proprioceptive inputs.

---

## Optokinetic Stimulation (OKN) Protocol

Optokinetic training involves controlled, progressive exposure to moving visual patterns to desensitize the visual cortex and re-weight sensory processing.

### Structured Exposure Ladder:
1. **Level 1 (Low Speed / Low Contrast):** View moving black-and-white vertical stripe videos at low speed on a smartphone screen for 60 seconds while seated.
2. **Level 2 (Medium Speed / Full Screen):** Watch optokinetic flow patterns on a large computer monitor or television screen while standing.
3. **Level 3 (Complex Real-World Video):** Watch POV walking videos through busy grocery stores, railway stations, or crowded city streets for 2–3 minutes.
4. **Level 4 (In-Vivo Exposure):** Visit local supermarkets and department stores during off-peak hours, gradually progressing to peak busy hours.

---

## Action Protocol

1. Begin with Level 1 OKN videos for 1 minute daily.
2. Maintain calm diaphragmatic breathing throughout the drill.
3. Progress to the next level only when the current level produces zero anxiety or residual dizziness.
`);

// 07_neurophysiology_basics.md
writeCh('07_neurophysiology_basics.md', `# Neurophysiology of Dizziness: Factory Default Settings

*How the vestibular nuclei, cerebellum, thalamus, and amygdala process balance—and where the software corrupted.*

---

## The Multi-Sensory Triad of Equilibrium

Human balance is not controlled by a single organ. It is computed in the **Vestibular Nuclei Complex (VNC)** within the brainstem through the continuous integration of three distinct sensory streams:

\`\`\`
       [ Inner Ear (Vestibular) ]  
                  │
                  ▼
[ Visual System ] ──▶ [ Brainstem / Vestibular Nuclei ] ◀── [ Proprioceptors (Neck & Feet) ]
                                  │
                                  ▼
                        [ Cerebellar Engine ]
                                  │
                                  ▼
                   [ Automatic Postural Output ]
\`\`\`

1. **Vestibular Apparatus:** Three semicircular canals (angular acceleration) and two otolith organs (saccule and utricle for linear acceleration and gravity).
2. **Visual System:** Environmental orientation, horizon alignment, and optical flow velocity.
3. **Proprioceptive System:** Muscle spindles and joint mechanoreceptors in the soles of the feet, ankles, and cervical spine.

---

## Cerebellar Forward Models

The cerebellum constantly computes **forward internal models**—it predicts what sensory inputs *should* occur during voluntary movement and cancels out the predicted sensations.

When you walk, you do not feel dizzy because the cerebellum anticipates the movement and suppresses conscious perception of the motion.

In PPPD, this predictive cancellation fails because the **amygdala (fear center)** injects an error signal: *"Danger! Do not suppress balance signals; monitor every millimeter of sway conscious-level!"*

---

## The Pathological Loop

When balance is processed consciously in the prefrontal cortex instead of automatically in the cerebellum:
- Balance reactions become jerky, stiff, and over-reactive.
- Postural sway increases due to micro-corrections.
- The conscious brain misinterprets its own jerky corrections as "imminent falling," which triggers more fear, cementing the loop.

---

## Action Protocol

1. Visualize your cerebellum as an expert autopilot and your conscious mind as an anxious passenger.
2. Every time you feel swaying, consciously repeat: **"My autopilot knows how to balance. I am relinquishing conscious micromanagement."**
3. Walk across the room while counting backwards from 100 by 7s (forcing conscious focus away from balance into mental arithmetic).
`);

// 08_visual_dependence.md
writeCh('08_visual_dependence.md', `# Overcoming Visual Dependence: Reweighting Sensory Streams

*Teaching your nervous system to balance in the dark, trust foot proprioception, and stop clutching visual anchors.*

---

## What is Sensory Reweighting?

Under normal conditions, healthy balance relies on:
- **70% Proprioception** (ground reaction forces, joint angles)
- **20% Vestibular input** (inner ear gravity and rotation)
- **10% Vision** (environmental framing)

In PPPD, the brain distorts this distribution:
- **60–80% Vision** (hyper-focused visual anchoring)
- **20% Stiffened proprioception**
- **0–10% Vestibular confidence**

When you walk into a shopping mall with moving crowds, high ceilings, and fluorescent lighting, your visual anchor is shattered, leading to immediate panic and unsteadiness.

---

## Reweighting Drills: Rebuilding Somatosensory Confidence

To force the brain to abandon visual dependence, we deliberately remove or challenge visual input:

### Drill 1: Eyes-Closed Romberg Stance
- Stand barefoot on a firm floor in a corner (for absolute safety).
- Place feet together, cross arms over chest.
- Close your eyes for 30 seconds.
- Feel your foot arches and ankles micro-adjusting. That is your proprioceptive system waking up.

### Drill 2: Foam Surface Standing
- Stand on a soft foam balance pad or folded sofa cushion.
- Keep eyes open for 30 seconds, then blink slowly.
- This forces the vestibular system to take over because both vision and firm ground support are altered.

### Drill 3: Head Turns in Darkness
- In a safe, darkened room with nightlight reference, walk slowly while turning head left and right.

---

## Action Protocol

1. Practice Drill 1 (Eyes-Closed Stance) for 30 seconds, 3 times daily.
2. Progress to Drill 2 once Drill 1 feels steady.
3. Congratulate your nervous system every time it maintains balance without visual fixation.
`);

// 26_sleep.md
writeCh('26_sleep.md', `# Sleep Architecture and PPPD Recovery

*Why morning unsteadiness is at its worst, how slow-wave sleep restores vestibular synapses, and sleep optimization.*

---

## Why Morning Unsteadiness Peaked

Almost all PPPD patients report that the first 60–90 minutes after waking are the most unstable. Why?

1. **Vestibular Reactivation Lag:** While lying horizontal in deep sleep, vestibular otolith organs experience minimal gravitational variance. Upon standing, the sensitized system must rapidly recalibrate to vertical gravity.
2. **Morning Cortisol Awakening Response (CAR):** Cortisol naturally spikes within 30–45 minutes of waking to promote alertness. In a sensitized nervous system, this natural hormone surge is misinterpreted as a panic attack.
3. **Nocturnal Bruxism & Neck Clamping:** High stress during REM sleep causes unconscious jaw clenching and cervical stiffness, flooding the brainstem with noisy proprioceptive signals upon waking.

---

## Sleep Optimization Protocol for Neuro-Vestibular Healing

- **Consistent Circadian Anchoring:** Wake up at the exact same hour 7 days a week.
- **Morning Sunlight Exposure:** Get 10–15 minutes of direct outdoor natural light within 30 minutes of waking to suppress melatonin and set circadian rhythm.
- **Magnesium Glycinate:** Consider 300–400mg of elemental magnesium glycinate 1 hour before sleep to support muscular relaxation and GABAergic transmission.
- **No Screen Time 60 Minutes Pre-Bed:** Blue light suppresses melatonin and stimulates the visually dependent cortex.

---

## Action Protocol

1. Establish a fixed wake-up time starting tomorrow morning.
2. When you wake up feeling dizzy or heavy-headed, **do not panic.** Acknowledge: *"This is just the morning cortisol spike and vestibular recalibration. It will stabilize within an hour."*
3. Perform 5 minutes of gentle neck rolls and Jacobson relaxation before getting out of bed.
`);

// 44_attention_training.md
writeCh('44_attention_training.md', `# Attentional Focus Training in Chronic Anxiety

*Dismantling internal sensory hyper-monitoring through Wells' Attentional Training Technique (ATT).*

---

## The Trap of Self-Focused Attention

When dizziness strikes, the natural instinct is to turn attention 100% inward:
- *"Is my head floating right now?"*
- *"Am I leaning to the left?"*
- *"Are my legs trembling?"*
- *"How does my vision look?"*

This hyper-vigilant internal scanning acts like a spotlight on the symptom, causing the thalamus to amplify the neural signals exponentially.

---

## Attentional Training Technique (ATT) by Adrian Wells

ATT is an evidence-based metacognitive protocol designed to restore flexible, voluntary attentional control.

### The 3-Stage Practice (12 Minutes):
Sit comfortably in a room with 5–6 distinct ambient sounds (e.g., clock ticking, outdoor traffic, refrigerator hum, birds, breathing, computer fan).

1. **Selective Attention (5 min):** Focus 100% of your hearing exclusively on ONE sound (e.g., the clock ticking) for 60 seconds, ignoring all others. Then switch exclusively to the distant traffic. Rotate through all individual sounds.
2. **Rapid Attentional Switching (3 min):** Rapidly shift your focus between sounds as prompted: clock -> traffic -> refrigerator -> breathing -> traffic -> clock.
3. **Divided Attention (2 min):** Expand your awareness to hear ALL ambient sounds simultaneously in a unified acoustic field.

Practicing ATT strengthens the prefrontal cortex's ability to voluntarily disengage from internal somatic monitoring.

---

## Action Protocol

1. Practice ATT once daily for 10 minutes.
2. Whenever you catch yourself hyper-scanning your balance while walking, immediately practice **External Sensory Anchoring:** Name 5 things you can see, 4 textures you can touch, 3 sounds you can hear.
`);

// 47_meditation.md
writeCh('47_meditation.md', `# Somatic Meditation & Vagal Nerve Protocols in PPPD

*Transforming meditation from an anxiety trigger into a powerful tool for nervous system regulation.*

---

## Why Traditional Meditation Often Fails PPPD Patients

Standard mindfulness instructions often say: *"Close your eyes and focus on your breath."*

For a PPPD patient, closing their eyes removes their visual balance anchor, and focusing on internal sensations triggers panic about dizziness or floating feelings.

We utilize **Open-Focus Somatic Meditation** specifically adapted for vestibular recovery.

---

## The Open-Focus Grounding Technique

1. **Keep Eyes Open (Soft Gaze):** Rest your gaze gently on a neutral point on the wall or floor.
2. **Peripheral Vision Expansion:** Without moving your eyes, consciously become aware of what is in your far left and far right peripheral vision. (Expanding peripheral vision instantly dampens sympathetic amygdala firing).
3. **Weight Transfer Sensation:** Focus entirely on the physical sensation of your sit bones on the chair or your feet on the floor. Feel the solid gravitational support of the earth beneath you.
4. **Physiological Sigh Breathing:** Inhale deeply through the nose, take a second micro-sip of air at the peak, and exhale slowly through mouth for 8 seconds.

---

## Action Protocol

1. Practice 5 minutes of Open-Focus Grounding daily.
2. Notice how expanding peripheral vision immediately calms the sensation of head pressure and spatial disorientation.
`);

console.log('✅ Module 1 English chapters generated successfully.');
