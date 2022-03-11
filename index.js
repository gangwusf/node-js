const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
*/

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .post('/complete_batch', (req, res) => 
	{ 
		res.json(
{"completions":[
{"completion":"\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/helloworld\";\n  @import \"example/","log_prob":0.0},
{"completion":"\n    return \"Hello World!\"\n}", "log_prob":0.0},
{"completion":"\n  # TEMPLATE STORAGE\n\n  # {{ TEMPLATE STORAGE }}\\\n  # {{ TEMPLATE STORAGE }}\\\n  # {{ TEMPLATE STORAGE }}\\\n\n  # {{ TEMPLATE STORAGE }}\\\n  # {{ TEMPLATE STORAGE }}\\\n  # {{ TEMPLATE STORAGE }}\\\n\n  # {{ TEMPLATE STORAGE }}\\\n  # {{ TEMPLATE STORAGE }}\\\n  # {{ TEMPLATE STORAGE }}\\\n  # {{ TEMPLATE STORAGE }","log_prob":0.0},
{"completion":"\n    render_string('Hello world')\n}","log_prob":0.0}]}
		);
		console.log(req.body);
	})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

