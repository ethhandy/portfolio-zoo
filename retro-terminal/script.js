// ===== Portfolio Data =====
const DATA = {
  name: 'Andrey Petrovic',
  role: 'Full Stack Developer',
  location: 'Your City',
  email: 'andrey@example.com',
  github: 'github.com/andrey',
  linkedin: 'linkedin.com/in/andrey',

  about: [
    'Passionate developer who loves building things from scratch.',
    'I thrive in fast-paced environments where creativity meets code.',
    'When I\'m not coding, I\'m probably tinkering with retro hardware.'
  ],

  experience: [
    {
      role: 'Senior Developer',
      company: 'Acme Corp',
      date: '2023 - Present',
      desc: 'Leading frontend architecture and building scalable web apps.'
    },
    {
      role: 'Full Stack Developer',
      company: 'Nexora',
      date: '2021 - 2022',
      desc: 'Built a SaaS platform serving thousands of users.'
    },
    {
      role: 'Frontend Developer',
      company: 'BlueLabs',
      date: '2019 - 2021',
      desc: 'Developed interactive dashboards and data viz tools.'
    }
  ],

  skills: [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React / Next.js',      level: 90 },
    { name: 'Node.js / Express',    level: 85 },
    { name: 'Python / FastAPI',     level: 80 },
    { name: 'PostgreSQL / Redis',   level: 75 },
    { name: 'AWS / Docker',         level: 70 },
    { name: 'Git / CI/CD',          level: 90 }
  ],

  projects: [
    {
      name: 'TaskForge',
      tech: 'Next.js, TypeScript, PostgreSQL',
      desc: 'A project management tool with real-time collaboration.'
    },
    {
      name: 'PixelBoard',
      tech: 'React, Canvas API, WebSockets',
      desc: 'Collaborative pixel art canvas for the web.'
    },
    {
      name: 'CLI Weather',
      tech: 'Python, Click, OpenWeather API',
      desc: 'Beautiful terminal weather app with ASCII art.'
    }
  ]
};

// ===== ASCII Art =====
const ASCII_BANNER = `
 ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
 ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
 ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
 ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
 ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
 ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝`;

// ===== Terminal Engine =====
const output = document.getElementById('output');
const cmdInput = document.getElementById('cmd-input');
const cmdMirror = document.getElementById('cmd-mirror');
const terminal = document.getElementById('terminal');

// Print helpers
function addLine(text, className = 'line-info') {
  const div = document.createElement('div');
  div.className = `line ${className}`;
  div.innerHTML = text;
  output.appendChild(div);
}

function addBlank() {
  const div = document.createElement('div');
  div.className = 'line line-blank';
  output.appendChild(div);
}

function addAscii(text) {
  const pre = document.createElement('pre');
  pre.className = 'ascii-art';
  pre.textContent = text;
  output.appendChild(pre);
}

function addSeparator() {
  addLine('─'.repeat(60), 'line-separator');
}

function addTableRow(key, val) {
  addLine(
    `<span class="table-key">${key}</span> <span class="table-val">${val}</span>`
  );
}

function addProgressBar(label, percent) {
  const filled = Math.round(percent / 5);
  const empty = 20 - filled;
  const bar = `<span class="progress-fill">${'█'.repeat(filled)}</span><span class="progress-track">${'░'.repeat(empty)}</span>`;
  addLine(
    `<span class="table-key">${label}</span> <span class="progress-bar">${bar} <span class="progress-label">${percent}%</span></span>`
  );
}

function scrollToBottom() {
  terminal.scrollTop = terminal.scrollHeight;
}

// ===== Typing Animation =====
function typeText(text, className, speed = 15) {
  return new Promise(resolve => {
    const div = document.createElement('div');
    div.className = `line ${className}`;
    output.appendChild(div);

    let i = 0;
    function type() {
      if (i < text.length) {
        div.innerHTML += text[i] === ' ' ? '&nbsp;' : text[i];
        i++;
        scrollToBottom();
        setTimeout(type, speed);
      } else {
        div.innerHTML = text;
        resolve();
      }
    }
    type();
  });
}

