const abc = {e: {e: {e: {}}}}

class Running {}

function process(e) {

  if (!e.r) { e.r = new Running(); console.log('created'); }
  else { console.log('already created'); }

  if (e.e) process(e.e)
}

process(abc.e);
process(abc.e);
