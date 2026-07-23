export const course_number = 'CMSC839E'
export const course_full_name = 'Advanced Topics in Human-Computer Interaction (Fall 2026)'
export const course_sub_name = 'Uncertainty Communication for Decision-making '
export const course_short_name = 'uncertainty'
export const course_time = 'Tu 3:30pm - 6:00pm'

export const course_objective_long = `
<p>
<b>Description</b>&#8212;This course covers Human-Computer Interaction (HCI) research topics focusing on model uncertainty and decision-making. We will cover a range of models, from linear regression to probabilistic forecasts and AI foundation models, and explore how to help human users understand and manage uncertainty in these computational models. Core topics include

<font class='topic'>statistical communication</font>, 
<font class='topic'>explainability</font>, 
<font class='topic'>decision-making</font>, 
<font class='topic'>uncertainty visualization</font>, and 
<font class='topic'>LLM uncertainty</font>.

 This course is <b>MS/PhD qualifying</b> in Software Engineering/Programming Languages/HCI.  The class format includes a combination of presentations, discussions, and lectures. 
 

</p>

<p>
<b>Course objectives</b>&#8212;Students who take this course should have an interest in HCI and/or uncertainty communication. Prior experience with HCI or Visualization courses is beneficial but not required. Assignments are designed to learn project management skills and to provide practical experience for peer-reviewing.

By the end of this course, students should be able to 
<ul>
<li>Describe the background and open problems within the covered topics. </li>
<li>Propose new research projects based on the learned topics. </li>
<li>Choose and justify appropriate HCI research methods for their projects. </li>
<li>Understand the peer-reviewing process in HCI. </li>
<li>Improve their communication and presentation skills. </li>
</ul>

</p>
`



export const course_location = `IRB 1116`

export const syllabus_intro = `
                Most materials will be released publicly on this website. Confidential content (like reviews and signups) will be released on a UMD google drive. <br/>
                We reserve the right to change the syllabus, assignments, and policies as needed throughout the semester. Major changes will be announced in class and via email. 
`


export const howitworks = `We combine conventional activities (presentations, discussions, projects) with experimental ones (peer-reviewing). Canvas is the official channel but Slack will be used for helping class communication and finding collaborators. Unless specified otherwise, submit assignments through Canvas. Course materials will also be synced on Canvas.`


