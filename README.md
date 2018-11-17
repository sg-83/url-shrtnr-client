# URL Shortner Client app

Written using Ember.js and hosted on github pages [here](https://sg-83.github.io/url-shrtnr-client).

I went with hash based locations so that this
can be deployed to github pages, where I don't have control of their
routing logic. If I wanted to make this app use traditional locations,
I'd need to put this on an actual web server, and configure it to return
index.html for all paths.

As part of this work the API app was updated to use the DelayedJob
backend, and a worker Dyno was added on heroku.
