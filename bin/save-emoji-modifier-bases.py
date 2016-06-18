#!/usr/bin/env python

lines = []

# There's a 100% chance this breaks in the future
with open('./bin/emoji-data.txt', 'r', encoding='utf-8') as f:
  grab = False
  for line in f:
    if grab:
      lines.append(line)
    elif line.strip() == '# All omitted code points have Emoji_Modifier_Base=No':
      grab = True

ranges = [ line.split(';')[0].strip() for line in lines[2:-4] ]

all_emoji = []
for r in ranges:
  parts = r.split('..')
  domain = range(int(parts[0], 16), int(parts[1], 16) + 1) if len(parts) == 2 else [ int(parts[0], 16) ]
  emoji = ( chr(i) for i in domain )
  all_emoji.append(emoji)

all_emoji = [ i for sub in all_emoji for i in sub ]

with open('./bin/emoji-support.js', 'w', encoding='utf-8') as f:
  f.write('const skintoneEligible = [ {} ]'.format(', '.join([ "'{}'".format(emoji) for emoji in all_emoji ])))

print('Skintone eligible emoji saved as a js const at ./bin/emoji-support.js');
