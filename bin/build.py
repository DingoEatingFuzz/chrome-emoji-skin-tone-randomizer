#!/usr/bin/env python

from shutil import copyfile
from subprocess import call

call(["./bin/save-emoji-modifier-bases.py"])
skintones = open('./bin/emoji-support.js', 'r', encoding='utf-8').read()
walk_tree = open('./bin/walk-tree.js', 'r', encoding='utf-8').read()

def exec_templates(infile):
  with open('./src/%s' % infile, 'r', encoding='utf-8') as incoming:
    source = incoming.read()
    with open('./dist/%s' % infile, 'w', encoding='utf-8') as outgoing:
      out = source.replace("{{skintoneEligible}}", skintones)
      out = out.replace("{{walkTree}}", walk_tree)
      outgoing.write(out)

def copy(*files):
  for f in files:
    copyfile('./src/%s' % f, './dist/%s' % f)

exec_templates('options.js')
exec_templates('postprocess.js')

copy('manifest.json', 'options.html', 'styles.css')

print("Project built at ./dist")