export const assignments = [
    {
        'name': 'Class presentations',
        'summary': '',
        'divs': [
            {
                'perc': .05,
                'id': 'paper-presentation',
                'requirement': `In each class, students will present papers from the provided paper list. 
                                `,
                'long_requirement': `
                Each presentation should last 8-15 minutes. <br/>
                Please sign up for 1 paper over the course of the semester. I will frozen the signup on Monday for next week. <br/>
                You can choose to present an optional paper if your co-presenter(s) agree. <br/>
                Presenters in the same class are encouraged to coordinate and decide how they would like to present and lead the discussion. <br/>
                You may reuse any online materials (e.g., slides, videos, demos) as long as you adhere to their licenses and describe the materials in your own words. <br/>
                You may use any online resources as guidance, but make sure to at least introduce the problem, present some methods and results, and stimulate a discussion.  
                `
            },
            {
                'perc': .05,
                'id': 'role-presentation',
                'requirement': `Play other roles (except for main presenter) at least twice throughout the semester.
                                `,
                'long_requirement': `
                 Each role presents 3-5 minutes. <br/>
                `
            },
            {
                'perc': .05,
                'id': 'project-presentation',
                'requirement': `Your (group) presentation of your project. `,
                'long_requirement': `
                 Depending on the number of papers, the presentation could range from 6 to 15 minutes.
                `
            }
            ,
            {
                'perc': .1,
                'id': 'course-attendance',
                'requirement': `Course discussion and participation `,
                'long_requirement': `
                Course discussion is important for your experience and the experience of your peers. We expect you to attend most of the classes. Take a photo of your attendance and submit it on Canvas. <br/>
                `
            }
        ]
    },

    {
        'name': 'Weekly reading responses',
        'summary': '',
        'divs': [
            {
                'perc': .10,
                'id': 'reading-responses',
                'requirement': 'Submit 1-2 questions for each required paper before the day of the class (before 9AM on class day).  ',
                'long_requirement': `
                You can substitute a required paper with an optional paper, although we encourage you to read the required papers. <br/>
                At least some questions per week should be non-trivial. While we won't strictly count non-trivial questions every week, your questions should show that you are consistently reading and critically thinking about the papers.  <br/>
                You may read papers in advance to help write your proposal. In this case, your questions will still be counted, even if those papers are later removed. (This is a git-tracked website.)`
            }]
    },

    {
        'name': 'Assignment 1:',
        'summary': '<a href="https://docs.google.com/document/d/15Cfz0HHoQT9XNmW13Qy48uV8VmAYs8p2yLfrhMbHFNI/edit?usp=sharing" class="normal-a">Project, proposal, & paper <svg stroke="#0083f5" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>',
        'divs': [
            {
                'perc': .05,
                'id': 'project-plan',
                'requirement': 'P.1 project proposal (group) ',
                'long_requirement': `Submit a 1-2 page proposal outlining the research question(s) you will pursue, possible methods, anticipated results, and a timeline.`
            },
            {
                'perc': .01,
                'id': 'abstract-author',
                'requirement': 'P.2 abstract & author information (group; not submitting on time will result in a 0 of P.3)  ',
                'long_requirement': `Submit your paper title, co-authors, and an abstract (100 to 400 words).`
            },
            {
                'perc': .14,
                'id': 'paper-submission',
                'requirement': 'P.3 paper submission (group; no late submissions accepted) ',
                'long_requirement': `Submit a 2-3 page paper that outlines your research problem, related work, methods, preliminary results, and future work.`
            },
            {
                'perc': .08,
                'id': 'final-paper',
                'requirement': 'P.4 The revised short paper and revision report (group; no late submissions accepted) ',
                'long_requirement': `
                     The teaching staff will look at the revised papers, the reviews, and your responses, and will then decide on a score. <br/>
                     This exam will be graded based on the quality of the revised version and if we can follow your revision report to identify what you have changed. 
                     If you receive a particularly picky review, you only need to respond to it reasonably.
   
                 `
            }
        ]
    },

    {
        'name': 'Assignment 2:  ',
        'summary': '<a href="https://docs.google.com/document/d/1iGmMkk73cQQ2C3GfaNVcU9f8Mkx_1tjIXMVvdp1qHC0/edit?usp=sharing" class="normal-a">Peer review <svg stroke="#0083f5" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a> (solo)',
        'divs': [
            {
                'perc': .01,
                'id': 'bidding',
                'requirement': 'R.1 Bidding & conflict ',
                'long_requirement': `Indicate in a spreadsheet the papers you'd like to review and those you should not review due to conflicts of interest.  <
                 We have a script to match interests and assign reviews automatically.`
            },
            {
                'perc': .06,
                'id': 'peer-reviews',
                'requirement': 'R.2 Write one peer review ',
                'long_requirement': `Students need to submit 1 peer review. <br/>
                 We will briefly review the submissions to ensure they are appropriate.
                `
            },
            //   { 'perc': .10,
            //         'id': 'final',
            //         'requirement': '<a href=\'https://docs.google.com/document/d/1MOivtgkwJyjpv1Z-ElEC1mC1jJKZO3AHngmAxk9ONL0/edit?usp=sharing\'>R.3</a> the final revised short paper and revision report (group; no late submissions accepted) ',
            //         'long_requirement': `
            //         The teaching staff will look at the revised papers, the reviews, and your responses, and will then decide on a score. <br/>

            //         This exam will be graded based on the quality of the revised version and if I can follow your revision report to identify what you have changed. If you receive a particularly picky review, you only need to respond to it reasonably.
            //          `
            //   }
        ]
    },
    {
        'name': 'Midterm exam',
        'summary': '(take-home)',
        'divs': [
            {
                'perc': .30,
                'id': 'midterm',
                'requirement': '~15 questions from those discussed in class prior to the exam. You select 6 to answer and submit a PDF to Canvas. (solo) ',
                'long_requirement': `
                 Expect to write 1-3 paragraphs for each question. We grade based on your idea, but be sure to read your answers for obvious readability issues. <br/>
                 We will generate answers with GPT & Claude to check if your answers are too similar to the generated answers. <br/>
                 `
            }]
    }
    ,
    {
        'name': 'Extra credit',
        'summary': '   ',
        'divs': [
            {
                'perc': .10,
                'id': 'extra-credit',
                'requirement': 'Exceptional presentation, paper, or participation could earn up to 10% extra credit.'
            }]
    }
]




