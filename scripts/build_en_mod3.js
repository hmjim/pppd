const fs = require('fs');
const path = require('path');

const EN_DIR = path.join(__dirname, '..', 'chapters_en');
if (!fs.existsSync(EN_DIR)) fs.mkdirSync(EN_DIR, { recursive: true });

function writeCh(filename, content) {
    fs.writeFileSync(path.join(EN_DIR, filename), content.trim() + '\n', 'utf8');
    console.log(`[EN Mod 3] Written ${filename}`);
}

// 14_neuroplasticity.md
writeCh('14_neuroplasticity.md', `# Neuroplasticity: Reprogramming Neural Pathways

*Hebb's Law in action: "Neurons that fire together, wire together." How to pave new neural highways of stability.*

---

## The Double-Edged Sword of Neuroplasticity

The human brain is not a rigid biological machine; it is a dynamically malleable neural network that physically adapts its architecture based on repetitive input.

- **How You Practiced Dizziness:** By spending 6 to 12 months monitoring every step, fearing every sway, and ruminating on worst-case scenarios, you inadvertently built a high-speed neural superhighway dedicated to balance fear.
- **How We Rebuild Stability:** By introducing calm somatic responses, daily VRT, and behavioral exposure, we systematically prune the fear circuits and construct a new neural superhighway of equilibrium and safety.

---

## The Path in the Snow Metaphor

Imagine a deep snowfield. The first time you walk through it, it takes immense physical effort. The tenth time, a visible path is forged. The hundredth time, walking down that deep groove is effortless.

Right now, your brain automatically walks down the "dizziness panic" path because it is deeply grooved. 

When you practice the exercises in this book, you are intentionally walking through fresh snow. It will feel unnatural and resistant initially. But with daily repetition, the old path becomes overgrown and forgotten, while the new path of stability becomes your default automatic state.

---

## Action Protocol

1. Recognize that every moment of remaining calm during a wave of unsteadiness physically rewires your synaptic connections.
2. Celebrate micro-victories: walking 50 meters with relaxed shoulders is a concrete neuroplastic achievement.
`);

// 15_metacognition.md
writeCh('15_metacognition.md', `# Metacognitive Therapy: The Passing Trains

*Stop debating catastrophic thoughts. Master detached mindfulness and observe thoughts without engagement.*

---

## The Fallacy of Thought Debate

In standard CBT, patients are often taught to dissect and debate their anxious thoughts (*"What is the evidence that I will collapse?"*).

In severe PPPD, this often backfires because the patient spends hours debating their sensations, keeping their conscious attention glued to the symptom.

**Metacognitive Therapy (MCT)** shifts the paradigm: **We do not care about the content of the thought. We change your relationship to the thought process itself.**

---

## The Railroad Platform Metaphor

Think of your conscious mind as a passenger standing on a train platform:
- Anxious thoughts are express trains passing through: *"The Dizzy Express," "The What-If Train," "The Helplessness Train."*
- You do not need to jump onto the train.
- You do not need to argue with the conductor.
- You do not need to lie on the tracks to stop it.

You simply stand on the platform, observe the train rumble past, and allow it to depart into the distance without boarding it.

---

## Action Protocol: Detached Mindfulness

1. When the thought *"You are swaying, you're going to fall"* appears, label it: **"Ah, the Dizzy Train is passing through."**
2. Do not answer the thought. Do not argue.
3. Return your attention to whatever task your hands are currently doing.
`);