// ===== Commands =====
const COMMANDS = {
  help: cmdHelp,
  about: cmdAbout,
  skills: cmdSkills,
  experience: cmdExperience,
  projects: cmdProjects,
  contact: cmdContact,
  clear: cmdClear,
  whoami: cmdWhoami,
  date: cmdDate,
  banner: cmdBanner,
  theme: cmdTheme,
  neofetch: cmdNeofetch,
  ls: cmdLs,
  cat: cmdCat,
  sudo: cmdSudo,
};

function cmdHelp() {
  addBlank();
  addLine('Available commands:', 'line-header');
  addSeparator();
  addTableRow('about', 'Who am I');
  addTableRow('skills', 'Technical skills');
  addTableRow('experience', 'Work history');
  addTableRow('projects', 'Things I\'ve built');
  addTableRow('contact', 'Get in touch');
  addTableRow('neofetch', 'System info');
  addTableRow('theme [green|amber]', 'Change color theme');
  addTableRow('banner', 'Show ASCII banner');
  addTableRow('clear', 'Clear the screen');
  addTableRow('date', 'Current date & time');
  addTableRow('whoami', 'Current user');
  addTableRow('ls', 'List files');
  addTableRow('cat [file]', 'Read a file');
  addSeparator();
  addLine('Type a command and press Enter.', 'line-dim');
  addBlank();
}

function cmdAbout() {
  addBlank();
  addLine(`┌── About ${DATA.name} ──┐`, 'line-header');
  addSeparator();
  addTableRow('Name', DATA.name);
  addTableRow('Role', DATA.role);
  addTableRow('Location', DATA.location);
  addBlank();
  DATA.about.forEach(line => addLine(`  ${line}`));
  addSeparator();
  addBlank();
}

function cmdSkills() {
  addBlank();
  addLine('┌── Technical Skills ──┐', 'line-header');
  addSeparator();
  DATA.skills.forEach(s => addProgressBar(s.name, s.level));
  addSeparator();
  addBlank();
}

function cmdExperience() {
  addBlank();
  addLine('┌── Work Experience ──┐', 'line-header');
  addSeparator();
  DATA.experience.forEach((exp, i) => {
    addLine(`  <span class="line-accent">${exp.role}</span> @ ${exp.company}`, 'line-info');
    addLine(`  ${exp.date}`, 'line-dim');
    addLine(`  ${exp.desc}`);
    if (i < DATA.experience.length - 1) addBlank();
  });
  addSeparator();
  addBlank();
}

function cmdProjects() {
  addBlank();
  addLine('┌── Projects ──┐', 'line-header');
  addSeparator();
  DATA.projects.forEach((p, i) => {
    addLine(`  <span class="line-accent">${p.name}</span>`, 'line-info');
    addLine(`  Tech: ${p.tech}`, 'line-dim');
    addLine(`  ${p.desc}`);
    if (i < DATA.projects.length - 1) addBlank();
  });
  addSeparator();
  addBlank();
}

function cmdContact() {
  addBlank();
  addLine('┌── Contact ──┐', 'line-header');
  addSeparator();
  addTableRow('Email', DATA.email);
  addTableRow('GitHub', DATA.github);
  addTableRow('LinkedIn', DATA.linkedin);
  addSeparator();
  addLine('  Feel free to reach out!', 'line-dim');
  addBlank();
}

function cmdClear() {
  output.innerHTML = '';
}

function cmdWhoami() {
  addLine(`  ${DATA.name} (${DATA.role})`);
}

function cmdDate() {
  const now = new Date();
  addLine(`  ${now.toLocaleString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  })}`);
}

function cmdBanner() {
  addBlank();
  addAscii(ASCII_BANNER);
  addBlank();
}

function cmdTheme(args) {
  const theme = (args[0] || '').toLowerCase();
  if (theme === 'amber') {
    document.documentElement.style.setProperty('--green', '#ffb000');
    document.documentElement.style.setProperty('--green-dim', '#996a00');
    document.documentElement.style.setProperty('--green-glow', 'rgba(255, 176, 0, 0.15)');
    document.documentElement.style.setProperty('--green-bright', '#ffc233');
    addLine('  Theme changed to amber.', 'line-accent');
  } else if (theme === 'green') {
    document.documentElement.style.setProperty('--green', '#33ff33');
    document.documentElement.style.setProperty('--green-dim', '#1a9e1a');
    document.documentElement.style.setProperty('--green-glow', 'rgba(51, 255, 51, 0.15)');
    document.documentElement.style.setProperty('--green-bright', '#66ff66');
    addLine('  Theme changed to green.', 'line-info');
  } else {
    addLine('  Usage: theme [green|amber]', 'line-dim');
  }
}

