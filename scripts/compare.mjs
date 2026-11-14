// Times a cold type-check of the same code base under TS 7 (native) and TS 6.
import { spawnSync } from 'node:child_process';

const runs = 3;
for (const [label, script] of [['TS 7', 'typecheck:ts7'], ['TS 6', 'typecheck:ts6']]) {
  const times = [];
  for (let i = 0; i < runs; i++) {
    const t = performance.now();
    const r = spawnSync('npm', ['run', '-s', script], { shell: true, stdio: 'inherit' });
    times.push(performance.now() - t);
    if (r.status !== 0) process.exit(r.status ?? 1);
  }
  console.log(`${label}: ${times.map((t) => Math.round(t) + 'ms').join(', ')} (min ${Math.round(Math.min(...times))}ms)`);
}