export const syllabusData = [
    { week: 1, date: '09/01/26', topic: 'Introduction \& Icebreaker', reading: 'Openning for 40 min → Icebreaker for 40 min (Bring a Chart You Like/Dislike)', required: [
            { title: 'Seven Research Contributions in HCI', url: 'https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2012.pdf', pre: 'no stu presentation' },

    ], optional: [], assignments: '', noClass: false },
    {
        week: 2, date: '09/08/26', topic: 'Human-AI Decision-making', reading: '', required: [
            { title: 'Understanding the Effects of AI-Assisted Critical Thinking on Human-AI Decision Making', url: 'https://dl.acm.org/doi/10.1145/3772318.3790785' },
            { title: 'Rethinking Human-AI Collaboration in Complex Medical Decision-Making: A Case Study in Sepsis Diagnosis', url: 'https://dl.acm.org/doi/10.1145/3613904.3642343' },
            { title: 'Who Does What? Archetypes of Roles Assigned to LLMs During Human-AI Decision-Making', url: 'https://dl.acm.org/doi/10.1145/3772318.3791428' }
        ], optional: [
            { title: 'In the Shadow of Judgment: Mapping Out the Landscape of Human-AI Decision-Making Through a Systematic Review', url: 'https://www.fmyang.com/projs/haid/2026-haid.pdf' }
        ], assignments: '', noClass: false
    },
    {
        week: 3, date: '09/15/26', topic: 'Uncertainty', reading: '', required: [
            { title: 'Why Authors Don\'t Visualize Uncertainty', url: 'https://arxiv.org/abs/1908.01697' },
            { title: 'Addressing Uncertainty in LLM Outputs for Trust Calibration Through Visualization and User Interface Design', url: 'https://www.visible-language.org/Issue-59-2/addressing-uncertainty-in-llm-outputs-for-trust-calibration-through-visualization-and-user-interface-design.pdf', pre: '2-ok' },
            { title: 'TBD', url: '' }
        ], optional: [
            { title: 'A Survey on Uncertainty Quantification of Large Language Models: Taxonomy, Open Research Challenges, and Future Directions', url: 'https://dl.acm.org/doi/10.1145/3744238' },
            { title: "Uncertainty Quantification and Confidence Calibration in Large Language Models: A Survey", url: 'https://dl.acm.org/doi/abs/10.1145/3711896.3736569'},
            { title: "Projecting confidence: How the probabilistic horse race confuses and demobilizes the public", url: 'https://www.journals.uchicago.edu/doi/abs/10.1086/708682'}
        ], assignments: '', noClass: false
    },
    {
        week: 4, date: '09/22/26', topic: 'Deskilling \& Disempowerment', reading: '', required: [
            { title: 'How AI Impacts Skill Formation', url: 'https://arxiv.org/abs/2601.20245' },
            { title: 'Who\'s in Charge? Disempowerment Patterns in Real-World LLM Usage', url: 'https://arxiv.org/abs/2601.19062', pre: '2-ok'  },
            { title: 'Moral Deskilling and Upskilling in a New Machine Age', url: 'https://link.springer.com/article/10.1007/s13347-014-0156-9', pre: '2-ok'  }
        ],
        optional: [
            { title: 'AI Deskilling Is a Structural Problem', url: 'https://arxiv.org/abs/2601.20245' },
            { title: 'Human Flourishing and Technology Affordances', url: 'https://arxiv.org/abs/2601.20245' },
            { title: 'Deskilling, Reskilling, or Upskilling? Unpacking the Pathways of Student Adaptation to Generative Artificial Intelligence', url: 'https://arxiv.org/abs/2601.20245' },
            { title: 'How Artificial Intelligence Constrains Human Experience', url: 'https://www.journals.uchicago.edu/doi/full/10.1086/730709' }

        ], assignments: '', noClass: false
    },
    {
        week: 5, date: '09/29/26', topic: 'Creativity under GenAI', reading: '', required: [
            { title: 'Human Creativity in the Age of LLMs: Randomized Experiments on Divergent and Convergent Thinking', url: 'https://dl.acm.org/doi/full/10.1145/3706598.3714198' },
            { title: 'Are Semantic Networks Associated with Idea Originality in Artificial Creativity? A Comparison with Human Agents', url: 'https://dl.acm.org/doi/full/10.1145/3772318.3790849' },
            { title: 'How LLMs Distort Our Written Language', url: 'https://arxiv.org/abs/2603.18161' },
            { title: 'Generative artificial intelligence, human creativity, and art', url : 'https://academic.oup.com/pnasnexus/article/3/3/pgae052/7618478'}
        ], optional: [
            { title: 'Artificial Hivemind: The Open-Ended Homogeneity of Language Models (and Beyond)', url: 'https://openreview.net/forum?id=saDOrrnNTz' },
            { title: 'Generative AI and Creativity: A Systematic Literature Review and Meta-Analysis', url: 'https://arxiv.org/abs/2505.17241' },
            { title: "Generative artificial intelligence enhances creativity butreduces the diversity of novel content", url: 'https://www.science.org/doi/full/10.1126/sciadv.adn5290'}
        ], assignments: '', noClass: false
    },
    {
        week: 6, date: '10/06/26', topic: 'Dark Patterns', reading: '', required: [
            { title: 'The Siren Song of LLMs: How Users Perceive and Respond to Dark Patterns in Large Language Models', url: 'https://dl.acm.org/doi/10.1145/3772318.3791149' },
            { title: 'Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence', url: 'https://www.science.org/doi/10.1126/science.aec8352' },
            { title: 'The Potential Existential Threat of Large Language Models to Online Survey Research', url: 'https://www.pnas.org/doi/full/10.1073/pnas.2518075122' },
                        { title: 'How LLM Counselors Violate Ethical Standards in Mental Health Practice: A Practitioner-Informed Framework', url: 'https://ojs.aaai.org/index.php/AIES/article/view/36632' }
        ], optional: [
            {title:'The Psychogenic Machine: Simulating AI Psychosis, Delusion Reinforcement and Harm Enablement in Large Language Models', url:'https://arxiv.org/abs/2606.00975'}
        ], assignments: '', noClass: false
    },
    { week: 7, date: '10/13/26', topic: 'Fall Break (no class)', reading: '', required: [], optional: [], assignments: 'P.1 due', noClass: true },
    {
        week: 8, date: '10/20/26', topic: 'Trust in AI', reading: '', required: [
            { title: 'Do People Appropriately Rely on AI-Advice? An Analytical Review of HCI Research on Human-AI Decision-Making ', url: 'https://dl.acm.org/doi/10.1145/3772318.3791467' },
            { title: 'TBD', url: '' },
            { title: 'TBD', url: '' }
        ], optional: [], assignments: '', noClass: false
    },
    {
        week: 9, date: '10/27/26', topic: 'Trust in GenAI', reading: '', required: [
            { title: 'In Generative Artificial Intelligence We Trust: Unpacking Determinants and Outcomes for Cognitive Trust', url: 'https://link.springer.com/article/10.1007/s00146-025-02378-8' },
             { title: 'TBD', url: '' },
            { title: 'TBD', url: '' }
        ], optional: [], assignments: 'P.2 due', noClass: false
    },
    {
        week: 10, date: '11/03/26', topic: 'Interpretability & Explanation', reading: '', required: [
            { title: 'Explanation, Prediction, and Causality: Three Sides of the Same Coin', url: 'https://osf.io/preprints/osf/u6vz5_v1' },
             { title: 'TBD', url: '' },
            { title: 'TBD', url: '' }
        ], optional: [], assignments: '', noClass: false
    },
    { week: 11, date: '11/10/26', topic: 'Midterm week', reading: 'Fumeng travel to IEEE VIS', required: [], optional: [], assignments: '', noClass: true },
    {
        week: 12, date: '11/17/26', topic: 'Statistics \& Probability', reading: '', required: [
            { title: 'Statistical Tests, P Values, Confidence Intervals, and Power: A Guide to Misinterpretations', url: 'https://link.springer.com/article/10.1007/s10654-016-0149-3' },
            { title: 'Fair Statistical Communication in HCI', url: 'https://inria.hal.science/hal-01377894/file/fairstats-last.pdf', note: 'This is a very useful chaper. To get the gist, you can focus on the first 21 pages. To use the method, read the whole thing.' , pre: '2-ok' },
            { title: 'Researcher-Centered Design of Statistics: Why Bayesian Statistics Better Fit the Culture and Incentives of HCI', url: 'https://dl.acm.org/doi/10.1145/2858036.2858465' }
        ], optional: [
            {title: 'Rethinking Statistical Analysis Methods for CHI', url: 'https://dl.acm.org/doi/10.1145/2207676.2208557'}
        ], assignments: 'R.1 due', noClass: false
    },
    { week: 13, date: '11/24/26', topic: 'Thanksgiving (no class)', reading: '', required: [], optional: [], assignments: 'P.3 due<br/>R.2 out', noClass: true },
    {
        week: 14, date: '12/01/26', topic: 'AI Literacy <br>Earlier presentations', reading: '', required: [
            { title: 'Not Everyone Wins with LLMs: Behavioral Patterns and Pedagogical Implications for AI Literacy in Programmatic Data Science', url: 'https://dl.acm.org/doi/10.1145/3772318.3791283' },
            { title: 'TBD', url: '' }
        ], optional: [], assignments: 'R.2 due', noClass: false
    },
    { week: 15, date: '12/08/26', topic: 'Final Project Presentation', reading: '', required: [], optional: [], assignments: '', noClass: false },
    { week: 16, date: '12/15/26', topic: '', reading: 'Reading period', required: [], optional: [], assignments: 'P.4 due', noClass: false }
]