// 16_cognitive_distortions.md
writeCh('16_cognitive_distortions.md', `# Cognitive Distortions in Chronic Illness

*Catastrophizing, emotional reasoning, black-and-white thinking, and fortune-telling.*

---

## The 4 Primary Cognitive Traps of PPPD

The anxious brain systematically distorts incoming data through cognitive biases:

### 1. Catastrophizing
- *Thought:* "I felt off-balance in the kitchen -> I am going to have a seizure / I will be bedridden for life."
- *Reality:* A transient proprioceptive glitch provoked by fatigue.

### 2. Emotional Reasoning
- *Thought:* "I *feel* terrified and unstable -> Therefore, my physical balance *must* be failing."
- *Reality:* Feelings are neuro-chemical states, not physical facts. You can feel completely terrified while your physical balance remains rock-solid.

### 3. Fortune-Telling
- *Thought:* "I have a business meeting next week -> I will definitely get dizzy and humiliate myself."
- *Reality:* You are attempting to predict the future based on past trauma.

### 4. Black-and-White Thinking
- *Thought:* "I had a minor setback today -> All my 3 months of progress are completely destroyed."
- *Reality:* Recovery is an oscillating upward trend, not a straight linear line.

---

## Action Protocol: The ABCDE Cognitive Audit

Whenever you catch yourself spiraling:
- **A (Activating Event):** Sensation of floating while standing in line.
- **B (Belief/Distortion):** "I'm about to collapse" (Catastrophizing).
- **C (Consequence):** Panic surge, tachycardia.
- **D (Disputation):** "I have felt this 500 times and have never collapsed once. My legs are strong."
- **E (Effective New Belief):** "This is just an adrenaline spike. I can stand here comfortably."
`);

// 17_root_causes.md
writeCh('17_root_causes.md', `# The Root Causes: Where Did We Go Off Course?

*Perfectionism, hyper-responsibility, chronic suppressed stress, and the neurosis of control.*

---

## The PPPD Psychological Archetype

Across hundreds of PPPD cases, a remarkably consistent personality profile emerges:
- **High Perfectionism & Ambition:** Extremely high internal standards for work, family, and self.
- **Hyper-Responsibility:** Carrying the emotional or practical burdens of everyone around them.
- **Conflict Avoidance / Suppressed Anger:** Inability to say "no," swallowing grievances to keep the peace.
- **The Obsession with Control:** Terrified of vulnerability, unpredictability, and loss of control.

---

## The Body's Final Strike

Before your first dizziness episode, your nervous system was likely enduring months or years of chronic, unacknowledged emotional overload: toxic work environments, relationship crises, or relentless self-criticism.

Your body gave you subtle warning signs: migraines, stomach knots, insomnia. You ignored them and powered through.

Finally, your nervous system pulled the ultimate circuit breaker: **it took away your physical balance.** When you cannot even walk steadily, you are forced to stop running, stop carrying everyone else, and finally confront your own life.

---

## Action Protocol

1. Honestly answer: *"What unbearable emotional stress or exhausting role was I enduring in the 6–12 months before my dizziness began?"*
2. Acknowledge that your dizziness is your body's loud demand for boundaries, rest, and authentic living.
`);

// 18_ego.md
writeCh('18_ego.md', `# The Ego and the False Identity of the "Sick Person"

*How chronic illness becomes an identity, and how to detach from the role of a permanent patient.*

---

## The Danger of the Patient Identity

When an illness lasts for years, it can insidiously become your primary identity:
- You become *"The person with the mysterious vestibular illness."*
- Your conversations revolve exclusively around doctors, symptoms, and medications.
- Your entire schedule is organized around avoiding triggers.

This identity provides a hidden subconscious safety: as long as you are "severely ill," the expectations of the world are suspended. You are excused from difficult career decisions, complex relationship conflicts, and the fear of failure.

---

## Reclaiming the Sovereign Self

You are not "PPPD." PPPD is merely a temporary software state your nervous system is currently processing.

To heal, you must begin acting as the healthy person you are becoming:
- Speak about topics unrelated to your health.
- Re-engage with creative hobbies, passions, and professional goals.
- Step out of the passive patient role into the active architect of your recovery.

---

## Action Protocol

1. Impose a 24-hour ban on discussing your symptoms with anyone except your medical log.
2. When someone asks *"How are you feeling?"*, answer simply: *"I'm doing well, making steady progress,"* and redirect the conversation to life, art, or ideas.
`);

// 19_inner_child.md
writeCh('19_inner_child.md', `# The Inner Child & Emotional Safety

*Soothing the terrified, abandoned inner child that is driving the panic response.*

---

## The Amygdala as a Terrified Child

In psychodynamic and internal family systems (IFS) therapy, the hyper-aroused amygdala can be understood as a frightened, vulnerable inner child:
- It feels helpless, overwhelmed by sensations it does not understand.
- When you scream at your body (*"Why won't you stop swaying?! I hate you!"*), you are terrifying that inner child even further.

Self-punishment and anger at your symptoms trigger more adrenaline, worsening the balance dysfunction.

---

## The Reliable Adult Protocol

Healing requires you to step into the role of the **Reliable Adult**:
1. Place a hand gently over your chest.
2. Speak to your internal state with profound warmth and authority:
   - *"I see you are scared right now. I know the room feels unstable. But I am right here with you. We are physically safe. I will protect us."*

When the primitive emotional brain feels loved, acknowledged, and safe, its defensive alarms stand down.

---

## Action Protocol

1. Practice the Reliable Adult dialogue whenever a wave of panic or vulnerability surges.
2. Treat your body with the gentle compassion you would offer a feverish child.
`);

