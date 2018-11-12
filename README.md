<h1>Maxed Out</h1>
<h4>(This was completed as a project while at Launch Academy to showcase my newfound abilities.)</h4>
<p>Maxed out is a website for the average fitness enthusiast. Users can create workouts, add information about them (description, location, date), track their lifts (reps, sets, weight) and then see their progress over time. Additionally, the website serves as an accountability device. When a new user signs up, they can opt to participate in the accountability buddy system. When they do not complete a number of workouts per week, they will serve an email reminder to their accountability buddy describing a debt.</p>


<h3>Getting started </h3>
<h5>To start Maxed Out run: </h5>

```
$ bundle install
$ bundle exec rake:db create
$ bundle exec rake:db migrate
$ rails server
```

In another terminal instance, run:
```
$ bundle install
$ bundle exec rake:db create
$ bundle exec rake:db migrate
$ rails server
```
Lastly, to fire up the accountability system, run in another tab
```
$ redis-server
```

<h3> Testing features </h3>
<p> To run the tests written for Maxed Out, please run </p>

```
$ bundle exec rspec
```

<h2> Built with</h2>
<ul>
<li><a href="https://foundation.zurb.com/sites/docs/">Foundation</a></li>

<li><a href="https://www.npmjs.com/package/react-google-charts#installation">React Google Charts</a></li>
<li><a href="https://github.com/mperham/sidekiq">Sidekiq</li></a>
<li><a href="sidekiq scheduler">Sidekiq Scheduler </li></a>
</ul>

<h3>Future (Dream) Features</h3>
<ul>
<li>I would like to pull from the myfitnesspal API to populate my list of exercises. Right now, the user can only record sets of bench press, squat, or deadlift. I'd like to expand this to reflect the wealth of different movements on the MFP database</li>
<li>I would like to add capabilities for nutritional recording and caloric tracking, in collaboration with the workout tracking side of the site.</li>
</ul>
