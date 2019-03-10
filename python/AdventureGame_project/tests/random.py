import random
import console

keys = ['dog', 'cat', 'mouse']
values = ['cute', 'mad']
results = {
'dog': 'fluffy'
'cat': 'mad',
'mouse': ''
}
print(results[0])
#bob = console()

#bob.input_alert("enter key")
choice = console.input_alert('Enter key')


while choice != '':
  keys.append(choice)
  choice = console.input_alert('Another key...')

for x in keys:
  choice = console.input_alert('Enter choice')
  while not choice:
    choice = console.input_alert('Seriously I need another choice.')
  values.append(choice)
console.hud_alert('Starting...')

for x in keys:
  console.hud_alert('For %s' % x)
  #console.hud_alert('For %s, %s, %s' % (x, 2, x + 2))
  results[x] = values.pop(random.randrange(len(values)))
  console.alert('%s is' % x, '%s' % results[x], button1 = 'Ok', hide_cancel_button = True)

print 'Review final results'
print '%s' % results
