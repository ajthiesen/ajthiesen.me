
You'd think, in the 21st Century I wouldn't have to explain to people
about #DNS and how to use it. But apparently I do. So here's some quick
rules for making DNS work.


1. Use DNS.

Seriously, it's not "insecure", it's not "hackable". It stops people
having to remember long series of digits and getting them wrong at
just the wrong time. It also makes your network much more flexible.


2. Don't name your machines something symbolic.

While you might think it's a wheeze to name your machines something
meaningful, it'll get on your nerves later. If you start naming
machines "PRD_SRV_01", you'll regret it when you move the machine to
doing something else (like making it a non-production server..)

Also, your machine names are no longer pronouncible. If you call them
"gandalf" people can use that name. If you call thm PRD_SRV_01, you'll
hear conversations like "No!! PRRRRRRDSRRRV!!! Pee Are Dee. No DEE, not
SEE. Dee for... I dunno"


3. Don't name your machines something immemorable.

If you just serial number your machines, you might as well just use
the IP addresses. A former employer just named all the machines
W2K_<serial number>

The problem is, how do you find the machines which are print servers?
You have to open each one up and look to see if says it's a print
share.

How do you find the closest one to your desk? [[Email]] the admins, hope
they know the answer...

It doesn't help find the machines you need and it CERTAINLY doesn't
help people remember which machines are production and which are
development and hence on which ones it's safe to drop a database...

Secondly, the "hamming distance" between the names isn't far enough.

"You dropped the database on DBSRV967 ? Oh good grief that's a live
database! I told you to drop the one on DBSRV976!!!"

There's little visual difference between the names when they're
written down and people often transpose digits/letters when they read
them. Digit transposition and spelling errors should result in unknown
machines, not valid but incorrect machines.


4. Don't name your machines after an attribute.

If you call a machine "bigserver", what happens when you buy a bigger
machine? If you call a machine "dualprocessor", what happens when you
buy it another processor?

I worked for a company which named the machines after their IBM model
number. Now firstly, these aren't meaningful, so people would ask
"which machine is the production machine and which one is test again?"

Secondly, it was suggested they buy a duplicate machine as a
failover. This, in a brilliant bit of corporate thinking, got vetoed
on the grounds that the admins would be unable to name it in
accordance with the naming guidelines and it was easier not to have a
failover than change the naming rules...


5. Don't name the machines after what they do.

"Look, it's very simple. Mailserver isn't the mail server because the
disks are too small. Fileserver is the mail server. Mailserver is
now just the print server..."


6. Name your machines something random, pronouncible and memorable.

Pick a generating sequence which will get you lots of names which
people can remember. People are good at remembering two types of
things; contextual information, and arbitrary lists of words they
already know.

Picking something like "hobbits" as a sequence means there'll be no
bad associations; people aren't going to make an unconscious link that
isn't correct.

We have a box here, whose name I get wrong everytime I type it. Why?
Because the guy who named it abbreviated "server" as "svr" whereas I
habitually abbreviate it "srv". Nothing wrong with that, but people do
habitually abbreviate things differently..

If we'd called it "frodo", it wouldn't take me three goes and some
thinking to talk to it. That thinking distracts me from what I'm doing.


7. Give the machines meaningful aliases.

If you have "mailserver" in the DNS, people don't need to know whether
"gandalf" or "frodo" are the mailserver. More importantly, they don't
need to know if you change it; "mailserver" gets them the mail server
machine. Note that this is giving the machine another name, not naming
them after what they do.

"gandalf" refers to one physical machine. "mailserver" refers to the
machine which is being the mail server today. Now the discussion makes
sense:

"Look, it's very simple. Frodo isn't the mail server because the
disks are too small. Gandalf is the mail server. Frodo is
now just the print server..."


8. Don't re-use machine names.

If "frodo" gets retired, the new machine should be called something
else. Firstly, "frodo" isn't "frodo" anymore, it's a different
box. It's possible you now have two machines in the machine room. I
guess they'll be labelled "frodo" and "new frodo". When you say "bring
frodo online" there's a 50/50 chance they'll pick the wrong one.

Secondly, you'll have to chase all the documentation that points to
the machines by name. Imagine somewhere you have documentation which
says "Don't run this on Frodo, because Frodo has a faulty flange
interface."

Ten years from now, someone will be trying to buy a new machine to run
a scaled up version of the code on because they can't run it on Frodo
because Frodo has a broken flange interface. Frodo hasn't, of course,
but no-one at the company now remembers that Frodo isn't Frodo. It's
new Frodo.


9. It's not a problem for a machine to have many names.

In fact, it's a good thing. One name for the box, one name for each
thing it does... DNS has to be unique, but only one way - each name
must resolve to a given IP address. It is not the case that a given IP
must resolve to exactly one name.

----------------------------------------------------------------------------

This all has an interesting corollary. DNS has two types of
entries. One are physical machines, and it's a way of not having to
type the IP addresses for a physical machine. These names I contend
should be unique, pronoucible, non-associate with tasks and
non-reusable.

The others are a way of looking up services -- things you want to
do. These names should be unique, possibly pronouncible, very
definitely task-associative and reusable.

One is the equivalent of the phone book (you want to contact Mr
Williams). The other is the equivalent of yellow pages (you want to
call a plumber). Whether Mr Williams is currently a plumber shouldn't
matter. (assuming one plumber is as good as another).

[Source](https://www.fysh.org/~katie/computing/dns.txt)