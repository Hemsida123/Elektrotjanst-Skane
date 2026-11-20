const navButton=document.querySelector('.nav-toggle');
const nav=document.querySelector('.main-nav');
function closeNav(){nav?.classList.remove('open');navButton?.setAttribute('aria-expanded','false');navButton?.setAttribute('aria-label','Öppna menyn');document.body.classList.remove('menu-open');}
navButton?.addEventListener('click',()=>{const open=navButton.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);navButton.setAttribute('aria-expanded',String(open));navButton.setAttribute('aria-label',open?'Stäng menyn':'Öppna menyn');document.body.classList.toggle('menu-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){closeNav();navButton.focus();}});
matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches)closeNav();});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
const dialog=document.querySelector('.lightbox');let lastTrigger;
document.querySelectorAll('[data-enlarge]').forEach(button=>button.addEventListener('click',()=>{lastTrigger=button;const image=dialog.querySelector('img');image.src=button.dataset.enlarge;image.alt=button.dataset.caption;dialog.querySelector('.lightbox-title').textContent=button.dataset.caption;dialog.showModal();}));
dialog?.querySelector('.lightbox-close').addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog?.addEventListener('close',()=>lastTrigger?.focus());
const subjectSelect=document.querySelector('#project-type');const emailLink=document.querySelector('#project-email');
function updateEmail(){if(!subjectSelect||!emailLink)return;const subject='Förfrågan: '+subjectSelect.value;const body='Hej Martin!\n\nJag vill ha hjälp med '+subjectSelect.value.toLowerCase()+'.\n\nOrt:\nTelefonnummer:\nKort beskrivning:\n\nVänliga hälsningar\n';emailLink.href='mailto:info@elrenovering.se?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);}
subjectSelect?.addEventListener('change',updateEmail);updateEmail();
document.querySelector('[data-load-reco]')?.addEventListener('click',()=>{const box=document.querySelector('.review-widget');const frame=document.createElement('iframe');frame.src='https://widget.reco.se/v2/venues/3433495/horizontal/xlarge?inverted=false&border=true&lang=sv';frame.title='Kundomdömen för Elektrotjänst i Skåne AB från Reco';frame.loading='lazy';frame.referrerPolicy='strict-origin-when-cross-origin';box.replaceChildren(frame);box.classList.add('loaded');});