// "[##X] Rethinking the Ranks of Visual Channels  [[link]](https://arxiv.org/abs/2107.11367) [reviews] <br/> [##X] The Risks of Ranking: Revisiting Graphical Perception to Model Individual Differences in Visualization Performance  [[link]](https://mucollective.northwestern.edu/files/2022-perception-individual-differences.pdf)"
//  [##X] Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Method  [[link]](https://faculty.washington.edu/aragon/classes/hcde511/s12/readings/cleveland84.pdf) <br/>

export const collaboration_policy = `
<p> 
We encourage collaboration and discussion among students. However, solo assignments should be primarily completed on your own. You are welcome to seek help from the course staff during office hours or use Slack to ask questions and discuss with other students. For group projects, collaboration is encouraged on all aspects of the project and the paper.
</p>
`

export const late_policy = `
Overall, this course doesn’t have many assignments. To help guide our discussions, please submit your reading questions on time—they’re important for class prep. 

For assignments without a strict deadline, you can request a short extension if you let us know in advance. For assignments with hard deadlines (usually group submissions), please make sure your team submits on time. 

That said, we know life and deadlines (including conference ones!) can pile up. If multiple groups are affected, we’ll consider granting an extension.
</p>
`

export const ai_policy = ` <p>The scope of AI tools includes, but is not limited to, GPT, Claude, Gemini, DALL-E, Midjourney, and DeepSeek. In line with the spirit of this course

                    <ul>
                        <li>AI should <b>not</b> be used to <b>directly</b>  complete coursework. This includes, but is not limited to, summarizing papers without reading the original manuscripts or generating substantial portions of your assignments.</li>
                        <li>Clearly <b>mark</b> any content that is directly generated by AI. </li>
                        <li>Be mindful about your <b>reliance</b> on AI, especially in terms of <b>trusting</b> AI-generated content. </li>
                        <li>You may use AI to <b>assist</b> with coursework, such as inquiring about terms, brainstorming, and improving writing. </li>
                        <li>You are encouraged to use AI <b>creatively</b> and share your thoughts and experiences with us.</li>
                    </ul>
                </p>
`

