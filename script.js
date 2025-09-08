// script.js
// Handles test flow on test.html and computing result for storage

(function(){
  // Only run on test.html context
  if (!document.getElementById) return;

  const qbox = document.getElementById('qbox');
  const opts = document.getElementById('opts');
  const notesEl = document.getElementById('notes');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const backBtn = document.getElementById('back');
  const progressText = document.getElementById('progressText');
  const progressBar = document.getElementById('progressBar');

  const lang = localStorage.getItem('mc_lang') || 'en';
  let index = 0;
  const total = QUESTIONS.length;
  // answers: null or 0..3
  let answers = JSON.parse(localStorage.getItem('mc_answers') || 'null') || Array(total).fill(null);
  notesEl.value = localStorage.getItem('mc_notes') || '';

  function render() {
    // update progress
    progressText.innerText = `${lang === 'en' ? 'Question' : (lang==='hi'?'प्रश्न':'प्रश्न')} ${index+1} / ${total}`;
    progressBar.style.width = `${Math.round(((index)/total)*100)}%`;

    // question
    qbox.innerHTML = `<h3 class="qtitle">${QUESTIONS[index][lang]}</h3>
                      <p class="muted small">(${index+1} of ${total})</p>`;

    // options
    opts.innerHTML = '';
    OPTIONS[lang].forEach((label, i) => {
      const el = document.createElement('button');
      el.className = 'opt-btn';
      if (answers[index] === i) el.classList.add('active');
      el.innerText = label;
      el.onclick = () => {
        answers[index] = i; // store choice value 0..3
        localStorage.setItem('mc_answers', JSON.stringify(answers));
        // highlight
        Array.from(opts.children).forEach((c, idx) => c.classList.toggle('active', idx===i));
      };
      opts.appendChild(el);
    });

    // nav buttons
    prevBtn.disabled = index === 0;
    nextBtn.innerText = index === total - 1 ? (lang==='en'?'Submit':'(सबमिट)' ) : (lang==='en'?'Next':'अगला');
  }

  prevBtn.addEventListener('click', () => {
    if (index>0) index--; render();
  });
  nextBtn.addEventListener('click', () => {
    // require answer for current question before moving forward
    if (answers[index] === null) {
      alert(lang==='en'?'Please choose an option to continue.': (lang==='hi'?'कृपया आगे बढ़ने के लिए एक विकल्प चुनें।':'कृपया पुढे जाण्यासाठी एक पर्याय निवडा.'));
      return;
    }
    if (index < total - 1) {
      index++; render();
    } else {
      // submit
      localStorage.setItem('mc_notes', notesEl.value || '');
      computeAndSaveResult();
      window.location.href = 'result.html';
    }
  });

  backBtn.addEventListener('click', () => window.location.href = 'index.html');

  // compute score and percentage
  function computeAndSaveResult() {
    // scoring: 0..3 per question. Lower is better.
    const score = answers.reduce((s, v) => s + (v||0), 0);
    const maxScore = total * 3;
    const fitnessPct = Math.round((1 - (score / maxScore)) * 100); // 100% healthy when score=0
    // label logic
    let labelKey = 'fit';
    if (fitnessPct >= 75) labelKey = 'fit';
    else if (fitnessPct >= 55) labelKey = 'mild';
    else if (fitnessPct >= 35) labelKey = 'mod';
    else labelKey = 'high';

    const payload = {
      score,
      pct: fitnessPct,
      labelKey, // 'fit' | 'mild' | 'mod' | 'high'
      notes: localStorage.getItem('mc_notes') || '',
      lang,
      timestamp: Date.now()
    };

    localStorage.setItem('mc_last_result', JSON.stringify(payload));
    // also clear in-progress answers
    localStorage.removeItem('mc_answers');
    localStorage.removeItem('mc_notes');
  }

  // initialize UI
  render();

})();