function cmdNeofetch() {
  const mini = [
    '   ┌─────────┐',
    '   │  ◣   ◢  │',
    '   │    ▼    │',
    '   │  ╰───╯  │',
    '   └─────────┘',
  ];

  addBlank();
  const info = [
    `<span class="line-accent">${DATA.name}</span>`,
    `─────────────────────`,
    `OS:       RetroOS 1.0`,
    `Host:     Portfolio Terminal`,
    `Shell:    COMMAND.COM`,
    `Terminal: VT323`,
    `CPU:      Caffeinated Brain @ 3.2GHz`,
    `Memory:   ${DATA.skills.length} skills loaded`,
    `Uptime:   5+ years`,
  ];

  for (let i = 0; i < Math.max(mini.length, info.length); i++) {
    const art = mini[i] || '                ';
    const inf = info[i] || '';
    addLine(`<span class="line-accent">${art}</span>    ${inf}`);
  }
  addBlank();
}

function cmdLs() {
  addBlank();
  addLine('  <span class="line-accent">about.txt</span>     <span class="line-accent">skills.dat</span>     <span class="line-accent">experience.log</span>');
  addLine('  <span class="line-accent">projects.md</span>   <span class="line-accent">contact.cfg</span>    <span class="line-accent">README.txt</span>');
  addBlank();
}

function cmdCat(args) {
  const file = (args[0] || '').toLowerCase();
  const fileMap = {
    'about.txt': cmdAbout,
    'skills.dat': cmdSkills,
    'experience.log': cmdExperience,
    'projects.md': cmdProjects,
    'contact.cfg': cmdContact,
    'readme.txt': () => {
      addBlank();
      addLine('  Welcome to my portfolio terminal!');
      addLine('  Type "help" to see available commands.');
      addBlank();
    }
  };
  if (fileMap[file]) {
    fileMap[file]();
  } else if (!file) {
    addLine('  Usage: cat [filename]', 'line-dim');
    addLine('  Try: cat about.txt', 'line-dim');
  } else {
    addLine(`  cat: ${file}: No such file or directory`, 'line-error');
  }
}

function cmdSudo() {
  addLine('  Nice try. Access denied. 😏', 'line-error');
}

// ===== Command Processing =====
function processCommand(input) {
  const trimmed = input.trim();
  if (!trimmed) return;

  // Echo the command
  addLine(`<span class="prompt">C:\\PORTFOLIO&gt;</span> <span class="line-cmd">${trimmed}</span>`);

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (COMMANDS[cmd]) {
    COMMANDS[cmd](args);
  } else {
    addLine(`  '${cmd}' is not recognized. Type "help" for commands.`, 'line-error');
    addBlank();
  }

  scrollToBottom();
}

// ===== Input Handling =====
function syncMirror() {
  cmdMirror.textContent = cmdInput.value;
}

cmdInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const val = cmdInput.value;
    cmdInput.value = '';
    syncMirror();
    processCommand(val);
  }
});

cmdInput.addEventListener('input', syncMirror);

// Focus input on click anywhere
document.addEventListener('click', () => cmdInput.focus());

// ===== Boot Sequence =====
async function boot() {
  const inputLine = document.getElementById('input-line');
  inputLine.style.display = 'none';

  addLine('BIOS v1.0 — Portfolio System', 'line-dim');
  addLine('Checking memory... OK', 'line-dim');
  addLine('Loading portfolio data... OK', 'line-dim');
  addBlank();

  await new Promise(r => setTimeout(r, 400));

  addAscii(ASCII_BANNER);
  addBlank();

  await typeText(`  Welcome! I'm ${DATA.name} — ${DATA.role}.`, 'line-info', 20);
  addBlank();

  addLine('  Type <span class="line-accent">help</span> to see available commands.', 'line-info');
  addLine('  Type <span class="line-accent">about</span>, <span class="line-accent">skills</span>, <span class="line-accent">experience</span>, or <span class="line-accent">projects</span> to explore.', 'line-dim');
  addBlank();

  inputLine.style.display = 'flex';
  cmdInput.focus();
  scrollToBottom();
}

boot();