export const support_text = `
We are committed to the full inclusion of all students. You should expect and demand respect from classmates and staff, and reciprocally, treat others with respect. If any incident challenges this commitment, please inform us immediately.

If you have a disability or condition that requires accommodations, please notify us early in the term. You can speak with us after class. For more information, contact Accessibility & Disability Services at (301) 314-7682 or adsfrontdesk@umd.edu.
`



export const acknowledgement = `
<p>The content of this class has been inspired by the classes and talks given by 
Jessica Hullman (<a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/497-11.html'>COMP_SCI 497</a>) at Northwestern University, Matthew Kay (<a href='https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/496-24.html'>COMP_SCI 496</a>) at Northwestern University, 
David H. Laidlaw (<a href='https://cs.brown.edu/courses/csci2370/2022/'>CSCI2370</a>) at Brown University,
Jeff Huang (<a href='https://cs.brown.edu/courses/csci2300/'>CSCI2300</a>) at Brown University,
Yizheng Chen (<a href='https://surrealyz.github.io/classes/llmsec/llmsec.html'>CMSC818I</a>) at the University of Maryland, College Park, 
Arvind Satyanarayan (<a href='https://vis.csail.mit.edu/classes/6.859/'>6.859</a>) at MIT, Abhraneel Sarma and Maryam Hedayati (<a href='https://fumeng-yang.github.io/VIS23-Transparent-Research/'>Transparent Practices</a>) at Northwestern University, 
 Chat Wacharamanotham at the University of Zurich, and Pierre Dragicevic (<a href='https://www.aviz.fr/badstats'>Bad Stats</a>) at Inria, France.

`