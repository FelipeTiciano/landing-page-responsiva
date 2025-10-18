// Accessibility and UI behaviors: theme toggle, form handling, keyboard shortcuts
(function(){
  const btn = document.getElementById('theme-toggle');
  const body = document.body;
  // restore theme from localStorage
  const saved = localStorage.getItem('theme');
  if(saved) body.setAttribute('data-theme', saved);
  btn.addEventListener('click', ()=>{
    const cur = body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    btn.setAttribute('aria-pressed', next === 'dark');
    localStorage.setItem('theme', next);
  });

  // keyboard: press ? to show help (simple)
  window.addEventListener('keydown', (e)=>{
    if(e.key === '?'){ alert('Atalhos:\n- ? ajuda\n- Tab para navegar\n- Enter enviar formulário'); }
  });

  // simple form submission (demo, no network)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const name = form.name.value.trim();
    status.textContent = 'Enviando...';
    // simulate async result
    setTimeout(()=>{
      status.textContent = 'Mensagem enviada. Obrigado, ' + (name||'usuário') + '!';
      // clear
      form.reset();
    }, 700);
    status.classList.remove('sr-only');
  });

  // Ensure all interactive items are keyboard-focusable where appropriate
  // (Example: make li in todo list focusable - already tabindex=0 in markup)
})();
