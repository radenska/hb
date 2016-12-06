'strict use';

var time = ['morning', 'day', 'evening', 'night', 'year', 'life', 'meeting', 'lunch', 'dinner', 'month'];
var verb = ['hope', 'insist', 'deem', 'demand', 'declare', 'decree', 'wish', 'request', 'dictate', 'require'];
var verb2 = ['have', 'enjoy', 'increment', 'blessed with', 'revel in', 'execute', 'drink to', 'amass', 'rejoice in' ,'desire'];
var adj = ['happy ', 'awesome ', 'scintillating ', 'exciting ', 'lovely ', 'fulfilling ', 'astounding ', 'magnificent ', 'fantastic ', 'rejuvinating ', 'excellent '];
var desc = ['Dear', 'Dearest', 'Darling', 'Wicked', 'Blondest', 'Overly serious', 'Bedazzling', 'Hungry', 'Adorable', 'Goofy'];

var i = Math.floor(Math.random() * 10);
var i2 = Math.floor(Math.random() * 10);
var i3 = Math.floor(Math.random() * 10);
var i4 = Math.floor(Math.random() * 10);
var i5 = Math.floor(Math.random() * 10);

document.write(desc[i] + ' Kirsten, I ' + verb[i2] + ' that you ' + verb2[i3] + ' a(n) ' + adj[i4] + time[i5] + '!!!');
