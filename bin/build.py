#!/usr/bin/env python

from shutil import copyfile
from subprocess import call

call(["./bin/save-emoji-modifier-bases.py"])
skintones = open('./bin/emoji-support.js', 'r', encoding='utf-8').read()

def exec_templates(infile):
  with open('./src/%s' % infile, 'r', encoding='utf-8') as incoming:
    source = incoming.read()
    with open('./dist/%s' % infile, 'w', encoding='utf-8') as outgoing:
      outgoing.write(source.replace("{{skintoneEligible}}", skintones))

def copy(*files):
  for f in files:
    copyfile('./src/%s' % f, './dist/%s' % f)

exec_templates('options.js')
exec_templates('postprocess.js')

copy('manifest.json', 'options.html', 'styles.css')