// 28_suppressed_emotions.md
writeCh('28_suppressed_emotions.md', `# Suppressed Emotions & Dr. Sarno's TMS Framework

*How unconscious rage, grief, and fear convert into physical balance symptoms.*

---

## Tension Myositis Syndrome (TMS) & Somatization

Dr. John Sarno, pioneer of Mindbody Medicine at NYU, demonstrated that many chronic pain and functional syndromes are caused by **TMS (Tension Myositis Syndrome)**—a process where the brain creates physical symptoms to distract conscious awareness from overwhelming, unacceptable emotional states (such as deep rage, grief, or shame).

When you are obsessing about your dizziness 24/7, your conscious mind has zero bandwidth left to feel your underlying emotional pain.

---

## The Somatic Release Writing Protocol

To disarm this emotional diversion:
1. Set a timer for 15 minutes.
2. Open a blank page and write completely uncensored about everything you are angry about, resentful of, or grieving (without worrying about grammar or morals).
3. Express the raw, unfiltered emotional truth.
4. Immediately burn or shred the paper afterward (ensuring total subconscious safety).

Consistently releasing suppressed emotional pressure eliminates the brain's need to generate physical distraction symptoms.

---

## Action Protocol

1. Perform one 15-minute uncensored emotional writing session today.
2. Notice any physical sensations (heat, crying, deep sighs) that occur as emotional energy discharges.
`);

// 46_victim_state.md
writeCh('46_victim_state.md', `# Exiting the Victim State: Radical Ownership

*Moving from "Why did this happen to me?" to "What am I building from here?"*

---

## The Psychology of the Victim Triangle

Karpman's Drama Triangle describes three roles: **Victim, Rescuer, and Persecutor.**

In chronic dizziness, it is easy to get locked in the Victim role:
- *Persecutor:* The dizziness, the incompetent doctors, the noisy world.
- *Victim:* "Poor me, my life is ruined, nobody understands."
- *Rescuer:* The next magic supplement, therapist, or miracle cure.

As long as you remain in the Victim position, you are powerless. You are waiting for an external savior who will never come.

---

## The Shift to Radical Ownership

Recovery begins the precise second you take **100% radical responsibility** for your nervous system:
- It may not be your fault that you developed PPPD.
- But it is 100% your responsibility to execute the daily protocols, recondition your brain, and rebuild your life.

When you own your recovery, you reclaim your power.

---

## Action Protocol

1. Write down: **"I am no longer a passive victim of dizziness. I am the conscious engineer of my neural recovery."**
2. Take one proactive action today that a fully recovered, empowered version of yourself would take.
`);

// 45_shadow_work.md
writeCh('45_shadow_work.md', `# Shadow Work & Integration of the Suppressed Self

*Integrating the forbidden aspects of personality: Anger, boundaries, and healthy selfishness.*

---

## Carl Jung's Shadow Applied to Somatic Healing

The "Shadow" comprises all parts of ourselves that we deemed unacceptable in childhood: our anger, our desire for rest, our assertiveness, our refusal to please others.

When you constantly play the "Good Girl" or "Nice Guy"—always smiling, never complaining, always accommodating—your suppressed shadow turns inward against your own physiology.

---

## Setting Boundaries as Neuro-Vestibular Medicine

Saying **"NO"** to unreasonable demands, toxic relationships, and exhausting obligations is a biological necessity for nervous system recovery.

Every time you say "yes" to someone else when your body is screaming "no," your nervous system spikes sympathetic tension and tightens your muscle armor.

---

## Action Protocol

1. Identify one area in your personal or professional life where you are compromising your well-being to please others.
2. Set one clear, firm boundary this week. Notice the immediate sense of internal solidness and sovereignty that follows.
`);

console.log('✅ Module 3 English chapters generated successfully.');
